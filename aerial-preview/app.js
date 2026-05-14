/**
 * AERIAL SCREENSAVER — app.js
 * Cinematic web screensaver using Apple Aerial-style videos.
 *
 * Architecture:
 *  - VideoManager   : loads videos.json, tracks played history, picks next
 *  - LocaleManager  : fetches & caches locale JSON files
 *  - PlayerManager  : controls dual <video> crossfade playback
 *  - POIManager     : monitors timeupdate, fires POI text at timestamps
 *  - ClockManager   : updates clock + date every second
 *  - SettingsManager: handles modal open/close, persists prefs to localStorage
 *  - DebugManager   : updates debug overlay
 *  - InputManager   : keyboard + click, short vs long press
 *
 * Chromium 79+ compatibility notes:
 *  - No optional chaining (?.) — removed (arrived Chrome 80)
 *  - No nullish coalescing (??) — removed (arrived Chrome 80)
 *  - No :has() CSS selector — removed (arrived Chrome 105)
 *  - No inset CSS shorthand — removed (unreliable pre-Chrome 87)
 *  - No flex `gap` — removed (arrived Chrome 84); use margin-based spacing in CSS
 *  - backdrop-filter requires -webkit- prefix on Cr79–Cr87 (see styles.css)
 *  - clamp() / min() / max() are fine — arrived exactly in Chrome 79
 *
 * Buffering strategy — NO OVERLAP:
 *  The inactive <video> element's src is cleared (and load() called) BEFORE
 *  the new URL is assigned, so the browser never buffers two streams at once.
 *  The outgoing element is also fully torn down before we begin loading the
 *  next video, not after the crossfade timeout.
 */

/* ═══════════════════════════════════════════
   CONFIG & CONSTANTS
═══════════════════════════════════════════ */

var CONFIG = {
  videosJsonPath: 'videos.json',
  localesPath:    'locales/',
  defaultLocale:  'en-US',
  defaultQuality: 'url-1080-SDR',
  // Quality fallback order (from best to most compatible)
  qualityFallback: [
    'url-4K-HDR',
    'url-4K-SDR',
    'url-1080-HDR',
    'url-1080-SDR',
    'url-1080-H264',
    'url-4K-SDR-240FPS',
  ],
  // All available locale files (populated from your /locales folder)
  availableLocales: [
    'ar-AE','be-BY','ca-ES','cs-CZ','da-DK','de-DE','el-GR',
    'en-AU','en-GB','en-US','es-419','es-ES','fi-FI','fr-CA',
    'fr-FR','he-IL','hi-IN','hr-HR','hu-HU','id-ID','it-IT',
    'ja-JP','ko-KR','ms-MY','nb-NO','nl-NL','pl-PL','pt-BR',
    'pt-PT','ro-RO','ru-RU','sk-SK','sl-SI','sv-SE','th-TH',
    'tr-TR','uk-UA','vi-VN','zh-CN','zh-HK','zh-TW',
  ],
  longPressMs:   800,   // ms to distinguish long-press (settings) vs short-press (skip)
  crossfadeMs:   6000,  // crossfade duration — must match --fade-duration in CSS
  stallFadeMs:   5000,  // ms of stall before fading to black
  stallSkipMs:   15000, // ms of stall before skipping to next video
  // Blackout transition: screen fades to black before loading/showing next video
  blackoutFadeOutMs: 1800,  // how long the fade-to-black takes
  blackoutHoldMs:    400,   // how long to hold pure black before fading in
  blackoutFadeInMs:  2400,  // how long the fade-from-black takes
};

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */

var state = {
  allAssets:       [],
  playedIds:       new Set(),
  currentAsset:    null,
  nextAsset:       null,        // reserved slot — not used for early preload
  activeVideoEl:   null,        // currently visible <video>
  inactiveVideoEl: null,        // will receive the next video AFTER outgoing is cleared
  locale:          null,
  strings:         {},
  dateStrings:     null,   // { months: [...], daysOfWeek: [...] } if locale provides them
  prefs: {
    quality:        CONFIG.defaultQuality,
    fallback:       true,
    locale:         CONFIG.defaultLocale,
    debugEnabled:   false,
    osdTitleOpacity: 80,
    osdPoiOpacity:   80,
    osdClockOpacity: 80,
    osdPosition:     'bottom-split',  // legacy — kept for migration only
    titleCorner:     'bottom-left',
    clockCorner:     'bottom-right',
    poiAboveTitle:   false,
    titleSize:       100,
    poiSize:         100,
    clockSize:       100,
    displayFont:     'Josefin Sans',
    showHint:        true,
  },
  poiLastKey:      null,
  settingsOpen:    false,
  transitioning:   false,
  pressTimer:      null,
  pressStart:      0,
};

/* ═══════════════════════════════════════════
   DOM REFERENCES
═══════════════════════════════════════════ */

var dom = {
  videoA:          document.getElementById('video-a'),
  videoB:          document.getElementById('video-b'),
  videoTitle:      document.getElementById('video-title'),
  poiText:         document.getElementById('poi-text'),
  clock:           document.getElementById('clock'),
  dateline:        document.getElementById('dateline'),
  debugOverlay:    document.getElementById('debug-overlay'),
  dbgTotal:        document.getElementById('dbg-total'),
  dbgId:           document.getElementById('dbg-id'),
  dbgQuality:      document.getElementById('dbg-quality'),
  dbgProgress:     document.getElementById('dbg-progress'),
  dbgBuffer:       document.getElementById('dbg-buffer'),
  dbgStatus:       document.getElementById('dbg-status'),
  dbgUrl:          document.getElementById('dbg-url'),
  settingsOverlay: document.getElementById('settings-overlay'),
  settingsClose:   document.getElementById('settings-close'),
  qualitySelect:   document.getElementById('quality-select'),
  fallbackToggle:  document.getElementById('fallback-toggle'),
  localeSelect:    document.getElementById('locale-select'),
  debugToggle:     document.getElementById('debug-toggle'),
  skipRipple:      document.getElementById('skip-ripple'),
  stallBlackout:   document.getElementById('stall-blackout'),
  osdTitleOpacity:      document.getElementById('osd-title-opacity'),
  osdTitleOpacityValue: document.getElementById('osd-title-opacity-value'),
  osdPoiOpacity:        document.getElementById('osd-poi-opacity'),
  osdPoiOpacityValue:   document.getElementById('osd-poi-opacity-value'),
  osdClockOpacity:      document.getElementById('osd-clock-opacity'),
  osdClockOpacityValue: document.getElementById('osd-clock-opacity-value'),
  titleCornerSelect:    document.getElementById('title-corner-select'),
  clockCornerSelect:    document.getElementById('clock-corner-select'),
  titleSizeSlider:      document.getElementById('title-size'),
  titleSizeValue:       document.getElementById('title-size-value'),
  poiSizeSlider:        document.getElementById('poi-size'),
  poiSizeValue:         document.getElementById('poi-size-value'),
  clockSizeSlider:      document.getElementById('clock-size'),
  clockSizeValue:       document.getElementById('clock-size-value'),
  fontSelect:           document.getElementById('font-select'),
  fontPreview:          document.getElementById('font-preview'),
  poiAboveTitleToggle:  document.getElementById('poi-above-title-toggle'),
  hintToggle:           document.getElementById('hint-toggle'),
  startHint:            document.getElementById('start-hint'),
};

