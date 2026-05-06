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
 */

/* ═══════════════════════════════════════════
   CONFIG & CONSTANTS
═══════════════════════════════════════════ */

const CONFIG = {
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
  crossfadeMs:   3000,  // longer crossfade — gives time for next video to buffer after current ends
  stallFadeMs:   5000,  // ms of stall before fading to black
  stallSkipMs:   15000, // ms of stall before skipping to next video
};

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */

const state = {
  allAssets:       [],
  playedIds:       new Set(),
  currentAsset:    null,
  nextAsset:       null,        // preloaded
  activeVideoEl:   null,        // currently visible <video>
  inactiveVideoEl: null,        // preloading / waiting
  locale:          null,
  strings:         {},
  dateStrings:     null,   // { months: [...], daysOfWeek: [...] } if locale provides them
  prefs: {
    quality:        CONFIG.defaultQuality,
    fallback:       true,
    locale:         CONFIG.defaultLocale,
    debugEnabled:   false,
    osdTitleOpacity: 80,   // percent, 10–100 — title only
    osdPoiOpacity:   80,   // percent, 10–100 — POI subtitle
    osdClockOpacity: 80,   // percent, 10–100 — clock + date
    osdPosition:     'bottom-split',  // legacy — kept for migration only
    titleCorner:     'bottom-left',   // 'top-left'|'top-right'|'bottom-left'|'bottom-right'
    clockCorner:     'bottom-right',  // must differ from titleCorner
    poiAboveTitle:   false,           // true = POI line above title, false = below (default)
    titleSize:       100,  // percent of base size, 60–160
    poiSize:         100,
    clockSize:       100,
    displayFont:     'Josefin Sans',  // font family for clock, title, POI, UI
    showHint:        true,            // show startup hint overlay
  },
  poiLastKey:      null,        // avoid re-triggering same POI
  settingsOpen:    false,
  transitioning:   false,   // true while a crossfade is in progress — blocks re-entry
  pressTimer:      null,        // long-press detection
  pressStart:      0,
};

/* ═══════════════════════════════════════════
   DOM REFERENCES
═══════════════════════════════════════════ */