/* ═══════════════════════════════════════════
   LOCALE MANAGER
═══════════════════════════════════════════ */

var LocaleManager = {
  cache: {},

  load: function(localeCode) {
    var self = this;
    if (self.cache[localeCode]) return Promise.resolve(self.cache[localeCode]);
    return fetch(CONFIG.localesPath + localeCode + '.json')
      .then(function(res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function(data) {
        self.cache[localeCode] = {
          strings: data.strings || {},
          date:    data.date    || null,
        };
        return self.cache[localeCode];
      })
      .catch(function(err) {
        DebugManager.log('Locale load failed (' + localeCode + '): ' + err.message);
        if (localeCode !== CONFIG.defaultLocale) {
          return self.load(CONFIG.defaultLocale);
        }
        return { strings: {}, date: null };
      });
  },

  t: function(key) {
    return state.strings[key] || key;
  },

  displayNames: {
    'ar-AE': 'العربية',
    'be-BY': 'Беларуская',
    'ca-ES': 'Català',
    'cs-CZ': 'Čeština',
    'da-DK': 'Dansk',
    'de-DE': 'Deutsch',
    'el-GR': 'ελληνικά',
    'en-AU': 'English (Australia)',
    'en-GB': 'English (United Kingdom)',
    'en-US': 'English (United States)',
    'es-ES': 'Español',
    'es-419': 'Español (Latinoamérica)',
    'fi-FI': 'Suomi',
    'fr-CA': 'Français (Canada)',
    'fr-FR': 'Français',
    'he-IL': 'עברית',
    'hi-IN': 'हिन्दी',
    'hr-HR': 'Hrvatski',
    'hu-HU': 'Magyar',
    'id-ID': 'Bahasa Indonesia',
    'it-IT': 'Italiano',
    'ja-JP': '日本語',
    'ko-KR': '한국어',
    'ms-MY': 'Bahasa Melayu',
    'nl-NL': 'Nederlands',
    'nb-NO': 'Norge',
    'pl-PL': 'Polski',
    'pt-BR': 'Português (Brasil)',
    'pt-PT': 'Português (Portugal)',
    'ro-RO': 'Română',
    'ru-RU': 'Русский',
    'sk-SK': 'Slovenčina',
    'sl-SI': 'Slovenski',
    'sv-SE': 'Svenska',
    'th-TH': 'ไทย',
    'tr-TR': 'Türkçe',
    'uk-UA': 'Українська',
    'vi-VN': 'Tiếng Việt',
    'zh-CN': '中文 (中国大陆)',
    'zh-HK': '中文（香港）',
    'zh-TW': '中文 (台灣)',
  },

  populateSelect: function() {
    dom.localeSelect.innerHTML = '';
    CONFIG.availableLocales.forEach(function(code) {
      var opt = document.createElement('option');
      opt.value = code;
      opt.textContent = LocaleManager.displayNames[code] || code;
      if (code === state.prefs.locale) opt.selected = true;
      dom.localeSelect.appendChild(opt);
    });
  },
};

/* ═══════════════════════════════════════════
   VIDEO MANAGER
═══════════════════════════════════════════ */

var VideoManager = {
  init: function() {
    return fetch(CONFIG.videosJsonPath)
      .then(function(res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function(data) {
        if (!Array.isArray(data.assets) || data.assets.length === 0) {
          throw new Error('No assets found in videos.json');
        }
        state.allAssets = data.assets;
        DebugManager.updateTotal(state.allAssets.length);
        DebugManager.log('Loaded ' + state.allAssets.length + ' videos');
      })
      .catch(function(err) {
        DebugManager.log('FATAL: Could not load videos.json — ' + err.message);
        dom.videoTitle.textContent = 'Could not load videos.';
        throw err;
      });
  },

  pickRandom: function() {
    var unplayed = state.allAssets.filter(function(a) {
      return !state.playedIds.has(a.id);
    });
    if (unplayed.length === 0) {
      state.playedIds.clear();
      return VideoManager.pickRandom();
    }
    return unplayed[Math.floor(Math.random() * unplayed.length)];
  },

  resolveUrl: function(asset) {
    var preferred = state.prefs.quality;
    if (asset[preferred]) return { url: asset[preferred], quality: preferred };
    if (state.prefs.fallback) {
      for (var i = 0; i < CONFIG.qualityFallback.length; i++) {
        var q = CONFIG.qualityFallback[i];
        if (asset[q]) return { url: asset[q], quality: q };
      }
    }
    return null;
  },
};

/* ═══════════════════════════════════════════
   POI MANAGER
═══════════════════════════════════════════ */

var POIManager = {
  check: function(asset, currentTime) {
    if (!asset.pointsOfInterest) return;
    var seconds = Math.floor(currentTime);
    var bestTimestamp = null;
    var keys = Object.keys(asset.pointsOfInterest);
    for (var i = 0; i < keys.length; i++) {
      var t = parseInt(keys[i], 10);
      if (t <= seconds) {
        if (bestTimestamp === null || t > bestTimestamp) bestTimestamp = t;
      }
    }
    if (bestTimestamp === null) return;
    var poiKey = asset.pointsOfInterest[bestTimestamp];
    if (poiKey === state.poiLastKey) return;
    state.poiLastKey = poiKey;
    this.show(LocaleManager.t(poiKey));
  },

  show: function(text) {
    if (!text) return;
    dom.poiText.classList.remove('poi-enter', 'poi-hidden');
    void dom.poiText.offsetWidth; // force reflow
    dom.poiText.style.opacity = '0';
    dom.poiText.textContent = text;
    dom.poiText.classList.add('poi-enter');
    requestAnimationFrame(function() {
      dom.poiText.style.opacity = '';
    });
  },

  clear: function() {
    dom.poiText.textContent = '';
    dom.poiText.classList.remove('poi-enter', 'poi-hidden');
    state.poiLastKey = null;
  },
};

/* ═══════════════════════════════════════════
   PLAYER MANAGER

   NO-OVERLAP BUFFERING STRATEGY
   ──────────────────────────────
   At any moment only ONE network stream is active.

   Timeline:
   1. Current video plays on activeVideoEl.
   2. Video ends (or skip triggered).
   3. outgoing = activeVideoEl — pause it, remove src, call load() → stream stops.
   4. Now inactiveVideoEl is completely idle (was already cleared in step 3
      of the PREVIOUS transition, or never used).
   5. Assign new URL to inactiveVideoEl, load(), wait for canplay.
   6. Crossfade: play incoming, swap CSS active classes, swap state refs.
   7. After crossfade CSS duration: clear old activeVideoEl (now inactiveVideoEl).

   Overlap window = 0 ms.  Both elements are never loading simultaneously.
═══════════════════════════════════════════ */

var PlayerManager = {

  /** Start first video — no preloading. */
  start: function() {
    state.activeVideoEl   = dom.videoA;
    state.inactiveVideoEl = dom.videoB;

    // Ensure inactive is completely blank before we start
    _releaseVideo(state.inactiveVideoEl);

    var asset = VideoManager.pickRandom();
    state.currentAsset = asset;
    state.playedIds.add(asset.id);
    this.updateTitle(asset);
    POIManager.clear();

    return this._loadAndPlay(asset, state.activeVideoEl);
  },

  /** Load asset into videoEl and play it. Returns a promise. */
  _loadAndPlay: function(asset, videoEl) {
    var resolved = VideoManager.resolveUrl(asset);
    if (!resolved) {
      DebugManager.log('No valid URL for asset ' + asset.id + ' — skipping');
      return PlayerManager.skip();
    }

    videoEl.muted       = true;
    videoEl.preload     = 'auto';
    videoEl.currentTime = 0;
    videoEl.src         = resolved.url;
    videoEl.load();

    DebugManager.updateCurrent(asset, resolved.url, resolved.quality);

    return videoEl.play().catch(function(e) {
      DebugManager.log('Autoplay blocked: ' + e.message);
    });
  },

  /**
   * Core transition method — BLACKOUT STRATEGY
   *
   * Instead of crossfading between two video elements (which shows freeze-frames
   * when the outgoing video pauses mid-frame), we:
   *   1. Smoothly fade the entire screen + OSD to black
   *   2. While black: release outgoing, load incoming, wait for canplay
   *   3. Start incoming video (still under black — no freeze frame ever visible)
   *   4. Gently fade from black to reveal the playing incoming video + OSD
   */
  loadAndCrossfadeNext: function(asset) {
    if (state.transitioning) return;
    state.transitioning = true;

    var self     = this;
    var incoming = state.inactiveVideoEl;
    var outgoing = state.activeVideoEl;

    var resolved = VideoManager.resolveUrl(asset);
    if (!resolved) {
      DebugManager.log('No valid URL for asset ' + asset.id + ' — picking another');
      state.transitioning = false;
      var fallback = VideoManager.pickRandom();
      self.loadAndCrossfadeNext(fallback);
      return;
    }

    // ── STEP 1: Fade screen + OSD smoothly to black ──────────────────────────
    BlackoutManager.fadeToBlack(function() {

      // ── STEP 2: Under cover of black, swap video sources ───────────────────
      outgoing.pause();
      _releaseVideo(outgoing);

      incoming.muted       = true;
      incoming.preload     = 'auto';
      incoming.src         = resolved.url;
      incoming.load();
      incoming.currentTime = 0;

      // Update all state & OSD text while hidden
      state.currentAsset    = asset;
      state.playedIds.add(asset.id);
      state.activeVideoEl   = incoming;
      state.inactiveVideoEl = outgoing;
      StallManager.reset();
      self.updateTitle(asset);
      POIManager.clear();
      DebugManager.updateCurrent(asset, resolved.url, resolved.quality);

      // ── STEP 3: Wait until the new video has enough data ──────────────────
      function onCanPlay() {
        incoming.removeEventListener('canplay', onCanPlay);
        incoming.removeEventListener('error',   onError);

        // Swap CSS active class while still under blackout — zero freeze risk
        outgoing.classList.remove('active');
        incoming.classList.add('active');

        // Start playback before the blackout lifts so the first frame is live
        incoming.play().catch(function(e) {
          DebugManager.log('Play blocked after blackout: ' + e.message);
        });

        // ── STEP 4: Lift the blackout, fade to live video + OSD ─────────────
        BlackoutManager.fadeFromBlack(function() {
          state.transitioning = false;
        });
      }

      function onError() {
        incoming.removeEventListener('canplay', onCanPlay);
        incoming.removeEventListener('error',   onError);
        DebugManager.log('Next video load error — picking another');
        // Restore state so the next skip call works
        state.activeVideoEl   = outgoing;
        state.inactiveVideoEl = incoming;
        state.transitioning   = false;
        BlackoutManager.fadeFromBlack(function() {});
        var fallback2 = VideoManager.pickRandom();
        self.loadAndCrossfadeNext(fallback2);
      }

      incoming.addEventListener('canplay', onCanPlay);
      incoming.addEventListener('error',   onError);
    });
  },

  // No longer used — blackout strategy replaced crossfade
  _doCrossfade: function() {},

  /** Skip to the next video. Safe to call rapidly. */
  skip: function() {
    if (state.transitioning) return;
    var next = state.nextAsset || VideoManager.pickRandom();
    state.nextAsset = null;
    this.loadAndCrossfadeNext(next);
  },

  updateTitle: function(asset) {
    dom.videoTitle.textContent = LocaleManager.t(asset.localizedNameKey);
  },

  attachEvents: function() {
    [dom.videoA, dom.videoB].forEach(function(video) {

      // Video ended → trigger next
      video.addEventListener('ended', function() {
        if (video !== state.activeVideoEl) return;
        if (state.transitioning) return;
        var next = state.nextAsset || VideoManager.pickRandom();
        state.nextAsset = null;
        PlayerManager.loadAndCrossfadeNext(next);
      });

      // timeupdate → active element only
      video.addEventListener('timeupdate', function() {
        if (video !== state.activeVideoEl) return;
        var asset = state.currentAsset;
        if (asset) POIManager.check(asset, video.currentTime);
        DebugManager.updatePlayback(video);

        // Begin fade-to-black before the video ends so the last frame never freezes.
        // Trigger when <= blackoutFadeOutMs + holdMs from the end.
        if (!state.transitioning && video.duration && video.duration > 0) {
          var remaining = video.duration - video.currentTime;
          var triggerAt = (CONFIG.blackoutFadeOutMs + CONFIG.blackoutHoldMs) / 1000 + 0.3;
          if (remaining <= triggerAt && remaining > 0.1) {
            var next = state.nextAsset || VideoManager.pickRandom();
            state.nextAsset = null;
            PlayerManager.loadAndCrossfadeNext(next);
          }
        }
      });

      // Stall events → debug only
      ['waiting', 'stalled', 'suspend'].forEach(function(evt) {
        video.addEventListener(evt, function() {
          if (video !== state.activeVideoEl) return;
          if (evt === 'suspend' && video.paused) return;
          if (state.prefs.debugEnabled) DebugManager.log('Event: ' + evt);
        });
      });

      video.addEventListener('playing', function() {
        if (video !== state.activeVideoEl) return;
        if (state.prefs.debugEnabled) DebugManager.log('playing');
      });

      // Error on active element → skip
      video.addEventListener('error', function() {
        if (video !== state.activeVideoEl) return;
        var msg = video.error ? video.error.message : 'unknown';
        DebugManager.log('Video error: ' + msg);
        setTimeout(function() { PlayerManager.skip(); }, 500);
      });
    });
  },
};

/**
 * Fully release a video element — stops buffering immediately.
 * Calling load() after removing src resets the element and cancels
 * any pending network requests, even on Chromium 87.
 */
function _releaseVideo(el) {
  el.pause();
  el.removeAttribute('src');
  el.load();  // cancels network activity and resets media element state
}

/* ═══════════════════════════════════════════
   OSD FADE MANAGER
   Fades title / POI / clock out before a video swap,
   then fades them back in once the new video is visible.
   Compatible with Chromium 79+: no ?., no ??, var only.
═══════════════════════════════════════════ */

var OSDFadeManager = {
  // ms for the CSS opacity transition on OSD elements (must match styles.css)
  fadeDurationMs: 1200,

  // Delay after video swap before fading OSD back in.
  // Gives the incoming video time to become clearly visible.
  fadeInDelayMs: 800,

  _fadeOutTimer: null,
  _fadeInTimer:  null,

  /** Immediately cancel any pending fade timers */
  _clearTimers: function() {
    clearTimeout(this._fadeOutTimer);
    clearTimeout(this._fadeInTimer);
    this._fadeOutTimer = null;
    this._fadeInTimer  = null;
  },

  /** Add .osd-hidden to all OSD elements → CSS transitions to opacity 0 */
  _setHidden: function(hidden) {
    var els = [dom.videoTitle, dom.poiText, dom.clock, dom.dateline];
    for (var i = 0; i < els.length; i++) {
      if (hidden) {
        els[i].classList.add('osd-hidden');
      } else {
        els[i].classList.remove('osd-hidden');
      }
    }
  },

  /**
   * Called at the START of a transition (canplay received, about to swap).
   * Fades OSD out immediately, then calls onHidden() once the transition
   * is complete so the caller can safely update text content.
   * @param {Function} onHidden  — called after fade-out, before video swap
   */
  fadeOutThen: function(onHidden) {
    var self = this;
    this._clearTimers();
    this._setHidden(true);
    this._fadeOutTimer = setTimeout(function() {
      onHidden();
    }, self.fadeDurationMs);
  },

  /**
   * Called after the video swap. Waits a short delay then fades OSD back in.
   */
  fadeIn: function() {
    var self = this;
    this._clearTimers();
    this._fadeInTimer = setTimeout(function() {
      self._setHidden(false);
    }, self.fadeInDelayMs);
  },

  /** Hard-reset — remove hidden class immediately (e.g. after stall recovery) */
  forceShow: function() {
    this._clearTimers();
    this._setHidden(false);
  },
};

/* ═══════════════════════════════════════════
   BLACKOUT MANAGER
   Handles smooth fade-to-black / fade-from-black used when switching videos.
   Both the video layer AND the OSD fade together through a full-screen black
   overlay, eliminating any visible freeze frames or stop-frames.

   Timeline:
     fadeToBlack(cb)   -> overlay fades in (blackoutFadeOutMs)
     [cb runs]         -> caller swaps video source, waits for canplay
     fadeFromBlack(cb) -> overlay fades out (blackoutFadeInMs), OSD fades in
══════════════════════════════════════════ */

var BlackoutManager = {
  _el:        null,
  _fadeTimer: null,

  init: function() {
    var el = document.createElement('div');
    el.id = 'transition-blackout';
    el.style.position       = 'fixed';
    el.style.top            = '0';
    el.style.right          = '0';
    el.style.bottom         = '0';
    el.style.left           = '0';
    el.style.zIndex         = '16';
    el.style.background     = '#000';
    el.style.opacity        = '0';
    el.style.pointerEvents  = 'none';
    el.style.transition     = 'opacity ' + CONFIG.blackoutFadeOutMs + 'ms ease-in-out';
    document.body.appendChild(el);
    this._el = el;
  },

  fadeToBlack: function(onBlack) {
    var self = this;
    clearTimeout(this._fadeTimer);
    OSDFadeManager._clearTimers();
    OSDFadeManager._setHidden(true);
    this._el.style.transition = 'opacity ' + CONFIG.blackoutFadeOutMs + 'ms ease-in-out';
    void this._el.offsetWidth;
    this._el.style.opacity = '1';
    this._fadeTimer = setTimeout(function() {
      setTimeout(function() { onBlack(); }, CONFIG.blackoutHoldMs);
    }, CONFIG.blackoutFadeOutMs);
  },

  fadeFromBlack: function(onDone) {
    clearTimeout(this._fadeTimer);
    var fadeInMs = CONFIG.blackoutFadeInMs;
    this._el.style.transition = 'opacity ' + fadeInMs + 'ms ease-in-out';
    void this._el.offsetWidth;
    this._el.style.opacity = '0';
    setTimeout(function() {
      OSDFadeManager._setHidden(false);
    }, Math.round(fadeInMs * 0.3));
    this._fadeTimer = setTimeout(function() {
      if (onDone) onDone();
    }, fadeInMs);
  },

  forceHide: function() {
    clearTimeout(this._fadeTimer);
    this._el.style.transition = 'none';
    this._el.style.opacity    = '0';
    OSDFadeManager._setHidden(false);
  },
};

var StallManager = {
  pollInterval:  null,
  lastTime:      null,
  lastTimeAt:    null,
  isBlacked:     false,
  skipScheduled: false,

  start: function() {
    this.lastTime   = null;
    this.lastTimeAt = null;
    var self = this;
    this.pollInterval = setInterval(function() { self._poll(); }, 1000);
  },

  _poll: function() {
    var video = state.activeVideoEl;
    if (!video || state.settingsOpen) return;

    if (video.paused && !video.ended) {
      this.lastTime   = null;
      this.lastTimeAt = null;
      return;
    }

    var now  = Date.now();
    var time = video.currentTime;

    if (this.lastTime === null) {
      this.lastTime   = time;
      this.lastTimeAt = now;
      return;
    }

    if (time !== this.lastTime) {
      this.lastTime      = time;
      this.lastTimeAt    = now;
      this.skipScheduled = false;
      if (this.isBlacked) this._liftBlackout();
      return;
    }

    var frozenMs = now - this.lastTimeAt;

    if (!this.isBlacked && frozenMs >= CONFIG.stallFadeMs) {
      DebugManager.log('Stall ' + (frozenMs / 1000).toFixed(0) + 's — blackout');
      this._dropToBlack();
    }

    if (!this.skipScheduled && frozenMs >= CONFIG.stallSkipMs) {
      this.skipScheduled = true;
      DebugManager.log('Stall ' + (frozenMs / 1000).toFixed(0) + 's — skipping');
      PlayerManager.skip();
    }
  },

  _dropToBlack: function() {
    this.isBlacked = true;
    dom.stallBlackout.classList.remove('lifting');
    dom.stallBlackout.classList.add('fading');
  },

  _liftBlackout: function() {
    this.isBlacked = false;
    dom.stallBlackout.classList.remove('fading');
    dom.stallBlackout.classList.add('lifting');
    setTimeout(function() { dom.stallBlackout.classList.remove('lifting'); }, 2100);
    BlackoutManager.forceHide();
    DebugManager.log('Resumed — blackout lifted');
  },

  reset: function() {
    this.lastTime      = null;
    this.lastTimeAt    = null;
    this.skipScheduled = false;
  },
};

/* ═══════════════════════════════════════════
   CLOCK MANAGER
═══════════════════════════════════════════ */

var ClockManager = {
  intervalId: null,

  start: function() {
    this.tick();
    var self = this;
    this.intervalId = setInterval(function() { self.tick(); }, 1000);
  },

  tick: function() {
    var now    = new Date();
    var locale = state.prefs.locale || CONFIG.defaultLocale;
    var date   = state.dateStrings;

    dom.clock.textContent = now.toLocaleTimeString(locale, {
      hour:   '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    var weekday = (date && date.daysOfWeek)
      ? date.daysOfWeek[now.getDay()]
      : now.toLocaleDateString(locale, { weekday: 'long' });
    var month = (date && date.months)
      ? date.months[now.getMonth()]
      : now.toLocaleDateString(locale, { month: 'long' });
    var day = now.toLocaleDateString(locale, { day: 'numeric' });

    dom.dateline.textContent = weekday + ' · ' + day + ' ' + month;
  },

  stop: function() {
    clearInterval(this.intervalId);
  },
};

/* ═══════════════════════════════════════════
   DEBUG MANAGER
═══════════════════════════════════════════ */

var DebugManager = {
  updateTotal: function(n) {
    dom.dbgTotal.textContent = n;
  },

  updateCurrent: function(asset, url, quality) {
    dom.dbgId.textContent      = (asset && asset.id) ? asset.id : '—';
    dom.dbgQuality.textContent = quality || '—';
    dom.dbgUrl.textContent     = url || '—';
    dom.dbgStatus.textContent  = 'playing';
  },

  updatePlayback: function(video) {
    if (!state.prefs.debugEnabled) return;
    var dur  = video.duration  || 0;
    var curr = video.currentTime || 0;
    dom.dbgProgress.textContent = dur
      ? curr.toFixed(1) + 's / ' + dur.toFixed(1) + 's (' + Math.round(curr / dur * 100) + '%)'
      : curr.toFixed(1) + 's';

    if (video.buffered.length > 0) {
      var bufEnd = video.buffered.end(video.buffered.length - 1);
      dom.dbgBuffer.textContent = bufEnd.toFixed(1) + 's buffered';
    }
  },

  log: function(msg) {
    console.log('[Screensaver] ' + msg);
    if (dom.dbgStatus) dom.dbgStatus.textContent = msg;
  },

  setVisible: function(visible) {
    dom.debugOverlay.classList.toggle('hidden', !visible);
  },
};

/* ═══════════════════════════════════════════
   SETTINGS MANAGER
═══════════════════════════════════════════ */

var SettingsManager = {
  applyTitleOpacity: function(value) {
    document.documentElement.style.setProperty('--osd-title-opacity', value / 100);
  },
  applyPoiOpacity: function(value) {
    document.documentElement.style.setProperty('--osd-poi-opacity', value / 100);
  },
  applyClockOpacity: function(value) {
    document.documentElement.style.setProperty('--osd-clock-opacity', value / 100);
  },
  applyTitleCorner: function(corner) {
    document.documentElement.setAttribute('data-title-corner', corner);
  },
  applyClockCorner: function(corner) {
    document.documentElement.setAttribute('data-clock-corner', corner);
  },

  syncCornerOptions: function() {
    var tc = state.prefs.titleCorner;
    var cc = state.prefs.clockCorner;
    Array.from(dom.titleCornerSelect.options).forEach(function(o) {
      o.disabled = (o.value === cc);
    });
    Array.from(dom.clockCornerSelect.options).forEach(function(o) {
      o.disabled = (o.value === tc);
    });
  },

  applyPoiOrder: function(poiAbove) {
    document.documentElement.setAttribute('data-poi-order', poiAbove ? 'above' : 'below');
  },

  applyFont: function(fontFamily) {
    document.documentElement.style.setProperty('--font-active', "'" + fontFamily + "', sans-serif");
    if (dom.fontPreview) {
      dom.fontPreview.style.fontFamily = "'" + fontFamily + "', sans-serif";
    }
  },

  applyTitleSize: function(v) { document.documentElement.style.setProperty('--title-scale', v / 100); },
  applyPoiSize:   function(v) { document.documentElement.style.setProperty('--poi-scale',   v / 100); },
  applyClockSize: function(v) { document.documentElement.style.setProperty('--clock-scale', v / 100); },

  open: function() {
    state.settingsOpen = true;
    dom.settingsOverlay.classList.remove('hidden');
    document.body.classList.add('settings-open');

    dom.qualitySelect.value    = state.prefs.quality;
    dom.fallbackToggle.checked = state.prefs.fallback;
    dom.debugToggle.checked    = state.prefs.debugEnabled;
    dom.localeSelect.value     = state.prefs.locale;

    dom.osdTitleOpacity.value            = state.prefs.osdTitleOpacity;
    dom.osdTitleOpacityValue.textContent = state.prefs.osdTitleOpacity + '%';
    dom.osdPoiOpacity.value              = state.prefs.osdPoiOpacity;
    dom.osdPoiOpacityValue.textContent   = state.prefs.osdPoiOpacity + '%';
    dom.osdClockOpacity.value            = state.prefs.osdClockOpacity;
    dom.osdClockOpacityValue.textContent = state.prefs.osdClockOpacity + '%';

    dom.titleCornerSelect.value    = state.prefs.titleCorner;
    dom.clockCornerSelect.value    = state.prefs.clockCorner;
    this.syncCornerOptions();

    dom.titleSizeSlider.value      = state.prefs.titleSize;
    dom.titleSizeValue.textContent = state.prefs.titleSize + '%';
    dom.poiSizeSlider.value        = state.prefs.poiSize;
    dom.poiSizeValue.textContent   = state.prefs.poiSize + '%';
    dom.clockSizeSlider.value      = state.prefs.clockSize;
    dom.clockSizeValue.textContent = state.prefs.clockSize + '%';

    if (dom.fontSelect)          dom.fontSelect.value            = state.prefs.displayFont;
    if (dom.poiAboveTitleToggle) dom.poiAboveTitleToggle.checked = state.prefs.poiAboveTitle;
    if (dom.hintToggle)          dom.hintToggle.checked          = state.prefs.showHint;

    this.applyFont(state.prefs.displayFont);

    setTimeout(function() {
      var first = document.getElementById('settings-modal');
      if (first) {
        var el = first.querySelector('select, input, button');
        if (el) el.focus();
      }
    }, 50);
  },

  close: function() {
    state.settingsOpen = false;
    dom.settingsOverlay.classList.add('hidden');
    document.body.classList.remove('settings-open');
  },

  applySettings: function() {
    var self = this;
    var newLocale    = dom.localeSelect.value;
    var localeChanged = newLocale !== state.prefs.locale;

    state.prefs.quality          = dom.qualitySelect.value;
    state.prefs.fallback         = dom.fallbackToggle.checked;
    state.prefs.locale           = newLocale;
    state.prefs.debugEnabled     = dom.debugToggle.checked;
    state.prefs.osdTitleOpacity  = parseInt(dom.osdTitleOpacity.value, 10);
    state.prefs.osdPoiOpacity    = parseInt(dom.osdPoiOpacity.value, 10);
    state.prefs.osdClockOpacity  = parseInt(dom.osdClockOpacity.value, 10);
    state.prefs.titleCorner      = dom.titleCornerSelect.value;
    state.prefs.clockCorner      = dom.clockCornerSelect.value;
    state.prefs.titleSize        = parseInt(dom.titleSizeSlider.value, 10);
    state.prefs.poiSize          = parseInt(dom.poiSizeSlider.value, 10);
    state.prefs.clockSize        = parseInt(dom.clockSizeSlider.value, 10);
    state.prefs.displayFont      = dom.fontSelect ? dom.fontSelect.value : state.prefs.displayFont;
    state.prefs.poiAboveTitle    = dom.poiAboveTitleToggle ? dom.poiAboveTitleToggle.checked : false;
    state.prefs.showHint         = dom.hintToggle ? dom.hintToggle.checked : true;

    this.savePrefs();

    this.applyTitleOpacity(state.prefs.osdTitleOpacity);
    this.applyPoiOpacity(state.prefs.osdPoiOpacity);
    this.applyClockOpacity(state.prefs.osdClockOpacity);
    this.applyTitleCorner(state.prefs.titleCorner);
    this.applyClockCorner(state.prefs.clockCorner);
    this.syncCornerOptions();
    this.applyTitleSize(state.prefs.titleSize);
    this.applyPoiSize(state.prefs.poiSize);
    this.applyClockSize(state.prefs.clockSize);
    this.applyFont(state.prefs.displayFont);
    this.applyPoiOrder(state.prefs.poiAboveTitle);

    DebugManager.setVisible(state.prefs.debugEnabled);

    if (localeChanged) {
      return LocaleManager.load(state.prefs.locale)
        .then(function(localeData) {
          state.strings     = localeData.strings;
          state.dateStrings = localeData.date;
          if (state.currentAsset) PlayerManager.updateTitle(state.currentAsset);
          dom.localeSelect.value = state.prefs.locale;

          if (state.poiLastKey) {
            var translated = state.strings[state.poiLastKey];
            if (translated) {
              var savedKey = state.poiLastKey;
              POIManager.show(translated);
              state.poiLastKey = savedKey;
            } else {
              dom.poiText.textContent = '';
              dom.poiText.classList.remove('poi-enter', 'poi-hidden');
            }
          }
        });
    }
    return Promise.resolve();
  },

  savePrefs: function() {
    try {
      localStorage.setItem('screensaver_prefs', JSON.stringify(state.prefs));
    } catch (e) { /* ignore if localStorage unavailable */ }
  },

  loadPrefs: function() {
    try {
      var raw = localStorage.getItem('screensaver_prefs');
      if (raw) {
        var saved = JSON.parse(raw);
        Object.assign(state.prefs, saved);
        // Migrate legacy osdPosition → titleCorner + clockCorner
        if (saved.osdPosition && !saved.titleCorner) {
          var map = {
            'bottom-split': ['bottom-left', 'bottom-right'],
            'bottom-left':  ['bottom-left', 'top-left'],
            'bottom-right': ['bottom-right', 'top-right'],
          };
          var corners = map[saved.osdPosition] || ['bottom-left', 'bottom-right'];
          state.prefs.titleCorner = corners[0];
          state.prefs.clockCorner = corners[1];
        }
      }
    } catch (e) { /* ignore */ }
  },

  attachListeners: function() {
    var self = this;

    [dom.qualitySelect, dom.fallbackToggle, dom.localeSelect, dom.debugToggle]
      .forEach(function(el) {
        el.addEventListener('change', function() { self.applySettings(); });
      });

    dom.osdTitleOpacity.addEventListener('input', function() {
      var v = parseInt(dom.osdTitleOpacity.value, 10);
      dom.osdTitleOpacityValue.textContent = v + '%';
      self.applyTitleOpacity(v);
    });
    dom.osdTitleOpacity.addEventListener('change', function() { self.applySettings(); });

    dom.osdPoiOpacity.addEventListener('input', function() {
      var v = parseInt(dom.osdPoiOpacity.value, 10);
      dom.osdPoiOpacityValue.textContent = v + '%';
      self.applyPoiOpacity(v);
    });
    dom.osdPoiOpacity.addEventListener('change', function() { self.applySettings(); });

    dom.osdClockOpacity.addEventListener('input', function() {
      var v = parseInt(dom.osdClockOpacity.value, 10);
      dom.osdClockOpacityValue.textContent = v + '%';
      self.applyClockOpacity(v);
    });
    dom.osdClockOpacity.addEventListener('change', function() { self.applySettings(); });

    dom.titleCornerSelect.addEventListener('change', function() {
      if (dom.titleCornerSelect.value === dom.clockCornerSelect.value) {
        dom.clockCornerSelect.value = state.prefs.titleCorner;
      }
      self.applySettings();
    });
    dom.clockCornerSelect.addEventListener('change', function() {
      if (dom.clockCornerSelect.value === dom.titleCornerSelect.value) {
        dom.titleCornerSelect.value = state.prefs.clockCorner;
      }
      self.applySettings();
    });

    function makeSizeLiveListener(slider, valueEl, applyFn) {
      slider.addEventListener('input', function() {
        var v = parseInt(slider.value, 10);
        valueEl.textContent = v + '%';
        applyFn.call(self, v);
      });
      slider.addEventListener('change', function() { self.applySettings(); });
    }
    makeSizeLiveListener(dom.titleSizeSlider, dom.titleSizeValue, self.applyTitleSize);
    makeSizeLiveListener(dom.poiSizeSlider,   dom.poiSizeValue,   self.applyPoiSize);
    makeSizeLiveListener(dom.clockSizeSlider, dom.clockSizeValue, self.applyClockSize);

    if (dom.fontSelect) {
      dom.fontSelect.addEventListener('change', function() {
        self.applyFont(dom.fontSelect.value);
        self.applySettings();
      });
    }

    if (dom.poiAboveTitleToggle) {
      dom.poiAboveTitleToggle.addEventListener('change', function() { self.applySettings(); });
    }

    if (dom.hintToggle) {
      dom.hintToggle.addEventListener('change', function() { self.applySettings(); });
    }

    dom.settingsClose.addEventListener('click', function() { self.close(); });

    dom.settingsOverlay.addEventListener('click', function(e) {
      if (e.target === dom.settingsOverlay) self.close();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && state.settingsOpen) self.close();
    });
  },
};

/* ═══════════════════════════════════════════
   INPUT MANAGER
═══════════════════════════════════════════ */

var InputManager = {
  pressTimer:    null,
  pressStart:    0,
  didLongPress:  false,
  _startX:       0,
  _startY:       0,
  _dragThreshold: 8,   // pixels of movement that cancels a short-press

  init: function() {
    var self = this;

    document.addEventListener('keydown', function(e) {
      if (state.settingsOpen) {
        self.handleDpad(e);
        return;
      }
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'OK') {
        self.startPress(e);
      }
    });
    document.addEventListener('keyup', function(e) {
      if (state.settingsOpen) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'OK') {
        self.endPress(0, 0);
      }
    });

    document.addEventListener('mousedown', function(e) {
      if (state.settingsOpen) return;
      if (e.button !== 0) return;                          // left-click only
      if (e.target.closest && e.target.closest('#settings-overlay')) return;
      self.startPress(e);
    });
    document.addEventListener('mouseup', function(e) {
      if (e.target.closest && e.target.closest('#settings-overlay')) return;
      self.endPress(e.clientX, e.clientY);
    });

    document.addEventListener('touchstart', function(e) {
      if (state.settingsOpen) return;
      if (e.target.closest && e.target.closest('#settings-overlay')) return;
      var t = e.touches[0];
      self.startPress(t);
    }, { passive: true });
    document.addEventListener('touchend', function(e) {
      var t = e.changedTouches[0];
      self.endPress(t ? t.clientX : self._startX, t ? t.clientY : self._startY);
    });
  },

  startPress: function(e) {
    var self = this;
    this.didLongPress = false;
    this.pressStart   = Date.now();
    this._startX      = (e && e.clientX) ? e.clientX : 0;
    this._startY      = (e && e.clientY) ? e.clientY : 0;
    clearTimeout(this.pressTimer);
    this.pressTimer   = setTimeout(function() {
      self.didLongPress = true;
      SettingsManager.open();
    }, CONFIG.longPressMs);
  },

  endPress: function(endX, endY) {
    clearTimeout(this.pressTimer);
    if (this.didLongPress || state.settingsOpen) return;
    var elapsed = Date.now() - this.pressStart;
    if (elapsed >= CONFIG.longPressMs) return;
    // Cancel if the pointer moved too far (drag / scroll)
    var dx = (endX || 0) - this._startX;
    var dy = (endY || 0) - this._startY;
    if (Math.sqrt(dx * dx + dy * dy) > this._dragThreshold) return;
    this.triggerSkip();
  },

  triggerSkip: function() {
    dom.skipRipple.classList.remove('hidden', 'animate');
    void dom.skipRipple.offsetWidth;
    dom.skipRipple.classList.add('animate');
    setTimeout(function() { dom.skipRipple.classList.add('hidden'); }, 500);
    PlayerManager.skip();
  },

  handleDpad: function(e) {
    var FOCUSABLE = 'select, input[type="range"], input[type="checkbox"], button';

    if (e.key === 'Escape' || e.key === 'Back' || e.key === 'BrowserBack') {
      SettingsManager.close();
      e.preventDefault();
      return;
    }

    var modal   = document.getElementById('settings-modal');
    var items   = Array.from(modal.querySelectorAll(FOCUSABLE));
    var focused = document.activeElement;
    var idx     = items.indexOf(focused);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      var next = items[idx + 1] || items[0];
      next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      var prev = items[idx - 1] || items[items.length - 1];
      prev.focus();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (!focused) return;
      var dir = (e.key === 'ArrowRight') ? 1 : -1;
      if (focused.tagName === 'SELECT') {
        focused.selectedIndex = Math.max(0, Math.min(focused.options.length - 1, focused.selectedIndex + dir));
        focused.dispatchEvent(new Event('change', { bubbles: true }));
      } else if (focused.type === 'range') {
        var step = parseInt(focused.step, 10) || 1;
        focused.value = Math.max(parseInt(focused.min, 10), Math.min(parseInt(focused.max, 10), parseInt(focused.value, 10) + dir * step));
        focused.dispatchEvent(new Event('input',  { bubbles: true }));
        focused.dispatchEvent(new Event('change', { bubbles: true }));
      } else if (focused.type === 'checkbox') {
        focused.checked = !focused.checked;
        focused.dispatchEvent(new Event('change', { bubbles: true }));
      }
    } else if (e.key === 'Enter' || e.key === 'OK') {
      e.preventDefault();
      if (!focused) { if (items[0]) items[0].focus(); return; }
      if (focused.type === 'checkbox') {
        focused.checked = !focused.checked;
        focused.dispatchEvent(new Event('change', { bubbles: true }));
      } else if (focused.tagName === 'BUTTON') {
        focused.click();
      } else if (items.length > 0 && idx === -1) {
        items[0].focus();
      }
    }
  },
};

/* ═══════════════════════════════════════════
   HINT MANAGER
═══════════════════════════════════════════ */

var HintManager = {
  _timer: null,

  show: function() {
    if (!state.prefs.showHint) {
      dom.startHint.classList.add('hidden');
      return;
    }
    dom.startHint.classList.remove('hidden');
    var self = this;
    this._timer = setTimeout(function() {
      dom.startHint.classList.add('hidden');
    }, 5000);
  },

  hide: function() {
    clearTimeout(this._timer);
    dom.startHint.classList.add('hidden');
  },
};

/* ═══════════════════════════════════════════
   MAIN INIT
═══════════════════════════════════════════ */

function init() {
  // :has() is not available in Chromium 87. Instead, mark toggle rows with a class
  // so the CSS .settings-row.has-toggle rule can target them on mobile.
  document.querySelectorAll('.settings-row').forEach(function(row) {
    if (row.querySelector('.toggle-wrap')) {
      row.classList.add('has-toggle');
    }
  });

  BlackoutManager.init();
  SettingsManager.loadPrefs();

  DebugManager.setVisible(state.prefs.debugEnabled);
  dom.debugToggle.checked    = state.prefs.debugEnabled;
  dom.fallbackToggle.checked = state.prefs.fallback;
  dom.qualitySelect.value    = state.prefs.quality;

  dom.osdTitleOpacity.value            = state.prefs.osdTitleOpacity;
  dom.osdTitleOpacityValue.textContent = state.prefs.osdTitleOpacity + '%';
  dom.osdPoiOpacity.value              = state.prefs.osdPoiOpacity;
  dom.osdPoiOpacityValue.textContent   = state.prefs.osdPoiOpacity + '%';
  dom.osdClockOpacity.value            = state.prefs.osdClockOpacity;
  dom.osdClockOpacityValue.textContent = state.prefs.osdClockOpacity + '%';

  SettingsManager.applyTitleOpacity(state.prefs.osdTitleOpacity);
  SettingsManager.applyPoiOpacity(state.prefs.osdPoiOpacity);
  SettingsManager.applyClockOpacity(state.prefs.osdClockOpacity);
  SettingsManager.applyTitleCorner(state.prefs.titleCorner);
  SettingsManager.applyClockCorner(state.prefs.clockCorner);
  SettingsManager.applyTitleSize(state.prefs.titleSize);
  SettingsManager.applyPoiSize(state.prefs.poiSize);
  SettingsManager.applyClockSize(state.prefs.clockSize);
  SettingsManager.applyFont(state.prefs.displayFont);
  SettingsManager.applyPoiOrder(state.prefs.poiAboveTitle);

  dom.titleCornerSelect.value    = state.prefs.titleCorner;
  dom.clockCornerSelect.value    = state.prefs.clockCorner;
  SettingsManager.syncCornerOptions();

  dom.titleSizeSlider.value      = state.prefs.titleSize;
  dom.titleSizeValue.textContent = state.prefs.titleSize + '%';
  dom.poiSizeSlider.value        = state.prefs.poiSize;
  dom.poiSizeValue.textContent   = state.prefs.poiSize + '%';
  dom.clockSizeSlider.value      = state.prefs.clockSize;
  dom.clockSizeValue.textContent = state.prefs.clockSize + '%';

  if (dom.fontSelect)          dom.fontSelect.value            = state.prefs.displayFont;
  if (dom.poiAboveTitleToggle) dom.poiAboveTitleToggle.checked = state.prefs.poiAboveTitle;

  LocaleManager.populateSelect();

  // Load locale, then videos, then start
  LocaleManager.load(state.prefs.locale)
    .then(function(localeData) {
      state.strings     = localeData.strings;
      state.dateStrings = localeData.date;
    })
    .catch(function() {
      state.strings     = {};
      state.dateStrings = null;
    })
    .then(function() {
      return VideoManager.init();
    })
    .then(function() {
      SettingsManager.attachListeners();
      PlayerManager.attachEvents();
      StallManager.start();
      return PlayerManager.start();
    })
    .then(function() {
      ClockManager.start();
      InputManager.init();
      if (dom.hintToggle) dom.hintToggle.checked = state.prefs.showHint;
      HintManager.show();
      DebugManager.log('Ready');
    })
    .catch(function(e) {
      DebugManager.log('Init failed: ' + (e && e.message ? e.message : e));
    });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