const dom = {
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

const LocaleManager = {
  cache: {},       // stores { strings, date } per locale code

  /** Load a locale JSON file, caching results. */
  async load(localeCode) {
    if (this.cache[localeCode]) return this.cache[localeCode];
    try {
      const res = await fetch(`${CONFIG.localesPath}${localeCode}.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      // Cache both strings and optional date arrays
      this.cache[localeCode] = {
        strings: data.strings || {},
        date:    data.date    || null,
      };
      return this.cache[localeCode];
    } catch (err) {
      DebugManager.log(`Locale load failed (${localeCode}): ${err.message}`);
      // Fall back to English if not already trying English
      if (localeCode !== CONFIG.defaultLocale) {
        return this.load(CONFIG.defaultLocale);
      }
      return { strings: {}, date: null };
    }
  },

  /** Translate a key, falling back to the key itself. */
  t(key) {
    return state.strings[key] || key;
  },

  // Human-readable display names for each locale code
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

  /** Populate the locale <select> in settings. */
  populateSelect() {
    dom.localeSelect.innerHTML = '';
    CONFIG.availableLocales.forEach(code => {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = this.displayNames[code] || code;
      if (code === state.prefs.locale) opt.selected = true;
      dom.localeSelect.appendChild(opt);
    });
  },
};

/* ═══════════════════════════════════════════
   VIDEO MANAGER
═══════════════════════════════════════════ */

const VideoManager = {
  /** Fetch videos.json and store assets. */
  async init() {
    try {
      const res = await fetch(CONFIG.videosJsonPath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data.assets) || data.assets.length === 0) {
        throw new Error('No assets found in videos.json');
      }
      state.allAssets = data.assets;
      DebugManager.updateTotal(state.allAssets.length);
      DebugManager.log(`Loaded ${state.allAssets.length} videos`);
    } catch (err) {
      DebugManager.log(`FATAL: Could not load videos.json — ${err.message}`);
      dom.videoTitle.textContent = 'Could not load videos.';
      throw err;
    }
  },

  /** Pick a random asset that hasn't been played this session. */
  pickRandom() {
    const unplayed = state.allAssets.filter(a => !state.playedIds.has(a.id));
    // If all played, reset session history (loop)
    if (unplayed.length === 0) {
      state.playedIds.clear();
      return this.pickRandom();
    }
    const idx = Math.floor(Math.random() * unplayed.length);
    return unplayed[idx];
  },

  /** Resolve the best available URL for the given asset + prefs. */
  resolveUrl(asset) {
    const preferred = state.prefs.quality;
    // Try preferred quality first
    if (asset[preferred]) return { url: asset[preferred], quality: preferred };

    // Fallback if enabled
    if (state.prefs.fallback) {
      for (const q of CONFIG.qualityFallback) {
        if (asset[q]) return { url: asset[q], quality: q };
      }
    }
    // Nothing found
    return null;
  },
};

/* ═══════════════════════════════════════════
   POI MANAGER
═══════════════════════════════════════════ */

const POIManager = {
  /** Called on video timeupdate — checks if a POI timestamp has been reached. */
  check(asset, currentTime) {
    if (!asset.pointsOfInterest) return;
    const seconds = Math.floor(currentTime);

    // Find the most recent POI timestamp ≤ currentTime
    let bestTimestamp = null;
    for (const ts of Object.keys(asset.pointsOfInterest)) {
      const t = parseInt(ts, 10);
      if (t <= seconds) {
        if (bestTimestamp === null || t > bestTimestamp) bestTimestamp = t;
      }
    }

    if (bestTimestamp === null) return;
    const poiKey = asset.pointsOfInterest[bestTimestamp];

    // Only trigger if it's a new POI key
    if (poiKey === state.poiLastKey) return;
    state.poiLastKey = poiKey;

    this.show(LocaleManager.t(poiKey));
  },

  /** Display POI text with animation. */
  show(text) {
    if (!text) return;

    // Reset animation class
    dom.poiText.classList.remove('poi-enter', 'poi-hidden');
    void dom.poiText.offsetWidth; // force reflow

    // Momentarily zero opacity so the transition fades it in from 0 → var(--osd-poi-opacity)
    // This avoids keyframe animations overriding the CSS variable
    dom.poiText.style.opacity = '0';
    dom.poiText.textContent = text;
    dom.poiText.classList.add('poi-enter');

    // Next frame: remove inline override so the element's CSS variable-driven opacity takes over,
    // triggering the transition
    requestAnimationFrame(() => {
      dom.poiText.style.opacity = '';
    });
  },

  /** Clear POI display. */
  clear() {
    dom.poiText.textContent = '';
    dom.poiText.classList.remove('poi-enter', 'poi-hidden');
    state.poiLastKey = null;
  },
};

/* ═══════════════════════════════════════════
   PLAYER MANAGER
═══════════════════════════════════════════ */

const PlayerManager = {
  /** Start first video. */
  async start() {
    state.activeVideoEl   = dom.videoA;
    state.inactiveVideoEl = dom.videoB;

    const asset = VideoManager.pickRandom();
    await this.loadAndPlay(asset, state.activeVideoEl);
    state.currentAsset = asset;
    state.playedIds.add(asset.id);

    this.updateTitle(asset);
    POIManager.clear();

    // Do NOT preload next here — we load it lazily when current video ends
    // This avoids simultaneous buffering that can overwhelm TV bandwidth
  },

  /** Load asset into a video element and play it. */
  async loadAndPlay(asset, videoEl) {
    const resolved = VideoManager.resolveUrl(asset);
    if (!resolved) {
      DebugManager.log(`No valid URL for asset ${asset.id} — skipping`);
      return this.skip();
    }

    videoEl.src = resolved.url;
    videoEl.load();
    videoEl.currentTime = 0;  // always start from beginning, never resume cached position

    DebugManager.updateCurrent(asset, resolved.url, resolved.quality);

    // Attempt play (browsers may block autoplay without user gesture)
    try {
      await videoEl.play();
    } catch (e) {
      DebugManager.log(`Autoplay blocked: ${e.message}`);
    }
  },

  /** Load next video into inactive element only after current has ended.
   *  This avoids dual-stream buffering on bandwidth-constrained TVs.
   *  Once enough data is ready (canplay), we crossfade.
   */
  loadAndCrossfadeNext(asset) {
    const el = state.inactiveVideoEl;
    el.muted   = true;
    el.preload = 'auto';
    el.src     = VideoManager.resolveUrl(asset)?.url || '';
    el.currentTime = 0;
    el.load();

    const onCanPlay = () => {
      el.removeEventListener('canplay', onCanPlay);
      el.removeEventListener('error',   onError);
      this.crossfadeTo(asset);
    };
    const onError = () => {
      el.removeEventListener('canplay', onCanPlay);
      el.removeEventListener('error',   onError);
      DebugManager.log('Next video load error — picking another');
      const fallback = VideoManager.pickRandom();
      this.loadAndCrossfadeNext(fallback);
    };

    el.addEventListener('canplay', onCanPlay);
    el.addEventListener('error',   onError);
  },

  /** Crossfade to a specific asset. Guards against concurrent calls. */
  async crossfadeTo(asset) {
    // Re-entrancy guard: ignore if a transition is already in progress
    if (state.transitioning) return;
    state.transitioning = true;

    const incoming = state.inactiveVideoEl;
    const outgoing = state.activeVideoEl;

    // Start playing the incoming video before making it visible
    incoming.muted = true;
    try { await incoming.play(); } catch (e) { /* ignore autoplay policy */ }

    // Swap CSS active class — triggers CSS opacity transition
    outgoing.classList.remove('active');
    incoming.classList.add('active');

    // Swap state references immediately so all event guards are correct
    state.activeVideoEl   = incoming;
    state.inactiveVideoEl = outgoing;
    state.currentAsset    = asset;
    state.playedIds.add(asset.id);

    // Reset stall tracking — blackout only lifts on first live timeupdate
    StallManager.reset();

    // Update OSD for the new video
    this.updateTitle(asset);
    POIManager.clear();
    const resolvedForDebug = VideoManager.resolveUrl(asset);
    DebugManager.updateCurrent(asset, incoming.src, resolvedForDebug?.quality || state.prefs.quality);

    // After crossfade completes: tear down outgoing element, release guard
    setTimeout(() => {
      outgoing.pause();
      outgoing.removeAttribute('src');
      outgoing.load();          // resets element so no stale events linger
      state.transitioning = false;
    }, CONFIG.crossfadeMs + 200);
  },

  /** Skip to the next video. Safe to call rapidly — guarded by state.transitioning. */
  async skip() {
    if (state.transitioning) return; // already mid-crossfade, ignore

    const next = state.nextAsset || VideoManager.pickRandom();
    state.nextAsset = null; // clear immediately so no other path reuses it

    // Use loadAndCrossfadeNext so the next video buffers before crossfading
    this.loadAndCrossfadeNext(next);
  },

  /** Update the title overlay. */
  updateTitle(asset) {
    dom.videoTitle.textContent = LocaleManager.t(asset.localizedNameKey);
  },

  /** Attach event listeners to both video elements. */
  attachEvents() {
    [dom.videoA, dom.videoB].forEach(video => {

      // Video ended → load next into inactive element, crossfade once buffered
      video.addEventListener('ended', () => {
        if (video !== state.activeVideoEl) return;
        if (state.transitioning) return;
        const next = state.nextAsset || VideoManager.pickRandom();
        state.nextAsset = null;
        PlayerManager.loadAndCrossfadeNext(next);
      });

      // timeupdate → only process for the currently active element
      video.addEventListener('timeupdate', () => {
        if (video !== state.activeVideoEl) return;
        const asset = state.currentAsset;
        if (asset) POIManager.check(asset, video.currentTime);
        DebugManager.updatePlayback(video);
      });

      // Stall events → debug logging only (active element only)
      ['waiting', 'stalled', 'suspend'].forEach(evt => {
        video.addEventListener(evt, () => {
          if (video !== state.activeVideoEl) return;
          if (evt === 'suspend' && video.paused) return;
          if (state.prefs.debugEnabled) DebugManager.log(`Event: ${evt}`);
        });
      });

      // playing → debug logging only
      video.addEventListener('playing', () => {
        if (video !== state.activeVideoEl) return;
        if (state.prefs.debugEnabled) DebugManager.log('playing');
      });

      // Error → skip to next
      video.addEventListener('error', () => {
        if (video !== state.activeVideoEl) return;
        DebugManager.log(`Video error: ${video.error?.message || 'unknown'}`);
        setTimeout(() => PlayerManager.skip(), 500);
      });
    });
  },
};

/* ═══════════════════════════════════════════
   STALL MANAGER
   Screen burn-in protection via polling.
   Samples currentTime every second — if it stops advancing the screen
   fades to black immediately. Lifts only once currentTime is moving again.

   • No progress for stallFadeMs  → fade to black (hide everything)
   • No progress for stallSkipMs  → also skip to next video
   • currentTime advances again   → fade back in
═══════════════════════════════════════════ */

const StallManager = {
  pollInterval:  null,
  lastTime:      null,   // last observed currentTime
  lastTimeAt:    null,   // wall-clock ms when lastTime was recorded
  isBlacked:     false,
  skipScheduled: false,

  start() {
    this.lastTime   = null;
    this.lastTimeAt = null;
    this.pollInterval = setInterval(() => this._poll(), 1000);
  },

  _poll() {
    const video = state.activeVideoEl;
    if (!video || state.settingsOpen) return;

    // Intentionally paused (e.g. autoplay blocked) — don't treat as stall
    if (video.paused && !video.ended) {
      this.lastTime   = null;
      this.lastTimeAt = null;
      return;
    }

    const now  = Date.now();
    const time = video.currentTime;

    // First sample — just record baseline
    if (this.lastTime === null) {
      this.lastTime   = time;
      this.lastTimeAt = now;
      return;
    }

    if (time !== this.lastTime) {
      // Progress confirmed — reset tracking and lift blackout if needed
      this.lastTime      = time;
      this.lastTimeAt    = now;
      this.skipScheduled = false;
      if (this.isBlacked) this._liftBlackout();
      return;
    }

    // No progress — how long has it been frozen?
    const frozenMs = now - this.lastTimeAt;

    if (!this.isBlacked && frozenMs >= CONFIG.stallFadeMs) {
      DebugManager.log(`Stall ${(frozenMs/1000).toFixed(0)}s — blackout`);
      this._dropToBlack();
    }

    if (!this.skipScheduled && frozenMs >= CONFIG.stallSkipMs) {
      this.skipScheduled = true;
      DebugManager.log(`Stall ${(frozenMs/1000).toFixed(0)}s — skipping`);
      PlayerManager.skip();
    }
  },

  _dropToBlack() {
    this.isBlacked = true;
    dom.stallBlackout.classList.remove('lifting');
    dom.stallBlackout.classList.add('fading');
  },

  _liftBlackout() {
    this.isBlacked = false;
    dom.stallBlackout.classList.remove('fading');
    dom.stallBlackout.classList.add('lifting');
    // Clean up lifting class after transition completes
    setTimeout(() => dom.stallBlackout.classList.remove('lifting'), 2100);
    DebugManager.log('Resumed — blackout lifted');
  },

  /** Call after a crossfade/skip so we don't carry over stale timing. */
  reset() {
    this.lastTime      = null;
    this.lastTimeAt    = null;
    this.skipScheduled = false;
    // Do NOT lift blackout here — wait for confirmed progress in _poll()
  },
};

/* ═══════════════════════════════════════════
   CLOCK MANAGER
═══════════════════════════════════════════ */

const ClockManager = {
  intervalId: null,

  start() {
    this.tick();
    this.intervalId = setInterval(() => this.tick(), 1000);
  },

  tick() {
    const now    = new Date();
    const locale = state.prefs.locale || CONFIG.defaultLocale;
    const date   = state.dateStrings; // { months, daysOfWeek } or null

    // Time: HH:MM
    dom.clock.textContent = now.toLocaleTimeString(locale, {
      hour:   '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    // Date: Weekday · Day · Month
    // Use locale-provided arrays if present, otherwise fall back to Intl
    const weekday = (date?.daysOfWeek)
      ? date.daysOfWeek[now.getDay()]
      : now.toLocaleDateString(locale, { weekday: 'long' });
    const month   = (date?.months)
      ? date.months[now.getMonth()]
      : now.toLocaleDateString(locale, { month: 'long' });
    const day     = now.toLocaleDateString(locale, { day: 'numeric' });

    dom.dateline.textContent = `${weekday} · ${day} ${month}`;
  },

  stop() {
    clearInterval(this.intervalId);
  },
};

/* ═══════════════════════════════════════════
   DEBUG MANAGER
═══════════════════════════════════════════ */

const DebugManager = {
  updateTotal(n) {
    dom.dbgTotal.textContent = n;
  },

  updateCurrent(asset, url, quality) {
    dom.dbgId.textContent      = asset?.id || '—';
    dom.dbgQuality.textContent = quality || '—';
    dom.dbgUrl.textContent     = url || '—';
    dom.dbgStatus.textContent  = 'playing';
  },

  updatePlayback(video) {
    if (!state.prefs.debugEnabled) return;
    const dur  = video.duration || 0;
    const curr = video.currentTime || 0;
    dom.dbgProgress.textContent = dur
      ? `${curr.toFixed(1)}s / ${dur.toFixed(1)}s (${Math.round(curr/dur*100)}%)`
      : `${curr.toFixed(1)}s`;

    // Buffer status
    if (video.buffered.length > 0) {
      const bufEnd = video.buffered.end(video.buffered.length - 1);
      dom.dbgBuffer.textContent = `${bufEnd.toFixed(1)}s buffered`;
    }
  },

  log(msg) {
    console.log(`[Screensaver] ${msg}`);
    if (dom.dbgStatus) dom.dbgStatus.textContent = msg;
  },

  setVisible(visible) {
    dom.debugOverlay.classList.toggle('hidden', !visible);
  },
};

/* ═══════════════════════════════════════════
   SETTINGS MANAGER
═══════════════════════════════════════════ */

const SettingsManager = {
  /** Apply title opacity via CSS variable. */
  applyTitleOpacity(value) {
    document.documentElement.style.setProperty('--osd-title-opacity', value / 100);
  },

  /** Apply POI opacity via CSS variable. */
  applyPoiOpacity(value) {
    document.documentElement.style.setProperty('--osd-poi-opacity', value / 100);
  },

  /** Apply clock+date opacity via CSS variable. */
  applyClockOpacity(value) {
    document.documentElement.style.setProperty('--osd-clock-opacity', value / 100);
  },

  /** Apply title+POI corner position. */
  applyTitleCorner(corner) {
    document.documentElement.setAttribute('data-title-corner', corner);
  },

  /** Apply clock+date corner position. */
  applyClockCorner(corner) {
    document.documentElement.setAttribute('data-clock-corner', corner);
  },

  /** Update the mutual-exclusion options on both corner selects.
   *  The corner chosen for one group is disabled in the other's dropdown. */
  syncCornerOptions() {
    const tc = state.prefs.titleCorner;
    const cc = state.prefs.clockCorner;
    Array.from(dom.titleCornerSelect.options).forEach(o => {
      o.disabled = (o.value === cc);
    });
    Array.from(dom.clockCornerSelect.options).forEach(o => {
      o.disabled = (o.value === tc);
    });
  },

  /** Apply POI above/below title order. */
  applyPoiOrder(poiAbove) {
    document.documentElement.setAttribute('data-poi-order', poiAbove ? 'above' : 'below');
  },

  /** Apply font family to all OSD + UI elements via CSS variable. */
  applyFont(fontFamily) {
    document.documentElement.style.setProperty('--font-active', `'${fontFamily}', sans-serif`);
    if (dom.fontPreview) {
      dom.fontPreview.style.fontFamily = `'${fontFamily}', sans-serif`;
    }
  },

  /** Individual font size scales via CSS variables. */
  applyTitleSize(v)  { document.documentElement.style.setProperty('--title-scale', v / 100); },
  applyPoiSize(v)    { document.documentElement.style.setProperty('--poi-scale',   v / 100); },
  applyClockSize(v)  { document.documentElement.style.setProperty('--clock-scale', v / 100); },

  open() {
    state.settingsOpen = true;
    dom.settingsOverlay.classList.remove('hidden');
    document.body.classList.add('settings-open');
    // Sync UI to current prefs
    dom.qualitySelect.value    = state.prefs.quality;
    dom.fallbackToggle.checked = state.prefs.fallback;
    dom.debugToggle.checked    = state.prefs.debugEnabled;
    dom.localeSelect.value     = state.prefs.locale;
    dom.osdTitleOpacity.value       = state.prefs.osdTitleOpacity;
    dom.osdTitleOpacityValue.textContent = `${state.prefs.osdTitleOpacity}%`;
    dom.osdPoiOpacity.value         = state.prefs.osdPoiOpacity;
    dom.osdPoiOpacityValue.textContent   = `${state.prefs.osdPoiOpacity}%`;
    dom.osdClockOpacity.value       = state.prefs.osdClockOpacity;
    dom.osdClockOpacityValue.textContent = `${state.prefs.osdClockOpacity}%`;
    dom.titleCornerSelect.value     = state.prefs.titleCorner;
    dom.clockCornerSelect.value     = state.prefs.clockCorner;
    this.syncCornerOptions();
    dom.titleSizeSlider.value       = state.prefs.titleSize;
    dom.titleSizeValue.textContent  = `${state.prefs.titleSize}%`;
    dom.poiSizeSlider.value         = state.prefs.poiSize;
    dom.poiSizeValue.textContent    = `${state.prefs.poiSize}%`;
    dom.clockSizeSlider.value       = state.prefs.clockSize;
    dom.clockSizeValue.textContent  = `${state.prefs.clockSize}%`;
    if (dom.fontSelect)          dom.fontSelect.value          = state.prefs.displayFont;
    if (dom.poiAboveTitleToggle) dom.poiAboveTitleToggle.checked = state.prefs.poiAboveTitle;
    if (dom.hintToggle)          dom.hintToggle.checked          = state.prefs.showHint;
    this.applyFont(state.prefs.displayFont);

    // Auto-focus first focusable element for D-pad / keyboard nav
    setTimeout(() => {
      const first = document.getElementById('settings-modal')?.querySelector('select, input, button');
      first?.focus();
    }, 50);
  },

  close() {
    state.settingsOpen = false;
    dom.settingsOverlay.classList.add('hidden');
    document.body.classList.remove('settings-open');
  },

  /** Read current UI values and apply them. */
  async applySettings() {
    const newLocale  = dom.localeSelect.value;
    const localeChanged = newLocale !== state.prefs.locale;

    state.prefs.quality        = dom.qualitySelect.value;
    state.prefs.fallback       = dom.fallbackToggle.checked;
    state.prefs.locale         = newLocale;
    state.prefs.debugEnabled   = dom.debugToggle.checked;
    state.prefs.osdTitleOpacity = parseInt(dom.osdTitleOpacity.value, 10);
    state.prefs.osdPoiOpacity   = parseInt(dom.osdPoiOpacity.value, 10);
    state.prefs.osdClockOpacity = parseInt(dom.osdClockOpacity.value, 10);
    state.prefs.titleCorner    = dom.titleCornerSelect.value;
    state.prefs.clockCorner    = dom.clockCornerSelect.value;
    state.prefs.titleSize      = parseInt(dom.titleSizeSlider.value, 10);
    state.prefs.poiSize        = parseInt(dom.poiSizeSlider.value, 10);
    state.prefs.clockSize      = parseInt(dom.clockSizeSlider.value, 10);
    state.prefs.displayFont    = dom.fontSelect?.value || state.prefs.displayFont;
    state.prefs.poiAboveTitle  = dom.poiAboveTitleToggle?.checked || false;
    state.prefs.showHint       = dom.hintToggle?.checked ?? true;

    this.savePrefs();

    // Apply immediately
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

    // Apply debug overlay visibility
    DebugManager.setVisible(state.prefs.debugEnabled);

    // Reload locale strings if changed
    if (localeChanged) {
      const localeData   = await LocaleManager.load(state.prefs.locale);
      state.strings      = localeData.strings;
      state.dateStrings  = localeData.date;
      // Update title with new locale
      if (state.currentAsset) PlayerManager.updateTitle(state.currentAsset);
      dom.localeSelect.value = state.prefs.locale;
      // Re-translate the currently visible POI.
      // Preserve poiLastKey so the next timeupdate doesn't retrigger it.
      if (state.poiLastKey) {
        const translated = state.strings[state.poiLastKey];
        if (translated) {
          // Show with new translation — use show() but keep key intact after
          const savedKey = state.poiLastKey;
          POIManager.show(translated);
          state.poiLastKey = savedKey; // restore — show() doesn't touch it, but be explicit
        } else {
          // This locale has no translation for this POI key — clear the display
          // but keep poiLastKey so the same POI doesn't retrigger on timeupdate
          dom.poiText.textContent = '';
          dom.poiText.classList.remove('poi-enter', 'poi-hidden');
        }
      }
    }
  },

  /** Persist preferences to localStorage. */
  savePrefs() {
    try {
      localStorage.setItem('screensaver_prefs', JSON.stringify(state.prefs));
    } catch (e) { /* ignore if localStorage unavailable */ }
  },

  /** Load preferences from localStorage. */
  loadPrefs() {
    try {
      const raw = localStorage.getItem('screensaver_prefs');
      if (raw) {
        const saved = JSON.parse(raw);
        Object.assign(state.prefs, saved);
        // Migrate legacy osdPosition → titleCorner + clockCorner
        if (saved.osdPosition && !saved.titleCorner) {
          const map = {
            'bottom-split': ['bottom-left', 'bottom-right'],
            'bottom-left':  ['bottom-left', 'top-left'],
            'bottom-right': ['bottom-right', 'top-right'],
          };
          const corners = map[saved.osdPosition] || ['bottom-left', 'bottom-right'];
          state.prefs.titleCorner = corners[0];
          state.prefs.clockCorner = corners[1];
        }
      }
    } catch (e) { /* ignore */ }
  },

  /** Attach change listeners to all settings inputs. */
  attachListeners() {
    [dom.qualitySelect, dom.fallbackToggle, dom.localeSelect, dom.debugToggle]
      .forEach(el => el.addEventListener('change', () => this.applySettings()));

    // Title opacity slider
    dom.osdTitleOpacity.addEventListener('input', () => {
      const v = parseInt(dom.osdTitleOpacity.value, 10);
      dom.osdTitleOpacityValue.textContent = `${v}%`;
      this.applyTitleOpacity(v);
    });
    dom.osdTitleOpacity.addEventListener('change', () => this.applySettings());

    // POI opacity slider
    dom.osdPoiOpacity.addEventListener('input', () => {
      const v = parseInt(dom.osdPoiOpacity.value, 10);
      dom.osdPoiOpacityValue.textContent = `${v}%`;
      this.applyPoiOpacity(v);
    });
    dom.osdPoiOpacity.addEventListener('change', () => this.applySettings());

    // Clock+Date opacity slider
    dom.osdClockOpacity.addEventListener('input', () => {
      const v = parseInt(dom.osdClockOpacity.value, 10);
      dom.osdClockOpacityValue.textContent = `${v}%`;
      this.applyClockOpacity(v);
    });
    dom.osdClockOpacity.addEventListener('change', () => this.applySettings());

    // Corner selects — mutual exclusion enforced on every change
    dom.titleCornerSelect.addEventListener('change', () => {
      // If user picked the same corner as clock, swap clock to the old title corner
      if (dom.titleCornerSelect.value === dom.clockCornerSelect.value) {
        dom.clockCornerSelect.value = state.prefs.titleCorner;
      }
      this.applySettings();
    });
    dom.clockCornerSelect.addEventListener('change', () => {
      if (dom.clockCornerSelect.value === dom.titleCornerSelect.value) {
        dom.titleCornerSelect.value = state.prefs.clockCorner;
      }
      this.applySettings();
    });

    // Size sliders — live preview on drag
    const makeSizeLiveListener = (slider, valueEl, applyFn) => {
      slider.addEventListener('input', () => {
        const v = parseInt(slider.value, 10);
        valueEl.textContent = `${v}%`;
        applyFn.call(this, v);
      });
      slider.addEventListener('change', () => this.applySettings());
    };
    makeSizeLiveListener(dom.titleSizeSlider, dom.titleSizeValue, this.applyTitleSize);
    makeSizeLiveListener(dom.poiSizeSlider,   dom.poiSizeValue,   this.applyPoiSize);
    makeSizeLiveListener(dom.clockSizeSlider, dom.clockSizeValue, this.applyClockSize);

    // Font select — live preview
    if (dom.fontSelect) {
      dom.fontSelect.addEventListener('change', () => {
        this.applyFont(dom.fontSelect.value);
        this.applySettings();
      });
    }

    // POI above/below title toggle
    if (dom.poiAboveTitleToggle) {
      dom.poiAboveTitleToggle.addEventListener('change', () => this.applySettings());
    }

    // Hint toggle
    if (dom.hintToggle) {
      dom.hintToggle.addEventListener('change', () => this.applySettings());
    }

    // Close button
    dom.settingsClose.addEventListener('click', () => this.close());

    // Click outside modal to close
    dom.settingsOverlay.addEventListener('click', (e) => {
      if (e.target === dom.settingsOverlay) this.close();
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.settingsOpen) this.close();
    });
  },
};

/* ═══════════════════════════════════════════
   INPUT MANAGER
   Short press → skip video
   Long press  → open settings
═══════════════════════════════════════════ */

const InputManager = {
  pressTimer: null,
  pressStart: 0,
  didLongPress: false,

  init() {
    // Keyboard
    document.addEventListener('keydown', (e) => {
      // D-pad / remote control navigation when settings is open
      if (state.settingsOpen) {
        this.handleDpad(e);
        return;
      }
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'OK') {
        this.startPress(e);
      }
    });
    document.addEventListener('keyup', (e) => {
      if (state.settingsOpen) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'OK') {
        this.endPress();
      }
    });

    // Mouse / touch (clicks anywhere on the video area)
    document.addEventListener('mousedown', (e) => {
      if (state.settingsOpen) return;
      if (e.target.closest('#settings-overlay')) return;
      this.startPress(e);
    });
    document.addEventListener('mouseup', (e) => {
      if (e.target.closest('#settings-overlay')) return;
      this.endPress();
    });

    // Touch
    document.addEventListener('touchstart', (e) => {
      if (state.settingsOpen) return;
      this.startPress(e);
    }, { passive: true });
    document.addEventListener('touchend', () => this.endPress());
  },

  startPress(e) {
    this.didLongPress = false;
    this.pressStart   = Date.now();
    this.pressTimer   = setTimeout(() => {
      this.didLongPress = true;
      SettingsManager.open();
    }, CONFIG.longPressMs);
  },

  endPress() {
    clearTimeout(this.pressTimer);
    if (!this.didLongPress && !state.settingsOpen) {
      const elapsed = Date.now() - this.pressStart;
      if (elapsed < CONFIG.longPressMs) {
        this.triggerSkip();
      }
    }
  },

  triggerSkip() {
    // Animate ripple
    dom.skipRipple.classList.remove('hidden', 'animate');
    void dom.skipRipple.offsetWidth;
    dom.skipRipple.classList.add('animate');
    setTimeout(() => dom.skipRipple.classList.add('hidden'), 500);

    PlayerManager.skip();
  },

  /** D-pad / arrow key navigation for the settings modal.
   *  ArrowUp/Down move between focusable controls.
   *  ArrowLeft/Right adjust sliders and cycle selects.
   *  Enter/OK activates the focused element.
   *  Backspace/Back closes the modal.
   */
  handleDpad(e) {
    const FOCUSABLE = 'select, input[type="range"], input[type="checkbox"], button';

    if (e.key === 'Escape' || e.key === 'Back' || e.key === 'BrowserBack') {
      SettingsManager.close();
      e.preventDefault();
      return;
    }

    const modal   = document.getElementById('settings-modal');
    const items   = Array.from(modal.querySelectorAll(FOCUSABLE));
    const focused = document.activeElement;
    const idx     = items.indexOf(focused);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = items[idx + 1] || items[0];
      next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = items[idx - 1] || items[items.length - 1];
      prev.focus();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (!focused) return;
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      if (focused.tagName === 'SELECT') {
        focused.selectedIndex = Math.max(0, Math.min(focused.options.length - 1, focused.selectedIndex + dir));
        focused.dispatchEvent(new Event('change', { bubbles: true }));
      } else if (focused.type === 'range') {
        const step = parseInt(focused.step, 10) || 1;
        focused.value = Math.max(parseInt(focused.min, 10), Math.min(parseInt(focused.max, 10), parseInt(focused.value, 10) + dir * step));
        focused.dispatchEvent(new Event('input', { bubbles: true }));
        focused.dispatchEvent(new Event('change', { bubbles: true }));
      } else if (focused.type === 'checkbox') {
        focused.checked = !focused.checked;
        focused.dispatchEvent(new Event('change', { bubbles: true }));
      }
    } else if (e.key === 'Enter' || e.key === 'OK') {
      e.preventDefault();
      if (!focused) { items[0]?.focus(); return; }
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

const HintManager = {
  _timer: null,

  show() {
    if (!state.prefs.showHint) {
      dom.startHint.classList.add('hidden');
      return;
    }
    dom.startHint.classList.remove('hidden');
    // Animation is 5s — hide the element after it finishes so it doesn't block interactions
    this._timer = setTimeout(() => {
      dom.startHint.classList.add('hidden');
    }, 5000);
  },

  hide() {
    clearTimeout(this._timer);
    dom.startHint.classList.add('hidden');
  },
};

/* ═══════════════════════════════════════════
   MAIN INIT
═══════════════════════════════════════════ */

async function init() {
  // Load saved preferences
  SettingsManager.loadPrefs();

  // Apply debug visibility immediately
  DebugManager.setVisible(state.prefs.debugEnabled);
  dom.debugToggle.checked    = state.prefs.debugEnabled;
  dom.fallbackToggle.checked = state.prefs.fallback;
  dom.qualitySelect.value    = state.prefs.quality;

  // Apply OSD opacities from saved prefs
  dom.osdTitleOpacity.value = state.prefs.osdTitleOpacity;
  dom.osdTitleOpacityValue.textContent = `${state.prefs.osdTitleOpacity}%`;
  dom.osdPoiOpacity.value = state.prefs.osdPoiOpacity;
  dom.osdPoiOpacityValue.textContent = `${state.prefs.osdPoiOpacity}%`;
  dom.osdClockOpacity.value = state.prefs.osdClockOpacity;
  dom.osdClockOpacityValue.textContent = `${state.prefs.osdClockOpacity}%`;
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
  dom.titleSizeValue.textContent = `${state.prefs.titleSize}%`;
  dom.poiSizeSlider.value        = state.prefs.poiSize;
  dom.poiSizeValue.textContent   = `${state.prefs.poiSize}%`;
  dom.clockSizeSlider.value      = state.prefs.clockSize;
  dom.clockSizeValue.textContent = `${state.prefs.clockSize}%`;
  if (dom.fontSelect)          { dom.fontSelect.value = state.prefs.displayFont; }
  if (dom.poiAboveTitleToggle) { dom.poiAboveTitleToggle.checked = state.prefs.poiAboveTitle; }

  // Populate locale dropdown
  LocaleManager.populateSelect();

  // Load locale strings + optional date arrays
  try {
    const localeData   = await LocaleManager.load(state.prefs.locale);
    state.strings      = localeData.strings;
    state.dateStrings  = localeData.date;   // null if locale doesn't define date arrays
  } catch (e) {
    state.strings     = {};
    state.dateStrings = null;
  }

  // Load video list
  try {
    await VideoManager.init();
  } catch (e) {
    return; // Already handled in VideoManager.init
  }

  // Attach settings listeners
  SettingsManager.attachListeners();

  // Attach video events
  PlayerManager.attachEvents();

  // Start stall polling
  StallManager.start();

  // Start playback
  await PlayerManager.start();

  // Start clock
  ClockManager.start();

  // Start input handling
  InputManager.init();

  // Show startup hint
  if (dom.hintToggle) dom.hintToggle.checked = state.prefs.showHint;
  HintManager.show();

  DebugManager.log('Ready');
}

// Kick off once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}