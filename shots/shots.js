(function () {
    'use strict';

    function init$7() {
      Lampa.Lang.add({
        empty: {
          ru: '',
          en: '',
          uk: '',
          be: '',
          zh: '',
          pt: '',
          bg: '',
          ro: ''
        }
      });
      Lampa.Lang.add({
        shots_modal_before_recording_txt_1: {
          ru: 'Сохраняйте свои любимые моменты и делитесь ими с другими!',
          en: 'Save your favorite moments and share them with others!',
          uk: 'Зберігайте свої улюблені моменти та діліться ними з іншими!',
          be: 'Захоўвайце свае любімыя моманты і дзяліцеся імі з іншымі!',
          zh: '保存您喜爱的时刻并与他人分享！',
          pt: 'Salve seus momentos favoritos e compartilhe-os com outras pessoas!',
          bg: 'Запазвайте любимите си моменти и ги споделяйте с други!',
          ro: 'Salvează-ți momentele preferate și împărtășește-le cu ceilalți!'
        },
        shots_modal_before_recording_txt_2: {
          ru: 'Выберите интересующий момент в видео и нажмите кнопку "Начать запись".',
          en: 'Choose the moment of interest in the video and press the "Start Recording" button.',
          uk: 'Виберіть цікавий момент у відео та натисніть кнопку "Почати запис".',
          be: 'Выберыце цікавы момант у відэа і націсніце кнопку "Пачаць запіс".',
          zh: '选择视频中的感兴趣时刻，然后按“开始录制”按钮。',
          pt: 'Escolha o momento de interesse no vídeo e pressione o botão "Iniciar Gravação".',
          bg: 'Изберете интересния момент във видеото и натиснете бутона "Започни запис".',
          ro: 'Alegeți momentul de interes din videoclip și apăsați butonul "Începeți înregistrarea".'
        },
        shots_step: {
          ru: 'Шаг',
          en: 'Step',
          uk: 'Крок',
          be: 'Крок',
          zh: '步骤',
          pt: 'Passo',
          bg: 'Стъпка',
          ro: 'Pas'
        },
        shots_start_recording: {
          ru: 'Начать запись',
          en: 'Start recording',
          uk: 'Почати запис',
          be: 'Пачаць запіс',
          zh: '开始录制',
          pt: 'Iniciar gravação',
          bg: 'Започни запис',
          ro: 'Începe înregistrarea'
        },
        shots_choice_start_point: {
          ru: 'Выбрать позицию',
          en: 'Choose position',
          uk: 'Вибрати позицію',
          be: 'Выбраць пазіцыю',
          zh: '选择位置',
          pt: 'Escolher posição',
          bg: 'Изберете позиция',
          ro: 'Alegeți poziția'
        },
        shots_modal_button_upload_start: {
          ru: 'Загрузить и сохранить запись',
          en: 'Upload and save recording',
          uk: 'Завантажити та зберегти запис',
          be: 'Загрузіць і захаваць запіс',
          zh: '上传并保存录音',
          pt: 'Carregar e salvar gravação',
          bg: 'Качи и запази записа',
          ro: 'Încărcați și salvați înregistrarea'
        },
        shots_modal_button_upload_cancel: {
          ru: 'Отменить и удалить запись',
          en: 'Cancel and delete recording',
          uk: 'Скасувати та видалити запис',
          be: 'Адмяніць і видаліць запіс',
          zh: '取消并删除录音',
          pt: 'Cancelar e excluir gravação',
          bg: 'Отмени и изтрий записа',
          ro: 'Anulează și șterge înregistrarea'
        },
        shots_modal_button_upload_again: {
          ru: 'Не удалось загрузить. Попробовать снова',
          en: 'Failed to upload. Try again',
          uk: 'Не вдалося завантажити. Спробуйте ще раз',
          be: 'Не ўдалося загрузіць. Паспрабуйце яшчэ раз',
          zh: '上传失败。 再试一次',
          pt: 'Falha ao carregar. Tente novamente',
          bg: 'Неуспешен ъплоуд. Опитай отново',
          ro: 'Încărcarea a eșuat. Încearcă din nou'
        },
        shots_modal_button_upload_complete: {
          ru: 'Хорошо',
          en: 'Done',
          uk: 'Готово',
          be: 'Гатова',
          zh: '完成',
          pt: 'Concluído',
          bg: 'Готово',
          ro: 'Finalizat'
        },
        shots_modal_short_recording_txt: {
          ru: 'Запись слишком короткая. Минимальная длина записи должна быть не менее 10 секунд.',
          en: 'The recording is too short. The minimum recording length must be at least 10 seconds.',
          uk: 'Запис занадто короткий. Мінімальна довжина запису повинна бути не менше 10 секунд.',
          be: 'Запіс занадта кароткі. Мінімальная даўжыня запісу павінна быць не менш за 10 секунд.',
          zh: '录音时间太短。 最短录音长度必须至少为10秒。',
          pt: 'A gravação é muito curta. O comprimento mínimo da gravação deve ser de pelo menos 10 segundos.',
          bg: 'Записът е твърде кратък. Минималната дължина на записа трябва да бъде поне 10 секунди.',
          ro: 'Înregistrarea este prea scurtă. Lungimea minimă a înregistrării trebuie să fie de cel puțin 10 secunde.'
        },
        shots_upload_progress_start: {
          ru: 'Получение ссылки для загрузки...',
          en: 'Getting upload link...',
          uk: 'Отримання посилання для завантаження...',
          be: 'Атрыманне спасылкі для загрузкі...',
          zh: '获取上传链接...',
          pt: 'Obtendo link de upload...',
          bg: 'Получаване на връзка за качване...',
          ro: 'Se obține link-ul de upload...'
        },
        shots_upload_progress_uploading: {
          ru: 'Загрузка записи...',
          en: 'Uploading recording...',
          uk: 'Завантаження запису...',
          be: 'Загрузка запісу...',
          zh: '正在上传录音...',
          pt: 'Carregando gravação...',
          bg: 'Качване на записа...',
          ro: 'Se încarcă înregistrarea...'
        },
        shots_upload_progress_notify: {
          ru: 'Оповещение сервиса...',
          en: 'Notifying service...',
          uk: 'Повідомлення сервісу...',
          be: 'Апавяшчэнне сэрвісу...',
          zh: '通知服务...',
          pt: 'Notificando serviço...',
          bg: 'Уведомяване на услугата...',
          ro: 'Se notifică serviciul...'
        },
        shots_upload_complete_text: {
          ru: 'Запись успешно загружена и отправлена на обработку. Вы получите уведомление, когда она будет готова.',
          en: 'The recording has been successfully uploaded and sent for processing. You will receive a notification when it is ready.',
          uk: 'Запис успішно завантажено та надіслано на обробку. Ви отримаєте повідомлення, коли він буде готовий.',
          be: 'Запіс паспяхова загружаны і адпраўлены на апрацоўку. Вы атрымаеце апавяшчэнне, калі ён будзе гатовы.',
          zh: '录音已成功上传并发送以进行处理。 准备好后，您将收到通知。',
          pt: 'A gravação foi carregada com sucesso e enviada para processamento. Você receberá uma notificação quando estiver pronta.',
          bg: 'Записът е успешно качен и изпратен за обработка. Ще получите известие, когато е готов.',
          ro: 'Înregistrarea a fost încărcată cu succes și trimisă spre procesare. Veți primi o notificare când este gata.'
        },
        shots_upload_complete_notify: {
          ru: 'Запись успешно обработана и готова к просмотру!',
          en: 'The recording has been successfully processed and is ready for viewing!',
          uk: 'Запис успішно оброблено і готовий до перегляду!',
          be: 'Запіс паспяхова апрацаваны і гатовы да прагляду!',
          zh: '录音已成功处理，可以观看！',
          pt: 'A gravação foi processada com sucesso e está pronta para visualização!',
          bg: 'Записът е успешно обработен и готов за гледане!',
          ro: 'Înregistrarea a fost procesată cu succes și este gata pentru vizionare!'
        },
        shots_upload_error_notify: {
          ru: 'Не удалось обработать запись.',
          en: 'Failed to process the recording.',
          uk: 'Не вдалося обробити запис.',
          be: 'Не ўдалося апрацаваць запіс.',
          zh: '无法处理录音。',
          pt: 'Falha ao processar a gravação.',
          bg: 'Неуспешна обработка на записа.',
          ro: 'Procesarea înregistrării a eșuat.'
        },
        shots_upload_notice_text: {
          ru: 'Обратите внимание, что после публикации запись станет доступна для просмотра всем пользователям сервиса.',
          en: 'Please note that after publication, the recording will be available for viewing by all users of the service.',
          uk: 'Зверніть увагу, що після публікації запис стане доступний для перегляду всім користувачам сервісу.',
          be: 'Звярніце ўвагу, што пасля публікації запіс стане даступны для прагляду ўсім карыстальнікам сэрвісу.',
          zh: '请注意，发布后，录音将对所有服务用户可见。',
          pt: 'Observe que, após a publicação, a gravação estará disponível para visualização por todos os usuários do serviço.',
          bg: 'Обърнете внимание, че след публикуването записа ще бъде достъпен за преглед от всички потребители на услугата.',
          ro: 'Rețineți că, după publicare, înregistrarea va fi disponibilă pentru vizionare tuturor utilizatorilor serviciului.'
        },
        shots_title_favorite: {
          ru: 'Сохраненные',
          en: 'Favorites',
          uk: 'Збережені',
          be: 'Захаваныя',
          zh: '收藏夹',
          pt: 'Favoritos',
          bg: 'Любими',
          ro: 'Favorite'
        },
        shots_title_created: {
          ru: 'Созданные',
          en: 'Created',
          uk: 'Створені',
          be: 'Створаныя',
          zh: '已创建',
          pt: 'Criado',
          bg: 'Създадени',
          ro: 'Create'
        },
        shots_title_likes: {
          ru: 'Нравится',
          en: 'Likes',
          uk: 'Подобається',
          be: 'Падабаецца',
          zh: '喜欢',
          pt: 'Curtidas',
          bg: 'Харесвания',
          ro: 'Aprecieri'
        },
        shots_title_saved: {
          ru: 'Сохранено',
          en: 'Saved',
          uk: 'Збережено',
          be: 'Захавана',
          zh: '已保存',
          pt: 'Salvo',
          bg: 'Запазено',
          ro: 'Salvate'
        },
        shots_status_error: {
          ru: 'Ошибка',
          en: 'Error',
          uk: 'Помилка',
          be: 'Памылка',
          zh: '错误',
          pt: 'Erro',
          bg: 'Грешка',
          ro: 'Eroare'
        },
        shots_status_processing: {
          ru: 'Обработка',
          en: 'Processing',
          uk: 'Обробка',
          be: 'Апрацоўка',
          zh: '处理中',
          pt: 'Processando',
          bg: 'Обработка',
          ro: 'Se procesează'
        },
        shots_status_ready: {
          ru: 'Загружено',
          en: 'Ready',
          uk: 'Завантажено',
          be: 'Загружана',
          zh: '已就绪',
          pt: 'Carregado',
          bg: 'Качено',
          ro: 'Gata'
        },
        shots_status_blocked: {
          ru: 'Заблокировано',
          en: 'Blocked',
          uk: 'Заблоковано',
          be: 'Заблакіравана',
          zh: '已封锁',
          pt: 'Bloqueado',
          bg: 'Блокирано',
          ro: 'Blocat'
        },
        shots_status_deleted: {
          ru: 'Удалено',
          en: 'Deleted',
          uk: 'Видалено',
          be: 'Выдалена',
          zh: '已删除',
          pt: 'Excluído',
          bg: 'Изтрито',
          ro: 'Șters'
        },
        shots_modal_error_recording_txt_1: {
          ru: 'Не удалось начать запись.',
          en: 'Failed to start recording.',
          uk: 'Не вдалося почати запис.',
          be: 'Не ўдалося пачаць запіс.',
          zh: '无法开始录制。',
          pt: 'Falha ao iniciar a gravação.',
          bg: 'Неуспешно стартиране на записа.',
          ro: 'Pornirea înregistrării a eșuat.'
        },
        shots_modal_error_recording_txt_2: {
          ru: 'Попробуйте сменить источник видео на другой и повторить попытку.',
          en: 'Try changing the video source to another and try again.',
          uk: 'Спробуйте змінити джерело відео на інше та повторіть спробу.',
          be: 'Паспрабуйце змяніць крыніцу відэа на іншую і паспрабуйце яшчэ раз.',
          zh: '尝试将视频源更改为另一个并重试。',
          pt: 'Tente alterar a fonte de vídeo para outra e tente novamente.',
          bg: 'Опитайте да смените видео източника на друг и опитайте отново.',
          ro: 'Încercați să schimbați sursa video și reîncercați.'
        },
        shots_button_good: {
          ru: 'Хорошо',
          en: 'Done',
          uk: 'Готово',
          be: 'Гатова',
          zh: '完成',
          pt: 'Concluído',
          bg: 'Готово',
          ro: 'Gata'
        },
        shots_button_report: {
          ru: 'Подать жалобу',
          en: 'Report',
          uk: 'Поскаржитися',
          be: 'Паскардзіцца',
          zh: '举报',
          pt: 'Denunciar',
          bg: 'Докладвай',
          ro: 'Raportează'
        },
        shots_button_delete_video: {
          ru: 'Удалить запись',
          en: 'Delete recording',
          uk: 'Видалити запис',
          be: 'Видаліць запіс',
          zh: '删除录音',
          pt: 'Excluir gravação',
          bg: 'Изтрий записа',
          ro: 'Șterge înregistrarea'
        },
        shots_modal_report_txt_1: {
          ru: 'Вы уверены, что хотите подать жалобу на это video?',
          en: 'Are you sure you want to report this video?',
          uk: 'Ви впевнені, що хочете подати скаргу на це відео?',
          be: 'Вы ўпэўненыя, што хочаце паскардзіцца на гэта відэа?',
          zh: '您确定要举报此视频吗？',
          pt: 'Tem certeza de que deseja denunciar este vídeo?',
          bg: 'Сигурни ли сте, че искате да докладвате това видео?',
          ro: 'Sigur doriți să raportați acest videoclip?'
        },
        shots_modal_report_txt_2: {
          ru: 'Видео имеет нецензурное содержание, насилие или другие неприемлемые материалы.',
          en: 'The video contains obscene content, violence, or other unacceptable materials.',
          uk: 'Відео містить непристойний контент, насильство або інші неприйнятні матеріали.',
          be: 'Відэа змяшчае непрыстойны кантэнт, гвалт або іншыя непрымальныя матэрыялы.',
          zh: '该视频包含淫秽内容、暴力或其他不可接受的材料。',
          pt: 'O vídeo contém conteúdo obsceno, violência ou outros materiais inaceitáveis.',
          bg: 'Видеото съдържа непристойно съдържание, насилие или други неприемливи материали.',
          ro: 'Videoclipul conține limbaj obscen, violență sau alte materiale inacceptabile.'
        },
        shots_modal_report_txt_3: {
          ru: 'После подачи жалобы данное видео получит штрафные баллы. При накоплении определенного количества штрафных баллов видео будет удалено.',
          en: 'After reporting, this video will receive penalty points. Upon accumulating a certain number of penalty points, the video will be deleted.',
          uk: 'Після подання скарги це відео отримає штрафні бали. При накопиченні певної кількості штрафних балів відео буде видалено.',
          be: 'Пасля падачы скаргі гэта відэа атрымае штрафныя балы. Пры назапашванні пэўнай колькасці штрафных балаў відэа будзе выдалена.',
          zh: '举报后，该视频将获得处罚分数。 累积一定数量的处罚分数后，视频将被删除。',
          pt: 'Após a denúncia, este vídeo receberá pontos de penalidade. Ao acumular um certo número de pontos de penalidade, o vídeo será excluído.',
          bg: 'След докладването това видео ще получи наказателни точки. При натрупване на определен брой наказателни точки видеото ще бъде изтрито.',
          ro: 'După raportare, acest videoclip va primi puncte de penalizare. La acumularea unui anumit număr de puncte, videoclipul va fi șters.'
        },
        shots_modal_report_bell: {
          ru: 'Жалоба отправлена',
          en: 'Report submitted',
          uk: 'Скарга надіслана',
          be: 'Скарга адпраўлена',
          zh: '举报已提交',
          pt: 'Denúncia enviada',
          bg: 'Докладът е изпратен',
          ro: 'Raportul a fost trimis'
        },
        shots_modal_report_bell_alreadyed: {
          ru: 'Вы уже подавали жалобу на это видео',
          en: 'You have already reported this video',
          uk: 'Ви вже подавали скаргу на це відео',
          be: 'Вы ўжо падавалі скаргу на гэта відэа',
          zh: '您已举报此视频',
          pt: 'Você já denunciou este vídeo',
          bg: 'Вече сте докладвали това видео',
          ro: 'Ați raportat deja acest videoclip'
        },
        shots_modal_deleted_bell: {
          ru: 'Запись успешно удалена',
          en: 'Recording successfully deleted',
          uk: 'Запис успішно видалено',
          be: 'Запіс паспяхова выдалены',
          zh: '录音已成功删除',
          pt: 'Gravação excluída com sucesso',
          bg: 'Записът е успешно изтрит',
          ro: 'Înregistrarea a fost ștearsă cu succes'
        },
        shots_modal_delete_txt_1: {
          ru: 'Вы уверены, что хотите удалить эту запись?',
          en: 'Are you sure you want to delete this recording?',
          uk: 'Ви впевнені, що хочете видалити цей запис?',
          be: 'Вы ўпэўненыя, што хочаце выдаліць гэты запіс?',
          zh: '您确定要删除此录音吗？',
          pt: 'Tem certeza de que deseja excluir esta gravação?',
          bg: 'Сигурни ли сте, че искате да изтриете този запис?',
          ro: 'Sigur doriți să ștergeți această înregistrare?'
        },
        shots_modal_delete_txt_2: {
          ru: 'Запись будет удалена навсегда и не сможет быть восстановлена.',
          en: 'The recording will be permanently deleted and cannot be recovered.',
          uk: 'Запис буде назавжди видалено і не може бути відновлено.',
          be: 'Запіс будзе назаўжды выдалены і не можа быць адноўлены.',
          zh: '录音将被永久删除，无法恢复。',
          pt: 'A gravação será excluída permanentemente e não poderá ser recuperada.',
          bg: 'Записът ще бъде изтрит завинаги и не може да бъде възстановен.',
          ro: 'Înregistrarea va fi ștearsă definitiv și nu poate fi recuperată.'
        },
        shots_modal_quota_txt_1: {
          ru: 'Не торопитесь записывать новый момент!',
          en: 'Don\'t rush to record a new moment!',
          uk: 'Не поспішайте записувати новий момент!',
          be: 'Не спяшайцеся запісваць новы момант!',
          zh: '不要急于记录新时刻！',
          pt: 'Não se apresse para gravar um novo momento!',
          bg: 'Не бързайте да записвате нов момент!',
          ro: 'Nu vă grăbiți să înregistrați un moment nou!'
        },
        shots_modal_quota_txt_2: {
          ru: 'Действуются ограничения на частоту записи, чтобы избежать перегрузки сервиса. Вам нужно подождать еще {time}',
          en: 'There are restrictions on the frequency of recording to avoid overloading the service. You need to wait another {time}',
          uk: 'Існують обмеження на частоту запису, щоб уникнути перевантаження сервісу. Вам потрібно почекати ще {time}',
          be: 'Існуюць абмежаванні на частату запісу, каб пазбегнуць перагрузкі сэрвісу. Вам трэба пачакаць яшчэ {time}',
          zh: '对录音频率有一定限制，以避免服务过载。 您需要再等 {time}',
          pt: 'Existem restrições na frequência de gravação para evitar sobrecarregar o serviço. Você precisa esperar mais {time}',
          bg: 'Има ограничения за честотата на запис, за да се избегне претоварване на услугата. Трябва да изчакате още {time}',
          ro: 'Există restricții privind frecvența înregistrărilor. Trebuie să mai așteptați {time}'
        },
        shots_modal_before_upload_recording_txt_1: {
          ru: 'Будьте ориганальны!',
          en: 'Be original!',
          uk: 'Будьте оригінальними!',
          be: 'Будзьце арыгінальнымі!',
          zh: '要有创意！',
          pt: 'Seja original!',
          bg: 'Бъдете оригинални!',
          ro: 'Fii original!'
        },
        shots_modal_before_upload_recording_txt_2: {
          ru: 'Похоже, вы записали "титры" в начале или в конце фильма. Если это так, то пожалуйста, выберите другой фрагмент видео для записи.',
          en: 'It looks like you recorded the "credits" at the beginning or end of the movie. If so, please choose another video fragment to record.',
          uk: 'Схоже, ви записали "титри" на початку або в кінці фільму. Якщо так, будь ласка, виберіть інший фрагмент відео для запису.',
          be: 'Падаецца, вы запісалі "трэйлер" на пачатку або ў канцы фільма. Калі так, калі ласка, выберыце іншы фрагмент відэа для запісу.',
          zh: '看起来您在电影的开头或结尾录制了“片尾字幕”。 如果是这样，请选择另一个视频片段进行录制。',
          pt: 'Parece que você gravou os "créditos" no início ou no final do filme. Se for esse o caso, escolha outro fragmento de vídeo para gravar.',
          bg: 'Изглежда сте записали "титрите" в началото или в края на филма. Ако е така, моля изберете друг фрагмент от видеото за запис.',
          ro: 'Se pare că ați înregistrat „creditele” la începutul sau sfârșitul filmului. Dacă da, vă rugăm să alegeți un alt fragment video pentru înregistrare.'
        },
        shots_button_choice_fragment: {
          ru: 'Выбрать другой фрагмент',
          en: 'Choose another fragment',
          uk: 'Вибрати інший фрагмент',
          be: 'Выбраць іншы фрагмент',
          zh: '选择另一个片段',
          pt: 'Escolher outro fragmento',
          bg: 'Избери друг фрагмент',
          ro: 'Alege un alt fragment'
        },
        shots_button_continue_upload: {
          ru: 'Продолжить загрузку',
          en: 'Continue uploading',
          uk: 'Продовжити завантаження',
          be: 'Працягнуць загрузку',
          zh: '继续上传',
          pt: 'Continuar enviando',
          bg: 'Продължи качването',
          ro: 'Continuați încărcarea'
        },
        shots_recording_text: {
          ru: 'Идет запись',
          en: 'Recording in progress',
          uk: 'Йде запис',
          be: 'Ідзе запіс',
          zh: '正在录制',
          pt: 'Gravação em andamento',
          bg: 'Записът е в ход',
          ro: 'Înregistrare în curs'
        },
        shots_watch: {
          ru: 'Смотреть нарезки',
          en: 'Watch shots',
          uk: 'Дивитися нарізки',
          be: 'Глядзець нарэзкі',
          zh: '观看片段',
          pt: 'Assistir trechos',
          bg: 'Гледайте нарязки',
          ro: 'Vizionează clipuri'
        },
        shots_down: {
          ru: 'Нажми вниз',
          en: 'Press down',
          uk: 'Натисни вниз',
          be: 'Націсні ўніз',
          zh: '按下',
          pt: 'Pressione para baixo',
          bg: 'Натисни надолу',
          ro: 'Apasă jos'
        },
        shots_how_create_video_title: {
          ru: 'Как создать видео',
          en: 'How to create a video',
          uk: 'Як створити відео',
          be: 'Як стварыць відэа',
          zh: '如何创建视频',
          pt: 'Como criar um vídeo',
          bg: 'Как да създадете видео',
          ro: 'Cum să creezi un videoclip'
        },
        shots_how_create_video_subtitle: {
          ru: 'Посмотреть инструкцию по созданию видео',
          en: 'View instructions for creating a video',
          uk: 'Переглянути інструкцію зі створення відео',
          be: 'Паглядзець інструкцію па стварэнні відэа',
          zh: '查看创建视频的说明',
          pt: 'Ver instrucciones para criar um vídeo',
          bg: 'Вижте инструкциите за създаване на видео',
          ro: 'Vezi instrucțiunile pentru crearea unui videoclip'
        },
        shots_card_empty_descr: {
          ru: 'Здесь пока нет шотов, но вы можете создать первый!',
          en: 'There are no shots here yet, but you can create the first one!',
          uk: 'Тут поки немає шотів, але ви можете створити перший!',
          be: 'Тут пакуль няма шотаў, але вы можете стварыць першы!',
          zh: '这里还没有镜头，但您可以创建第一个！',
          pt: 'Ainda não há trechos aqui, mas você pode criar o primeiro!',
          bg: 'Тук все още няма нарязки, но можете да създадете първия!',
          ro: 'Nu există clipuri aici, dar poți să-l creezi pe primul!'
        },
        shots_alert_noshots: {
          ru: 'Шотов пока нет',
          en: 'No shots yet',
          uk: 'Шотів поки немає',
          be: 'Шотаў пакуль няма',
          zh: '还没有镜头',
          pt: 'Ainda não há trechos',
          bg: 'Все още няма нарязки',
          ro: 'Niciun clip încă'
        },
        shots_choice_tags: {
          ru: 'Вы можете выбрать теги:',
          en: 'You can choose tags:',
          uk: 'Ви можете вибрати теги:',
          be: 'Вы можаце выбраць тэгаў:',
          zh: '您可以选择标签：',
          pt: 'Você pode escolher tags:',
          bg: 'Можете да изберете тагове:',
          ro: 'Puteți alege etichete:'
        },
        shots_tag_action: {
          ru: 'Экшен',
          en: 'Action',
          uk: 'Екшен',
          be: 'Экшн',
          zh: '动作',
          pt: 'Ação',
          bg: 'Екшън',
          ro: 'Acțiune'
        },
        shots_tag_comedy: {
          ru: 'Юмор',
          en: 'Humor',
          uk: 'Гумор',
          be: 'Гумар',
          zh: '幽默',
          pt: 'Humor',
          bg: 'Хумор',
          ro: 'Umor'
        },
        shots_tag_drama: {
          ru: 'Драма',
          en: 'Drama',
          uk: 'Драма',
          be: 'Драма',
          zh: '戏剧',
          pt: 'Drama',
          bg: 'Драма',
          ro: 'Dramă'
        },
        shots_tag_horror: {
          ru: 'Ужасы',
          en: 'Horror',
          uk: 'Ужаси',
          be: 'Ужасы',
          zh: '恐怖',
          pt: 'Horror',
          bg: 'Ужас',
          ro: 'Groază'
        },
        shots_tag_thriller: {
          ru: 'Триллер',
          en: 'Thriller',
          uk: 'Трилер',
          be: 'Трылер',
          zh: '惊悚',
          pt: 'Thriller',
          bg: 'Трилър',
          ro: 'Thriller'
        },
        shots_tag_anime: {
          ru: 'Аниме',
          en: 'Anime',
          uk: 'Аніме',
          be: 'Анімэ',
          zh: '动漫',
          pt: 'Anime',
          bg: 'Аниме',
          ro: 'Anime'
        },
        shots_tag_fantasy: {
          ru: 'Фэнтези',
          en: 'Fantasy',
          uk: 'Фентезі',
          be: 'Фэнтэзі',
          zh: '奇幻',
          pt: 'Fantasia',
          bg: 'Фентъзи',
          ro: 'Fantezie'
        },
        shots_tag_sci_fi: {
          ru: 'Фантастика',
          en: 'Sci-Fi',
          uk: 'Фантастика',
          be: 'Фантастыка',
          zh: '科幻',
          pt: 'Ficção Científica',
          bg: 'Фантастика',
          ro: 'Ficțiune Științifică'
        },
        shots_settings_in_player: {
          ru: 'Показывать моменты в плеере',
          en: 'Show moments in player',
          uk: 'Показувати моменти в плеєрі',
          be: 'Паказваць моманты ў плееры',
          zh: '在播放器中显示镜头',
          pt: 'Mostrar momentos no player',
          bg: 'Показване на моменти в плейъра',
          ro: 'Afișați momentele în player'
        },
        shots_settings_in_card: {
          ru: 'Показывать кнопку Shots в карточках',
          en: 'Show Shots button in cards',
          uk: 'Показувати кнопку Shots в картках',
          be: 'Паказваць кнопку Shots у картках',
          zh: '在卡片中显示 Shots 按钮',
          pt: 'Mostrar botão Shots em cartões',
          bg: 'Показване на бутон Shots в картите',
          ro: 'Afișați butonul Shots în carduri'
        }
      });
    }
    var Lang = {
      init: init$7
    };

    function init$6() {
      Lampa.Template.add('shots_player_record_button', "\n        <div class=\"button selector shots-player-button\" data-controller=\"player_panel\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"11.718\" cy=\"11.718\" r=\"10.718\" stroke=\"white\" stroke-width=\"2\"/>\n                <circle cx=\"11.718\" cy=\"11.718\" r=\"5.92621\" fill=\"white\" class=\"rec\"/>\n            </svg>\n        </div>\n    ");
      Lampa.Template.add('shots_modal_before_recording', "\n        <div class=\"about\">\n            <div style=\"font-size: 1.2em;\">\n                #{shots_modal_before_recording_txt_1}\n            </div>\n            <div>\n                <svg class=\"shots-svg-auto shots-svg-auto--helmet\"><use xlink:href=\"#sprite-shots-howneed\"></use></svg>\n            </div>\n            <div>\n                #{shots_modal_before_recording_txt_2}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_modal_before_upload_recording', "\n        <div class=\"about\">\n            <div style=\"font-size: 1.2em;\">\n                #{shots_modal_before_upload_recording_txt_1}\n            </div>\n            <div>\n                <svg class=\"shots-svg-auto shots-svg-auto--helmet\"><use xlink:href=\"#sprite-shots-notitles\"></use></svg>\n            </div>\n            <div>\n                #{shots_modal_before_upload_recording_txt_2}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_modal_error_recording', "\n        <div class=\"about\">\n            <div style=\"font-size: 1.2em;\">\n                #{shots_modal_error_recording_txt_1}\n            </div>\n            <div>\n                #{shots_modal_error_recording_txt_2}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_modal_report', "\n        <div class=\"about\">\n            <div style=\"font-size: 1.2em;\">\n                #{shots_modal_report_txt_1}\n            </div>\n            <div>\n                #{shots_modal_report_txt_2}\n            </div>\n            <div>\n                #{shots_modal_report_txt_3}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_modal_delete', "\n        <div class=\"about\">\n            <div style=\"font-size: 1.2em;\">\n                #{shots_modal_delete_txt_1}\n            </div>\n            <div>\n                #{shots_modal_delete_txt_2}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_modal_quota_limit', "\n        <div class=\"about\">\n            <div style=\"font-size: 1.2em;\">\n                #{shots_modal_quota_txt_1}\n            </div>\n            <div>\n                #{shots_modal_quota_txt_2}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_modal_short_recording', "\n        <div class=\"about\">\n            <div>\n                #{shots_modal_short_recording_txt}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_player_recorder', "\n        <div class=\"shots-player-recorder\">\n            <div class=\"shots-player-recorder__body\">\n                <div class=\"shots-player-recorder__plate\">\n                    <div class=\"shots-player-recorder__text\">#{shots_recording_text} <span></span></div>\n                    <div class=\"shots-player-recorder__stop\"></div>\n                </div>\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_modal_upload', "\n        <div class=\"shots-modal-upload\">\n            <div class=\"shots-modal-upload__preview\"></div>\n            <div class=\"shots-modal-upload__body\"></div>\n        </div>\n    ");
      Lampa.Template.add('shots_checkbox', "\n        <div class=\"shots-selector shots-checkbox selector\">\n            <div class=\"shots-checkbox__icon\"></div>\n            <div class=\"shots-checkbox__text\">{text}</div>\n        </div>\n    ");
      Lampa.Template.add('shots_button', "\n        <div class=\"shots-selector shots-button selector\">{text}</div>\n    ");
      Lampa.Template.add('shots_progress', "\n        <div class=\"shots-selector shots-progress selector\">\n            <div class=\"shots-progress__text\">{text}</div>\n            <div class=\"shots-progress__bar\"><div></div></div>\n        </div>\n    ");
      Lampa.Template.add('shots_preview', "\n        <div class=\"shots-preview\">\n            <div class=\"shots-preview__left\">\n                <div class=\"shots-preview__screenshot\">\n                    <img>\n                </div>\n            </div>\n            <div class=\"shots-preview__body\">\n                <div class=\"shots-preview__year\">{year}</div>\n                <div class=\"shots-preview__title\">{title}</div>\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_tags', "\n        <div class=\"shots-tags\"></div>\n    ");
      Lampa.Template.add('shots_upload_complete_text', "\n        <div class=\"about\">\n            <div style=\"padding-bottom: 1em;\">\n                #{shots_upload_complete_text}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_upload_notice_text', "\n        <div class=\"about\">\n            <div style=\"padding-bottom: 1em;\">\n                #{shots_upload_notice_text}\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_lenta', "\n        <div class=\"shots-lenta\">\n            <div class=\"shots-lenta__video\"></div>\n            <div class=\"shots-lenta__panel\"></div>\n        </div>\n    ");
      Lampa.Template.add('shots_lenta_video', "\n        <div class=\"shots-lenta-video\">\n            <video class=\"shots-lenta-video__video-element\" autoplay loop poster=\"./img/video_poster.png\"></video>\n            <div class=\"shots-lenta-video__progress-bar\">\n                <div></div>\n            </div>\n            <div class=\"player-video__loader shots-lenta-video__loader\"></div>\n            <div class=\"shots-lenta-video__layer\"></div>\n        </div>\n    ");
      Lampa.Template.add('shots_lenta_panel', "\n        <div class=\"shots-lenta-panel\">\n            <div class=\"explorer-card__head shots-lenta-panel__card loading\">\n                <div class=\"explorer-card__head-left\">\n                    <div class=\"explorer-card__head-img selector shots-lenta-panel__card-img\">\n                        <img>\n                    </div>\n                </div>\n                <div class=\"explorer-card__head-body selector\">\n                    <div class=\"shots-lenta-panel__info\">\n                        <div class=\"explorer-card__head-create shots-lenta-panel__card-year\"></div>\n                        <div class=\"shots-lenta-panel__card-title\"></div>\n                        <div class=\"shots-lenta-panel__recorder hide\"></div>\n                        <div class=\"shots-lenta-panel__tags\"></div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"shots-lenta-panel__right\">\n                <div class=\"shots-lenta-panel__author\"></div>\n\n                <div class=\"shots-lenta-panel__buttons\">\n                    <div class=\"selector action-liked\">\n                        <svg width=\"39\" height=\"35\" viewBox=\"0 0 39 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M26.6504 1.50977C29.2617 1.38597 32.2036 2.36705 34.7168 5.42676C37.1567 8.39737 37.1576 11.3625 36.2148 14.002C35.2408 16.7288 33.2538 19.0705 31.834 20.4238C31.8295 20.4281 31.8247 20.4322 31.8203 20.4365L19.1484 32.8271L6.47754 20.4365C5.03099 18.9847 3.053 16.646 2.08203 13.9443C1.14183 11.3282 1.13938 8.39959 3.58105 5.42676C6.09429 2.36705 9.03613 1.38597 11.6475 1.50977C14.3299 1.63693 16.7044 2.92997 17.9932 4.4873C18.2781 4.83167 18.7024 5.03125 19.1494 5.03125C19.5962 5.03113 20.0198 4.83157 20.3047 4.4873C21.5934 2.92997 23.968 1.63697 26.6504 1.50977Z\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" fill=\"currentColor\" class=\"icon-fill\"/>\n                        </svg>\n                    </div>\n                    <div class=\"selector action-favorite\">\n                        <svg width=\"21\" height=\"32\" viewBox=\"0 0 21 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M2 1.5H19C19.2761 1.5 19.5 1.72386 19.5 2V27.9618C19.5 28.3756 19.0261 28.6103 18.697 28.3595L12.6212 23.7303C11.3682 22.7757 9.63183 22.7757 8.37885 23.7303L2.30302 28.3595C1.9739 28.6103 1.5 28.3756 1.5 27.9618V2C1.5 1.72386 1.72386 1.5 2 1.5Z\" stroke=\"currentColor\" stroke-width=\"2.5\" fill=\"currentColor\" class=\"icon-fill\"></path>\n                        </svg>\n                    </div>\n                    <div class=\"selector action-more\">\n                        <svg><use xlink:href=\"#sprite-dots\"></use></svg>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
      Lampa.Template.add('shots_counter', "\n        <div class=\"shots-counter\">\n            <span></span>\n            <div></div>\n        </div>\n    ");
      Lampa.Template.add('shots_author', "\n        <div class=\"shots-author\">\n            <div class=\"shots-author__img\">\n                <img>\n            </div>\n            <div class=\"shots-author__name\"></div>\n        </div>\n    ");
      var sprites = "\n        <symbol id=\"sprite-love\" viewBox=\"0 0 39 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M26.6504 1.50977C29.2617 1.38597 32.2036 2.36705 34.7168 5.42676C37.1567 8.39737 37.1576 11.3625 36.2148 14.002C35.2408 16.7288 33.2538 19.0705 31.834 20.4238C31.8295 20.4281 31.8247 20.4322 31.8203 20.4365L19.1484 32.8271L6.47754 20.4365C5.03099 18.9847 3.053 16.646 2.08203 13.9443C1.14183 11.3282 1.13938 8.39959 3.58105 5.42676C6.09429 2.36705 9.03613 1.38597 11.6475 1.50977C14.3299 1.63693 16.7044 2.92997 17.9932 4.4873C18.2781 4.83167 18.7024 5.03125 19.1494 5.03125C19.5962 5.03113 20.0198 4.83157 20.3047 4.4873C21.5934 2.92997 23.968 1.63697 26.6504 1.50977Z\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n        </symbol>\n\n        <symbol id=\"sprite-shots\" viewBox=\"0 0 512 512\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M253.266 512a19.166 19.166 0 0 1-19.168-19.168V330.607l-135.071-.049a19.164 19.164 0 0 1-16.832-28.32L241.06 10.013a19.167 19.167 0 0 1 36.005 9.154v162.534h135.902a19.167 19.167 0 0 1 16.815 28.363L270.078 502.03a19.173 19.173 0 0 1-16.812 9.97z\" fill=\"currentColor\"></path>\n        </symbol>\n\n        <symbol id=\"sprite-shots-notitles\" viewBox=\"0 0 474 138\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect x=\"1.5\" y=\"1.5\" width=\"216.196\" height=\"121.309\" rx=\"9.5\" stroke=\"white\" stroke-width=\"3\"/>\n            <rect x=\"255.49\" y=\"1.5\" width=\"216.196\" height=\"121.309\" rx=\"9.5\" stroke=\"white\" stroke-width=\"3\"/>\n            <rect x=\"77.9692\" y=\"49.6289\" width=\"63.2581\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"51.4348\" y=\"64.8156\" width=\"116.327\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"302.813\" y=\"27.8919\" width=\"58.0774\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"345.485\" y=\"10.1938\" width=\"36.2068\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"319.336\" y=\"44.1069\" width=\"41.5542\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"312.751\" y=\"60.3219\" width=\"48.1394\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.66\" x=\"316.25\" y=\"76.5368\" width=\"44.6411\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.38\" x=\"342.385\" y=\"92.7517\" width=\"18.5054\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.28\" x=\"308.429\" y=\"108.967\" width=\"52.4612\" height=\"4.04266\" rx=\"2.02133\" fill=\"white\"/>\n            <rect x=\"371.113\" y=\"27.8919\" width=\"38.2129\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"371.113\" y=\"44.1069\" width=\"47.8267\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"371.113\" y=\"60.3219\" width=\"29.3054\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.66\" x=\"371.113\" y=\"76.5368\" width=\"44.3281\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.38\" x=\"371.113\" y=\"92.7517\" width=\"29.3054\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.28\" x=\"371.113\" y=\"108.967\" width=\"30.9517\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"99.001\" y=\"80.0025\" width=\"21.1946\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"169.168\" y=\"88.6869\" width=\"62.5064\" height=\"6.28762\" rx=\"3.14381\" transform=\"rotate(45 169.168 88.6869)\" fill=\"#FF3F3F\"/>\n            <rect width=\"62.5064\" height=\"6.28762\" rx=\"3.14381\" transform=\"matrix(-0.707107 0.707107 0.707107 0.707107 208.921 88.6869)\" fill=\"#FF3F3F\"/>\n            <rect x=\"423.386\" y=\"88.6869\" width=\"62.5064\" height=\"6.28762\" rx=\"3.14381\" transform=\"rotate(45 423.386 88.6869)\" fill=\"#FF3F3F\"/>\n            <rect width=\"62.5064\" height=\"6.28762\" rx=\"3.14381\" transform=\"matrix(-0.707107 0.707107 0.707107 0.707107 463.138 88.6869)\" fill=\"#FF3F3F\"/>\n        </symbol>\n\n        <symbol id=\"sprite-shots-howneed\" viewBox=\"0 0 474 138\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect x=\"1.5\" y=\"1.5\" width=\"216.196\" height=\"121.309\" rx=\"9.5\" stroke=\"white\" stroke-width=\"3\"/>\n            <rect x=\"255.49\" y=\"1.5\" width=\"216.196\" height=\"121.309\" rx=\"9.5\" stroke=\"white\" stroke-width=\"3\"/>\n            <rect x=\"54.1262\" y=\"103.818\" width=\"47.7241\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.28\" x=\"16.4497\" y=\"103.818\" width=\"186.409\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"302.813\" y=\"27.8919\" width=\"58.0774\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"345.485\" y=\"10.1938\" width=\"36.2068\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"319.336\" y=\"44.1069\" width=\"41.5542\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"312.751\" y=\"60.3219\" width=\"48.1394\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.66\" x=\"316.25\" y=\"76.5368\" width=\"44.6411\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.38\" x=\"342.385\" y=\"92.7517\" width=\"18.5054\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.28\" x=\"308.429\" y=\"108.967\" width=\"52.4612\" height=\"4.04266\" rx=\"2.02133\" fill=\"white\"/>\n            <rect x=\"371.113\" y=\"27.8919\" width=\"38.2129\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"371.113\" y=\"44.1069\" width=\"47.8267\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"371.113\" y=\"60.3219\" width=\"29.3054\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.66\" x=\"371.113\" y=\"76.5368\" width=\"44.3281\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect opacity=\"0.28\" x=\"371.113\" y=\"108.967\" width=\"30.9517\" height=\"5.14891\" rx=\"2.57446\" fill=\"white\"/>\n            <rect x=\"59.2751\" y=\"100.74\" width=\"11.3044\" height=\"5.14891\" rx=\"2.57446\" transform=\"rotate(90 59.2751 100.74)\" fill=\"white\"/>\n            <rect x=\"101.85\" y=\"100.74\" width=\"11.3044\" height=\"5.14891\" rx=\"2.57446\" transform=\"rotate(90 101.85 100.74)\" fill=\"white\"/>\n            <rect x=\"423.386\" y=\"88.6869\" width=\"62.5064\" height=\"6.28762\" rx=\"3.14381\" transform=\"rotate(45 423.386 88.6869)\" fill=\"#FF3F3F\"/>\n            <rect width=\"62.5064\" height=\"6.28762\" rx=\"3.14381\" transform=\"matrix(-0.707107 0.707107 0.707107 0.707107 463.138 88.6869)\" fill=\"#FF3F3F\"/>\n        </symbol>\n    ";
      document.querySelector('#sprites').innerHTML += sprites;
    }
    var Templates = {
      init: init$6
    };

    function videoScreenShot(video) {
      var screen_width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 320;
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var scale = screen_width / video.videoWidth;
      var width = Math.round(video.videoWidth * scale);
      var height = Math.round(video.videoHeight * scale);
      canvas.width = width;
      canvas.height = height;
      try {
        context.drawImage(video, 0, 0, width, height);
      } catch (e) {
        console.error('Shots', 'video screenshot error:', e.message);
      }
      return canvas.toDataURL('image/png');
    }
    function videoReplaceStatus(from, to) {
      to.status = from.status;
      to.screen = from.screen;
      to.file = from.file;
    }
    function getBalanser(card) {
      var history_data = Lampa.Storage.get('online_watched_last', '{}');
      var history_key = Lampa.Utils.hash(card.name ? card.original_name : card.original_title);
      var history_item = history_data[history_key];
      return history_item && history_item.balanser ? history_item.balanser : '';
    }
    function shortVoice(voice) {
      return (voice || '').replace(/\s[^a-zA-Zа-яА-Я0-9].*$/, '').trim();
    }
    function isTSQuality(str) {
      return str.toLowerCase().indexOf(' ts') > -1 || str.toLowerCase().indexOf(' ad') > -1;
    }
    function modal(html, buttons, back) {
      var body = $('<div></div>');
      var footer = $('<div class="shots-modal-footer"></div>');
      body.append(html);
      body.append(footer);
      buttons.forEach(function (button) {
        var btn = Lampa.Template.get('shots_button', {
          text: button.name
        });
        btn.on('hover:enter', function () {
          if (button.onSelect) button.onSelect();
        });
        if (button.cancel) btn.addClass('shots-selector--transparent');
        footer.append(btn);
      });
      Lampa.Modal.open({
        html: body,
        size: 'small',
        scroll: {
          nopadding: true
        },
        onBack: back
      });
    }
    var Utils = {
      videoScreenShot: videoScreenShot,
      videoReplaceStatus: videoReplaceStatus,
      getBalanser: getBalanser,
      shortVoice: shortVoice,
      isTSQuality: isTSQuality,
      modal: modal
    };

    var Defined = {
      quota_next_record: 1000 * 60 * 10,
      // 10 минут
      video_size: 1280,
      screen_size: 500,
      recorder_max_duration: 60 * 5,
      // 5 минут
      cdn: 'https://cdn.cub.rip/shots/'
    };

    function counter(method, v1, v2, v3) {
      $.ajax({
        dataType: 'json',
        url: Lampa.Utils.protocol() + Lampa.Manifest.cub_domain + '/api/metric/stat?method=' + method + '&value_one=' + (v1 || '') + '&value_two=' + (v2 || '') + '&value_three=' + (v3 || '')
      });
    }
    var Metric = {
      counter: counter
    };

    function Recorder(video) {
      this.html = Lampa.Template.get('shots_player_recorder');
      var start_point = video.currentTime;
      this.start = function () {
        Metric.counter('shots_recorder_start');
        try {
          this.screenshot = Utils.videoScreenShot(video, Defined.screen_size);
          this.run();
          this.html.find('.shots-player-recorder__stop').on('click', this.stop.bind(this));
        } catch (e) {
          console.error('Recorder', e.message);
          this.error(e);
        }
      };
      this.run = function () {
        $('body').append(this.html);
        Lampa.Controller.add('recorder', {
          toggle: function toggle() {
            Lampa.Controller.clear();
          },
          enter: this.stop.bind(this),
          back: this.stop.bind(this)
        });
        Lampa.Controller.toggle('recorder');
        this.interval = setInterval(this.tik.bind(this), 1000);
        this.tik();
        this.onRun();
      };
      this.tik = function () {
        var seconds = Math.round(video.currentTime - start_point);
        var progress = Lampa.Utils.secondsToTime(seconds).split(':');
        progress = progress[1] + ':' + progress[2];
        this.html.find('.shots-player-recorder__text span').text(progress + ' / ' + Lampa.Utils.secondsToTimeHuman(Defined.recorder_max_duration));
        if (seconds >= Defined.recorder_max_duration) this.stop();
      };
      this.error = function (e) {
        this.destroy();
        this.onError(e);
        Metric.counter('shots_recorder_error');
      };
      this.stop = function () {
        var elapsed = video.currentTime - start_point;
        if (elapsed < 1) {
          this.error(new Error('Stoped too early, maybe codecs not supported'));
        } else {
          this.destroy();
          this.onStop({
            duration: Math.round(elapsed),
            screenshot: this.screenshot,
            start_point: Math.round(start_point),
            end_point: Math.round(video.currentTime)
          });
          Metric.counter('shots_recorder_end');
        }
      };
      this.destroy = function () {
        clearInterval(this.interval);
        this.html.remove();
      };
    }

    function Tags$1() {
      var tags_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.html = Lampa.Template.get('shots_tags');
      this.create = function () {
        if (tags_data) this.update(tags_data);
      };
      this.update = function (data) {
        var tags = [];
        this.html.empty();
        data.season && tags.push('S-' + data.season);
        data.episode && tags.push('E-' + data.episode);
        if (data.voice_name && data.voice_name !== data.card_title) tags.push(Utils.shortVoice(data.voice_name));
        this.html.append(tags.map(function (tag) {
          return '<div>' + tag + '</div>';
        }).join(''));
      };
      this.render = function () {
        return this.html;
      };
      this.destroy = function () {
        this.html.remove();
      };
    }

    function Preview(data) {
      this.data = data;
      this.html = Lampa.Template.get('shots_preview');
      this.create = function () {
        if (this.data.recording.screenshot) {
          this.html.find('.shots-preview__screenshot img').css({
            opacity: 1
          }).eq(0)[0].src = this.data.recording.screenshot;
        }
        var release_date = this.data.play_data.card.release_date || this.data.play_data.card.first_air_date || '';
        var year = release_date.slice(0, 4);
        this.html.find('.shots-preview__year').html(year || '----');
        this.html.find('.shots-preview__title').html(this.data.play_data.card.name || this.data.play_data.card.title || '');
        this.tags = new Tags$1(this.data.play_data);
        this.tags.create();
        this.html.find('.shots-preview__body').append(this.tags.render());
      };
      this.render = function () {
        return this.html;
      };
      this.destroy = function () {
        this.html.remove();
      };
    }

    function Checkbox() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.html = Lampa.Template.get('shots_checkbox');
      this.state = params.state || false;
      this.create = function () {
        var _this = this;
        this.setText(params.text || '');
        this.setState(this.state);
        this.html.on('hover:enter', function () {
          _this.setState(!_this.state);
        });
      };
      this.setText = function (text) {
        this.html.find('.shots-checkbox__text').html(text);
      };
      this.setState = function (state) {
        this.state = state;
        this.html.toggleClass('shots-checkbox--checked', state);
      };
      this.render = function () {
        return this.html;
      };
      this.destroy = function () {
        this.html.remove();
      };
    }

    function url(u) {
      //return 'http://localhost:3100/api/shots/' + u
      return Lampa.Utils.protocol() + Lampa.Manifest.cub_domain + '/api/shots/' + u;
    }
    function params() {
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;
      if (!Lampa.Account.Permit.account.token) return {
        timeout: timeout
      };
      return {
        headers: {
          token: Lampa.Account.Permit.account.token,
          profile: Lampa.Account.Permit.account.profile.id
        },
        timeout: timeout
      };
    }
    function uploadRequest(data, onsuccess, onerror) {
      Lampa.Network.silent(url('upload-request'), onsuccess, onerror, data, params());
    }
    function uploadStatus(id, onsuccess, onerror) {
      Lampa.Network.silent(url('upload-status/' + id), onsuccess, onerror, null, params(5000));
    }
    function shotsVideo(id, onsuccess, onerror) {
      Lampa.Network.silent(url('video/' + id), onsuccess, onerror, null, params(5000));
    }
    function shotsList(type) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var onsuccess = arguments.length > 2 ? arguments[2] : undefined;
      var onerror = arguments.length > 3 ? arguments[3] : undefined;
      Lampa.Network.silent(url('list/' + type + '?page=' + page), onsuccess, onerror, null, params(5000));
    }
    function shotsCard(card) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var onsuccess = arguments.length > 2 ? arguments[2] : undefined;
      var onerror = arguments.length > 3 ? arguments[3] : undefined;
      Lampa.Network.silent(url('card/' + card.id + '/' + (card.original_name ? 'tv' : 'movie') + '?page=' + page), onsuccess, onerror, null, params(5000));
    }
    function shotsChannel(id) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var onsuccess = arguments.length > 2 ? arguments[2] : undefined;
      var onerror = arguments.length > 3 ? arguments[3] : undefined;
      Lampa.Network.silent(url('channel/' + id + '?page=' + page), onsuccess, onerror, null, params(10000));
    }
    function shotsLiked(id, type, onsuccess, onerror) {
      var uid = Lampa.Storage.get('lampa_uid', '');
      Lampa.Network.silent(url('liked?uid=' + uid), onsuccess, onerror, {
        id: id,
        type: type
      }, params(5000));
    }
    function shotsBlock(id, onsuccess, onerror) {
      Lampa.Network.silent(url('block'), onsuccess, onerror, {
        id: id
      }, params());
    }
    function shotsReport$1(id, onsuccess, onerror) {
      Lampa.Network.silent(url('report'), onsuccess, onerror, {
        id: id
      }, params());
    }
    function shotsDelete$1(id, onsuccess, onerror) {
      Lampa.Network.silent(url('delete'), onsuccess, onerror, {
        id: id
      }, params());
    }
    function shotsFavorite(action, shot, onsuccess, onerror) {
      Lampa.Network.silent(url('favorite'), onsuccess, onerror, {
        sid: shot.id,
        card_title: shot.card_title,
        card_poster: shot.card_poster,
        action: action
      }, params(5000));
    }
    function lenta() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var onsuccess = arguments.length > 1 ? arguments[1] : undefined;
      var uid = Lampa.Storage.get('lampa_uid', '');
      Lampa.Arrays.extend(query, {
        page: 1,
        sort: 'id',
        uid: uid,
        limit: 20
      });
      var path = [];
      for (var key in query) {
        path.push(key + '=' + encodeURIComponent(query[key]));
      }
      Lampa.Network.silent(url('lenta?' + path.join('&')), function (result) {
        onsuccess(result.results);
      }, function () {
        onsuccess([]);
      }, null, params(10000));
    }
    function shotsViewed(id, onsuccess, onerror) {
      var uid = Lampa.Storage.get('lampa_uid', '');
      Lampa.Network.silent(url('viewed?uid=' + uid), onsuccess, onerror, {
        id: id
      }, params(5000));
    }
    var Api = {
      uploadRequest: uploadRequest,
      uploadStatus: uploadStatus,
      shotsList: shotsList,
      shotsLiked: shotsLiked,
      shotsFavorite: shotsFavorite,
      shotsVideo: shotsVideo,
      shotsBlock: shotsBlock,
      shotsReport: shotsReport$1,
      shotsDelete: shotsDelete$1,
      shotsCard: shotsCard,
      shotsChannel: shotsChannel,
      shotsViewed: shotsViewed,
      lenta: lenta
    };

    function Progress() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.html = Lampa.Template.get('shots_progress');
      this.text = params.text || '';
      this.create = function () {
        this.setText(this.text);
        this.setProgress(0);
        this.setState('waiting');
      };
      this.setText = function (text) {
        this.text = text;
        this.html.find('.shots-progress__text').text(this.text);
      };
      this.setProgress = function (percent) {
        this.html.find('.shots-progress__bar div').css('width', percent + '%');
      };
      this.setState = function (state) {
        this.html.removeClass('state--waiting state--uploading state--done');
        this.html.addClass('state--' + state);
      };
      this.render = function () {
        return this.html;
      };
      this.destroy = function () {
        this.html.remove();
      };
    }

    function _defineProperty(e, r, t) {
      return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }
      return e;
    }
    function _toPrimitive(t, r) {
      if ("object" != typeof t || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    function _toPropertyKey(t) {
      var i = _toPrimitive(t, "string");
      return "symbol" == typeof i ? i : i + "";
    }

    var shots$1 = {};
    function init$5() {
      Lampa.Timer.add(1000 * 60, function () {
        for (var i in shots$1) {
          check(shots$1[i]);
        }
      });
    }
    function check(shot) {
      if (shot.status == 'ready' || shot.status == 'error') return stop(shot);
      Api.uploadStatus(shot.id, function (json) {
        if (json.status == 'ready') {
          Lampa.Bell.push({
            icon: '<svg><use xlink:href="#sprite-shots"></use></svg>',
            text: Lampa.Lang.translate('shots_upload_complete_notify')
          });
        }
        if (json.status == 'error') {
          Lampa.Bell.push({
            icon: '<svg><use xlink:href="#sprite-shots"></use></svg>',
            text: Lampa.Lang.translate('shots_upload_error_notify')
          });
        }
        if (json.status == 'ready' || json.status == 'error') stop(shot);
        Lampa.Listener.send('shots_status', _objectSpread2({}, json));
      });
    }
    function add$3(shot) {
      if (!shots$1[shot.id]) shots$1[shot.id] = shot;
    }
    function stop(shot) {
      delete shots$1[shot.id];
    }
    var Handler = {
      init: init$5,
      add: add$3,
      stop: stop
    };

    var created = [];
    function init$4() {
      created = Lampa.Storage.get('shots_created', '[]');
      update$1();
      Lampa.Listener.follow('shots_status', updateStatus$1);
      Lampa.Listener.follow('shots_update', updateData$1);
      Lampa.Listener.follow('state:changed', function (e) {
        if (e.target == 'favorite' && (e.reason == 'profile' || e.reason == 'read')) {
          created = [];
          update$1();
        }
      });
      Lampa.Socket.listener.follow('message', function (result) {
        if (result.method == 'update' && result.data.from == 'shots' && result.data.list == 'created') {
          update$1();
        }
      });
    }
    function updateStatus$1(shot) {
      var find = created.find(function (a) {
        return a.id == shot.id;
      });
      if (find) {
        find.status = shot.status;
        find.screen = shot.screen;
        find.file = shot.file;
        Lampa.Storage.set('shots_created', created);
      }
    }
    function updateData$1(shot) {
      var find = created.find(function (a) {
        return a.id == shot.id;
      });
      if (find) {
        find.liked = shot.liked;
        find.saved = shot.saved;
        Lampa.Storage.set('shots_created', created);
      }
    }
    function update$1() {
      Api.shotsList('created', 1, function (shots) {
        created = shots.results;
        Lampa.Storage.set('shots_created', created);
      });
    }
    function add$2(shot) {
      var clone = {};
      Object.assign(clone, shot);
      delete clone.params;
      Lampa.Arrays.insert(created, 0, clone);
      if (created.length > 20) {
        created = created.slice(0, 20);
      }
      Lampa.Storage.set('shots_created', created);
      Lampa.Socket.send('update', {
        params: {
          from: 'shots',
          list: 'created'
        }
      });
    }
    function remove$3(shot) {
      var find_in = created.find(function (a) {
        return a.id == shot.id;
      });
      if (find_in) Lampa.Arrays.remove(created, find_in);
      Lampa.Storage.set('shots_created', created);
      Lampa.Listener.send('shots_status', {
        id: shot.id,
        status: 'deleted',
        file: shot.file,
        screen: shot.screen
      });
      Lampa.Socket.send('update', {
        params: {
          from: 'shots',
          list: 'created'
        }
      });
    }
    function page$1(page, callback) {
      Api.shotsList('created', page, function (shots) {
        callback(shots.results);
      }, function () {
        callback([]);
      });
    }
    function get$2() {
      return Lampa.Arrays.clone(created);
    }
    function find$2(id) {
      return Boolean(created.find(function (a) {
        return a.id == id;
      }));
    }
    var Created = {
      init: init$4,
      remove: remove$3,
      add: add$2,
      get: get$2,
      find: find$2,
      page: page$1
    };

    function Selector(list) {
      this.html = $('<div class="shots-selector-tags"></div>');
      this.list = list || [];
      this.selected = [];
      this.create = function () {
        var _this = this;
        this.list.forEach(function (t) {
          var tag = $('<div class="shots-selector-tags__tag selector"><span>' + t.title + '</span></div>');
          tag.on('hover:enter', function (e) {
            tag.toggleClass('active');
            if (_this.selected.indexOf(t) == -1) {
              _this.selected.push(t);
            } else {
              Lampa.Arrays.remove(_this.selected, t);
            }
          });
          _this.html.append(tag);
        });
      };
      this.get = function () {
        return this.selected;
      };
      this.render = function () {
        return this.html;
      };
      this.destroy = function () {
        this.html.remove();
      };
    }

    var tags = [{
      id: 1,
      slug: 'action'
    }, {
      id: 2,
      slug: 'comedy'
    }, {
      id: 3,
      slug: 'drama'
    }, {
      id: 4,
      slug: 'fantasy'
    }, {
      id: 5,
      slug: 'horror'
    }, {
      id: 6,
      slug: 'thriller'
    }, {
      id: 7,
      slug: 'anime'
    }, {
      id: 8,
      slug: 'sci_fi'
    }];
    function load$1() {
      tags = translate(tags);
    }
    function translate(list) {
      return list.map(function (t) {
        t.title = Lampa.Lang.translate('shots_tag_' + t.slug);
        return t;
      });
    }
    function list() {
      return tags;
    }
    var Tags = {
      load: load$1,
      list: list,
      translate: translate
    };

    function Upload(data) {
      this.data = data;
      this.html = Lampa.Template.get('shots_modal_upload');
      this.start = function () {
        var _this = this;
        this.preview = new Preview(this.data);
        this.checkbox = new Checkbox({
          text: Lampa.Lang.translate('Сделать публичной'),
          state: true
        });
        this.progress = new Progress({
          text: Lampa.Lang.translate('shots_upload_progress_start')
        });
        this.selector_title = $('<div class="shots-line-title">' + Lampa.Lang.translate('shots_choice_tags') + '</div>');
        this.selector = new Selector(Tags.list());
        this.checkbox.create();
        this.preview.create();
        this.progress.create();
        this.progress.render().addClass('hide');
        this.selector.create();
        this.button_upload = Lampa.Template.get('shots_button', {
          text: Lampa.Lang.translate('shots_modal_button_upload_start')
        });
        this.button_cancel = Lampa.Template.get('shots_button', {
          text: Lampa.Lang.translate('shots_modal_button_upload_cancel')
        });
        this.button_again = Lampa.Template.get('shots_button', {
          text: Lampa.Lang.translate('shots_modal_button_upload_again')
        });
        this.button_complete = Lampa.Template.get('shots_button', {
          text: Lampa.Lang.translate('shots_modal_button_upload_complete')
        });
        this.text_complete = Lampa.Template.get('shots_upload_complete_text');
        this.text_notice = Lampa.Template.get('shots_upload_notice_text');
        this.button_again.addClass('hide').on('hover:enter', this.startUpload.bind(this));
        this.button_upload.on('hover:enter', this.startUpload.bind(this));
        this.button_complete.addClass('hide').on('hover:enter', function () {
          _this.destroy();
          _this.onComplete(_this.shot_ready);
        });
        this.text_complete.addClass('hide');
        this.button_cancel.addClass('shots-selector--transparent');
        this.button_cancel.on('hover:enter', this.cancelUpload.bind(this));
        this.html.find('.shots-modal-upload__preview').append(this.preview.render());
        this.html.find('.shots-modal-upload__body').append(this.text_notice).append(this.selector_title).append(this.selector.render()).append(this.button_upload).append(this.progress.render()).append(this.button_again).append(this.button_cancel).append(this.text_complete).append(this.button_complete);
        Lampa.Modal.open({
          html: this.html,
          size: 'small',
          scroll: {
            nopadding: true
          },
          onBack: function onBack() {}
        });
      };
      this.setFocus = function (target) {
        Lampa.Controller.clear();
        Lampa.Controller.collectionSet(this.html);
        Lampa.Controller.collectionFocus(target, this.html);
      };
      this.startUpload = function () {
        this.button_again.addClass('hide');
        this.button_upload.addClass('hide');
        this.progress.render().removeClass('hide');
        this.setFocus(this.progress.render());
        this.progress.setText(Lampa.Lang.translate('shots_upload_progress_start'));
        this.progress.setState('waiting');
        var play = this.data.play_data;
        var card = play.card;
        Api.uploadRequest({
          card_id: card.id,
          card_type: card.original_name ? 'tv' : 'movie',
          card_title: card.title || card.name || card.original_title || card.original_name || 'Unknown',
          card_year: (card.release_date || card.first_air_date || '----').slice(0, 4),
          card_poster: card.poster_path || '',
          start_point: this.data.recording.start_point,
          end_point: this.data.recording.end_point,
          season: play.season || 0,
          episode: play.episode || 0,
          voice_name: play.voice_name || '',
          balanser: play.balanser || '',
          tags: this.selector.get().map(function (t) {
            return t.id;
          }),
          recorder: 'new'
        }, this.endUpload.bind(this), this.errorUpload.bind(this));
      };
      this.errorUpload = function (e) {
        this.progress.render().addClass('hide');
        this.button_again.removeClass('hide');
        this.setFocus(this.button_again);
      };
      this.endUpload = function (upload) {
        this.progress.render().addClass('hide');
        this.button_cancel.addClass('hide');
        this.button_complete.removeClass('hide');
        this.text_complete.removeClass('hide');
        this.text_notice.addClass('hide');
        this.selector_title.remove();
        this.selector.destroy();
        Lampa.Storage.set('shots_last_record', Date.now());
        Api.shotsVideo(upload.id, function (result) {
          Created.add(result.video);
          Handler.add(result.video);
        });
        this.setFocus(this.button_complete);
      };
      this.cancelUpload = function () {
        if (this.uploading) this.uploading.abort();
        this.destroy();
        this.onCancel();
      };
      this.destroy = function () {
        Lampa.Modal.close();
        this.preview.destroy();
        this.checkbox.destroy();
        this.html.remove();
        this.runUpload = function () {};
        this.endUpload = function () {};
        this.cancelUpload = function () {};
        this.notifyUpload = function () {};
      };
    }

    var loaded_shots = {};
    function init$3() {
      var button = "<div class=\"full-start__button shots-view-button selector view--online\" data-subtitle=\"#{shots_watch}\">\n        <svg><use xlink:href=\"#sprite-shots\"></use></svg>\n\n        <span class=\"shots-view-button__title\">Shots</span>\n    </div>";
      Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite' && (Lampa.Storage.field('shots_in_card') || Lampa.Storage.field('shots_in_player'))) {
          var btn = $(Lampa.Lang.translate(button));
          var mov = e.data.movie;
          btn.on('hover:enter', function () {
            Lampa.Activity.push({
              url: '',
              title: 'Shots',
              component: 'shots_card',
              card: mov,
              page: 1
            });
          });
          load(mov, function (shots) {
            if (shots.length) {
              console.log('Shots', 'load for full view:', shots.length, 'items;', 'card id:', mov.id, mov.original_name ? 'tv' : 'movie');
              btn.attr('data-subtitle', Lampa.Lang.translate('shots_watch') + ' <span class="shots-view-button__count">' + (shots.length > 99 ? '99+' : shots.length) + '</span>');
            }
          });
          if (Lampa.Storage.field('shots_in_card')) e.object.activity.render().find('.view--torrent').last().after(btn);
        }
      });
    }
    function load(card, call) {
      var key = card.id + '_' + (card.original_name ? 'tv' : 'movie');
      if (loaded_shots[key]) {
        call(loaded_shots[key]);
      } else {
        Api.shotsCard(card, 1, function (data) {
          loaded_shots[key] = data.results;
          call(data.results);
        });
      }
    }
    function clear() {
      loaded_shots = {};
    }
    function remove$2(card) {
      var key = card.id + '_' + (card.original_name ? 'tv' : 'movie');
      delete loaded_shots[key];
    }
    function get$1(card) {
      var key = card.id + '_' + (card.original_name ? 'tv' : 'movie');
      return loaded_shots[key];
    }
    var View = {
      init: init$3,
      load: load,
      clear: clear,
      remove: remove$2,
      get: get$1
    };

    var button_record = null;
    var play_data = {};
    var player_shots = null;
    function init$2() {
      Lampa.Player.listener.follow('ready', startPlayer);
      Lampa.Player.listener.follow('destroy', stopPlayer);
      button_record = Lampa.Template.get('shots_player_record_button');
      button_record.on('hover:enter', beforeRecording);
      button_record.addClass('hide');
      Lampa.PlayerPanel.render().find('.player-panel__settings').after(button_record);
      Lampa.Controller.listener.follow('toggle', function (e) {
        if (player_shots) player_shots.toggleClass('focus', e.name == 'player_rewind' || Lampa.Platform.mouse() || Lampa.Utils.isTouchDevice());
      });
    }
    function playerPanel(status) {
      Lampa.Player.render().toggleClass('shots-player--recording', !status);
    }
    function startPlayer(data) {
      var _play_data$card;
      play_data = {};
      if (data.card) play_data.card = data.card;else if (Lampa.Activity.active().movie) {
        play_data.card = Lampa.Activity.active().movie;
      }
      var possibly = true;
      var type = (_play_data$card = play_data.card) !== null && _play_data$card !== void 0 && _play_data$card.original_name ? 'tv' : 'movie';
      if (data.iptv || data.youtube) possibly = false;else if (!Lampa.Account.Permit.token) possibly = false;else if (type == 'tv' && (!data.season || !data.episode)) possibly = false;
      if (possibly) {
        play_data.season = data.season || 0;
        play_data.episode = data.episode || 0;
        play_data.voice_name = (data.voice_name || '').trim();
        setTimeout(function () {
          play_data.balanser = Utils.getBalanser(play_data.card || {});
        }, 1000);
        if (play_data.card) {
          if (type == 'movie') {
            var player_title = Lampa.Player.playdata().title || '';
            play_data.voice_name = (play_data.voice_name || player_title || '').trim();
            if (play_data.voice_name == play_data.card.title || play_data.torrent_hash) play_data.voice_name = '';
          }
          if (!(Utils.isTSQuality(play_data.voice_name) || Utils.isTSQuality(Lampa.Player.playdata().title))) button_record.removeClass('hide');
        }
      }
      if (play_data.card && (play_data.card.source == 'tmdb' || play_data.card.source == 'cub')) {
        if (Lampa.Storage.field('shots_in_player')) playerShotsSegments();
        //playerShotsFooter()
      }
    }
    function stopPlayer() {
      button_record.addClass('hide');
      if (player_shots) {
        player_shots.remove();
        player_shots = null;
      }
      playerPanel(true);
      if (play_data.need_tocontent) {
        setTimeout(function () {
          Lampa.Controller.toggle('content');
        }, 100);
      }
    }
    function playerShotsSegments() {
      var type = play_data.card.original_name ? 'tv' : 'movie';
      var video = Lampa.PlayerVideo.video();
      if (type == 'tv' && (!play_data.season || !play_data.episode)) return;
      video.addEventListener('loadeddata', function () {
        View.load(play_data.card, function (shots) {
          if (!Lampa.Player.opened()) return;
          if (type == 'tv' && play_data.season && play_data.episode) {
            shots = shots.filter(function (e) {
              return e.season == play_data.season && e.episode == play_data.episode;
            });
          }
          if (shots.length) {
            player_shots = $('<div class="shots-player-segments"></div>');
            player_shots.toggleClass('focus', Lampa.Platform.mouse() || Lampa.Utils.isTouchDevice());
            shots.forEach(function (elem) {
              var segment = $('<div class="shots-player-segments__time"></div>');
              var picture = $('<div class="shots-player-segments__picture"><img src="' + elem.img + '"></div>');
              var img = picture.find('img')[0];
              img.on('load', function () {
                picture.addClass('shots-player-segments__picture--loaded');
              });
              segment.css({
                left: elem.start_point / video.duration * 100 + '%',
                width: (elem.end_point - elem.start_point) / video.duration * 100 + '%'
              });
              picture.css({
                left: elem.start_point / video.duration * 100 + '%'
              });
              player_shots.append(segment);
              player_shots.append(picture);
              img.src = elem.screen;
              picture.on('click', function () {
                console.log('click shot', elem, elem.start_point);
                Lampa.PlayerVideo.to(elem.start_point);
              });
            });
            Lampa.PlayerPanel.render().find('.player-panel__timeline').before(player_shots);
          }
        });
      });
    }
    function playPlayer() {
      Lampa.PlayerVideo.play();
      Lampa.PlayerPanel.visible(false);
      Lampa.PlayerPanel.hide();
      playerPanel(false);
    }
    function pausePlayer() {
      Lampa.PlayerVideo.pause();
      Lampa.PlayerPanel.visible(false);
      Lampa.PlayerPanel.hide();
      playerPanel(true);
    }
    function closeModal() {
      Lampa.Modal.close();
      Lampa.Controller.toggle('player');
      Lampa.PlayerVideo.pause();
      playerPanel(true);
    }
    function beforeRecording() {
      if (Lampa.Modal.opened()) {
        Lampa.Modal.close();
        play_data.need_tocontent = true;
      }
      pausePlayer();
      var left = Date.now() - Lampa.Storage.get('shots_last_record', '0');
      if (left < Defined.quota_next_record) {
        return Lampa.Modal.open({
          html: Lampa.Template.get('shots_modal_quota_limit', {
            time: Lampa.Utils.secondsToTimeHuman((Defined.quota_next_record - left) / 1000)
          }),
          size: 'small',
          scroll: {
            nopadding: true
          },
          buttons: [{
            name: Lampa.Lang.translate('shots_button_good'),
            onSelect: closeModal
          }],
          onBack: closeModal
        });
      }
      Utils.modal(Lampa.Template.get('shots_modal_before_recording'), [{
        name: Lampa.Lang.translate('shots_start_recording'),
        onSelect: function onSelect() {
          Lampa.Modal.close();
          startRecording();
        }
      }, {
        name: Lampa.Lang.translate('shots_choice_start_point'),
        cancel: true,
        onSelect: function onSelect() {
          Lampa.Modal.close();
          Lampa.Controller.toggle('player_rewind');
          Lampa.PlayerPanel.visible(true);
          playerPanel(true);
        }
      }], closeModal);
    }
    function startRecording() {
      var recorder = new Recorder(Lampa.PlayerVideo.video());
      recorder.onStop = stopRecording;
      recorder.onError = errorRecording;
      recorder.onRun = playPlayer;
      recorder.start();
    }
    function errorRecording(e) {
      Utils.modal(Lampa.Template.get('shots_modal_error_recording'), [{
        name: Lampa.Lang.translate('shots_button_good'),
        onSelect: closeModal
      }], closeModal);
    }
    function stopRecording(recording) {
      pausePlayer();
      if (recording.duration > 10) {
        if (recording.start_point < 60 || recording.end_point > Lampa.PlayerVideo.video().duration - 60 * 5) {
          recording.near_border = true;
          Utils.modal(Lampa.Template.get('shots_modal_before_upload_recording'), [{
            name: Lampa.Lang.translate('shots_button_choice_fragment'),
            onSelect: closeModal
          }, {
            name: Lampa.Lang.translate('shots_button_continue_upload'),
            onSelect: function onSelect() {
              Lampa.Modal.close();
              startUploadRecording(recording);
            }
          }], closeModal);
        } else startUploadRecording(recording);
      } else shortRecording();
    }
    function startUploadRecording(recording) {
      var upload = new Upload({
        recording: recording,
        play_data: play_data
      });
      upload.onCancel = function () {
        Lampa.Controller.toggle('player');
        Lampa.PlayerVideo.pause();
      };
      upload.onComplete = function () {
        Lampa.Controller.toggle('player');
        Lampa.PlayerVideo.pause();
      };
      upload.start();
    }
    function shortRecording() {
      Utils.modal(Lampa.Template.get('shots_modal_short_recording'), [{
        name: Lampa.Lang.translate('shots_button_good'),
        onSelect: closeModal
      }], closeModal);
    }
    var Player = {
      init: init$2
    };

    var shots = {
      favorite: [],
      map: []
    };
    function init$1() {
      shots.favorite = Lampa.Storage.get('shots_favorite', '[]');
      createMap(Lampa.Storage.get('shots_map', '[]'));
      update();
      Lampa.Listener.follow('shots_status', updateStatus);
      Lampa.Listener.follow('shots_update', updateData);
      Lampa.Listener.follow('state:changed', function (e) {
        if (e.target == 'favorite' && (e.reason == 'profile' || e.reason == 'read')) {
          shots.favorite = [];
          createMap([]);
          update();
        }
      });
      Lampa.Socket.listener.follow('message', function (result) {
        if (result.method == 'update' && result.data.from == 'shots' && result.data.list == 'favorite') {
          update();
        }
      });
    }
    function createMap(arr) {
      shots.map = {};
      arr.forEach(function (id) {
        shots.map[id] = 1;
      });
    }
    function updateStatus(shot) {
      if (!shots.map[shot.id]) return;
      var find = shots.favorite.find(function (a) {
        return a.id == shot.id;
      });
      if (find) {
        find.status = shot.status;
        find.screen = shot.screen;
        find.file = shot.file;
        Lampa.Storage.set('shots_favorite', shots.favorite);
      }
    }
    function updateData(shot) {
      if (!shots.map[shot.id]) return;
      var find = shots.favorite.find(function (a) {
        return a.id == shot.id;
      });
      if (find) {
        find.liked = shot.liked;
        find.saved = shot.saved;
        Lampa.Storage.set('shots_favorite', shots.favorite);
      }
    }
    function update() {
      Api.shotsList('favorite', 1, function (shots) {
        shots.favorite = shots.results;
        Lampa.Storage.set('shots_favorite', shots.favorite);
      });
      Api.shotsList('map', 1, function (map) {
        createMap(map.results);
        Lampa.Storage.set('shots_map', map.results);
      });
    }
    function add$1(shot) {
      var clone = {};
      Object.assign(clone, shot);
      delete clone.params;
      Lampa.Arrays.insert(shots.favorite, 0, clone);
      if (shots.favorite.length > 20) {
        shots.favorite = shots.favorite.slice(0, 20);
      }
      shots.map[clone.id] = 1;
      Lampa.Storage.set('shots_favorite', shots.favorite);
      Lampa.Storage.add('shots_map', clone.id);
    }
    function remove$1(shot) {
      var find_in = shots.favorite.find(function (a) {
        return a.id == shot.id;
      });
      if (find_in) Lampa.Arrays.remove(shots.favorite, find_in);
      delete shots.map[shot.id];
      Lampa.Storage.set('shots_favorite', shots.favorite);
      var map = Lampa.Storage.get('shots_map', '[]');
      Lampa.Arrays.remove(map, shot.id);
      Lampa.Storage.set('shots_map', map);
    }
    function page(page, callback) {
      Api.shotsList('favorite', page, function (shots) {
        callback(shots.results);
      }, function () {
        callback([]);
      });
    }
    function get() {
      return Lampa.Arrays.clone(shots.favorite);
    }
    function find$1(shot_id) {
      return Boolean(shots.map[shot_id]);
    }
    function toggle$1(shot, onsuccess, onerror) {
      var finded = find$1(shot.id);
      Api.shotsFavorite(finded ? 'remove' : 'add', shot, function () {
        if (finded) {
          remove$1(shot);
        } else {
          add$1(shot);
        }
        if (onsuccess) onsuccess(finded);
        Lampa.Socket.send('update', {
          params: {
            from: 'shots',
            list: 'favorite'
          }
        });
      }, onerror);
      return !finded;
    }
    var Favorite = {
      init: init$1,
      update: update,
      remove: remove$1,
      add: add$1,
      get: get,
      find: find$1,
      toggle: toggle$1,
      page: page
    };

    var loaded_last = {};
    function start(call) {
      var status = new Lampa.Status(3);
      status.onComplite = function () {
        // Сохраняем последние загруженные шоты для фильтрации релевантных
        loaded_last["new"] = status.data["new"];
        loaded_last.popular = status.data.popular;

        // Фильтруем просмотренные шоты
        status.data["new"] = filterViewed(status.data["new"]);
        status.data.popular = filterViewed(status.data.popular);
        console.log('Shots', 'roll items', 'new', status.data["new"].length, 'popular', status.data.popular.length, 'old', status.data.old.length);

        // Убираем дубли между новыми и популярными и старыми
        status.data.popular = status.data.popular.filter(function (a) {
          return !status.data["new"].find(function (b) {
            return b.id == a.id;
          });
        });
        status.data.old = status.data.old.filter(function (a) {
          return !(status.data["new"].find(function (b) {
            return b.id == a.id;
          }) || status.data.popular.find(function (b) {
            return b.id == a.id;
          }));
        });
        console.log('Shots', 'after filter roll items', 'new', status.data["new"].length, 'popular', status.data.popular.length, 'old', status.data.old.length);

        // Собираем итоговый список
        var items = [].concat(status.data["new"], status.data.popular);

        // Перемешиваем новые и популярные
        items = Lampa.Arrays.shuffle(items);

        // Добавляем метку from_id для старых шотов
        status.data.old.forEach(function (a) {
          return a.from_id = a.id;
        });

        // Добавляем релевантные старые шоты
        items = items.concat(filterViewed(filterRelevant(status.data.old)));
        console.log('Shots', 'relevant roll items', items.length);

        // Если нет шотов, добавляем несколько старых
        if (!items.length) items = status.data.old.slice(-5);
        call(items);
      };
      Api.lenta({
        sort: 'new',
        limit: 50
      }, status.append.bind(status, 'new'));
      Api.lenta({
        sort: 'popular',
        limit: 50
      }, status.append.bind(status, 'popular'));
      Api.lenta({
        sort: 'from_id',
        id: Lampa.Storage.get('shots_lenta_last_id', '0'),
        limit: 50
      }, status.append.bind(status, 'old'));
    }
    function filterRelevant(items) {
      return items.filter(function (a) {
        return !(loaded_last["new"].find(function (b) {
          return b.id == a.id;
        }) || loaded_last.popular.find(function (b) {
          return b.id == a.id;
        }));
      });
    }
    function filterViewed(items) {
      var viewed = Lampa.Storage.cache('shots_viewed', 2000, []);
      var filtred = items.filter(function (a) {
        return viewed.indexOf(a.id) == -1;
      });
      return filtred;
    }
    function next(call) {
      Api.lenta({
        sort: 'from_id',
        id: Lampa.Storage.get('shots_lenta_last_id', '0'),
        limit: 50
      }, function (items) {
        return call(filterRelevant(items));
      });
    }
    function viewedRegister(shot) {
      if (!shot.from_id) Lampa.Storage.add('shots_viewed', shot.id);
      Api.shotsViewed(shot.id);
    }
    function saveFromId(id) {
      Lampa.Storage.set('shots_lenta_last_id', id);
    }
    var Roll = {
      start: start,
      next: next,
      viewedRegister: viewedRegister,
      saveFromId: saveFromId
    };

    function Video() {
      this.html = Lampa.Template.js('shots_lenta_video');
      this.video = this.html.find('video');
      this.progress = this.html.find('.shots-lenta-video__progress-bar div');
      this.layer = this.html.find('.shots-lenta-video__layer');
      this.loader = this.html.find('.shots-lenta-video__loader');
      this.viewed = {};
      this.create = function () {
        var _this = this;
        this.video.addEventListener('timeupdate', function () {
          _this.progress.style.width = _this.video.currentTime / _this.video.duration * 100 + '%';
          if ((_this.video.currentTime / _this.video.duration > 0.1 || _this.video.currentTime > 2) && !_this.viewed[_this.shot.id]) {
            _this.viewed[_this.shot.id] = true;
            Roll.viewedRegister(_this.shot);
          }
          Lampa.Screensaver.resetTimer();
        });
        this.video.addEventListener('waiting', function () {
          _this.showLoading();
        });
        this.video.addEventListener('playing', function () {
          _this.hideLoading();
        });
        this.layer.on('click', function () {
          _this.video.paused ? _this.play() : _this.pause();
        });
        if (Lampa.Platform.is('apple')) this.video.setAttribute('playsinline', 'true');
      };
      this.change = function (shot) {
        this.shot = shot;
        if (shot.from_id) Roll.saveFromId(shot.from_id);
        this.video.setAttribute('poster', shot.img || './img/video_poster.png');
        this.progress.style.width = '0%';
        this.pause();
        this.load();
        this.play();
      };
      this.play = function () {
        var playPromise;
        try {
          playPromise = this.video.play();
        } catch (e) {}
        if (playPromise !== undefined) {
          playPromise.then(function () {
            console.log('Lenta', 'start plaining');
          })["catch"](function (e) {
            console.log('Lenta', 'play promise error:', e.message);
          });
        }
      };
      this.pause = function () {
        var pausePromise;
        try {
          pausePromise = this.video.pause();
        } catch (e) {}
        if (pausePromise !== undefined) {
          pausePromise.then(function () {
            console.log('Lenta', 'pause');
          })["catch"](function (e) {
            console.log('Lenta', 'pause promise error:', e.message);
          });
        }
      };
      this.load = function () {
        this.video.src = '';
        this.video.load();
        this.video.src = this.shot.file;
        this.video.load();
      };
      this.showLoading = function () {
        var _this2 = this;
        this.timer_loading = setTimeout(function () {
          _this2.loader.addClass('show');
        }, 2000);
      };
      this.hideLoading = function () {
        clearTimeout(this.timer_loading);
        this.loader.removeClass('show');
      };
      this.render = function () {
        return this.html;
      };
      this.destroy = function () {
        clearTimeout(this.timer_loading);
        this.html.remove();
        this.viewed = {};
      };
    }

    function Author() {
      var _this = this;
      var author_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.html = Lampa.Template.js('shots_author');
      this.img = this.html.find('img');
      this.box = this.html.find('.shots-author__img');
      this.img.onload = function () {
        _this.box.addClass('loaded');
      };
      this.img.onerror = function () {
        _this.img.src = './img/img_broken.svg';
      };
      this.create = function () {
        if (author_data) this.update(author_data);
      };
      this.update = function (data) {
        this.box.removeClass('loaded');
        var email = data.email;
        var icon = data.icon;
        if (!email) {
          email = Lampa.Account.Permit.account.email;
          icon = Lampa.Account.Permit.account.profile ? Lampa.Account.Permit.account.profile.icon : '';
        }
        this.img.src = Lampa.Utils.protocol() + Lampa.Manifest.cub_domain + '/img/profiles/' + (icon || 'l_1') + '.png';
        this.html.find('.shots-author__name').text(Lampa.Utils.capitalizeFirstLetter((email || 'Unknown').split('@')[0]));
      };
      this.render = function () {
        return this.html;
      };
      this.destroy = function () {
        this.img.onload = null;
        this.img.onerror = null;
        this.html.remove();
      };
    }

    function find(shot_id) {
      return Boolean(Lampa.Storage.get('shots_likes', '[]').find(function (id) {
        return shot_id == id;
      }));
    }
    function add(shot_id) {
      var arr = Lampa.Storage.cache('shots_likes', 100, '[]');
      arr.push(shot_id);
      Lampa.Storage.set('shots_likes', arr);
    }
    function remove(shot_id) {
      var arr = Lampa.Storage.get('shots_likes', '[]');
      Lampa.Arrays.remove(arr, shot_id);
      Lampa.Storage.set('shots_likes', arr);
    }
    function toggle(shot_id, onsuccess, onerror) {
      var finded = find(shot_id);
      Api.shotsLiked(shot_id, finded ? 'unlike' : 'like', function () {
        if (finded) {
          remove(shot_id);
        } else {
          add(shot_id);
        }
        if (onsuccess) onsuccess(finded);
      }, onerror);
      return !finded;
    }
    var Likes = {
      find: find,
      add: add,
      remove: remove,
      toggle: toggle
    };

    function shotsReport(id, callback) {
      Lampa.Modal.open({
        html: Lampa.Template.get('shots_modal_report'),
        size: 'small',
        scroll: {
          nopadding: true
        },
        buttons: [{
          name: Lampa.Lang.translate('shots_button_report'),
          onSelect: function onSelect() {
            Lampa.Modal.close();
            callback && callback();
            var reports = Lampa.Storage.get('shots_reports', '[]');
            if (reports.indexOf(id) == -1) {
              Api.shotsReport(id, function () {
                reports.push(id);
                Lampa.Storage.set('shots_reports', reports);
                Lampa.Bell.push({
                  icon: '<svg><use xlink:href="#sprite-shots"></use></svg>',
                  text: Lampa.Lang.translate('shots_modal_report_bell')
                });
              });
            } else {
              Lampa.Bell.push({
                icon: '<svg><use xlink:href="#sprite-shots"></use></svg>',
                text: Lampa.Lang.translate('shots_modal_report_bell_alreadyed')
              });
            }
          }
        }],
        onBack: function onBack() {
          Lampa.Modal.close();
          callback && callback();
        }
      });
    }
    function shotsDelete(id, callback) {
      Lampa.Modal.open({
        html: Lampa.Template.get('shots_modal_delete'),
        size: 'small',
        scroll: {
          nopadding: true
        },
        buttons: [{
          name: Lampa.Lang.translate('shots_button_delete_video'),
          onSelect: function onSelect() {
            Lampa.Modal.close();
            callback && callback();
            var deleted = Lampa.Storage.get('shots_deleted', '[]');
            if (deleted.indexOf(id) == -1) {
              Api.shotsDelete(id, function () {
                deleted.push(id);
                Lampa.Storage.set('shots_deleted', deleted);
                Lampa.Bell.push({
                  icon: '<svg><use xlink:href="#sprite-shots"></use></svg>',
                  text: Lampa.Lang.translate('shots_modal_deleted_bell')
                });
              });
            } else {
              Lampa.Bell.push({
                icon: '<svg><use xlink:href="#sprite-shots"></use></svg>',
                text: Lampa.Lang.translate('shots_modal_deleted_bell')
              });
            }
          }
        }],
        onBack: function onBack() {
          Lampa.Modal.close();
          callback && callback();
        }
      });
    }
    var Modals = {
      shotsReport: shotsReport,
      shotsDelete: shotsDelete
    };

    function backward$1() {
      var head = Lampa.Template.get('head_backward', {
        title: ''
      });
      head.find('.head-backward__button').on('click', function () {
        Lampa.Controller.back();
      });
      return head;
    }
    function Slides(params) {
      var html = $("<div class=\"shots-slides\">\n        <div class=\"shots-slides__slides\"></div>\n        <div class=\"shots-slides__install\">".concat(Lampa.Lang.translate(params.button_text), "</div>\n        <div class=\"shots-slides__down\">").concat(Lampa.Lang.translate('shots_down'), "</div>\n    </div>"));
      params.slides.forEach(function (slide_data, slide_index) {
        html.find('.shots-slides__slides').append($("<img class=\"shots-slides__slide slide-".concat(slide_index + 1, "\">")));
      });
      var slide = 0;
      var total = params.slides.length;
      var timeload;
      var cancel = false;
      var down = html.find('.shots-slides__down');
      var install = html.find('.shots-slides__install');
      if (Lampa.Platform.mouse() || Lampa.Utils.isTouchDevice()) {
        html.append(backward$1());
      }
      $('body').append(html);
      var push = function push() {
        if (slide == total) {
          destroy();
          params.onInstall && params.onInstall();
        }
      };
      var next = function next() {
        if (slide >= total) return;
        if (slide > 0) {
          html.find('.slide-' + slide).addClass('up');
        }
        slide++;
        html.find('.slide-' + slide).addClass('active');
        if (slide === total) {
          down.removeClass('active');
          setTimeout(function () {
            install.addClass('active');
          }, 500);
        }
      };
      var start = function start() {
        Lampa.Loading.stop();
        setTimeout(function () {
          down.addClass('active');
        }, 600);
        next();
        Lampa.Controller.add('shots_present', {
          toggle: function toggle() {
            Lampa.Controller.clear();
            Lampa.Background.theme('#08090D');
          },
          enter: push,
          down: next,
          back: stop
        });
        Lampa.Controller.toggle('shots_present');
      };
      var stop = function stop() {
        destroy();
        Lampa.Loading.stop();
        params.onBack && params.onBack();
      };
      var preload = function preload() {
        var slides_loaded = 0;
        for (var i = 1; i <= total; i++) {
          var img = html.find('.slide-' + i)[0];
          img.src = params.slides[i - 1];
          img.onload = function () {
            slides_loaded++;
            if (slides_loaded === total && !cancel) {
              params.onLoad && params.onLoad();
              start();
              clearTimeout(timeload);
            }
          };
        }
        timeload = setTimeout(stop, 10000);
      };
      var destroy = function destroy() {
        start = function start() {};
        cancel = true;
        clearTimeout(timeload);
        html.remove();
        Lampa.Background.theme('reset');
      };
      down.on('click', next);
      install.on('click', push);
      Lampa.Loading.start(stop);
      preload();
    }

    function Panel() {
      this.html = Lampa.Template.js('shots_lenta_panel');
      this.network = new Lampa.Reguest();
      this.cache = {};
      this.image = this.html.find('.shots-lenta-panel__card-img');
      this.title = this.html.find('.shots-lenta-panel__card-title');
      this.recorder = this.html.find('.shots-lenta-panel__recorder');
      this.year = this.html.find('.shots-lenta-panel__card-year');
      this.cardbox = this.html.find('.shots-lenta-panel__card');
      this.body = this.html.find('.explorer-card__head-body');
      this.last = this.html.find('.selector');
      this.poster = this.image.find('img');
      this.create = function () {
        var _this = this;
        this.tags = new Tags$1();
        this.author = new Author();
        var waite_like = false,
          waite_fav = false;
        this.author.render().addClass('selector');
        this.html.find('.shots-lenta-panel__tags').append(this.tags.render());
        this.html.find('.shots-lenta-panel__author').append(this.author.render());
        this.poster.onload = function () {
          _this.image.addClass('loaded');
        };
        this.poster.onerror = function () {
          _this.poster.src = './img/img_broken.svg';
        };
        Array.from(this.html.querySelectorAll('.selector')).forEach(function (button) {
          button.on('hover:focus hover:hover hover:touch', function () {
            _this.last = button;
          });
        });
        this.html.find('.action-liked').on('hover:enter', function () {
          if (waite_like) return;
          waite_like = true;
          Likes.toggle(_this.shot.id, function (ready) {
            _this.shot.liked += ready ? -1 : 1;
            Lampa.Listener.send('shots_update', _objectSpread2({}, _this.shot));
            _this.update();
            waite_like = false;
          });
        });
        this.html.find('.action-favorite').on('hover:enter', function () {
          if (waite_fav) return;
          waite_fav = true;
          Favorite.toggle(_this.shot, function (ready) {
            _this.shot.saved += ready ? -1 : 1;
            Lampa.Listener.send('shots_update', _objectSpread2({}, _this.shot));
            _this.update();
            waite_fav = false;
          });
        });
        this.html.find('.shots-author').on('hover:enter', function () {
          Lampa.Controller.back();
          Lampa.Activity.push({
            url: '',
            component: 'shots_channel',
            title: 'Shots - ' + Lampa.Utils.capitalizeFirstLetter(_this.shot.email),
            id: _this.shot.cid,
            name: _this.shot.email,
            page: 1
          });
        });
        this.html.find('.action-more').on('hover:enter', this.menu.bind(this));
        this.image.on('hover:enter', function () {
          Lampa.Controller.back();
          Lampa.Activity.push({
            url: '',
            component: 'full',
            source: 'tmdb',
            id: _this.shot.card_id,
            method: _this.shot.card_type,
            card: {
              id: _this.shot.card_id
            }
          });
        });
      };
      this.menu = function () {
        var _this2 = this;
        var menu = [];
        var controller = Lampa.Controller.enabled().controller.link;
        var back = function back() {
          controller.html.removeClass('hide');
          Lampa.Controller.toggle('shots_lenta');
          controller.video.play();
          Lampa.Background.theme('black');
        };
        menu.push({
          title: Lampa.Lang.translate('shots_button_report'),
          onSelect: function onSelect() {
            Modals.shotsReport(_this2.shot.id, back);
          }
        });
        if (Lampa.Account.Permit.account.id == this.shot.cid || Lampa.Account.Permit.account.id == 1) {
          menu.push({
            title: Lampa.Lang.translate('shots_button_delete_video'),
            onSelect: function onSelect() {
              Modals.shotsDelete(_this2.shot.id, function () {
                back();
                Created.remove(_this2.shot);
              });
            }
          });
        }
        menu.push({
          title: Lampa.Lang.translate('more'),
          separator: true
        });
        menu.push({
          title: Lampa.Lang.translate('shots_how_create_video_title'),
          subtitle: Lampa.Lang.translate('shots_how_create_video_subtitle'),
          onSelect: function onSelect() {
            Slides({
              slides: [1, 2, 3, 4].map(function (i) {
                return Defined.cdn + 'record/slide-' + i + '.jpg';
              }),
              button_text: 'shots_button_good',
              onLoad: function onLoad() {
                controller.html.addClass('hide');
              },
              onInstall: back,
              onBack: back
            });
          }
        });
        controller.video.pause();
        Lampa.Select.show({
          title: Lampa.Lang.translate('title_action'),
          items: menu,
          onBack: function onBack() {
            Lampa.Controller.toggle('shots_lenta');
            controller.video.play();
          }
        });
      };
      this.update = function () {
        this.html.find('.action-liked').toggleClass('active', Likes.find(this.shot.id));
        this.html.find('.action-favorite').toggleClass('active', Favorite.find(this.shot.id));
        this.tags.update(this.shot);
        if (this.shot.tags && this.shot.tags.length) {
          var elem_tags = $('<div>' + this.shot.tags.slice(0, 3).map(function (t) {
            return '#' + Lampa.Lang.translate('shots_tag_' + t.slug);
          }).join(' ') + '</div>');
          this.tags.render().append(elem_tags);
        }
        var elem_likes = $('<div><svg><use xlink:href="#sprite-love"></use></svg> ' + Lampa.Utils.bigNumberToShort(this.shot.liked || 0) + '</div>');
        var elem_saved = $('<div><svg><use xlink:href="#sprite-favorite"></use></svg> ' + Lampa.Utils.bigNumberToShort(this.shot.saved || 0) + '</div>');
        elem_likes.toggleClass('hide', (this.shot.liked || 0) == 0);
        elem_saved.toggleClass('hide', (this.shot.saved || 0) == 0);
        this.tags.render().append(elem_likes);
        this.tags.render().append(elem_saved);
        if (Lampa.Account.Permit.account.id == 1) this.recorder.text(this.shot.recorder || '').toggleClass('hide', !this.shot.recorder);
      };
      this.change = function (shot) {
        this.shot = shot;
        this.author.update(shot);
        this.network.clear();
        this.load();
        this.update();
      };
      this.load = function () {
        this.image.removeClass('loaded');
        this.cardbox.addClass('loading');
        if (this.cache[this.shot.id]) return this.loadDone(this.cache[this.shot.id]);
        var url = Lampa.TMDB.api(this.shot.card_type + '/' + this.shot.card_id + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.field('tmdb_lang'));
        this.network.silent(url, this.loadDone.bind(this));
      };
      this.loadDone = function (card) {
        this.shot.card_title = card.title || card.name || card.original_title || card.original_name;
        this.shot.card_poster = card.poster_path || card.backdrop_path;
        this.shot.card_year = (card.release_date || card.first_air_date || '----').slice(0, 4);
        this.title.text(this.shot.card_title);
        this.year.text(this.shot.card_year);
        this.poster.src = Lampa.TMDB.image('t/p/w300/' + this.shot.card_poster);
        this.cardbox.removeClass('loading');
        this.cache[this.shot.id] = card;
      };
      this.render = function () {
        return this.html;
      };
      this.destroy = function () {
        clearTimeout(this.show_timeout);
        this.html.remove();
        this.cache = {};
        this.network.clear();
      };
    }

    function Lenta(first, playlist) {
      this.html = Lampa.Template.js('shots_lenta');
      this.current = first;
      this.playlist = playlist || [];
      this.position = playlist.indexOf(playlist.find(function (i) {
        return i.id == first.id;
      }));
      this.page = 1;
      this.start = function () {
        this.video = new Video(this.current);
        this.panel = new Panel(this.current);
        this.video.create();
        this.panel.create();
        if (Lampa.Platform.mouse() || Lampa.Utils.isTouchDevice()) {
          var head = Lampa.Template.js('head_backward', {
            title: ''
          });
          head.find('.head-backward__button').on('click', Lampa.Controller.back.bind(Lampa.Controller));
          this.html.append(head);
        }
        this.html.find('.shots-lenta__video').append(this.video.render());
        this.html.find('.shots-lenta__panel').append(this.panel.render());
        $('body').addClass('ambience--enable').append(this.html);
        this.video.change(this.current, 'next');
        this.panel.change(this.current, 'next');
        this.controller();
        this.scroll();
        this.html.on('mousemove', this.focus.bind(this));
        Lampa.Background.theme('black');
        Metric.counter('shots_lenta_launch');
      };
      this.scroll = function () {
        var _self = this;
        if (Lampa.Utils.isTouchDevice()) {
          var movestart = function movestart(e) {
            start_position = e.clientY;
            end_position = start_position;
            move_position = start_position;
            time_scroll = Date.now();
          };
          var move = function move(e) {
            move_position = e.clientY;
            end_position = e.clientY;
            var delta = move_position - start_position;
            elemmove.style.transform = 'translateY(' + delta + 'px)';
          };
          var moveend = function moveend(e) {
            elemmove.style.transform = 'translateY(0px)';
            var threshold = window.innerHeight / 2.5;
            var csroll_speed = Date.now() - time_scroll;
            if (csroll_speed < 200) {
              threshold = threshold / 6;
            }
            if (start_position - end_position > threshold) {
              _self.move('next');
            } else if (end_position - start_position > threshold) {
              _self.move('prev');
            }
            end_position = 0;
            start_position = 0;
            move_position = 0;
          };
          var start_position = 0;
          var move_position = 0;
          var end_position = 0;
          var time_scroll = 0;
          var elemmove = this.html.find('.shots-lenta-video__video-element');
          this.html.addEventListener('touchstart', function (e) {
            movestart(e.touches[0] || e.changedTouches[0]);
          });
          this.html.addEventListener('touchmove', function (e) {
            move(e.touches[0] || e.changedTouches[0]);
          });
          this.html.addEventListener('touchend', moveend);
        } else {
          var wheel = function wheel(e) {
            if (Date.now() - time > 500) {
              time = Date.now();
              if (e.wheelDelta / 120 > 0) {
                _self.move('prev');
              } else {
                _self.move('next');
              }
            }
          }; // Обрабатываем скролл колесом мыши
          var time = 0;
          this.html.addEventListener('mousewheel', wheel);
          this.html.addEventListener('wheel', wheel);
        }
      };
      this.focus = function () {
        var _this = this;
        if (Lampa.Utils.isTouchDevice()) return;
        clearTimeout(this.focus_timeout);
        this.html.toggleClass('shots-lenta--hide-panel', false);
        this.focus_timeout = setTimeout(function () {
          if (Lampa.Controller.enabled().name !== 'shots_lenta') return;
          _this.html.toggleClass('shots-lenta--hide-panel', true);
          Lampa.Controller.add('shots_lenta_idle', {
            link: _this.video,
            toggle: function toggle() {
              Lampa.Controller.clear();
            },
            left: _this.controller.bind(_this),
            right: _this.controller.bind(_this),
            up: function up() {
              _this.move('prev');
              _this.focus();
            },
            down: function down() {
              _this.move('next');
              _this.focus();
            },
            enter: _this.controller.bind(_this),
            back: _this.controller.bind(_this)
          });
          Lampa.Controller.toggle('shots_lenta_idle');
        }, 7000);
      };
      this.controller = function () {
        var _this2 = this;
        Lampa.Controller.add('shots_lenta', {
          link: this,
          toggle: function toggle() {
            Lampa.Controller.clear();
            Lampa.Controller.collectionSet(_this2.html);
            Lampa.Controller.collectionFocus(_this2.panel.body, _this2.html);
            _this2.focus();
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');
            _this2.focus();
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');
            _this2.focus();
          },
          up: function up() {
            _this2.move('prev');
            _this2.focus();
          },
          down: function down() {
            _this2.move('next');
            _this2.focus();
          },
          back: this.back.bind(this)
        });
        Lampa.Controller.toggle('shots_lenta');
      };
      this.move = function (direction) {
        var start_position = this.position;
        if (direction == 'next') {
          this.position++;
          if (this.position >= this.playlist.length) {
            this.position = this.playlist.length - 1;
          }
        } else if (direction == 'prev') {
          this.position--;
          if (this.position < 0) {
            this.position = 0;
          }
        }
        if (start_position !== this.position) {
          this.current = this.playlist[this.position];
          this.video.change(this.current, direction);
          this.panel.change(this.current, direction);
          Lampa.Controller.toggle('shots_lenta');
          Metric.counter('shots_lenta_next');
        }
        if (this.position >= this.playlist.length - 3) {
          this.nextPart();
        }
      };
      this.nextPart = function () {
        var _this3 = this;
        if (this.onNext) {
          this.loading_part = true;
          this.page++;
          this.onNext(this.page, function (results) {
            _this3.loading_part = false;
            if (results && results.length) {
              results.forEach(function (i) {
                if (!_this3.playlist.find(function (p) {
                  return p.id == i.id;
                })) _this3.playlist.push(i);
              });
            }
          });
        }
      };
      this.back = function () {
        this.destroy();
        Lampa.Controller.toggle('content');
      };
      this.destroy = function () {
        clearTimeout(this.focus_timeout);
        this.video.destroy();
        this.panel.destroy();
        this.html.remove();
        Lampa.Background.theme('reset');
      };
    }

    function Shot(item_data) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var clone = Lampa.Arrays.clone(item_data);
      item_data.card = {
        id: item_data.card_id,
        type: item_data.card_type,
        title: item_data.card_title,
        release_date: item_data.card_year,
        poster_path: item_data.card_poster
      };
      item_data.img = item_data.screen;
      var item = Lampa.Maker.make('Episode', item_data, function (module) {
        return module.only('Card', 'Callback');
      });
      item.use({
        onCreate: function onCreate() {
          var _this = this;
          this.html.find('.full-episode__name').remove();
          this.html.find('.full-episode__num').remove();
          if (params.without_card) this.html.find('.card-episode__footer').addClass('hide');
          var tags = new Tags$1(this.data);
          tags.create();
          this.html.find('.full-episode__date').empty().append(tags.render());
          this.html.addClass('full-episode--shot');
          this.liked = $("\n                <div class=\"full-episode__liked\">\n                    <svg><use xlink:href=\"#sprite-love\"></use></svg>\n                    <span>".concat(Lampa.Utils.bigNumberToShort(this.data.liked), "</span>\n                </div>\n            "));
          this.html.find('.full-episode__date').append(this.liked);
          this.status = Lampa.Template.elem('div', {
            "class": 'shots-status hide'
          });
          this.html.find('.card__left').append(this.status);
          this.html.find('.full-episode').append($('<div class="full-episode__shot-icon"><svg><use xlink:href="#sprite-shots"></use></svg></div>'));
          this.updateStatusHandler = function (e) {
            if (e.id !== _this.data.id) return;
            _this.status.toggleClass('hide', e.status == 'ready');
            _this.status.toggleClass('shots-status--error', e.status == 'error');
            _this.status.toggleClass('shots-status--processing', e.status == 'processing' || e.status == 'converting');
            _this.status.toggleClass('shots-status--ready', e.status == 'ready');
            _this.status.toggleClass('shots-status--deleted', e.status == 'deleted');
            _this.status.toggleClass('shots-status--blocked', e.status == 'blocked');
            _this.status.text(e.status == 'error' ? Lampa.Lang.translate('shots_status_error') : e.status == 'processing' || e.status == 'converting' ? Lampa.Lang.translate('shots_status_processing') : e.status == 'blocked' ? Lampa.Lang.translate('shots_status_blocked') : e.status == 'deleted' ? Lampa.Lang.translate('shots_status_deleted') : e.status == 'ready' ? Lampa.Lang.translate('shots_status_ready') : '');
            Utils.videoReplaceStatus(e, _this.data);
            Utils.videoReplaceStatus(e, clone);
            _this.data.img = e.screen;
            if (e.screen) _this.emit('visible');
          };
          this.updateDataHandler = function (e) {
            if (e.id !== _this.data.id) return;
            _this.liked.find('span').text(Lampa.Utils.bigNumberToShort(e.liked || _this.data.liked));
          };
          Lampa.Listener.follow('shots_status', this.updateStatusHandler);
          Lampa.Listener.follow('shots_update', this.updateDataHandler);
          this.updateStatusHandler(this.data);
          if (this.data.status == 'processing' && Lampa.Account.Permit.account.id == this.data.cid) Handler.add(clone);
        },
        onlyEnter: function onlyEnter() {
          var lenta = new Lenta(clone, params.playlist || [this.data]);
          lenta.onNext = params.onNext;
          lenta.start();
        },
        onlyFocus: function onlyFocus() {
          Lampa.Background.change(this.data.img || '');
        },
        onRemove: function onRemove() {
          Lampa.Listener.remove('shots_status', this.updateStatusHandler);
          Lampa.Listener.remove('shots_update', this.updateDataHandler);
        }
      });
      return item;
    }

    function component$3(object) {
      Lampa.Utils.extendParams(object, {
        items: {
          cols: 4
        }
      });
      var comp = Lampa.Maker.make('Category', object, function (module) {
        return module.toggle(Lampa.Maker.module('Category').MASK.base, 'Pagination');
      });
      var playlist = [];
      comp.use({
        onCreate: function onCreate() {
          var _this = this;
          Api.shotsList(object.url, object.page, function (result) {
            playlist = Lampa.Arrays.clone(result.results);
            _this.build(result);
          }, this.empty.bind(this));
        },
        onNext: function onNext(resolve, reject) {
          Api.shotsList(object.url, object.page, function (result) {
            playlist = playlist.concat(result.results);
            resolve(result);
          }, reject.bind(this));
        },
        onlyCreateAndAppend: function onlyCreateAndAppend(element) {
          try {
            var item = new Shot(element, {
              playlist: playlist
            });
            this.emit('instance', item, element);
            item.create();
            this.emit('append', item, element);
          } catch (e) {
            console.warn('Warning', 'onCreateAndAppend error:', e.message, e.stack);
          }
        },
        onDestroy: function onDestroy() {
          playlist = null;
        }
      });
      return comp;
    }

    function component$2(object) {
      Lampa.Utils.extendParams(object, {
        items: {
          cols: Lampa.Storage.field('interface_size') == 'bigger' ? 4 : 3
        },
        empty: {
          descr: Lampa.Lang.translate('shots_card_empty_descr'),
          buttons: [{
            title: Lampa.Lang.translate('shots_how_create_video_title'),
            onEnter: function onEnter() {
              Slides({
                slides: [1, 2, 3, 4].map(function (i) {
                  return Defined.cdn + 'record/slide-' + i + '.jpg';
                }),
                button_text: 'shots_button_good',
                onLoad: function onLoad() {},
                onInstall: function onInstall() {
                  Lampa.Controller.toggle('content');
                },
                onBack: function onBack() {
                  Lampa.Controller.toggle('content');
                }
              });
            }
          }]
        }
      });
      var comp = Lampa.Maker.make('Category', object, function (module) {
        return module.toggle(Lampa.Maker.module('Category').MASK.base, 'Pagination', 'Explorer');
      });
      var playlist = [];
      comp.use({
        onCreate: function onCreate() {
          var _this = this;
          Api.shotsCard(object.card, object.page, function (result) {
            playlist = Lampa.Arrays.clone(result.results);
            _this.build(result);
          }, this.empty.bind(this));
        },
        onNext: function onNext(resolve, reject) {
          Api.shotsCard(object.card, object.page, function (result) {
            playlist = playlist.concat(result.results);
            resolve(result);
          }, reject.bind(this));
        },
        onlyCreateAndAppend: function onlyCreateAndAppend(element) {
          try {
            var item = new Shot(element, {
              playlist: playlist,
              without_card: true
            });
            this.emit('instance', item, element);
            item.create();
            this.emit('append', item, element);
          } catch (e) {
            console.warn('Warning', 'onCreateAndAppend error:', e.message, e.stack);
          }
        },
        onDestroy: function onDestroy() {
          playlist = null;
        }
      });
      return comp;
    }

    function component$1(object) {
      Lampa.Utils.extendParams(object, {
        items: {
          cols: 4
        }
      });
      var comp = Lampa.Maker.make('Category', object, function (module) {
        return module.toggle(Lampa.Maker.module('Category').MASK.base, 'Pagination');
      });
      var playlist = [];
      comp.use({
        onCreate: function onCreate() {
          var _this = this;
          Api.shotsChannel(object.id, object.page, function (result) {
            playlist = Lampa.Arrays.clone(result.results);
            _this.build(result);
          }, this.empty.bind(this));
        },
        onNext: function onNext(resolve, reject) {
          Api.shotsChannel(object.id, object.page, function (result) {
            playlist = playlist.concat(result.results);
            resolve(result);
          }, reject.bind(this));
        },
        onlyCreateAndAppend: function onlyCreateAndAppend(element) {
          try {
            var item = new Shot(element, {
              playlist: playlist
            });
            this.emit('instance', item, element);
            item.create();
            this.emit('append', item, element);
          } catch (e) {
            console.warn('Warning', 'onCreateAndAppend error:', e.message, e.stack);
          }
        },
        onDestroy: function onDestroy() {
          playlist = null;
        }
      });
      return comp;
    }

    function backward() {
      var head = Lampa.Template.get('head_backward', {
        title: ''
      });
      head.find('.head-backward__button').on('click', function () {
        Lampa.Controller.back();
      });
      return head;
    }
    function Present() {
      this.onComplete = function () {};
      this.onBack = function () {};
      this.start = function () {
        var _this = this;
        var last_time_watched = Lampa.Storage.get('shots_present_watched', '0');
        var wait_time = 1000 * 60 * 60 * 24 * 5; // 5 дней

        if (Date.now() - last_time_watched < wait_time) {
          return this.onComplete();
        }
        Lampa.Background.theme('black');
        this.html = $("<div class=\"shots-video-present\">\n            <video autoplay poster=\"./img/video_poster.png\"></video>\n        </div>");
        if (Lampa.Platform.mouse() || Lampa.Utils.isTouchDevice()) {
          this.html.append(backward());
        }
        this.video = this.html.find('video')[0];
        if (Lampa.Platform.is('apple')) this.video.setAttribute('playsinline', 'true');
        this.video.src = 'https://cdn.cub.rip/shots_present/present.mp4';
        this.video.load();
        this.video.addEventListener('ended', this.stop.bind(this));
        this.video.addEventListener('error', this.stop.bind(this));
        this.video.addEventListener('timeupdate', function () {
          clearTimeout(_this.timer_waite);
        });
        this.timer_waite = setTimeout(this.stop.bind(this), 6000);
        $('body').append(this.html);
        Lampa.Controller.add('shots_video_present', {
          toggle: function toggle() {
            Lampa.Controller.clear();
          },
          back: this.back.bind(this)
        });
        Lampa.Controller.toggle('shots_video_present');
      };
      this.stop = function () {
        this.onComplete();
        Lampa.Storage.set('shots_present_watched', Date.now());
      };
      this.back = function () {
        this.onBack();
      };
      this.destroy = function () {
        this.stop = function () {};
        this.onComplete = function () {};
        this.onBack = function () {};
        if (!this.video) return;
        this.video.pause();
        this.video.src = '';
        clearTimeout(this.timer_waite);
        this.html.remove();
        Lampa.Background.theme('reset');
      };
    }

    var component = 'shots';
    var icon = "<svg id=\"sprite-shots\" viewBox=\"0 0 512 512\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M253.266 512a19.166 19.166 0 0 1-19.168-19.168V330.607l-135.071-.049a19.164 19.164 0 0 1-16.832-28.32L241.06 10.013a19.167 19.167 0 0 1 36.005 9.154v162.534h135.902a19.167 19.167 0 0 1 16.815 28.363L270.078 502.03a19.173 19.173 0 0 1-16.812 9.97z\" fill=\"white\"></path>\n</svg>";
    function init() {
      Lampa.SettingsApi.addComponent({
        component: component,
        icon: icon,
        name: Lampa.Lang.translate('Shots')
      });
      Lampa.SettingsApi.addParam({
        component: component,
        param: {
          name: 'shots_in_player',
          type: 'trigger',
          "default": true
        },
        field: {
          name: Lampa.Lang.translate('shots_settings_in_player')
        }
      });
      Lampa.SettingsApi.addParam({
        component: component,
        param: {
          name: 'shots_in_card',
          type: 'trigger',
          "default": true
        },
        field: {
          name: Lampa.Lang.translate('shots_settings_in_card')
        }
      });
    }
    var Settings = {
      init: init
    };

    function startPlugin() {
      window.plugin_shots_ready = true;
      function init() {
        Lang.init();
        Templates.init();
        Player.init();
        Handler.init();
        Settings.init();
        Favorite.init();
        Created.init();
        View.init();
        Tags.load();
        $('body').append("\n            <style>\n            @-webkit-keyframes shots-recorder-blink{0%,50%,100%{opacity:1}25%,75%{opacity:.2}}@keyframes shots-recorder-blink{0%,50%,100%{opacity:1}25%,75%{opacity:.2}}@-webkit-keyframes shots-progress-waiting{0%{width:0;left:0}50%{width:50%;left:25%}100%{width:0;left:100%}}@keyframes shots-progress-waiting{0%{width:0;left:0}50%{width:50%;left:25%}100%{width:0;left:100%}}@-webkit-keyframes shots-placeholder-shimmer{0%{background-position:-150% 0}100%{background-position:150% 0}}@keyframes shots-placeholder-shimmer{0%{background-position:-150% 0}100%{background-position:150% 0}}@-webkit-keyframes shots-animate-down{0%{-webkit-transform:translateY(-50%);transform:translateY(-50%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes shots-animate-down{0%{-webkit-transform:translateY(-50%);transform:translateY(-50%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes shots-animate-up{0%{-webkit-transform:translateY(50%);transform:translateY(50%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes shots-animate-up{0%{-webkit-transform:translateY(50%);transform:translateY(50%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes shots-push-button{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.35);transform:scale(1.35)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes shots-push-button{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.35);transform:scale(1.35)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes shots-slides-slide-up{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes shots-slides-slide-up{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes shots-slides-slide-out{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes shots-slides-slide-out{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.shots-player-recorder{position:fixed;left:0;top:0;width:100%;height:100%;z-index:50}.shots-player-recorder__body{position:fixed;left:0;right:0;bottom:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.shots-player-recorder__plate{background-color:rgba(0,0,0,0.6);padding:.3em;-webkit-border-radius:3em;border-radius:3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.shots-player-recorder__text{padding:0 .8em;line-height:1.4}.shots-player-recorder__stop{width:2.5em;height:2.5em;background:#fff;-webkit-border-radius:100%;border-radius:100%;position:relative}.shots-player-recorder__stop::after{content:'';position:absolute;left:50%;top:50%;width:1.2em;height:1.2em;background:#ff0101;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-border-radius:.2em;border-radius:.2em;-webkit-animation:shots-recorder-blink 1s infinite;animation:shots-recorder-blink 1s infinite}.shots-preview{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.shots-preview__left{width:45%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.shots-preview__screenshot{-webkit-border-radius:1em;border-radius:1em;padding-bottom:64%;position:relative;background:#222;overflow:hidden}.shots-preview__screenshot>img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;opacity:0}.shots-preview__body{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding-left:2em;line-height:1.4}.shots-preview__year{font-size:.8em;margin-bottom:.5em}.shots-preview__title{font-size:1.3em;margin-bottom:.5em;overflow:hidden;-o-text-overflow:'.';text-overflow:'.';display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.shots-selector{padding:1.3em;-webkit-border-radius:.7em;border-radius:.7em;font-size:1.1em}.shots-selector:not(.shots-selector--transparent){background:rgba(255,255,255,0.1)}.shots-selector.focus{background:#fff;color:#000}.shots-checkbox{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.shots-checkbox__icon{width:1.3em;height:1.3em;margin-right:1em;border:.1em solid #fff;-webkit-border-radius:.3em;border-radius:.3em;position:relative}.shots-checkbox--checked .shots-checkbox__icon::after{content:'';position:absolute;left:.2em;top:.2em;right:.2em;bottom:.2em;background:#fff;-webkit-border-radius:.2em;border-radius:.2em}.shots-checkbox.focus .shots-checkbox__icon{border-color:#000}.shots-checkbox.focus .shots-checkbox__icon::after{background:#000}.shots-button{text-align:center}.shots-button+.shots-button{margin-top:.2em}.shots-modal-footer{padding-top:1em}.shots-view-button__title{position:relative}.shots-view-button__count{position:absolute;top:1.9em;left:12em;background:rgba(255,255,255,0.4);color:#fff;font-size:.7em;padding:.1em .4em;-webkit-border-radius:1.1em;border-radius:1.1em;text-align:center;min-width:2em;display:block;font-weight:700}.selectbox-item.focus .shots-view-button__count{background:rgba(0,0,0,0.4);color:#fff}.shots-modal-upload__body{margin-top:1.5em}.shots-modal-upload__body>*+*{margin-top:.2em}.shots-modal-upload__video{-webkit-border-radius:1em;border-radius:1em;overflow:hidden;margin-top:1.5em;background:#000}.shots-modal-upload__video video{background:#000;width:100%;display:block;aspect-ratio:16/9;-o-object-fit:contain;object-fit:contain}.shots-tags{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-0.25em}.shots-tags>div{padding:.3em .6em;-webkit-border-radius:.5em;border-radius:.5em;background:rgba(0,0,0,0.2);margin:.25em}.shots-tags>div>svg{width:1em !important;height:1em !important;margin-right:.6em;vertical-align:bottom}.shots-progress__text{font-size:.8em;margin-bottom:.8em}.shots-progress__bar{background:rgba(255,255,255,0.17);position:relative;-webkit-border-radius:1em;border-radius:1em;height:.4em;overflow:hidden}.shots-progress__bar>div{height:.4em;-webkit-border-radius:1em;border-radius:1em;background:#fff;position:absolute;left:0;top:0}.shots-progress.focus{background:rgba(255,255,255,0.1);color:#fff}.shots-progress.state--waiting .shots-progress__bar>div{width:10%;-webkit-animation:shots-progress-waiting 1s infinite;animation:shots-progress-waiting 1s infinite}.shots-lenta{position:absolute;left:0;top:0;width:100%;height:100%;z-index:50;background:#000}.shots-lenta--hide-panel .shots-lenta__panel{opacity:0;pointer-events:none;-webkit-transform:translate3d(0,2em,0);transform:translate3d(0,2em,0)}.shots-lenta--hide-panel .shots-lenta-video__progress-bar{opacity:.2;pointer-events:none}.shots-lenta__video{position:absolute;left:0;top:0;width:100%;height:100%;background:#000}.shots-lenta__panel{position:absolute;bottom:0;left:0;right:0;padding:1em;padding-bottom:2em;background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,0.54)));background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,0.54) 100%);background:-o-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,0.54) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0.54) 100%);-webkit-transition:opacity .3s ease,-webkit-transform .3s ease;transition:opacity .3s ease,-webkit-transform .3s ease;-o-transition:transform .3s ease,opacity .3s ease;transition:transform .3s ease,opacity .3s ease;transition:transform .3s ease,opacity .3s ease,-webkit-transform .3s ease}.shots-lenta .head-backward__button{top:1em}.shots-lenta-video__video-element{position:absolute;left:0;top:0;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;background:#000}.shots-lenta-video__progress-bar{position:absolute;z-index:1;left:1em;right:1em;bottom:1em;background:rgba(255,255,255,0.3);-webkit-border-radius:1em;border-radius:1em;-webkit-transition:opacity .3s ease,-webkit-transform .3s ease;transition:opacity .3s ease,-webkit-transform .3s ease;-o-transition:transform .3s ease,opacity .3s ease;transition:transform .3s ease,opacity .3s ease;transition:transform .3s ease,opacity .3s ease,-webkit-transform .3s ease}.shots-lenta-video__progress-bar>div{height:.3em;-webkit-border-radius:1em;border-radius:1em;background:#fff;-webkit-transition:width .3s linear;-o-transition:width .3s linear;transition:width .3s linear}.shots-lenta-video__loader.show{display:block}.shots-lenta-video__layer{position:absolute;left:0;top:0;width:100%;height:100%}.shots-lenta-panel{position:relative}.shots-lenta-panel .explorer-card__head-body{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}@media screen and (max-width:400px){.shots-lenta-panel .explorer-card__head-left{font-size:.8em}}.shots-lenta-panel__card{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;margin-bottom:0}@media screen and (max-width:580px){.shots-lenta-panel__card{width:80%}}.shots-lenta-panel__card-title{font-size:1.8em;margin-top:.3em;line-height:1.4;text-shadow:0 0 .2em rgba(0,0,0,0.5);overflow:hidden;-o-text-overflow:'.';text-overflow:'.';display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.shots-lenta-panel__card-year{font-size:1em;display:inline-block}.shots-lenta-panel__card-img{background:rgba(255,255,255,0.1);-webkit-border-radius:.3em;border-radius:.3em}.shots-lenta-panel__card-img img{opacity:0}.shots-lenta-panel__card-img.loaded{background:transparent}.shots-lenta-panel__card-img.loaded img{opacity:1}.shots-lenta-panel__card-img.focus:after{z-index:1;right:0;left:0;bottom:0;top:0;-webkit-border-radius:.3em;border-radius:.3em}.shots-lenta-panel__card.loading .shots-lenta-panel__card-title,.shots-lenta-panel__card.loading .shots-lenta-panel__card-year,.shots-lenta-panel__card.loading .shots-lenta-panel__card-img{background:rgba(255,255,255,0.1);-webkit-border-radius:.3em;border-radius:.3em;color:transparent;background-image:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,0)),color-stop(50%,rgba(255,255,255,0.25)),to(rgba(255,255,255,0)));background-image:-webkit-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,0.25) 50%,rgba(255,255,255,0) 100%);background-image:-o-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,0.25) 50%,rgba(255,255,255,0) 100%);background-image:linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.25) 50%,rgba(255,255,255,0) 100%);background-size:300% 100%;background-repeat:no-repeat;-webkit-animation:shots-placeholder-shimmer 1.5s ease-in-out infinite;animation:shots-placeholder-shimmer 1.5s ease-in-out infinite}.shots-lenta-panel__card.loading .shots-lenta-panel__card-img img{opacity:0}.shots-lenta-panel__tags{margin-top:1em}.shots-lenta-panel__counters{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.shots-lenta-panel__recorder{line-height:1.6}.shots-lenta-panel__author{display:inline-block}@media screen and (max-width:580px){.shots-lenta-panel__author{margin-bottom:1em}.shots-lenta-panel__author .shots-author__name{display:none}}.shots-lenta-panel__right{position:absolute;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-left:2em}@media screen and (max-width:580px){.shots-lenta-panel__right{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}@media screen and (max-width:400px){.shots-lenta-panel__right{font-size:1.1em}}.shots-lenta-panel__buttons{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.shots-lenta-panel__buttons>div{width:3em;height:3em;-webkit-border-radius:100%;border-radius:100%;background:rgba(0,0,0,0.2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-left:.5em}.shots-lenta-panel__buttons>div>svg{width:1.5em !important;height:1.5em !important}.shots-lenta-panel__buttons>div.focus{background:#fff;color:#000}.shots-lenta-panel__buttons>div.focus.active.action-liked{color:#ea4e4e}.shots-lenta-panel__buttons>div.focus.active.action-favorite{color:#ffc34b}.shots-lenta-panel__buttons>div:not(.active) .icon-fill{fill:transparent}.shots-lenta-panel__buttons>div.active svg{-webkit-animation:shots-push-button .2s ease forwards;animation:shots-push-button .2s ease forwards}@media screen and (max-width:580px){.shots-lenta-panel__buttons{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.shots-lenta-panel__buttons>div{margin-left:0;margin-top:1em}}.shots-counter div{font-size:1.6em;margin-top:.3em}.shots-author{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.shots-author__img{width:3em;height:3em;-webkit-border-radius:100%;border-radius:100%;background:rgba(255,255,255,0.1);overflow:hidden;position:relative}.shots-author__img img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;opacity:0}.shots-author__img.loaded{background:transparent}.shots-author__img.loaded img{opacity:1}.shots-author__name{font-size:1.3em;padding-left:1em;padding-right:1em}.shots-author.focus{background:#fff;-webkit-border-radius:3em;border-radius:3em;color:#000}.shots-author.focus .shots-author__img{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8)}.shots-status{background:rgba(0,0,0,0.5);padding:.3em .8em;-webkit-border-radius:1em;border-radius:.6em;display:inline-block;font-size:.9em;line-height:1.4;padding-top:0}.shots-status--ready{background:#8ab75b}.shots-status--error{background:#d9534f}.shots-status--processing{background:#f0ad4e}.shots-status--blocked{background:#5b7c9c}.shots-status--deleted{background:#d04545}.full-episode--shot .shots-tags>div{background:rgba(0,0,0,0.5)}.full-episode--shot .full-episode__body{background:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,0.5)),color-stop(40%,rgba(0,0,0,0)));background:-webkit-linear-gradient(bottom,rgba(0,0,0,0.5) 0,rgba(0,0,0,0) 40%);background:-o-linear-gradient(bottom,rgba(0,0,0,0.5) 0,rgba(0,0,0,0) 40%);background:linear-gradient(0,rgba(0,0,0,0.5) 0,rgba(0,0,0,0) 40%)}.full-episode--shot .full-episode__date{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.full-episode--shot .full-episode__liked{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.full-episode--shot .full-episode__liked svg{width:1em !important;height:1em !important;margin-right:.3em}.full-episode--shot .full-episode__shot-icon{position:absolute;top:1em;left:1em}.full-episode--shot .full-episode__shot-icon svg{width:2em !important;height:2em !important}.full-episode--shot .shots-status{margin-top:.7em}.shots-player--recording .player-panel,.shots-player--recording .player-info,.shots-player--recording .player-footer{display:none}.shots-player-card{padding:0;width:16em}.shots-player-card .card__view{margin-bottom:0}.shots-player-segments{position:relative;z-index:1}.shots-player-segments__time{position:absolute;top:0;background:#b995ff;height:100%;height:.4em;pointer-events:none}.shots-player-segments__picture{position:absolute;bottom:1em;display:none;cursor:pointer}.shots-player-segments__picture img{width:7em;height:4em;-o-object-fit:cover;object-fit:cover;opacity:0;-webkit-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease;-webkit-border-radius:.3em;border-radius:.3em}.shots-player-segments__picture--loaded img{opacity:1}.shots-player-segments.focus .shots-player-segments__picture{display:block}.shots-video-present{position:fixed;left:0;top:0;width:100%;height:100%;background:#000;z-index:50}.shots-video-present video{position:fixed;left:0;top:0;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.shots-video-present .head-backward{position:absolute;top:.65em}.shots-svg-auto{height:auto !important}.shots-svg-auto--helmet{max-height:6em}.shots-selector-tags{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-border-radius:.7em;border-radius:.7em;background:rgba(255,255,255,0.1);padding:.2em}.shots-selector-tags__tag{display:inline-block;background:rgba(0,0,0,0.2);padding:0 1em;-webkit-border-radius:.6em;border-radius:.6em;margin:.2em;position:relative}.shots-selector-tags__tag span{font-size:1.1em;display:inline-block;padding:.6em 0}.shots-selector-tags__tag svg{width:1.2em !important;height:1.2em !important;margin-right:1em}.shots-selector-tags__tag.active::after{content:'';display:block;position:absolute;right:.4em;top:50%;height:.5em;width:.5em;-webkit-border-radius:1em;border-radius:1em;background:#ffb509;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.shots-selector-tags__tag.active span{-webkit-transform:translateX(-0.3em);-ms-transform:translateX(-0.3em);transform:translateX(-0.3em)}.shots-selector-tags__tag.focus{background:#fff;color:#000}.shots-selector-tags__tag.focus::after{background:#000}.shots-line-title{font-size:1.1em;margin-bottom:.7em}.shots-slides{position:absolute;top:0;left:0;width:100%;height:100%;z-index:50}.shots-slides .head-backward{position:absolute;top:.65em}.shots-slides__slide{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-o-object-fit:contain;object-fit:contain;background:#08090d}.shots-slides__slide.active{-webkit-animation:shots-slides-slide-up .5s forwards;animation:shots-slides-slide-up .5s forwards}.shots-slides__slide.up{-webkit-animation:shots-slides-slide-out .5s forwards;animation:shots-slides-slide-out .5s forwards}.shots-slides__down{position:absolute;left:50%;bottom:2em;background:rgba(255,255,255,0.3);padding:.7em 1.3em;-webkit-border-radius:3em;border-radius:3em;-webkit-transform:translate3d(-50%,1em,0);transform:translate3d(-50%,1em,0);opacity:0;-webkit-transition:opacity .5s,-webkit-transform .5s;transition:opacity .5s,-webkit-transform .5s;-o-transition:opacity .5s,transform .5s;transition:opacity .5s,transform .5s;transition:opacity .5s,transform .5s,-webkit-transform .5s}.shots-slides__down.active{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.shots-slides__install{position:absolute;left:50%;bottom:2em;background:#fff;color:#000;padding:.7em 1.3em;-webkit-border-radius:3em;border-radius:3em;-webkit-transform:translate3d(-50%,3em,0);transform:translate3d(-50%,3em,0);opacity:0;-webkit-transition:opacity .5s,-webkit-transform .5s;transition:opacity .5s,-webkit-transform .5s;-o-transition:opacity .5s,transform .5s;transition:opacity .5s,transform .5s;transition:opacity .5s,transform .5s,-webkit-transform .5s;font-size:1.7em}.shots-slides__install.active{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.shots-player-button.focus .rec{fill:#ff0101}body.true--mobile .shots-lenta__panel,body.true--mobile .shots-player-recorder__body{bottom:4em}body.true--mobile .shots-lenta-video__progress-bar{bottom:3em}\n            </style>\n        ");

        // Добавляем компоненты

        Lampa.Component.add('shots_list', component$3);
        Lampa.Component.add('shots_card', component$2);
        Lampa.Component.add('shots_channel', component$1);

        // Экран закладок - шоты

        Lampa.ContentRows.add({
          index: 1,
          screen: ['bookmarks'],
          call: function call(params, screen) {
            var favotite = Favorite.get();
            var created = Created.get();
            var lines = [];
            var onmore = {
              emit: {
                onMore: function onMore() {
                  Lampa.Activity.push({
                    url: this.data.type,
                    title: this.data.title,
                    component: 'shots_list',
                    page: 2
                  });
                }
              }
            };
            Lampa.Utils.extendItemsParams(favotite, {
              createInstance: function createInstance(item_data) {
                return Shot(item_data, {
                  playlist: favotite,
                  onNext: function onNext(page, call) {
                    Favorite.page(page, call);
                  }
                });
              }
            });
            Lampa.Utils.extendItemsParams(created, {
              createInstance: function createInstance(item_data) {
                return Shot(item_data, {
                  playlist: created,
                  onNext: function onNext(page, call) {
                    Created.page(page, call);
                  }
                });
              }
            });
            if (favotite.length) {
              lines.push({
                title: Lampa.Lang.translate('shots_title_favorite'),
                results: favotite,
                type: 'favorite',
                total_pages: favotite.length >= 20 ? 2 : 1,
                params: onmore
              });
            }
            if (created.length) {
              lines.push({
                title: Lampa.Lang.translate('shots_title_created'),
                results: created,
                type: 'created',
                total_pages: created.length >= 20 ? 2 : 1,
                params: onmore
              });
            }
            if (lines.length) return lines;
          }
        });

        // Главный экран - шоты

        Lampa.ContentRows.add({
          name: 'shots_main',
          title: 'Shots',
          index: 2,
          screen: ['main'],
          call: function call(params, screen) {
            if (Lampa.Account.Permit.child) return;
            return function (call) {
              Api.lenta({
                sort: 'new'
              }, function (shots) {
                Lampa.Utils.extendItemsParams(shots, {
                  createInstance: function createInstance(item_data) {
                    return Shot(item_data, {
                      playlist: shots,
                      onNext: function onNext(page, call) {
                        Api.lenta({
                          sort: 'new',
                          page: page
                        }, call);
                      }
                    });
                  }
                });
                call({
                  title: 'Shots',
                  results: shots,
                  type: 'favorite',
                  total_pages: 1,
                  icon_svg: '<svg><use xlink:href="#sprite-shots"></use></svg>',
                  icon_bgcolor: '#fff',
                  icon_color: '#fd4518',
                  params: {
                    module: Lampa.Maker.module('Line').toggle(Lampa.Maker.module('Line').MASK.base, 'Icon')
                  }
                });
              });
            };
          }
        });

        // Кнопка в меню

        var waiting = false;
        Lampa.Menu.addButton('<svg><use xlink:href="#sprite-shots"></use></svg>', 'Shots', function () {
          var present = new Present();
          present.onComplete = function () {
            present.onBack = function () {};
            if (waiting) return;
            waiting = true;
            var call = function call(shots) {
              Lampa.Loading.stop();
              present.destroy();
              waiting = false;
              if (shots.length == 0) {
                return Lampa.Bell.push({
                  icon: '<svg><use xlink:href="#sprite-shots"></use></svg>',
                  text: Lampa.Lang.translate('shots_alert_noshots')
                });
              }
              var lenta = new Lenta(shots[0], shots);
              lenta.onNext = function (page, call) {
                Roll.next(call);
              };
              lenta.start();
            };
            Lampa.Loading.start(function () {
              waiting = false;
              present.destroy();
              call = function call() {};
              Lampa.Loading.stop();
            });
            Roll.start(call);
          };
          present.onBack = function () {
            present.destroy();
            Lampa.Controller.toggle('content');
          };
          present.start();
        });
      }
      if (Lampa.Manifest.app_digital >= 307) {
        if (window.appready) init();else {
          Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') init();
          });
        }
      }
    }
    if (!window.plugin_shots_ready) startPlugin();

})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdHMuanMiLCJzb3VyY2VzIjpbInNob3RzL3V0aWxzL2xhbmcuanMiLCJzaG90cy91dGlscy90ZW1wbGF0ZXMuanMiLCJzaG90cy91dGlscy91dGlscy5qcyIsInNob3RzL2RlZmluZWQuanMiLCJzaG90cy91dGlscy9tZXRyaWMuanMiLCJzaG90cy9jb21wb25lbnRzL3JlY29yZGVyLmpzIiwic2hvdHMvY29tcG9uZW50cy90YWdzLmpzIiwic2hvdHMvY29tcG9uZW50cy9wcmV2aWV3LmpzIiwic2hvdHMvY29tcG9uZW50cy9jaGVja2JveC5qcyIsInNob3RzL3V0aWxzL2FwaS5qcyIsInNob3RzL2NvbXBvbmVudHMvcHJvZ3Jlc3MuanMiLCJzaG90cy91dGlscy9oYW5kbGVyLmpzIiwic2hvdHMvdXRpbHMvY3JlYXRlZC5qcyIsInNob3RzL2NvbXBvbmVudHMvc2VsZWN0b3IuanMiLCJzaG90cy91dGlscy90YWdzLmpzIiwic2hvdHMvY29tcG9uZW50cy91cGxvYWQuanMiLCJzaG90cy91dGlscy92aWV3LmpzIiwic2hvdHMvdXRpbHMvcGxheWVyLmpzIiwic2hvdHMvdXRpbHMvZmF2b3JpdGUuanMiLCJzaG90cy91dGlscy9yb2xsLmpzIiwic2hvdHMvbGVudGEvdmlkZW8uanMiLCJzaG90cy9jb21wb25lbnRzL2F1dGhvci5qcyIsInNob3RzL3V0aWxzL2xpa2VzLmpzIiwic2hvdHMvdXRpbHMvbW9kYWxzLmpzIiwic2hvdHMvY29tcG9uZW50cy9zbGlkZXMuanMiLCJzaG90cy9sZW50YS9wYW5lbC5qcyIsInNob3RzL2xlbnRhL2xlbnRhLmpzIiwic2hvdHMvY29tcG9uZW50cy9zaG90LmpzIiwic2hvdHMvY29tcG9uZW50cy9saXN0LmpzIiwic2hvdHMvY29tcG9uZW50cy9jYXJkLmpzIiwic2hvdHMvY29tcG9uZW50cy9jaGFubmVsLmpzIiwic2hvdHMvY29tcG9uZW50cy9wcmVzZW50LmpzIiwic2hvdHMvdXRpbHMvc2V0dGluZ3MuanMiLCJzaG90cy9zaG90cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0KCl7XG4gICAgTGFtcGEuTGFuZy5hZGQoe1xuICAgICAgICBlbXB0eToge1xuICAgICAgICAgICAgcnU6ICcnLFxuICAgICAgICAgICAgZW46ICcnLFxuICAgICAgICAgICAgdWs6ICcnLFxuICAgICAgICAgICAgYmU6ICcnLFxuICAgICAgICAgICAgemg6ICcnLFxuICAgICAgICAgICAgcHQ6ICcnLFxuICAgICAgICAgICAgYmc6ICcnLFxuICAgICAgICAgICAgcm86ICcnLFxuICAgICAgICB9LFxuICAgIH0pXG5cbiAgICBMYW1wYS5MYW5nLmFkZCh7XG4gICAgICAgIHNob3RzX21vZGFsX2JlZm9yZV9yZWNvcmRpbmdfdHh0XzE6IHtcbiAgICAgICAgICAgIHJ1OiAn0KHQvtGF0YDQsNC90Y/QudGC0LUg0YHQstC+0Lgg0LvRjtCx0LjQvNGL0LUg0LzQvtC80LXQvdGC0Ysg0Lgg0LTQtdC70LjRgtC10YHRjCDQuNC80Lgg0YEg0LTRgNGD0LPQuNC80LghJyxcbiAgICAgICAgICAgIGVuOiAnU2F2ZSB5b3VyIGZhdm9yaXRlIG1vbWVudHMgYW5kIHNoYXJlIHRoZW0gd2l0aCBvdGhlcnMhJyxcbiAgICAgICAgICAgIHVrOiAn0JfQsdC10YDRltCz0LDQudGC0LUg0YHQstC+0Zcg0YPQu9GO0LHQu9C10L3RliDQvNC+0LzQtdC90YLQuCDRgtCwINC00ZbQu9GW0YLRjNGB0Y8g0L3QuNC80Lgg0Lcg0ZbQvdGI0LjQvNC4IScsXG4gICAgICAgICAgICBiZTogJ9CX0LDRhdC+0Z7QstCw0LnRhtC1INGB0LLQsNC1INC70Y7QsdGW0LzRi9GPINC80L7QvNCw0L3RgtGLINGWINC00LfRj9C70ZbRhtC10YHRjyDRltC80ZYg0Lcg0ZbQvdGI0YvQvNGWIScsXG4gICAgICAgICAgICB6aDogJ+S/neWtmOaCqOWWnOeIseeahOaXtuWIu+W5tuS4juS7luS6uuWIhuS6q++8gScsXG4gICAgICAgICAgICBwdDogJ1NhbHZlIHNldXMgbW9tZW50b3MgZmF2b3JpdG9zIGUgY29tcGFydGlsaGUtb3MgY29tIG91dHJhcyBwZXNzb2FzIScsXG4gICAgICAgICAgICBiZzogJ9CX0LDQv9Cw0LfQstCw0LnRgtC1INC70Y7QsdC40LzQuNGC0LUg0YHQuCDQvNC+0LzQtdC90YLQuCDQuCDQs9C4INGB0L/QvtC00LXQu9GP0LnRgtC1INGBINC00YDRg9Cz0LghJyxcbiAgICAgICAgICAgIHJvOiAnU2FsdmVhesSDLcibaSBtb21lbnRlbGUgcHJlZmVyYXRlIMiZaSDDrm1wxINydMSDyJllyJl0ZS1sZSBjdSBjZWlsYWzIm2khJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19tb2RhbF9iZWZvcmVfcmVjb3JkaW5nX3R4dF8yOiB7XG4gICAgICAgICAgICBydTogJ9CS0YvQsdC10YDQuNGC0LUg0LjQvdGC0LXRgNC10YHRg9GO0YnQuNC5INC80L7QvNC10L3RgiDQsiDQstC40LTQtdC+INC4INC90LDQttC80LjRgtC1INC60L3QvtC/0LrRgyBcItCd0LDRh9Cw0YLRjCDQt9Cw0L/QuNGB0YxcIi4nLFxuICAgICAgICAgICAgZW46ICdDaG9vc2UgdGhlIG1vbWVudCBvZiBpbnRlcmVzdCBpbiB0aGUgdmlkZW8gYW5kIHByZXNzIHRoZSBcIlN0YXJ0IFJlY29yZGluZ1wiIGJ1dHRvbi4nLFxuICAgICAgICAgICAgdWs6ICfQktC40LHQtdGA0ZbRgtGMINGG0ZbQutCw0LLQuNC5INC80L7QvNC10L3RgiDRgyDQstGW0LTQtdC+INGC0LAg0L3QsNGC0LjRgdC90ZbRgtGMINC60L3QvtC/0LrRgyBcItCf0L7Rh9Cw0YLQuCDQt9Cw0L/QuNGBXCIuJyxcbiAgICAgICAgICAgIGJlOiAn0JLRi9Cx0LXRgNGL0YbQtSDRhtGW0LrQsNCy0Ysg0LzQvtC80LDQvdGCINGDINCy0ZbQtNGN0LAg0ZYg0L3QsNGG0ZbRgdC90ZbRhtC1INC60L3QvtC/0LrRgyBcItCf0LDRh9Cw0YbRjCDQt9Cw0L/RltGBXCIuJyxcbiAgICAgICAgICAgIHpoOiAn6YCJ5oup6KeG6aKR5Lit55qE5oSf5YW06Laj5pe25Yi777yM54S25ZCO5oyJ4oCc5byA5aeL5b2V5Yi24oCd5oyJ6ZKu44CCJyxcbiAgICAgICAgICAgIHB0OiAnRXNjb2xoYSBvIG1vbWVudG8gZGUgaW50ZXJlc3NlIG5vIHbDrWRlbyBlIHByZXNzaW9uZSBvIGJvdMOjbyBcIkluaWNpYXIgR3JhdmHDp8Ojb1wiLicsXG4gICAgICAgICAgICBiZzogJ9CY0LfQsdC10YDQtdGC0LUg0LjQvdGC0LXRgNC10YHQvdC40Y8g0LzQvtC80LXQvdGCINCy0YrQsiDQstC40LTQtdC+0YLQviDQuCDQvdCw0YLQuNGB0L3QtdGC0LUg0LHRg9GC0L7QvdCwIFwi0JfQsNC/0L7Rh9C90Lgg0LfQsNC/0LjRgVwiLicsXG4gICAgICAgICAgICBybzogJ0FsZWdlyJtpIG1vbWVudHVsIGRlIGludGVyZXMgZGluIHZpZGVvY2xpcCDImWkgYXDEg3NhyJtpIGJ1dG9udWwgXCLDjm5jZXBlyJtpIMOubnJlZ2lzdHJhcmVhXCIuJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19zdGVwOiB7XG4gICAgICAgICAgICBydTogJ9Co0LDQsycsXG4gICAgICAgICAgICBlbjogJ1N0ZXAnLFxuICAgICAgICAgICAgdWs6ICfQmtGA0L7QuicsXG4gICAgICAgICAgICBiZTogJ9Ca0YDQvtC6JyxcbiAgICAgICAgICAgIHpoOiAn5q2l6aqkJyxcbiAgICAgICAgICAgIHB0OiAnUGFzc28nLFxuICAgICAgICAgICAgYmc6ICfQodGC0YrQv9C60LAnLFxuICAgICAgICAgICAgcm86ICdQYXMnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3N0YXJ0X3JlY29yZGluZzoge1xuICAgICAgICAgICAgcnU6ICfQndCw0YfQsNGC0Ywg0LfQsNC/0LjRgdGMJyxcbiAgICAgICAgICAgIGVuOiAnU3RhcnQgcmVjb3JkaW5nJyxcbiAgICAgICAgICAgIHVrOiAn0J/QvtGH0LDRgtC4INC30LDQv9C40YEnLFxuICAgICAgICAgICAgYmU6ICfQn9Cw0YfQsNGG0Ywg0LfQsNC/0ZbRgScsXG4gICAgICAgICAgICB6aDogJ+W8gOWni+W9leWIticsXG4gICAgICAgICAgICBwdDogJ0luaWNpYXIgZ3JhdmHDp8OjbycsXG4gICAgICAgICAgICBiZzogJ9CX0LDQv9C+0YfQvdC4INC30LDQv9C40YEnLFxuICAgICAgICAgICAgcm86ICfDjm5jZXBlIMOubnJlZ2lzdHJhcmVhJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19jaG9pY2Vfc3RhcnRfcG9pbnQ6IHtcbiAgICAgICAgICAgIHJ1OiAn0JLRi9Cx0YDQsNGC0Ywg0L/QvtC30LjRhtC40Y4nLFxuICAgICAgICAgICAgZW46ICdDaG9vc2UgcG9zaXRpb24nLFxuICAgICAgICAgICAgdWs6ICfQktC40LHRgNCw0YLQuCDQv9C+0LfQuNGG0ZbRjicsXG4gICAgICAgICAgICBiZTogJ9CS0YvQsdGA0LDRhtGMINC/0LDQt9GW0YbRi9GOJyxcbiAgICAgICAgICAgIHpoOiAn6YCJ5oup5L2N572uJyxcbiAgICAgICAgICAgIHB0OiAnRXNjb2xoZXIgcG9zacOnw6NvJyxcbiAgICAgICAgICAgIGJnOiAn0JjQt9Cx0LXRgNC10YLQtSDQv9C+0LfQuNGG0LjRjycsXG4gICAgICAgICAgICBybzogJ0FsZWdlyJtpIHBvemnIm2lhJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19tb2RhbF9idXR0b25fdXBsb2FkX3N0YXJ0OiB7XG4gICAgICAgICAgICBydTogJ9CX0LDQs9GA0YPQt9C40YLRjCDQuCDRgdC+0YXRgNCw0L3QuNGC0Ywg0LfQsNC/0LjRgdGMJyxcbiAgICAgICAgICAgIGVuOiAnVXBsb2FkIGFuZCBzYXZlIHJlY29yZGluZycsXG4gICAgICAgICAgICB1azogJ9CX0LDQstCw0L3RgtCw0LbQuNGC0Lgg0YLQsCDQt9Cx0LXRgNC10LPRgtC4INC30LDQv9C40YEnLFxuICAgICAgICAgICAgYmU6ICfQl9Cw0LPRgNGD0LfRltGG0Ywg0ZYg0LfQsNGF0LDQstCw0YbRjCDQt9Cw0L/RltGBJyxcbiAgICAgICAgICAgIHpoOiAn5LiK5Lyg5bm25L+d5a2Y5b2V6Z+zJyxcbiAgICAgICAgICAgIHB0OiAnQ2FycmVnYXIgZSBzYWx2YXIgZ3JhdmHDp8OjbycsXG4gICAgICAgICAgICBiZzogJ9Ca0LDRh9C4INC4INC30LDQv9Cw0LfQuCDQt9Cw0L/QuNGB0LAnLFxuICAgICAgICAgICAgcm86ICfDjm5jxINyY2HIm2kgyJlpIHNhbHZhyJtpIMOubnJlZ2lzdHJhcmVhJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19tb2RhbF9idXR0b25fdXBsb2FkX2NhbmNlbDoge1xuICAgICAgICAgICAgcnU6ICfQntGC0LzQtdC90LjRgtGMINC4INGD0LTQsNC70LjRgtGMINC30LDQv9C40YHRjCcsXG4gICAgICAgICAgICBlbjogJ0NhbmNlbCBhbmQgZGVsZXRlIHJlY29yZGluZycsXG4gICAgICAgICAgICB1azogJ9Ch0LrQsNGB0YPQstCw0YLQuCDRgtCwINCy0LjQtNCw0LvQuNGC0Lgg0LfQsNC/0LjRgScsXG4gICAgICAgICAgICBiZTogJ9CQ0LTQvNGP0L3RltGG0Ywg0ZYg0LLQuNC00LDQu9GW0YbRjCDQt9Cw0L/RltGBJyxcbiAgICAgICAgICAgIHpoOiAn5Y+W5raI5bm25Yig6Zmk5b2V6Z+zJyxcbiAgICAgICAgICAgIHB0OiAnQ2FuY2VsYXIgZSBleGNsdWlyIGdyYXZhw6fDo28nLFxuICAgICAgICAgICAgYmc6ICfQntGC0LzQtdC90Lgg0Lgg0LjQt9GC0YDQuNC5INC30LDQv9C40YHQsCcsXG4gICAgICAgICAgICBybzogJ0FudWxlYXrEgyDImWkgyJl0ZXJnZSDDrm5yZWdpc3RyYXJlYSdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfYnV0dG9uX3VwbG9hZF9hZ2Fpbjoge1xuICAgICAgICAgICAgcnU6ICfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjC4g0J/QvtC/0YDQvtCx0L7QstCw0YLRjCDRgdC90L7QstCwJyxcbiAgICAgICAgICAgIGVuOiAnRmFpbGVkIHRvIHVwbG9hZC4gVHJ5IGFnYWluJyxcbiAgICAgICAgICAgIHVrOiAn0J3QtSDQstC00LDQu9C+0YHRjyDQt9Cw0LLQsNC90YLQsNC20LjRgtC4LiDQodC/0YDQvtCx0YPQudGC0LUg0YnQtSDRgNCw0LcnLFxuICAgICAgICAgICAgYmU6ICfQndC1INGe0LTQsNC70L7RgdGPINC30LDQs9GA0YPQt9GW0YbRjC4g0J/QsNGB0L/RgNCw0LHRg9C50YbQtSDRj9GI0YfRjSDRgNCw0LcnLFxuICAgICAgICAgICAgemg6ICfkuIrkvKDlpLHotKXjgIIg5YaN6K+V5LiA5qyhJyxcbiAgICAgICAgICAgIHB0OiAnRmFsaGEgYW8gY2FycmVnYXIuIFRlbnRlIG5vdmFtZW50ZScsXG4gICAgICAgICAgICBiZzogJ9Cd0LXRg9GB0L/QtdGI0LXQvSDRitC/0LvQvtGD0LQuINCe0L/QuNGC0LDQuSDQvtGC0L3QvtCy0L4nLFxuICAgICAgICAgICAgcm86ICfDjm5jxINyY2FyZWEgYSBlyJl1YXQuIMOObmNlYXJjxIMgZGluIG5vdSdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfYnV0dG9uX3VwbG9hZF9jb21wbGV0ZToge1xuICAgICAgICAgICAgcnU6ICfQpdC+0YDQvtGI0L4nLFxuICAgICAgICAgICAgZW46ICdEb25lJyxcbiAgICAgICAgICAgIHVrOiAn0JPQvtGC0L7QstC+JyxcbiAgICAgICAgICAgIGJlOiAn0JPQsNGC0L7QstCwJyxcbiAgICAgICAgICAgIHpoOiAn5a6M5oiQJyxcbiAgICAgICAgICAgIHB0OiAnQ29uY2x1w61kbycsXG4gICAgICAgICAgICBiZzogJ9CT0L7RgtC+0LLQvicsXG4gICAgICAgICAgICBybzogJ0ZpbmFsaXphdCdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfc2hvcnRfcmVjb3JkaW5nX3R4dDoge1xuICAgICAgICAgICAgcnU6ICfQl9Cw0L/QuNGB0Ywg0YHQu9C40YjQutC+0Lwg0LrQvtGA0L7RgtC60LDRjy4g0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC30LDQv9C40YHQuCDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0L3QtSDQvNC10L3QtdC1IDEwINGB0LXQutGD0L3QtC4nLFxuICAgICAgICAgICAgZW46ICdUaGUgcmVjb3JkaW5nIGlzIHRvbyBzaG9ydC4gVGhlIG1pbmltdW0gcmVjb3JkaW5nIGxlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IDEwIHNlY29uZHMuJyxcbiAgICAgICAgICAgIHVrOiAn0JfQsNC/0LjRgSDQt9Cw0L3QsNC00YLQviDQutC+0YDQvtGC0LrQuNC5LiDQnNGW0L3RltC80LDQu9GM0L3QsCDQtNC+0LLQttC40L3QsCDQt9Cw0L/QuNGB0YMg0L/QvtCy0LjQvdC90LAg0LHRg9GC0Lgg0L3QtSDQvNC10L3RiNC1IDEwINGB0LXQutGD0L3QtC4nLFxuICAgICAgICAgICAgYmU6ICfQl9Cw0L/RltGBINC30LDQvdCw0LTRgtCwINC60LDRgNC+0YLQutGWLiDQnNGW0L3RltC80LDQu9GM0L3QsNGPINC00LDRntC20YvQvdGPINC30LDQv9GW0YHRgyDQv9Cw0LLRltC90L3QsCDQsdGL0YbRjCDQvdC1INC80LXQvdGIINC30LAgMTAg0YHQtdC60YPQvdC0LicsXG4gICAgICAgICAgICB6aDogJ+W9lemfs+aXtumXtOWkquefreOAgiDmnIDnn63lvZXpn7Pplb/luqblv4Xpobvoh7PlsJHkuLoxMOenkuOAgicsXG4gICAgICAgICAgICBwdDogJ0EgZ3JhdmHDp8OjbyDDqSBtdWl0byBjdXJ0YS4gTyBjb21wcmltZW50byBtw61uaW1vIGRhIGdyYXZhw6fDo28gZGV2ZSBzZXIgZGUgcGVsbyBtZW5vcyAxMCBzZWd1bmRvcy4nLFxuICAgICAgICAgICAgYmc6ICfQl9Cw0L/QuNGB0YrRgiDQtSDRgtCy0YrRgNC00LUg0LrRgNCw0YLRitC6LiDQnNC40L3QuNC80LDQu9C90LDRgtCwINC00YrQu9C20LjQvdCwINC90LAg0LfQsNC/0LjRgdCwINGC0YDRj9Cx0LLQsCDQtNCwINCx0YrQtNC1INC/0L7QvdC1IDEwINGB0LXQutGD0L3QtNC4LicsXG4gICAgICAgICAgICBybzogJ8OObnJlZ2lzdHJhcmVhIGVzdGUgcHJlYSBzY3VydMSDLiBMdW5naW1lYSBtaW5pbcSDIGEgw65ucmVnaXN0csSDcmlpIHRyZWJ1aWUgc8SDIGZpZSBkZSBjZWwgcHXIm2luIDEwIHNlY3VuZGUuJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c191cGxvYWRfcHJvZ3Jlc3Nfc3RhcnQ6IHtcbiAgICAgICAgICAgIHJ1OiAn0J/QvtC70YPRh9C10L3QuNC1INGB0YHRi9C70LrQuCDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuC4uLicsXG4gICAgICAgICAgICBlbjogJ0dldHRpbmcgdXBsb2FkIGxpbmsuLi4nLFxuICAgICAgICAgICAgdWs6ICfQntGC0YDQuNC80LDQvdC90Y8g0L/QvtGB0LjQu9Cw0L3QvdGPINC00LvRjyDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8uLi4nLFxuICAgICAgICAgICAgYmU6ICfQkNGC0YDRi9C80LDQvdC90LUg0YHQv9Cw0YHRi9C70LrRliDQtNC70Y8g0LfQsNCz0YDRg9C30LrRli4uLicsXG4gICAgICAgICAgICB6aDogJ+iOt+WPluS4iuS8oOmTvuaOpS4uLicsXG4gICAgICAgICAgICBwdDogJ09idGVuZG8gbGluayBkZSB1cGxvYWQuLi4nLFxuICAgICAgICAgICAgYmc6ICfQn9C+0LvRg9GH0LDQstCw0L3QtSDQvdCwINCy0YDRitC30LrQsCDQt9CwINC60LDRh9Cy0LDQvdC1Li4uJyxcbiAgICAgICAgICAgIHJvOiAnU2Ugb2LIm2luZSBsaW5rLXVsIGRlIHVwbG9hZC4uLidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfdXBsb2FkX3Byb2dyZXNzX3VwbG9hZGluZzoge1xuICAgICAgICAgICAgcnU6ICfQl9Cw0LPRgNGD0LfQutCwINC30LDQv9C40YHQuC4uLicsXG4gICAgICAgICAgICBlbjogJ1VwbG9hZGluZyByZWNvcmRpbmcuLi4nLFxuICAgICAgICAgICAgdWs6ICfQl9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0LfQsNC/0LjRgdGDLi4uJyxcbiAgICAgICAgICAgIGJlOiAn0JfQsNCz0YDRg9C30LrQsCDQt9Cw0L/RltGB0YMuLi4nLFxuICAgICAgICAgICAgemg6ICfmraPlnKjkuIrkvKDlvZXpn7MuLi4nLFxuICAgICAgICAgICAgcHQ6ICdDYXJyZWdhbmRvIGdyYXZhw6fDo28uLi4nLFxuICAgICAgICAgICAgYmc6ICfQmtCw0YfQstCw0L3QtSDQvdCwINC30LDQv9C40YHQsC4uLicsXG4gICAgICAgICAgICBybzogJ1NlIMOubmNhcmPEgyDDrm5yZWdpc3RyYXJlYS4uLidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfdXBsb2FkX3Byb2dyZXNzX25vdGlmeToge1xuICAgICAgICAgICAgcnU6ICfQntC/0L7QstC10YnQtdC90LjQtSDRgdC10YDQstC40YHQsC4uLicsXG4gICAgICAgICAgICBlbjogJ05vdGlmeWluZyBzZXJ2aWNlLi4uJyxcbiAgICAgICAgICAgIHVrOiAn0J/QvtCy0ZbQtNC+0LzQu9C10L3QvdGPINGB0LXRgNCy0ZbRgdGDLi4uJyxcbiAgICAgICAgICAgIGJlOiAn0JDQv9Cw0LLRj9GI0YfRjdC90L3QtSDRgdGN0YDQstGW0YHRgy4uLicsXG4gICAgICAgICAgICB6aDogJ+mAmuefpeacjeWKoS4uLicsXG4gICAgICAgICAgICBwdDogJ05vdGlmaWNhbmRvIHNlcnZpw6dvLi4uJyxcbiAgICAgICAgICAgIGJnOiAn0KPQstC10LTQvtC80Y/QstCw0L3QtSDQvdCwINGD0YHQu9GD0LPQsNGC0LAuLi4nLFxuICAgICAgICAgICAgcm86ICdTZSBub3RpZmljxIMgc2VydmljaXVsLi4uJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c191cGxvYWRfY29tcGxldGVfdGV4dDoge1xuICAgICAgICAgICAgcnU6ICfQl9Cw0L/QuNGB0Ywg0YPRgdC/0LXRiNC90L4g0LfQsNCz0YDRg9C20LXQvdCwINC4INC+0YLQv9GA0LDQstC70LXQvdCwINC90LAg0L7QsdGA0LDQsdC+0YLQutGDLiDQktGLINC/0L7Qu9GD0YfQuNGC0LUg0YPQstC10LTQvtC80LvQtdC90LjQtSwg0LrQvtCz0LTQsCDQvtC90LAg0LHRg9C00LXRgiDQs9C+0YLQvtCy0LAuJyxcbiAgICAgICAgICAgIGVuOiAnVGhlIHJlY29yZGluZyBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBsb2FkZWQgYW5kIHNlbnQgZm9yIHByb2Nlc3NpbmcuIFlvdSB3aWxsIHJlY2VpdmUgYSBub3RpZmljYXRpb24gd2hlbiBpdCBpcyByZWFkeS4nLFxuICAgICAgICAgICAgdWs6ICfQl9Cw0L/QuNGBINGD0YHQv9GW0YjQvdC+INC30LDQstCw0L3RgtCw0LbQtdC90L4g0YLQsCDQvdCw0LTRltGB0LvQsNC90L4g0L3QsCDQvtCx0YDQvtCx0LrRgy4g0JLQuCDQvtGC0YDQuNC80LDRlNGC0LUg0L/QvtCy0ZbQtNC+0LzQu9C10L3QvdGPLCDQutC+0LvQuCDQstGW0L0g0LHRg9C00LUg0LPQvtGC0L7QstC40LkuJyxcbiAgICAgICAgICAgIGJlOiAn0JfQsNC/0ZbRgSDQv9Cw0YHQv9GP0YXQvtCy0LAg0LfQsNCz0YDRg9C20LDQvdGLINGWINCw0LTQv9GA0LDRntC70LXQvdGLINC90LAg0LDQv9GA0LDRhtC+0Z7QutGDLiDQktGLINCw0YLRgNGL0LzQsNC10YbQtSDQsNC/0LDQstGP0YjRh9GN0L3QvdC1LCDQutCw0LvRliDRkdC9INCx0YPQtNC30LUg0LPQsNGC0L7QstGLLicsXG4gICAgICAgICAgICB6aDogJ+W9lemfs+W3suaIkOWKn+S4iuS8oOW5tuWPkemAgeS7pei/m+ihjOWkhOeQhuOAgiDlh4blpIflpb3lkI7vvIzmgqjlsIbmlLbliLDpgJrnn6XjgIInLFxuICAgICAgICAgICAgcHQ6ICdBIGdyYXZhw6fDo28gZm9pIGNhcnJlZ2FkYSBjb20gc3VjZXNzbyBlIGVudmlhZGEgcGFyYSBwcm9jZXNzYW1lbnRvLiBWb2PDqiByZWNlYmVyw6EgdW1hIG5vdGlmaWNhw6fDo28gcXVhbmRvIGVzdGl2ZXIgcHJvbnRhLicsXG4gICAgICAgICAgICBiZzogJ9CX0LDQv9C40YHRitGCINC1INGD0YHQv9C10YjQvdC+INC60LDRh9C10L0g0Lgg0LjQt9C/0YDQsNGC0LXQvSDQt9CwINC+0LHRgNCw0LHQvtGC0LrQsC4g0KnQtSDQv9C+0LvRg9GH0LjRgtC1INC40LfQstC10YHRgtC40LUsINC60L7Qs9Cw0YLQviDQtSDQs9C+0YLQvtCyLicsXG4gICAgICAgICAgICBybzogJ8OObnJlZ2lzdHJhcmVhIGEgZm9zdCDDrm5jxINyY2F0xIMgY3Ugc3VjY2VzIMiZaSB0cmltaXPEgyBzcHJlIHByb2Nlc2FyZS4gVmXIm2kgcHJpbWkgbyBub3RpZmljYXJlIGPDom5kIGVzdGUgZ2F0YS4nXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3VwbG9hZF9jb21wbGV0ZV9ub3RpZnk6IHtcbiAgICAgICAgICAgIHJ1OiAn0JfQsNC/0LjRgdGMINGD0YHQv9C10YjQvdC+INC+0LHRgNCw0LHQvtGC0LDQvdCwINC4INCz0L7RgtC+0LLQsCDQuiDQv9GA0L7RgdC80L7RgtGA0YMhJyxcbiAgICAgICAgICAgIGVuOiAnVGhlIHJlY29yZGluZyBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIGFuZCBpcyByZWFkeSBmb3Igdmlld2luZyEnLFxuICAgICAgICAgICAgdWs6ICfQl9Cw0L/QuNGBINGD0YHQv9GW0YjQvdC+INC+0LHRgNC+0LHQu9C10L3QviDRliDQs9C+0YLQvtCy0LjQuSDQtNC+INC/0LXRgNC10LPQu9GP0LTRgyEnLFxuICAgICAgICAgICAgYmU6ICfQl9Cw0L/RltGBINC/0LDRgdC/0Y/RhdC+0LLQsCDQsNC/0YDQsNGG0LDQstCw0L3RiyDRliDQs9Cw0YLQvtCy0Ysg0LTQsCDQv9GA0LDQs9C70Y/QtNGDIScsXG4gICAgICAgICAgICB6aDogJ+W9lemfs+W3suaIkOWKn+WkhOeQhu+8jOWPr+S7peingueci++8gScsXG4gICAgICAgICAgICBwdDogJ0EgZ3JhdmHDp8OjbyBmb2kgcHJvY2Vzc2FkYSBjb20gc3VjZXNzbyBlIGVzdMOhIHByb250YSBwYXJhIHZpc3VhbGl6YcOnw6NvIScsXG4gICAgICAgICAgICBiZzogJ9CX0LDQv9C40YHRitGCINC1INGD0YHQv9C10YjQvdC+INC+0LHRgNCw0LHQvtGC0LXQvSDQuCDQs9C+0YLQvtCyINC30LAg0LPQu9C10LTQsNC90LUhJyxcbiAgICAgICAgICAgIHJvOiAnw45ucmVnaXN0cmFyZWEgYSBmb3N0IHByb2Nlc2F0xIMgY3Ugc3VjY2VzIMiZaSBlc3RlIGdhdGEgcGVudHJ1IHZpemlvbmFyZSEnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3VwbG9hZF9lcnJvcl9ub3RpZnk6IHtcbiAgICAgICAgICAgIHJ1OiAn0J3QtSDRg9C00LDQu9C+0YHRjCDQvtCx0YDQsNCx0L7RgtCw0YLRjCDQt9Cw0L/QuNGB0YwuJyxcbiAgICAgICAgICAgIGVuOiAnRmFpbGVkIHRvIHByb2Nlc3MgdGhlIHJlY29yZGluZy4nLFxuICAgICAgICAgICAgdWs6ICfQndC1INCy0LTQsNC70L7RgdGPINC+0LHRgNC+0LHQuNGC0Lgg0LfQsNC/0LjRgS4nLFxuICAgICAgICAgICAgYmU6ICfQndC1INGe0LTQsNC70L7RgdGPINCw0L/RgNCw0YbQsNCy0LDRhtGMINC30LDQv9GW0YEuJyxcbiAgICAgICAgICAgIHpoOiAn5peg5rOV5aSE55CG5b2V6Z+z44CCJyxcbiAgICAgICAgICAgIHB0OiAnRmFsaGEgYW8gcHJvY2Vzc2FyIGEgZ3JhdmHDp8Ojby4nLFxuICAgICAgICAgICAgYmc6ICfQndC10YPRgdC/0LXRiNC90LAg0L7QsdGA0LDQsdC+0YLQutCwINC90LAg0LfQsNC/0LjRgdCwLicsXG4gICAgICAgICAgICBybzogJ1Byb2Nlc2FyZWEgw65ucmVnaXN0csSDcmlpIGEgZciZdWF0LidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfdXBsb2FkX25vdGljZV90ZXh0OiB7XG4gICAgICAgICAgICBydTogJ9Ce0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+INC/0L7RgdC70LUg0L/Rg9Cx0LvQuNC60LDRhtC40Lgg0LfQsNC/0LjRgdGMINGB0YLQsNC90LXRgiDQtNC+0YHRgtGD0L/QvdCwINC00LvRjyDQv9GA0L7RgdC80L7RgtGA0LAg0LLRgdC10Lwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0Lwg0YHQtdGA0LLQuNGB0LAuJyxcbiAgICAgICAgICAgIGVuOiAnUGxlYXNlIG5vdGUgdGhhdCBhZnRlciBwdWJsaWNhdGlvbiwgdGhlIHJlY29yZGluZyB3aWxsIGJlIGF2YWlsYWJsZSBmb3Igdmlld2luZyBieSBhbGwgdXNlcnMgb2YgdGhlIHNlcnZpY2UuJyxcbiAgICAgICAgICAgIHVrOiAn0JfQstC10YDQvdGW0YLRjCDRg9Cy0LDQs9GDLCDRidC+INC/0ZbRgdC70Y8g0L/Rg9Cx0LvRltC60LDRhtGW0Zcg0LfQsNC/0LjRgSDRgdGC0LDQvdC1INC00L7RgdGC0YPQv9C90LjQuSDQtNC70Y8g0L/QtdGA0LXQs9C70Y/QtNGDINCy0YHRltC8INC60L7RgNC40YHRgtGD0LLQsNGH0LDQvCDRgdC10YDQstGW0YHRgy4nLFxuICAgICAgICAgICAgYmU6ICfQl9Cy0Y/RgNC90ZbRhtC1INGe0LLQsNCz0YMsINGI0YLQviDQv9Cw0YHQu9GPINC/0YPQsdC70ZbQutCw0YbRltGXINC30LDQv9GW0YEg0YHRgtCw0L3QtSDQtNCw0YHRgtGD0L/QvdGLINC00LvRjyDQv9GA0LDQs9C70Y/QtNGDINGe0YHRltC8INC60LDRgNGL0YHRgtCw0LvRjNC90ZbQutCw0Lwg0YHRjdGA0LLRltGB0YMuJyxcbiAgICAgICAgICAgIHpoOiAn6K+35rOo5oSP77yM5Y+R5biD5ZCO77yM5b2V6Z+z5bCG5a+55omA5pyJ5pyN5Yqh55So5oi35Y+v6KeB44CCJyxcbiAgICAgICAgICAgIHB0OiAnT2JzZXJ2ZSBxdWUsIGFww7NzIGEgcHVibGljYcOnw6NvLCBhIGdyYXZhw6fDo28gZXN0YXLDoSBkaXNwb27DrXZlbCBwYXJhIHZpc3VhbGl6YcOnw6NvIHBvciB0b2RvcyBvcyB1c3XDoXJpb3MgZG8gc2VydmnDp28uJyxcbiAgICAgICAgICAgIGJnOiAn0J7QsdGK0YDQvdC10YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9C1INGB0LvQtdC0INC/0YPQsdC70LjQutGD0LLQsNC90LXRgtC+INC30LDQv9C40YHQsCDRidC1INCx0YrQtNC1INC00L7RgdGC0YrQv9C10L0g0LfQsCDQv9GA0LXQs9C70LXQtCDQvtGCINCy0YHQuNGH0LrQuCDQv9C+0YLRgNC10LHQuNGC0LXQu9C4INC90LAg0YPRgdC70YPQs9Cw0YLQsC4nLFxuICAgICAgICAgICAgcm86ICdSZcibaW5lyJtpIGPEgywgZHVwxIMgcHVibGljYXJlLCDDrm5yZWdpc3RyYXJlYSB2YSBmaSBkaXNwb25pYmlsxIMgcGVudHJ1IHZpemlvbmFyZSB0dXR1cm9yIHV0aWxpemF0b3JpbG9yIHNlcnZpY2l1bHVpLidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfdGl0bGVfZmF2b3JpdGU6IHtcbiAgICAgICAgICAgIHJ1OiAn0KHQvtGF0YDQsNC90LXQvdC90YvQtScsXG4gICAgICAgICAgICBlbjogJ0Zhdm9yaXRlcycsXG4gICAgICAgICAgICB1azogJ9CX0LHQtdGA0LXQttC10L3RlicsXG4gICAgICAgICAgICBiZTogJ9CX0LDRhdCw0LLQsNC90YvRjycsXG4gICAgICAgICAgICB6aDogJ+aUtuiXj+WkuScsXG4gICAgICAgICAgICBwdDogJ0Zhdm9yaXRvcycsXG4gICAgICAgICAgICBiZzogJ9Cb0Y7QsdC40LzQuCcsXG4gICAgICAgICAgICBybzogJ0Zhdm9yaXRlJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c190aXRsZV9jcmVhdGVkOiB7XG4gICAgICAgICAgICBydTogJ9Ch0L7Qt9C00LDQvdC90YvQtScsXG4gICAgICAgICAgICBlbjogJ0NyZWF0ZWQnLFxuICAgICAgICAgICAgdWs6ICfQodGC0LLQvtGA0LXQvdGWJyxcbiAgICAgICAgICAgIGJlOiAn0KHRgtCy0L7RgNCw0L3Ri9GPJyxcbiAgICAgICAgICAgIHpoOiAn5bey5Yib5bu6JyxcbiAgICAgICAgICAgIHB0OiAnQ3JpYWRvJyxcbiAgICAgICAgICAgIGJnOiAn0KHRitC30LTQsNC00LXQvdC4JyxcbiAgICAgICAgICAgIHJvOiAnQ3JlYXRlJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c190aXRsZV9saWtlczoge1xuICAgICAgICAgICAgcnU6ICfQndGA0LDQstC40YLRgdGPJyxcbiAgICAgICAgICAgIGVuOiAnTGlrZXMnLFxuICAgICAgICAgICAgdWs6ICfQn9C+0LTQvtCx0LDRlNGC0YzRgdGPJyxcbiAgICAgICAgICAgIGJlOiAn0J/QsNC00LDQsdCw0LXRhtGG0LAnLFxuICAgICAgICAgICAgemg6ICfllpzmrKInLFxuICAgICAgICAgICAgcHQ6ICdDdXJ0aWRhcycsXG4gICAgICAgICAgICBiZzogJ9Cl0LDRgNC10YHQstCw0L3QuNGPJyxcbiAgICAgICAgICAgIHJvOiAnQXByZWNpZXJpJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c190aXRsZV9zYXZlZDoge1xuICAgICAgICAgICAgcnU6ICfQodC+0YXRgNCw0L3QtdC90L4nLFxuICAgICAgICAgICAgZW46ICdTYXZlZCcsXG4gICAgICAgICAgICB1azogJ9CX0LHQtdGA0LXQttC10L3QvicsXG4gICAgICAgICAgICBiZTogJ9CX0LDRhdCw0LLQsNC90LAnLFxuICAgICAgICAgICAgemg6ICflt7Lkv53lrZgnLFxuICAgICAgICAgICAgcHQ6ICdTYWx2bycsXG4gICAgICAgICAgICBiZzogJ9CX0LDQv9Cw0LfQtdC90L4nLFxuICAgICAgICAgICAgcm86ICdTYWx2YXRlJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19zdGF0dXNfZXJyb3I6IHtcbiAgICAgICAgICAgIHJ1OiAn0J7RiNC40LHQutCwJyxcbiAgICAgICAgICAgIGVuOiAnRXJyb3InLFxuICAgICAgICAgICAgdWs6ICfQn9C+0LzQuNC70LrQsCcsXG4gICAgICAgICAgICBiZTogJ9Cf0LDQvNGL0LvQutCwJyxcbiAgICAgICAgICAgIHpoOiAn6ZSZ6K+vJyxcbiAgICAgICAgICAgIHB0OiAnRXJybycsXG4gICAgICAgICAgICBiZzogJ9CT0YDQtdGI0LrQsCcsXG4gICAgICAgICAgICBybzogJ0Vyb2FyZSdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfc3RhdHVzX3Byb2Nlc3Npbmc6IHtcbiAgICAgICAgICAgIHJ1OiAn0J7QsdGA0LDQsdC+0YLQutCwJyxcbiAgICAgICAgICAgIGVuOiAnUHJvY2Vzc2luZycsXG4gICAgICAgICAgICB1azogJ9Ce0LHRgNC+0LHQutCwJyxcbiAgICAgICAgICAgIGJlOiAn0JDQv9GA0LDRhtC+0Z7QutCwJyxcbiAgICAgICAgICAgIHpoOiAn5aSE55CG5LitJyxcbiAgICAgICAgICAgIHB0OiAnUHJvY2Vzc2FuZG8nLFxuICAgICAgICAgICAgYmc6ICfQntCx0YDQsNCx0L7RgtC60LAnLFxuICAgICAgICAgICAgcm86ICdTZSBwcm9jZXNlYXrEgydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfc3RhdHVzX3JlYWR5OiB7XG4gICAgICAgICAgICBydTogJ9CX0LDQs9GA0YPQttC10L3QvicsXG4gICAgICAgICAgICBlbjogJ1JlYWR5JyxcbiAgICAgICAgICAgIHVrOiAn0JfQsNCy0LDQvdGC0LDQttC10L3QvicsXG4gICAgICAgICAgICBiZTogJ9CX0LDQs9GA0YPQttCw0L3QsCcsXG4gICAgICAgICAgICB6aDogJ+W3suWwsee7qicsXG4gICAgICAgICAgICBwdDogJ0NhcnJlZ2FkbycsXG4gICAgICAgICAgICBiZzogJ9Ca0LDRh9C10L3QvicsXG4gICAgICAgICAgICBybzogJ0dhdGEnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3N0YXR1c19ibG9ja2VkOiB7XG4gICAgICAgICAgICBydTogJ9CX0LDQsdC70L7QutC40YDQvtCy0LDQvdC+JyxcbiAgICAgICAgICAgIGVuOiAnQmxvY2tlZCcsXG4gICAgICAgICAgICB1azogJ9CX0LDQsdC70L7QutC+0LLQsNC90L4nLFxuICAgICAgICAgICAgYmU6ICfQl9Cw0LHQu9Cw0LrRltGA0LDQstCw0L3QsCcsXG4gICAgICAgICAgICB6aDogJ+W3suWwgemUgScsXG4gICAgICAgICAgICBwdDogJ0Jsb3F1ZWFkbycsXG4gICAgICAgICAgICBiZzogJ9CR0LvQvtC60LjRgNCw0L3QvicsXG4gICAgICAgICAgICBybzogJ0Jsb2NhdCdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfc3RhdHVzX2RlbGV0ZWQ6IHtcbiAgICAgICAgICAgIHJ1OiAn0KPQtNCw0LvQtdC90L4nLFxuICAgICAgICAgICAgZW46ICdEZWxldGVkJyxcbiAgICAgICAgICAgIHVrOiAn0JLQuNC00LDQu9C10L3QvicsXG4gICAgICAgICAgICBiZTogJ9CS0YvQtNCw0LvQtdC90LAnLFxuICAgICAgICAgICAgemg6ICflt7LliKDpmaQnLFxuICAgICAgICAgICAgcHQ6ICdFeGNsdcOtZG8nLFxuICAgICAgICAgICAgYmc6ICfQmNC30YLRgNC40YLQvicsXG4gICAgICAgICAgICBybzogJ8iYdGVycydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfZXJyb3JfcmVjb3JkaW5nX3R4dF8xOiB7XG4gICAgICAgICAgICBydTogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L3QsNGH0LDRgtGMINC30LDQv9C40YHRjC4nLFxuICAgICAgICAgICAgZW46ICdGYWlsZWQgdG8gc3RhcnQgcmVjb3JkaW5nLicsXG4gICAgICAgICAgICB1azogJ9Cd0LUg0LLQtNCw0LvQvtGB0Y8g0L/QvtGH0LDRgtC4INC30LDQv9C40YEuJyxcbiAgICAgICAgICAgIGJlOiAn0J3QtSDRntC00LDQu9C+0YHRjyDQv9Cw0YfQsNGG0Ywg0LfQsNC/0ZbRgS4nLFxuICAgICAgICAgICAgemg6ICfml6Dms5XlvIDlp4vlvZXliLbjgIInLFxuICAgICAgICAgICAgcHQ6ICdGYWxoYSBhbyBpbmljaWFyIGEgZ3JhdmHDp8Ojby4nLFxuICAgICAgICAgICAgYmc6ICfQndC10YPRgdC/0LXRiNC90L4g0YHRgtCw0YDRgtC40YDQsNC90LUg0L3QsCDQt9Cw0L/QuNGB0LAuJyxcbiAgICAgICAgICAgIHJvOiAnUG9ybmlyZWEgw65ucmVnaXN0csSDcmlpIGEgZciZdWF0LidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfZXJyb3JfcmVjb3JkaW5nX3R4dF8yOiB7XG4gICAgICAgICAgICBydTogJ9Cf0L7Qv9GA0L7QsdGD0LnRgtC1INGB0LzQtdC90LjRgtGMINC40YHRgtC+0YfQvdC40Log0LLQuNC00LXQviDQvdCwINC00YDRg9Cz0L7QuSDQuCDQv9C+0LLRgtC+0YDQuNGC0Ywg0L/QvtC/0YvRgtC60YMuJyxcbiAgICAgICAgICAgIGVuOiAnVHJ5IGNoYW5naW5nIHRoZSB2aWRlbyBzb3VyY2UgdG8gYW5vdGhlciBhbmQgdHJ5IGFnYWluLicsXG4gICAgICAgICAgICB1azogJ9Ch0L/RgNC+0LHRg9C50YLQtSDQt9C80ZbQvdC40YLQuCDQtNC20LXRgNC10LvQviDQstGW0LTQtdC+INC90LAg0ZbQvdGI0LUg0YLQsCDQv9C+0LLRgtC+0YDRltGC0Ywg0YHQv9GA0L7QsdGDLicsXG4gICAgICAgICAgICBiZTogJ9Cf0LDRgdC/0YDQsNCx0YPQudGG0LUg0LfQvNGP0L3RltGG0Ywg0LrRgNGL0L3RltGG0YMg0LLRltC00Y3QsCDQvdCwINGW0L3RiNGD0Y4g0ZYg0L/QsNGB0L/RgNCw0LHRg9C50YbQtSDRj9GI0YfRjSDRgNCw0LcuJyxcbiAgICAgICAgICAgIHpoOiAn5bCd6K+V5bCG6KeG6aKR5rqQ5pu05pS55Li65Y+m5LiA5Liq5bm26YeN6K+V44CCJyxcbiAgICAgICAgICAgIHB0OiAnVGVudGUgYWx0ZXJhciBhIGZvbnRlIGRlIHbDrWRlbyBwYXJhIG91dHJhIGUgdGVudGUgbm92YW1lbnRlLicsXG4gICAgICAgICAgICBiZzogJ9Ce0L/QuNGC0LDQudGC0LUg0LTQsCDRgdC80LXQvdC40YLQtSDQstC40LTQtdC+INC40LfRgtC+0YfQvdC40LrQsCDQvdCwINC00YDRg9CzINC4INC+0L/QuNGC0LDQudGC0LUg0L7RgtC90L7QstC+LicsXG4gICAgICAgICAgICBybzogJ8OObmNlcmNhyJtpIHPEgyBzY2hpbWJhyJtpIHN1cnNhIHZpZGVvIMiZaSByZcOubmNlcmNhyJtpLidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfYnV0dG9uX2dvb2Q6IHtcbiAgICAgICAgICAgIHJ1OiAn0KXQvtGA0L7RiNC+JyxcbiAgICAgICAgICAgIGVuOiAnRG9uZScsXG4gICAgICAgICAgICB1azogJ9CT0L7RgtC+0LLQvicsXG4gICAgICAgICAgICBiZTogJ9CT0LDRgtC+0LLQsCcsXG4gICAgICAgICAgICB6aDogJ+WujOaIkCcsXG4gICAgICAgICAgICBwdDogJ0NvbmNsdcOtZG8nLFxuICAgICAgICAgICAgYmc6ICfQk9C+0YLQvtCy0L4nLFxuICAgICAgICAgICAgcm86ICdHYXRhJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19idXR0b25fcmVwb3J0OiB7XG4gICAgICAgICAgICBydTogJ9Cf0L7QtNCw0YLRjCDQttCw0LvQvtCx0YMnLFxuICAgICAgICAgICAgZW46ICdSZXBvcnQnLFxuICAgICAgICAgICAgdWs6ICfQn9C+0YHQutCw0YDQttC40YLQuNGB0Y8nLFxuICAgICAgICAgICAgYmU6ICfQn9Cw0YHQutCw0YDQtNC30ZbRhtGG0LAnLFxuICAgICAgICAgICAgemg6ICfkuL7miqUnLFxuICAgICAgICAgICAgcHQ6ICdEZW51bmNpYXInLFxuICAgICAgICAgICAgYmc6ICfQlNC+0LrQu9Cw0LTQstCw0LknLFxuICAgICAgICAgICAgcm86ICdSYXBvcnRlYXrEgydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfYnV0dG9uX2RlbGV0ZV92aWRlbzoge1xuICAgICAgICAgICAgcnU6ICfQo9C00LDQu9C40YLRjCDQt9Cw0L/QuNGB0YwnLFxuICAgICAgICAgICAgZW46ICdEZWxldGUgcmVjb3JkaW5nJyxcbiAgICAgICAgICAgIHVrOiAn0JLQuNC00LDQu9C40YLQuCDQt9Cw0L/QuNGBJyxcbiAgICAgICAgICAgIGJlOiAn0JLQuNC00LDQu9GW0YbRjCDQt9Cw0L/RltGBJyxcbiAgICAgICAgICAgIHpoOiAn5Yig6Zmk5b2V6Z+zJyxcbiAgICAgICAgICAgIHB0OiAnRXhjbHVpciBncmF2YcOnw6NvJyxcbiAgICAgICAgICAgIGJnOiAn0JjQt9GC0YDQuNC5INC30LDQv9C40YHQsCcsXG4gICAgICAgICAgICBybzogJ8iYdGVyZ2Ugw65ucmVnaXN0cmFyZWEnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX21vZGFsX3JlcG9ydF90eHRfMToge1xuICAgICAgICAgICAgcnU6ICfQktGLINGD0LLQtdGA0LXQvdGLLCDRh9GC0L4g0YXQvtGC0LjRgtC1INC/0L7QtNCw0YLRjCDQttCw0LvQvtCx0YMg0L3QsCDRjdGC0L4gdmlkZW8/JyxcbiAgICAgICAgICAgIGVuOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlcG9ydCB0aGlzIHZpZGVvPycsXG4gICAgICAgICAgICB1azogJ9CS0Lgg0LLQv9C10LLQvdC10L3Rliwg0YnQviDRhdC+0YfQtdGC0LUg0L/QvtC00LDRgtC4INGB0LrQsNGA0LPRgyDQvdCwINGG0LUg0LLRltC00LXQvj8nLFxuICAgICAgICAgICAgYmU6ICfQktGLINGe0L/RjdGe0L3QtdC90YvRjywg0YjRgtC+INGF0L7Rh9Cw0YbQtSDQv9Cw0YHQutCw0YDQtNC30ZbRhtGG0LAg0L3QsCDQs9GN0YLQsCDQstGW0LTRjdCwPycsXG4gICAgICAgICAgICB6aDogJ+aCqOehruWumuimgeS4vuaKpeatpOinhumikeWQl++8nycsXG4gICAgICAgICAgICBwdDogJ1RlbSBjZXJ0ZXphIGRlIHF1ZSBkZXNlamEgZGVudW5jaWFyIGVzdGUgdsOtZGVvPycsXG4gICAgICAgICAgICBiZzogJ9Ch0LjQs9GD0YDQvdC4INC70Lgg0YHRgtC1LCDRh9C1INC40YHQutCw0YLQtSDQtNCwINC00L7QutC70LDQtNCy0LDRgtC1INGC0L7QstCwINCy0LjQtNC10L4/JyxcbiAgICAgICAgICAgIHJvOiAnU2lndXIgZG9yacibaSBzxIMgcmFwb3J0YcibaSBhY2VzdCB2aWRlb2NsaXA/J1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19tb2RhbF9yZXBvcnRfdHh0XzI6IHtcbiAgICAgICAgICAgIHJ1OiAn0JLQuNC00LXQviDQuNC80LXQtdGCINC90LXRhtC10L3Qt9GD0YDQvdC+0LUg0YHQvtC00LXRgNC20LDQvdC40LUsINC90LDRgdC40LvQuNC1INC40LvQuCDQtNGA0YPQs9C40LUg0L3QtdC/0YDQuNC10LzQu9C10LzRi9C1INC80LDRgtC10YDQuNCw0LvRiy4nLFxuICAgICAgICAgICAgZW46ICdUaGUgdmlkZW8gY29udGFpbnMgb2JzY2VuZSBjb250ZW50LCB2aW9sZW5jZSwgb3Igb3RoZXIgdW5hY2NlcHRhYmxlIG1hdGVyaWFscy4nLFxuICAgICAgICAgICAgdWs6ICfQktGW0LTQtdC+INC80ZbRgdGC0LjRgtGMINC90LXQv9GA0LjRgdGC0L7QudC90LjQuSDQutC+0L3RgtC10L3Rgiwg0L3QsNGB0LjQu9GM0YHRgtCy0L4g0LDQsdC+INGW0L3RiNGWINC90LXQv9GA0LjQudC90Y/RgtC90ZYg0LzQsNGC0LXRgNGW0LDQu9C4LicsXG4gICAgICAgICAgICBiZTogJ9CS0ZbQtNGN0LAg0LfQvNGP0YjRh9Cw0LUg0L3QtdC/0YDRi9GB0YLQvtC50L3RiyDQutCw0L3RgtGN0L3Rgiwg0LPQstCw0LvRgiDQsNCx0L4g0ZbQvdGI0YvRjyDQvdC10L/RgNGL0LzQsNC70YzQvdGL0Y8g0LzQsNGC0Y3RgNGL0Y/Qu9GLLicsXG4gICAgICAgICAgICB6aDogJ+ivpeinhumikeWMheWQq+a3q+enveWGheWuueOAgeaatOWKm+aIluWFtuS7luS4jeWPr+aOpeWPl+eahOadkOaWmeOAgicsXG4gICAgICAgICAgICBwdDogJ08gdsOtZGVvIGNvbnTDqW0gY29udGXDumRvIG9ic2Nlbm8sIHZpb2zDqm5jaWEgb3Ugb3V0cm9zIG1hdGVyaWFpcyBpbmFjZWl0w6F2ZWlzLicsXG4gICAgICAgICAgICBiZzogJ9CS0LjQtNC10L7RgtC+INGB0YrQtNGK0YDQttCwINC90LXQv9GA0LjRgdGC0L7QudC90L4g0YHRitC00YrRgNC20LDQvdC40LUsINC90LDRgdC40LvQuNC1INC40LvQuCDQtNGA0YPQs9C4INC90LXQv9GA0LjQtdC80LvQuNCy0Lgg0LzQsNGC0LXRgNC40LDQu9C4LicsXG4gICAgICAgICAgICBybzogJ1ZpZGVvY2xpcHVsIGNvbsibaW5lIGxpbWJhaiBvYnNjZW4sIHZpb2xlbsibxIMgc2F1IGFsdGUgbWF0ZXJpYWxlIGluYWNjZXB0YWJpbGUuJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19tb2RhbF9yZXBvcnRfdHh0XzM6IHtcbiAgICAgICAgICAgIHJ1OiAn0J/QvtGB0LvQtSDQv9C+0LTQsNGH0Lgg0LbQsNC70L7QsdGLINC00LDQvdC90L7QtSDQstC40LTQtdC+INC/0L7Qu9GD0YfQuNGCINGI0YLRgNCw0YTQvdGL0LUg0LHQsNC70LvRiy4g0J/RgNC4INC90LDQutC+0L/Qu9C10L3QuNC4INC+0L/RgNC10LTQtdC70LXQvdC90L7Qs9C+INC60L7Qu9C40YfQtdGB0YLQstCwINGI0YLRgNCw0YTQvdGL0YUg0LHQsNC70LvQvtCyINCy0LjQtNC10L4g0LHRg9C00LXRgiDRg9C00LDQu9C10L3Qvi4nLFxuICAgICAgICAgICAgZW46ICdBZnRlciByZXBvcnRpbmcsIHRoaXMgdmlkZW8gd2lsbCByZWNlaXZlIHBlbmFsdHkgcG9pbnRzLiBVcG9uIGFjY3VtdWxhdGluZyBhIGNlcnRhaW4gbnVtYmVyIG9mIHBlbmFsdHkgcG9pbnRzLCB0aGUgdmlkZW8gd2lsbCBiZSBkZWxldGVkLicsXG4gICAgICAgICAgICB1azogJ9Cf0ZbRgdC70Y8g0L/QvtC00LDQvdC90Y8g0YHQutCw0YDQs9C4INGG0LUg0LLRltC00LXQviDQvtGC0YDQuNC80LDRlCDRiNGC0YDQsNGE0L3RliDQsdCw0LvQuC4g0J/RgNC4INC90LDQutC+0L/QuNGH0LXQvdC90ZYg0L/QtdCy0L3QvtGXINC60ZbQu9GM0LrQvtGB0YLRliDRiNGC0YDQsNGE0L3QuNGFINCx0LDQu9GW0LIg0LLRltC00LXQviDQsdGD0LTQtSDQstC40LTQsNC70LXQvdC+LicsXG4gICAgICAgICAgICBiZTogJ9Cf0LDRgdC70Y8g0L/QsNC00LDRh9GLINGB0LrQsNGA0LPRliDQs9GN0YLQsCDQstGW0LTRjdCwINCw0YLRgNGL0LzQsNC1INGI0YLRgNCw0YTQvdGL0Y8g0LHQsNC70YsuINCf0YDRiyDQvdCw0LfQsNC/0LDRiNCy0LDQvdC90ZYg0L/RjdGe0L3QsNC5INC60L7Qu9GM0LrQsNGB0YbRliDRiNGC0YDQsNGE0L3Ri9GFINCx0LDQu9Cw0Z4g0LLRltC00Y3QsCDQsdGD0LTQt9C1INCy0YvQtNCw0LvQtdC90LAuJyxcbiAgICAgICAgICAgIHpoOiAn5Li+5oql5ZCO77yM6K+l6KeG6aKR5bCG6I635b6X5aSE572a5YiG5pWw44CCIOe0r+enr+S4gOWumuaVsOmHj+eahOWkhOe9muWIhuaVsOWQju+8jOinhumikeWwhuiiq+WIoOmZpOOAgicsXG4gICAgICAgICAgICBwdDogJ0Fww7NzIGEgZGVuw7puY2lhLCBlc3RlIHbDrWRlbyByZWNlYmVyw6EgcG9udG9zIGRlIHBlbmFsaWRhZGUuIEFvIGFjdW11bGFyIHVtIGNlcnRvIG7Dum1lcm8gZGUgcG9udG9zIGRlIHBlbmFsaWRhZGUsIG8gdsOtZGVvIHNlcsOhIGV4Y2x1w61kby4nLFxuICAgICAgICAgICAgYmc6ICfQodC70LXQtCDQtNC+0LrQu9Cw0LTQstCw0L3QtdGC0L4g0YLQvtCy0LAg0LLQuNC00LXQviDRidC1INC/0L7Qu9GD0YfQuCDQvdCw0LrQsNC30LDRgtC10LvQvdC4INGC0L7Rh9C60LguINCf0YDQuCDQvdCw0YLRgNGD0L/QstCw0L3QtSDQvdCwINC+0L/RgNC10LTQtdC70LXQvSDQsdGA0L7QuSDQvdCw0LrQsNC30LDRgtC10LvQvdC4INGC0L7Rh9C60Lgg0LLQuNC00LXQvtGC0L4g0YnQtSDQsdGK0LTQtSDQuNC30YLRgNC40YLQvi4nLFxuICAgICAgICAgICAgcm86ICdEdXDEgyByYXBvcnRhcmUsIGFjZXN0IHZpZGVvY2xpcCB2YSBwcmltaSBwdW5jdGUgZGUgcGVuYWxpemFyZS4gTGEgYWN1bXVsYXJlYSB1bnVpIGFudW1pdCBudW3Eg3IgZGUgcHVuY3RlLCB2aWRlb2NsaXB1bCB2YSBmaSDImXRlcnMuJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19tb2RhbF9yZXBvcnRfYmVsbDoge1xuICAgICAgICAgICAgcnU6ICfQltCw0LvQvtCx0LAg0L7RgtC/0YDQsNCy0LvQtdC90LAnLFxuICAgICAgICAgICAgZW46ICdSZXBvcnQgc3VibWl0dGVkJyxcbiAgICAgICAgICAgIHVrOiAn0KHQutCw0YDQs9CwINC90LDQtNGW0YHQu9Cw0L3QsCcsXG4gICAgICAgICAgICBiZTogJ9Ch0LrQsNGA0LPQsCDQsNC00L/RgNCw0Z7Qu9C10L3QsCcsXG4gICAgICAgICAgICB6aDogJ+S4vuaKpeW3suaPkOS6pCcsXG4gICAgICAgICAgICBwdDogJ0RlbsO6bmNpYSBlbnZpYWRhJyxcbiAgICAgICAgICAgIGJnOiAn0JTQvtC60LvQsNC00YrRgiDQtSDQuNC30L/RgNCw0YLQtdC9JyxcbiAgICAgICAgICAgIHJvOiAnUmFwb3J0dWwgYSBmb3N0IHRyaW1pcydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfcmVwb3J0X2JlbGxfYWxyZWFkeWVkOiB7XG4gICAgICAgICAgICBydTogJ9CS0Ysg0YPQttC1INC/0L7QtNCw0LLQsNC70Lgg0LbQsNC70L7QsdGDINC90LAg0Y3RgtC+INCy0LjQtNC10L4nLFxuICAgICAgICAgICAgZW46ICdZb3UgaGF2ZSBhbHJlYWR5IHJlcG9ydGVkIHRoaXMgdmlkZW8nLFxuICAgICAgICAgICAgdWs6ICfQktC4INCy0LbQtSDQv9C+0LTQsNCy0LDQu9C4INGB0LrQsNGA0LPRgyDQvdCwINGG0LUg0LLRltC00LXQvicsXG4gICAgICAgICAgICBiZTogJ9CS0Ysg0Z7QttC+INC/0LDQtNCw0LLQsNC70ZYg0YHQutCw0YDQs9GDINC90LAg0LPRjdGC0LAg0LLRltC00Y3QsCcsXG4gICAgICAgICAgICB6aDogJ+aCqOW3suS4vuaKpeatpOinhumikScsXG4gICAgICAgICAgICBwdDogJ1ZvY8OqIGrDoSBkZW51bmNpb3UgZXN0ZSB2w61kZW8nLFxuICAgICAgICAgICAgYmc6ICfQktC10YfQtSDRgdGC0LUg0LTQvtC60LvQsNC00LLQsNC70Lgg0YLQvtCy0LAg0LLQuNC00LXQvicsXG4gICAgICAgICAgICBybzogJ0HIm2kgcmFwb3J0YXQgZGVqYSBhY2VzdCB2aWRlb2NsaXAnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX21vZGFsX2RlbGV0ZWRfYmVsbDoge1xuICAgICAgICAgICAgcnU6ICfQl9Cw0L/QuNGB0Ywg0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC90LAnLFxuICAgICAgICAgICAgZW46ICdSZWNvcmRpbmcgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQnLFxuICAgICAgICAgICAgdWs6ICfQl9Cw0L/QuNGBINGD0YHQv9GW0YjQvdC+INCy0LjQtNCw0LvQtdC90L4nLFxuICAgICAgICAgICAgYmU6ICfQl9Cw0L/RltGBINC/0LDRgdC/0Y/RhdC+0LLQsCDQstGL0LTQsNC70LXQvdGLJyxcbiAgICAgICAgICAgIHpoOiAn5b2V6Z+z5bey5oiQ5Yqf5Yig6ZmkJyxcbiAgICAgICAgICAgIHB0OiAnR3JhdmHDp8OjbyBleGNsdcOtZGEgY29tIHN1Y2Vzc28nLFxuICAgICAgICAgICAgYmc6ICfQl9Cw0L/QuNGB0YrRgiDQtSDRg9GB0L/QtdGI0L3QviDQuNC30YLRgNC40YInLFxuICAgICAgICAgICAgcm86ICfDjm5yZWdpc3RyYXJlYSBhIGZvc3QgyJl0ZWFyc8SDIGN1IHN1Y2NlcydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfZGVsZXRlX3R4dF8xOiB7XG4gICAgICAgICAgICBydTogJ9CS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0Y3RgtGDINC30LDQv9C40YHRjD8nLFxuICAgICAgICAgICAgZW46ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkaW5nPycsXG4gICAgICAgICAgICB1azogJ9CS0Lgg0LLQv9C10LLQvdC10L3Rliwg0YnQviDRhdC+0YfQtdGC0LUg0LLQuNC00LDQu9C40YLQuCDRhtC10Lkg0LfQsNC/0LjRgT8nLFxuICAgICAgICAgICAgYmU6ICfQktGLINGe0L/RjdGe0L3QtdC90YvRjywg0YjRgtC+INGF0L7Rh9Cw0YbQtSDQstGL0LTQsNC70ZbRhtGMINCz0Y3RgtGLINC30LDQv9GW0YE/JyxcbiAgICAgICAgICAgIHpoOiAn5oKo56Gu5a6a6KaB5Yig6Zmk5q2k5b2V6Z+z5ZCX77yfJyxcbiAgICAgICAgICAgIHB0OiAnVGVtIGNlcnRlemEgZGUgcXVlIGRlc2VqYSBleGNsdWlyIGVzdGEgZ3JhdmHDp8Ojbz8nLFxuICAgICAgICAgICAgYmc6ICfQodC40LPRg9GA0L3QuCDQu9C4INGB0YLQtSwg0YfQtSDQuNGB0LrQsNGC0LUg0LTQsCDQuNC30YLRgNC40LXRgtC1INGC0L7Qt9C4INC30LDQv9C40YE/JyxcbiAgICAgICAgICAgIHJvOiAnU2lndXIgZG9yacibaSBzxIMgyJl0ZXJnZcibaSBhY2Vhc3TEgyDDrm5yZWdpc3RyYXJlPydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfZGVsZXRlX3R4dF8yOiB7XG4gICAgICAgICAgICBydTogJ9CX0LDQv9C40YHRjCDQsdGD0LTQtdGCINGD0LTQsNC70LXQvdCwINC90LDQstGB0LXQs9C00LAg0Lgg0L3QtSDRgdC80L7QttC10YIg0LHRi9GC0Ywg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LAuJyxcbiAgICAgICAgICAgIGVuOiAnVGhlIHJlY29yZGluZyB3aWxsIGJlIHBlcm1hbmVudGx5IGRlbGV0ZWQgYW5kIGNhbm5vdCBiZSByZWNvdmVyZWQuJyxcbiAgICAgICAgICAgIHVrOiAn0JfQsNC/0LjRgSDQsdGD0LTQtSDQvdCw0LfQsNCy0LbQtNC4INCy0LjQtNCw0LvQtdC90L4g0ZYg0L3QtSDQvNC+0LbQtSDQsdGD0YLQuCDQstGW0LTQvdC+0LLQu9C10L3Qvi4nLFxuICAgICAgICAgICAgYmU6ICfQl9Cw0L/RltGBINCx0YPQtNC30LUg0L3QsNC30LDRntC20LTRiyDQstGL0LTQsNC70LXQvdGLINGWINC90LUg0LzQvtC20LAg0LHRi9GG0Ywg0LDQtNC90L7RntC70LXQvdGLLicsXG4gICAgICAgICAgICB6aDogJ+W9lemfs+Wwhuiiq+awuOS5heWIoOmZpO+8jOaXoOazleaBouWkjeOAgicsXG4gICAgICAgICAgICBwdDogJ0EgZ3JhdmHDp8OjbyBzZXLDoSBleGNsdcOtZGEgcGVybWFuZW50ZW1lbnRlIGUgbsOjbyBwb2RlcsOhIHNlciByZWN1cGVyYWRhLicsXG4gICAgICAgICAgICBiZzogJ9CX0LDQv9C40YHRitGCINGJ0LUg0LHRitC00LUg0LjQt9GC0YDQuNGCINC30LDQstC40L3QsNCz0Lgg0Lgg0L3QtSDQvNC+0LbQtSDQtNCwINCx0YrQtNC1INCy0YrQt9GB0YLQsNC90L7QstC10L0uJyxcbiAgICAgICAgICAgIHJvOiAnw45ucmVnaXN0cmFyZWEgdmEgZmkgyJl0ZWFyc8SDIGRlZmluaXRpdiDImWkgbnUgcG9hdGUgZmkgcmVjdXBlcmF0xIMuJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19tb2RhbF9xdW90YV90eHRfMToge1xuICAgICAgICAgICAgcnU6ICfQndC1INGC0L7RgNC+0L/QuNGC0LXRgdGMINC30LDQv9C40YHRi9Cy0LDRgtGMINC90L7QstGL0Lkg0LzQvtC80LXQvdGCIScsXG4gICAgICAgICAgICBlbjogJ0RvblxcJ3QgcnVzaCB0byByZWNvcmQgYSBuZXcgbW9tZW50IScsXG4gICAgICAgICAgICB1azogJ9Cd0LUg0L/QvtGB0L/RltGI0LDQudGC0LUg0LfQsNC/0LjRgdGD0LLQsNGC0Lgg0L3QvtCy0LjQuSDQvNC+0LzQtdC90YIhJyxcbiAgICAgICAgICAgIGJlOiAn0J3QtSDRgdC/0Y/RiNCw0LnRhtC10YHRjyDQt9Cw0L/RltGB0LLQsNGG0Ywg0L3QvtCy0Ysg0LzQvtC80LDQvdGCIScsXG4gICAgICAgICAgICB6aDogJ+S4jeimgeaApeS6juiusOW9leaWsOaXtuWIu++8gScsXG4gICAgICAgICAgICBwdDogJ07Do28gc2UgYXByZXNzZSBwYXJhIGdyYXZhciB1bSBub3ZvIG1vbWVudG8hJyxcbiAgICAgICAgICAgIGJnOiAn0J3QtSDQsdGK0YDQt9Cw0LnRgtC1INC00LAg0LfQsNC/0LjRgdCy0LDRgtC1INC90L7QsiDQvNC+0LzQtdC90YIhJyxcbiAgICAgICAgICAgIHJvOiAnTnUgdsSDIGdyxINiacibaSBzxIMgw65ucmVnaXN0cmHIm2kgdW4gbW9tZW50IG5vdSEnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX21vZGFsX3F1b3RhX3R4dF8yOiB7XG4gICAgICAgICAgICBydTogJ9CU0LXQudGB0YLQstGD0Y7RgtGB0Y8g0L7Qs9GA0LDQvdC40YfQtdC90LjRjyDQvdCwINGH0LDRgdGC0L7RgtGDINC30LDQv9C40YHQuCwg0YfRgtC+0LHRiyDQuNC30LHQtdC20LDRgtGMINC/0LXRgNC10LPRgNGD0LfQutC4INGB0LXRgNCy0LjRgdCwLiDQktCw0Lwg0L3Rg9C20L3QviDQv9C+0LTQvtC20LTQsNGC0Ywg0LXRidC1IHt0aW1lfScsXG4gICAgICAgICAgICBlbjogJ1RoZXJlIGFyZSByZXN0cmljdGlvbnMgb24gdGhlIGZyZXF1ZW5jeSBvZiByZWNvcmRpbmcgdG8gYXZvaWQgb3ZlcmxvYWRpbmcgdGhlIHNlcnZpY2UuIFlvdSBuZWVkIHRvIHdhaXQgYW5vdGhlciB7dGltZX0nLFxuICAgICAgICAgICAgdWs6ICfQhtGB0L3Rg9GO0YLRjCDQvtCx0LzQtdC20LXQvdC90Y8g0L3QsCDRh9Cw0YHRgtC+0YLRgyDQt9Cw0L/QuNGB0YMsINGJ0L7QsSDRg9C90LjQutC90YPRgtC4INC/0LXRgNC10LLQsNC90YLQsNC20LXQvdC90Y8g0YHQtdGA0LLRltGB0YMuINCS0LDQvCDQv9C+0YLRgNGW0LHQvdC+INC/0L7Rh9C10LrQsNGC0Lgg0YnQtSB7dGltZX0nLFxuICAgICAgICAgICAgYmU6ICfQhtGB0L3Rg9GO0YbRjCDQsNCx0LzQtdC20LDQstCw0L3QvdGWINC90LAg0YfQsNGB0YLQsNGC0YMg0LfQsNC/0ZbRgdGDLCDQutCw0LEg0L/QsNC30LHQtdCz0L3Rg9GG0Ywg0L/QtdGA0LDQs9GA0YPQt9C60ZYg0YHRjdGA0LLRltGB0YMuINCS0LDQvCDRgtGA0Y3QsdCwINC/0LDRh9Cw0LrQsNGG0Ywg0Y/RiNGH0Y0ge3RpbWV9JyxcbiAgICAgICAgICAgIHpoOiAn5a+55b2V6Z+z6aKR546H5pyJ5LiA5a6a6ZmQ5Yi277yM5Lul6YG/5YWN5pyN5Yqh6L+H6L2944CCIOaCqOmcgOimgeWGjeetiSB7dGltZX0nLFxuICAgICAgICAgICAgcHQ6ICdFeGlzdGVtIHJlc3RyacOnw7VlcyBuYSBmcmVxdcOqbmNpYSBkZSBncmF2YcOnw6NvIHBhcmEgZXZpdGFyIHNvYnJlY2FycmVnYXIgbyBzZXJ2acOnby4gVm9jw6ogcHJlY2lzYSBlc3BlcmFyIG1haXMge3RpbWV9JyxcbiAgICAgICAgICAgIGJnOiAn0JjQvNCwINC+0LPRgNCw0L3QuNGH0LXQvdC40Y8g0LfQsCDRh9C10YHRgtC+0YLQsNGC0LAg0L3QsCDQt9Cw0L/QuNGBLCDQt9CwINC00LAg0YHQtSDQuNC30LHQtdCz0L3QtSDQv9GA0LXRgtC+0LLQsNGA0LLQsNC90LUg0L3QsCDRg9GB0LvRg9Cz0LDRgtCwLiDQotGA0Y/QsdCy0LAg0LTQsCDQuNC30YfQsNC60LDRgtC1INC+0YnQtSB7dGltZX0nLFxuICAgICAgICAgICAgcm86ICdFeGlzdMSDIHJlc3RyaWPIm2lpIHByaXZpbmQgZnJlY3ZlbsibYSDDrm5yZWdpc3RyxINyaWxvci4gVHJlYnVpZSBzxIMgbWFpIGHImXRlcHRhyJtpIHt0aW1lfSdcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfbW9kYWxfYmVmb3JlX3VwbG9hZF9yZWNvcmRpbmdfdHh0XzE6IHtcbiAgICAgICAgICAgIHJ1OiAn0JHRg9C00YzRgtC1INC+0YDQuNCz0LDQvdCw0LvRjNC90YshJyxcbiAgICAgICAgICAgIGVuOiAnQmUgb3JpZ2luYWwhJyxcbiAgICAgICAgICAgIHVrOiAn0JHRg9C00YzRgtC1INC+0YDQuNCz0ZbQvdCw0LvRjNC90LjQvNC4IScsXG4gICAgICAgICAgICBiZTogJ9CR0YPQtNC30YzRhtC1INCw0YDRi9Cz0ZbQvdCw0LvRjNC90YvQvNGWIScsXG4gICAgICAgICAgICB6aDogJ+imgeacieWIm+aEj++8gScsXG4gICAgICAgICAgICBwdDogJ1NlamEgb3JpZ2luYWwhJyxcbiAgICAgICAgICAgIGJnOiAn0JHRitC00LXRgtC1INC+0YDQuNCz0LjQvdCw0LvQvdC4IScsXG4gICAgICAgICAgICBybzogJ0ZpaSBvcmlnaW5hbCEnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX21vZGFsX2JlZm9yZV91cGxvYWRfcmVjb3JkaW5nX3R4dF8yOiB7XG4gICAgICAgICAgICBydTogJ9Cf0L7RhdC+0LbQtSwg0LLRiyDQt9Cw0L/QuNGB0LDQu9C4IFwi0YLQuNGC0YDRi1wiINCyINC90LDRh9Cw0LvQtSDQuNC70Lgg0LIg0LrQvtC90YbQtSDRhNC40LvRjNC80LAuINCV0YHQu9C4INGN0YLQviDRgtCw0LosINGC0L4g0L/QvtC20LDQu9GD0LnRgdGC0LAsINCy0YvQsdC10YDQuNGC0LUg0LTRgNGD0LPQvtC5INGE0YDQsNCz0LzQtdC90YIg0LLQuNC00LXQviDQtNC70Y8g0LfQsNC/0LjRgdC4LicsXG4gICAgICAgICAgICBlbjogJ0l0IGxvb2tzIGxpa2UgeW91IHJlY29yZGVkIHRoZSBcImNyZWRpdHNcIiBhdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgbW92aWUuIElmIHNvLCBwbGVhc2UgY2hvb3NlIGFub3RoZXIgdmlkZW8gZnJhZ21lbnQgdG8gcmVjb3JkLicsXG4gICAgICAgICAgICB1azogJ9Ch0YXQvtC20LUsINCy0Lgg0LfQsNC/0LjRgdCw0LvQuCBcItGC0LjRgtGA0LhcIiDQvdCwINC/0L7Rh9Cw0YLQutGDINCw0LHQviDQsiDQutGW0L3RhtGWINGE0ZbQu9GM0LzRgy4g0K/QutGJ0L4g0YLQsNC6LCDQsdGD0LTRjCDQu9Cw0YHQutCwLCDQstC40LHQtdGA0ZbRgtGMINGW0L3RiNC40Lkg0YTRgNCw0LPQvNC10L3RgiDQstGW0LTQtdC+INC00LvRjyDQt9Cw0L/QuNGB0YMuJyxcbiAgICAgICAgICAgIGJlOiAn0J/QsNC00LDQtdGG0YbQsCwg0LLRiyDQt9Cw0L/RltGB0LDQu9GWIFwi0YLRgNGN0LnQu9C10YBcIiDQvdCwINC/0LDRh9Cw0YLQutGDINCw0LHQviDRniDQutCw0L3RhtGLINGE0ZbQu9GM0LzQsC4g0JrQsNC70ZYg0YLQsNC6LCDQutCw0LvRliDQu9Cw0YHQutCwLCDQstGL0LHQtdGA0YvRhtC1INGW0L3RiNGLINGE0YDQsNCz0LzQtdC90YIg0LLRltC00Y3QsCDQtNC70Y8g0LfQsNC/0ZbRgdGDLicsXG4gICAgICAgICAgICB6aDogJ+eci+i1t+adpeaCqOWcqOeUteW9seeahOW8gOWktOaIlue7k+WwvuW9leWItuS6huKAnOeJh+WwvuWtl+W5leKAneOAgiDlpoLmnpzmmK/ov5nmoLfvvIzor7fpgInmi6nlj6bkuIDkuKrop4bpopHniYfmrrXov5vooYzlvZXliLbjgIInLFxuICAgICAgICAgICAgcHQ6ICdQYXJlY2UgcXVlIHZvY8OqIGdyYXZvdSBvcyBcImNyw6lkaXRvc1wiIG5vIGluw61jaW8gb3Ugbm8gZmluYWwgZG8gZmlsbWUuIFNlIGZvciBlc3NlIG8gY2FzbywgZXNjb2xoYSBvdXRybyBmcmFnbWVudG8gZGUgdsOtZGVvIHBhcmEgZ3JhdmFyLicsXG4gICAgICAgICAgICBiZzogJ9CY0LfQs9C70LXQttC00LAg0YHRgtC1INC30LDQv9C40YHQsNC70LggXCLRgtC40YLRgNC40YLQtVwiINCyINC90LDRh9Cw0LvQvtGC0L4g0LjQu9C4INCyINC60YDQsNGPINC90LAg0YTQuNC70LzQsC4g0JDQutC+INC1INGC0LDQutCwLCDQvNC+0LvRjyDQuNC30LHQtdGA0LXRgtC1INC00YDRg9CzINGE0YDQsNCz0LzQtdC90YIg0L7RgiDQstC40LTQtdC+0YLQviDQt9CwINC30LDQv9C40YEuJyxcbiAgICAgICAgICAgIHJvOiAnU2UgcGFyZSBjxIMgYcibaSDDrm5yZWdpc3RyYXQg4oCeY3JlZGl0ZWxl4oCdIGxhIMOubmNlcHV0dWwgc2F1IHNmw6JyyJlpdHVsIGZpbG11bHVpLiBEYWPEgyBkYSwgdsSDIHJ1Z8SDbSBzxIMgYWxlZ2XIm2kgdW4gYWx0IGZyYWdtZW50IHZpZGVvIHBlbnRydSDDrm5yZWdpc3RyYXJlLidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfYnV0dG9uX2Nob2ljZV9mcmFnbWVudDoge1xuICAgICAgICAgICAgcnU6ICfQktGL0LHRgNCw0YLRjCDQtNGA0YPQs9C+0Lkg0YTRgNCw0LPQvNC10L3RgicsXG4gICAgICAgICAgICBlbjogJ0Nob29zZSBhbm90aGVyIGZyYWdtZW50JyxcbiAgICAgICAgICAgIHVrOiAn0JLQuNCx0YDQsNGC0Lgg0ZbQvdGI0LjQuSDRhNGA0LDQs9C80LXQvdGCJyxcbiAgICAgICAgICAgIGJlOiAn0JLRi9Cx0YDQsNGG0Ywg0ZbQvdGI0Ysg0YTRgNCw0LPQvNC10L3RgicsXG4gICAgICAgICAgICB6aDogJ+mAieaLqeWPpuS4gOS4queJh+autScsXG4gICAgICAgICAgICBwdDogJ0VzY29saGVyIG91dHJvIGZyYWdtZW50bycsXG4gICAgICAgICAgICBiZzogJ9CY0LfQsdC10YDQuCDQtNGA0YPQsyDRhNGA0LDQs9C80LXQvdGCJyxcbiAgICAgICAgICAgIHJvOiAnQWxlZ2UgdW4gYWx0IGZyYWdtZW50J1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19idXR0b25fY29udGludWVfdXBsb2FkOiB7XG4gICAgICAgICAgICBydTogJ9Cf0YDQvtC00L7Qu9C20LjRgtGMINC30LDQs9GA0YPQt9C60YMnLFxuICAgICAgICAgICAgZW46ICdDb250aW51ZSB1cGxvYWRpbmcnLFxuICAgICAgICAgICAgdWs6ICfQn9GA0L7QtNC+0LLQttC40YLQuCDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8nLFxuICAgICAgICAgICAgYmU6ICfQn9GA0LDRhtGP0LPQvdGD0YbRjCDQt9Cw0LPRgNGD0LfQutGDJyxcbiAgICAgICAgICAgIHpoOiAn57un57ut5LiK5LygJyxcbiAgICAgICAgICAgIHB0OiAnQ29udGludWFyIGVudmlhbmRvJyxcbiAgICAgICAgICAgIGJnOiAn0J/RgNC+0LTRitC70LbQuCDQutCw0YfQstCw0L3QtdGC0L4nLFxuICAgICAgICAgICAgcm86ICdDb250aW51YcibaSDDrm5jxINyY2FyZWEnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3JlY29yZGluZ190ZXh0OiB7XG4gICAgICAgICAgICBydTogJ9CY0LTQtdGCINC30LDQv9C40YHRjCcsXG4gICAgICAgICAgICBlbjogJ1JlY29yZGluZyBpbiBwcm9ncmVzcycsXG4gICAgICAgICAgICB1azogJ9CZ0LTQtSDQt9Cw0L/QuNGBJyxcbiAgICAgICAgICAgIGJlOiAn0IbQtNC30LUg0LfQsNC/0ZbRgScsXG4gICAgICAgICAgICB6aDogJ+ato+WcqOW9leWIticsXG4gICAgICAgICAgICBwdDogJ0dyYXZhw6fDo28gZW0gYW5kYW1lbnRvJyxcbiAgICAgICAgICAgIGJnOiAn0JfQsNC/0LjRgdGK0YIg0LUg0LIg0YXQvtC0JyxcbiAgICAgICAgICAgIHJvOiAnw45ucmVnaXN0cmFyZSDDrm4gY3VycydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfd2F0Y2g6IHtcbiAgICAgICAgICAgIHJ1OiAn0KHQvNC+0YLRgNC10YLRjCDQvdCw0YDQtdC30LrQuCcsXG4gICAgICAgICAgICBlbjogJ1dhdGNoIHNob3RzJyxcbiAgICAgICAgICAgIHVrOiAn0JTQuNCy0LjRgtC40YHRjyDQvdCw0YDRltC30LrQuCcsXG4gICAgICAgICAgICBiZTogJ9CT0LvRj9C00LfQtdGG0Ywg0L3QsNGA0Y3Qt9C60ZYnLFxuICAgICAgICAgICAgemg6ICfop4LnnIvniYfmrrUnLFxuICAgICAgICAgICAgcHQ6ICdBc3Npc3RpciB0cmVjaG9zJyxcbiAgICAgICAgICAgIGJnOiAn0JPQu9C10LTQsNC50YLQtSDQvdCw0YDRj9C30LrQuCcsXG4gICAgICAgICAgICBybzogJ1ZpemlvbmVhesSDIGNsaXB1cmknXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX2Rvd246IHtcbiAgICAgICAgICAgIHJ1OiAn0J3QsNC20LzQuCDQstC90LjQtycsXG4gICAgICAgICAgICBlbjogJ1ByZXNzIGRvd24nLFxuICAgICAgICAgICAgdWs6ICfQndCw0YLQuNGB0L3QuCDQstC90LjQtycsXG4gICAgICAgICAgICBiZTogJ9Cd0LDRhtGW0YHQvdGWINGe0L3RltC3JyxcbiAgICAgICAgICAgIHpoOiAn5oyJ5LiLJyxcbiAgICAgICAgICAgIHB0OiAnUHJlc3Npb25lIHBhcmEgYmFpeG8nLFxuICAgICAgICAgICAgYmc6ICfQndCw0YLQuNGB0L3QuCDQvdCw0LTQvtC70YMnLFxuICAgICAgICAgICAgcm86ICdBcGFzxIMgam9zJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19ob3dfY3JlYXRlX3ZpZGVvX3RpdGxlOiB7XG4gICAgICAgICAgICBydTogJ9Ca0LDQuiDRgdC+0LfQtNCw0YLRjCDQstC40LTQtdC+JyxcbiAgICAgICAgICAgIGVuOiAnSG93IHRvIGNyZWF0ZSBhIHZpZGVvJyxcbiAgICAgICAgICAgIHVrOiAn0K/QuiDRgdGC0LLQvtGA0LjRgtC4INCy0ZbQtNC10L4nLFxuICAgICAgICAgICAgYmU6ICfQr9C6INGB0YLQstCw0YDRi9GG0Ywg0LLRltC00Y3QsCcsXG4gICAgICAgICAgICB6aDogJ+WmguS9leWIm+W7uuinhumikScsXG4gICAgICAgICAgICBwdDogJ0NvbW8gY3JpYXIgdW0gdsOtZGVvJyxcbiAgICAgICAgICAgIGJnOiAn0JrQsNC6INC00LAg0YHRitC30LTQsNC00LXRgtC1INCy0LjQtNC10L4nLFxuICAgICAgICAgICAgcm86ICdDdW0gc8SDIGNyZWV6aSB1biB2aWRlb2NsaXAnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX2hvd19jcmVhdGVfdmlkZW9fc3VidGl0bGU6IHtcbiAgICAgICAgICAgIHJ1OiAn0J/QvtGB0LzQvtGC0YDQtdGC0Ywg0LjQvdGB0YLRgNGD0LrRhtC40Y4g0L/QviDRgdC+0LfQtNCw0L3QuNGOINCy0LjQtNC10L4nLFxuICAgICAgICAgICAgZW46ICdWaWV3IGluc3RydWN0aW9ucyBmb3IgY3JlYXRpbmcgYSB2aWRlbycsXG4gICAgICAgICAgICB1azogJ9Cf0LXRgNC10LPQu9GP0L3Rg9GC0Lgg0ZbQvdGB0YLRgNGD0LrRhtGW0Y4g0LfRliDRgdGC0LLQvtGA0LXQvdC90Y8g0LLRltC00LXQvicsXG4gICAgICAgICAgICBiZTogJ9Cf0LDQs9C70Y/QtNC30LXRhtGMINGW0L3RgdGC0YDRg9C60YbRltGOINC/0LAg0YHRgtCy0LDRgNGN0L3QvdGWINCy0ZbQtNGN0LAnLFxuICAgICAgICAgICAgemg6ICfmn6XnnIvliJvlu7rop4bpopHnmoTor7TmmI4nLFxuICAgICAgICAgICAgcHQ6ICdWZXIgaW5zdHJ1Y2Npb25lcyBwYXJhIGNyaWFyIHVtIHbDrWRlbycsXG4gICAgICAgICAgICBiZzogJ9CS0LjQttGC0LUg0LjQvdGB0YLRgNGD0LrRhtC40LjRgtC1INC30LAg0YHRitC30LTQsNCy0LDQvdC1INC90LAg0LLQuNC00LXQvicsXG4gICAgICAgICAgICBybzogJ1ZlemkgaW5zdHJ1Y8ibaXVuaWxlIHBlbnRydSBjcmVhcmVhIHVudWkgdmlkZW9jbGlwJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19jYXJkX2VtcHR5X2Rlc2NyOiB7XG4gICAgICAgICAgICBydTogJ9CX0LTQtdGB0Ywg0L/QvtC60LAg0L3QtdGCINGI0L7RgtC+0LIsINC90L4g0LLRiyDQvNC+0LbQtdGC0LUg0YHQvtC30LTQsNGC0Ywg0L/QtdGA0LLRi9C5IScsXG4gICAgICAgICAgICBlbjogJ1RoZXJlIGFyZSBubyBzaG90cyBoZXJlIHlldCwgYnV0IHlvdSBjYW4gY3JlYXRlIHRoZSBmaXJzdCBvbmUhJyxcbiAgICAgICAgICAgIHVrOiAn0KLRg9GCINC/0L7QutC4INC90LXQvNCw0ZQg0YjQvtGC0ZbQsiwg0LDQu9C1INCy0Lgg0LzQvtC20LXRgtC1INGB0YLQstC+0YDQuNGC0Lgg0L/QtdGA0YjQuNC5IScsXG4gICAgICAgICAgICBiZTogJ9Ci0YPRgiDQv9Cw0LrRg9C70Ywg0L3Rj9C80LAg0YjQvtGC0LDRniwg0LDQu9C1INCy0Ysg0LzQvtC20LXRgtC1INGB0YLQstCw0YDRi9GG0Ywg0L/QtdGA0YjRiyEnLFxuICAgICAgICAgICAgemg6ICfov5nph4zov5jmsqHmnInplZzlpLTvvIzkvYbmgqjlj6/ku6XliJvlu7rnrKzkuIDkuKrvvIEnLFxuICAgICAgICAgICAgcHQ6ICdBaW5kYSBuw6NvIGjDoSB0cmVjaG9zIGFxdWksIG1hcyB2b2PDqiBwb2RlIGNyaWFyIG8gcHJpbWVpcm8hJyxcbiAgICAgICAgICAgIGJnOiAn0KLRg9C6INCy0YHQtSDQvtGJ0LUg0L3Rj9C80LAg0L3QsNGA0Y/Qt9C60LgsINC90L4g0LzQvtC20LXRgtC1INC00LAg0YHRitC30LTQsNC00LXRgtC1INC/0YrRgNCy0LjRjyEnLFxuICAgICAgICAgICAgcm86ICdOdSBleGlzdMSDIGNsaXB1cmkgYWljaSwgZGFyIHBvyJtpIHPEgy1sIGNyZWV6aSBwZSBwcmltdWwhJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c19hbGVydF9ub3Nob3RzOiB7XG4gICAgICAgICAgICBydTogJ9Co0L7RgtC+0LIg0L/QvtC60LAg0L3QtdGCJyxcbiAgICAgICAgICAgIGVuOiAnTm8gc2hvdHMgeWV0JyxcbiAgICAgICAgICAgIHVrOiAn0KjQvtGC0ZbQsiDQv9C+0LrQuCDQvdC10LzQsNGUJyxcbiAgICAgICAgICAgIGJlOiAn0KjQvtGC0LDRniDQv9Cw0LrRg9C70Ywg0L3Rj9C80LAnLFxuICAgICAgICAgICAgemg6ICfov5jmsqHmnInplZzlpLQnLFxuICAgICAgICAgICAgcHQ6ICdBaW5kYSBuw6NvIGjDoSB0cmVjaG9zJyxcbiAgICAgICAgICAgIGJnOiAn0JLRgdC1INC+0YnQtSDQvdGP0LzQsCDQvdCw0YDRj9C30LrQuCcsXG4gICAgICAgICAgICBybzogJ05pY2l1biBjbGlwIMOubmPEgydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfY2hvaWNlX3RhZ3M6IHtcbiAgICAgICAgICAgIHJ1OiAn0JLRiyDQvNC+0LbQtdGC0LUg0LLRi9Cx0YDQsNGC0Ywg0YLQtdCz0Lg6JyxcbiAgICAgICAgICAgIGVuOiAnWW91IGNhbiBjaG9vc2UgdGFnczonLFxuICAgICAgICAgICAgdWs6ICfQktC4INC80L7QttC10YLQtSDQstC40LHRgNCw0YLQuCDRgtC10LPQuDonLFxuICAgICAgICAgICAgYmU6ICfQktGLINC80L7QttCw0YbQtSDQstGL0LHRgNCw0YbRjCDRgtGN0LPQsNGeOicsXG4gICAgICAgICAgICB6aDogJ+aCqOWPr+S7pemAieaLqeagh+etvu+8micsXG4gICAgICAgICAgICBwdDogJ1ZvY8OqIHBvZGUgZXNjb2xoZXIgdGFnczonLFxuICAgICAgICAgICAgYmc6ICfQnNC+0LbQtdGC0LUg0LTQsCDQuNC30LHQtdGA0LXRgtC1INGC0LDQs9C+0LLQtTonLFxuICAgICAgICAgICAgcm86ICdQdXRlyJtpIGFsZWdlIGV0aWNoZXRlOidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfdGFnX2FjdGlvbjoge1xuICAgICAgICAgICAgcnU6ICfQrdC60YjQtdC9JyxcbiAgICAgICAgICAgIGVuOiAnQWN0aW9uJyxcbiAgICAgICAgICAgIHVrOiAn0JXQutGI0LXQvScsXG4gICAgICAgICAgICBiZTogJ9Ct0LrRiNC9JyxcbiAgICAgICAgICAgIHpoOiAn5Yqo5L2cJyxcbiAgICAgICAgICAgIHB0OiAnQcOnw6NvJyxcbiAgICAgICAgICAgIGJnOiAn0JXQutGI0YrQvScsXG4gICAgICAgICAgICBybzogJ0FjyJtpdW5lJ1xuICAgICAgICB9LFxuICAgICAgICBzaG90c190YWdfY29tZWR5OiB7XG4gICAgICAgICAgICBydTogJ9Cu0LzQvtGAJyxcbiAgICAgICAgICAgIGVuOiAnSHVtb3InLFxuICAgICAgICAgICAgdWs6ICfQk9GD0LzQvtGAJyxcbiAgICAgICAgICAgIGJlOiAn0JPRg9C80LDRgCcsXG4gICAgICAgICAgICB6aDogJ+W5vem7mCcsXG4gICAgICAgICAgICBwdDogJ0h1bW9yJyxcbiAgICAgICAgICAgIGJnOiAn0KXRg9C80L7RgCcsXG4gICAgICAgICAgICBybzogJ1Vtb3InXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3RhZ19kcmFtYToge1xuICAgICAgICAgICAgcnU6ICfQlNGA0LDQvNCwJyxcbiAgICAgICAgICAgIGVuOiAnRHJhbWEnLFxuICAgICAgICAgICAgdWs6ICfQlNGA0LDQvNCwJyxcbiAgICAgICAgICAgIGJlOiAn0JTRgNCw0LzQsCcsXG4gICAgICAgICAgICB6aDogJ+aIj+WJpycsXG4gICAgICAgICAgICBwdDogJ0RyYW1hJyxcbiAgICAgICAgICAgIGJnOiAn0JTRgNCw0LzQsCcsXG4gICAgICAgICAgICBybzogJ0RyYW3EgydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfdGFnX2hvcnJvcjoge1xuICAgICAgICAgICAgcnU6ICfQo9C20LDRgdGLJyxcbiAgICAgICAgICAgIGVuOiAnSG9ycm9yJyxcbiAgICAgICAgICAgIHVrOiAn0KPQttCw0YHQuCcsXG4gICAgICAgICAgICBiZTogJ9Cj0LbQsNGB0YsnLFxuICAgICAgICAgICAgemg6ICfmgZDmgJYnLFxuICAgICAgICAgICAgcHQ6ICdIb3Jyb3InLFxuICAgICAgICAgICAgYmc6ICfQo9C20LDRgScsXG4gICAgICAgICAgICBybzogJ0dyb2F6xIMnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3RhZ190aHJpbGxlcjoge1xuICAgICAgICAgICAgcnU6ICfQotGA0LjQu9C70LXRgCcsXG4gICAgICAgICAgICBlbjogJ1RocmlsbGVyJyxcbiAgICAgICAgICAgIHVrOiAn0KLRgNC40LvQtdGAJyxcbiAgICAgICAgICAgIGJlOiAn0KLRgNGL0LvQtdGAJyxcbiAgICAgICAgICAgIHpoOiAn5oOK5oKaJyxcbiAgICAgICAgICAgIHB0OiAnVGhyaWxsZXInLFxuICAgICAgICAgICAgYmc6ICfQotGA0LjQu9GK0YAnLFxuICAgICAgICAgICAgcm86ICdUaHJpbGxlcidcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfdGFnX2FuaW1lOiB7XG4gICAgICAgICAgICBydTogJ9CQ0L3QuNC80LUnLFxuICAgICAgICAgICAgZW46ICdBbmltZScsXG4gICAgICAgICAgICB1azogJ9CQ0L3RltC80LUnLFxuICAgICAgICAgICAgYmU6ICfQkNC90ZbQvNGNJyxcbiAgICAgICAgICAgIHpoOiAn5Yqo5ryrJyxcbiAgICAgICAgICAgIHB0OiAnQW5pbWUnLFxuICAgICAgICAgICAgYmc6ICfQkNC90LjQvNC1JyxcbiAgICAgICAgICAgIHJvOiAnQW5pbWUnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3RhZ19mYW50YXN5OiB7XG4gICAgICAgICAgICBydTogJ9Ck0Y3QvdGC0LXQt9C4JyxcbiAgICAgICAgICAgIGVuOiAnRmFudGFzeScsXG4gICAgICAgICAgICB1azogJ9Ck0LXQvdGC0LXQt9GWJyxcbiAgICAgICAgICAgIGJlOiAn0KTRjdC90YLRjdC30ZYnLFxuICAgICAgICAgICAgemg6ICflpYflubsnLFxuICAgICAgICAgICAgcHQ6ICdGYW50YXNpYScsXG4gICAgICAgICAgICBiZzogJ9Ck0LXQvdGC0YrQt9C4JyxcbiAgICAgICAgICAgIHJvOiAnRmFudGV6aWUnXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3RhZ19zY2lfZmk6IHtcbiAgICAgICAgICAgIHJ1OiAn0KTQsNC90YLQsNGB0YLQuNC60LAnLFxuICAgICAgICAgICAgZW46ICdTY2ktRmknLFxuICAgICAgICAgICAgdWs6ICfQpNCw0L3RgtCw0YHRgtC40LrQsCcsXG4gICAgICAgICAgICBiZTogJ9Ck0LDQvdGC0LDRgdGC0YvQutCwJyxcbiAgICAgICAgICAgIHpoOiAn56eR5bm7JyxcbiAgICAgICAgICAgIHB0OiAnRmljw6fDo28gQ2llbnTDrWZpY2EnLFxuICAgICAgICAgICAgYmc6ICfQpNCw0L3RgtCw0YHRgtC40LrQsCcsXG4gICAgICAgICAgICBybzogJ0ZpY8ibaXVuZSDImHRpaW7Im2lmaWPEgydcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdHNfc2V0dGluZ3NfaW5fcGxheWVyOiB7XG4gICAgICAgICAgICBydTogJ9Cf0L7QutCw0LfRi9Cy0LDRgtGMINC80L7QvNC10L3RgtGLINCyINC/0LvQtdC10YDQtScsXG4gICAgICAgICAgICBlbjogJ1Nob3cgbW9tZW50cyBpbiBwbGF5ZXInLFxuICAgICAgICAgICAgdWs6ICfQn9C+0LrQsNC30YPQstCw0YLQuCDQvNC+0LzQtdC90YLQuCDQsiDQv9C70LXRlNGA0ZYnLFxuICAgICAgICAgICAgYmU6ICfQn9Cw0LrQsNC30LLQsNGG0Ywg0LzQvtC80LDQvdGC0Ysg0Z4g0L/Qu9C10LXRgNGLJyxcbiAgICAgICAgICAgIHpoOiAn5Zyo5pKt5pS+5Zmo5Lit5pi+56S66ZWc5aS0JyxcbiAgICAgICAgICAgIHB0OiAnTW9zdHJhciBtb21lbnRvcyBubyBwbGF5ZXInLFxuICAgICAgICAgICAgYmc6ICfQn9C+0LrQsNC30LLQsNC90LUg0L3QsCDQvNC+0LzQtdC90YLQuCDQsiDQv9C70LXQudGK0YDQsCcsXG4gICAgICAgICAgICBybzogJ0FmaciZYcibaSBtb21lbnRlbGUgw65uIHBsYXllcicsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3RzX3NldHRpbmdzX2luX2NhcmQ6IHtcbiAgICAgICAgICAgIHJ1OiAn0J/QvtC60LDQt9GL0LLQsNGC0Ywg0LrQvdC+0L/QutGDIFNob3RzINCyINC60LDRgNGC0L7Rh9C60LDRhScsXG4gICAgICAgICAgICBlbjogJ1Nob3cgU2hvdHMgYnV0dG9uIGluIGNhcmRzJyxcbiAgICAgICAgICAgIHVrOiAn0J/QvtC60LDQt9GD0LLQsNGC0Lgg0LrQvdC+0L/QutGDIFNob3RzINCyINC60LDRgNGC0LrQsNGFJyxcbiAgICAgICAgICAgIGJlOiAn0J/QsNC60LDQt9Cy0LDRhtGMINC60L3QvtC/0LrRgyBTaG90cyDRgyDQutCw0YDRgtC60LDRhScsXG4gICAgICAgICAgICB6aDogJ+WcqOWNoeeJh+S4reaYvuekuiBTaG90cyDmjInpkq4nLFxuICAgICAgICAgICAgcHQ6ICdNb3N0cmFyIGJvdMOjbyBTaG90cyBlbSBjYXJ0w7VlcycsXG4gICAgICAgICAgICBiZzogJ9Cf0L7QutCw0LfQstCw0L3QtSDQvdCwINCx0YPRgtC+0L0gU2hvdHMg0LIg0LrQsNGA0YLQuNGC0LUnLFxuICAgICAgICAgICAgcm86ICdBZmnImWHIm2kgYnV0b251bCBTaG90cyDDrm4gY2FyZHVyaScsXG4gICAgICAgIH0sXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXRcbn1cbiIsImZ1bmN0aW9uIGluaXQoKXtcbiAgICBMYW1wYS5UZW1wbGF0ZS5hZGQoJ3Nob3RzX3BsYXllcl9yZWNvcmRfYnV0dG9uJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIHNlbGVjdG9yIHNob3RzLXBsYXllci1idXR0b25cIiBkYXRhLWNvbnRyb2xsZXI9XCJwbGF5ZXJfcGFuZWxcIj5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMS43MThcIiBjeT1cIjExLjcxOFwiIHI9XCIxMC43MThcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjExLjcxOFwiIGN5PVwiMTEuNzE4XCIgcj1cIjUuOTI2MjFcIiBmaWxsPVwid2hpdGVcIiBjbGFzcz1cInJlY1wiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuXG4gICAgTGFtcGEuVGVtcGxhdGUuYWRkKCdzaG90c19tb2RhbF9iZWZvcmVfcmVjb3JkaW5nJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDEuMmVtO1wiPlxuICAgICAgICAgICAgICAgICN7c2hvdHNfbW9kYWxfYmVmb3JlX3JlY29yZGluZ190eHRfMX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwic2hvdHMtc3ZnLWF1dG8gc2hvdHMtc3ZnLWF1dG8tLWhlbG1ldFwiPjx1c2UgeGxpbms6aHJlZj1cIiNzcHJpdGUtc2hvdHMtaG93bmVlZFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICN7c2hvdHNfbW9kYWxfYmVmb3JlX3JlY29yZGluZ190eHRfMn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuXG4gICAgTGFtcGEuVGVtcGxhdGUuYWRkKCdzaG90c19tb2RhbF9iZWZvcmVfdXBsb2FkX3JlY29yZGluZycsIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxLjJlbTtcIj5cbiAgICAgICAgICAgICAgICAje3Nob3RzX21vZGFsX2JlZm9yZV91cGxvYWRfcmVjb3JkaW5nX3R4dF8xfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzaG90cy1zdmctYXV0byBzaG90cy1zdmctYXV0by0taGVsbWV0XCI+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1zaG90cy1ub3RpdGxlc1wiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICN7c2hvdHNfbW9kYWxfYmVmb3JlX3VwbG9hZF9yZWNvcmRpbmdfdHh0XzJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYClcblxuICAgIExhbXBhLlRlbXBsYXRlLmFkZCgnc2hvdHNfbW9kYWxfZXJyb3JfcmVjb3JkaW5nJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDEuMmVtO1wiPlxuICAgICAgICAgICAgICAgICN7c2hvdHNfbW9kYWxfZXJyb3JfcmVjb3JkaW5nX3R4dF8xfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICN7c2hvdHNfbW9kYWxfZXJyb3JfcmVjb3JkaW5nX3R4dF8yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG5cbiAgICBMYW1wYS5UZW1wbGF0ZS5hZGQoJ3Nob3RzX21vZGFsX3JlcG9ydCcsIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxLjJlbTtcIj5cbiAgICAgICAgICAgICAgICAje3Nob3RzX21vZGFsX3JlcG9ydF90eHRfMX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAje3Nob3RzX21vZGFsX3JlcG9ydF90eHRfMn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAje3Nob3RzX21vZGFsX3JlcG9ydF90eHRfM31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuXG4gICAgTGFtcGEuVGVtcGxhdGUuYWRkKCdzaG90c19tb2RhbF9kZWxldGUnLCBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMS4yZW07XCI+XG4gICAgICAgICAgICAgICAgI3tzaG90c19tb2RhbF9kZWxldGVfdHh0XzF9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgI3tzaG90c19tb2RhbF9kZWxldGVfdHh0XzJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYClcblxuICAgIExhbXBhLlRlbXBsYXRlLmFkZCgnc2hvdHNfbW9kYWxfcXVvdGFfbGltaXQnLCBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMS4yZW07XCI+XG4gICAgICAgICAgICAgICAgI3tzaG90c19tb2RhbF9xdW90YV90eHRfMX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAje3Nob3RzX21vZGFsX3F1b3RhX3R4dF8yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG5cbiAgICBMYW1wYS5UZW1wbGF0ZS5hZGQoJ3Nob3RzX21vZGFsX3Nob3J0X3JlY29yZGluZycsIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICN7c2hvdHNfbW9kYWxfc2hvcnRfcmVjb3JkaW5nX3R4dH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuXG4gICAgTGFtcGEuVGVtcGxhdGUuYWRkKCdzaG90c19wbGF5ZXJfcmVjb3JkZXInLCBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1wbGF5ZXItcmVjb3JkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1wbGF5ZXItcmVjb3JkZXJfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtcGxheWVyLXJlY29yZGVyX19wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtcGxheWVyLXJlY29yZGVyX190ZXh0XCI+I3tzaG90c19yZWNvcmRpbmdfdGV4dH0gPHNwYW4+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtcGxheWVyLXJlY29yZGVyX19zdG9wXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYClcblxuICAgIExhbXBhLlRlbXBsYXRlLmFkZCgnc2hvdHNfbW9kYWxfdXBsb2FkJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtbW9kYWwtdXBsb2FkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtbW9kYWwtdXBsb2FkX19wcmV2aWV3XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtbW9kYWwtdXBsb2FkX19ib2R5XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG5cbiAgICBMYW1wYS5UZW1wbGF0ZS5hZGQoJ3Nob3RzX2NoZWNrYm94JywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtc2VsZWN0b3Igc2hvdHMtY2hlY2tib3ggc2VsZWN0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1jaGVja2JveF9faWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLWNoZWNrYm94X190ZXh0XCI+e3RleHR9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG5cbiAgICBMYW1wYS5UZW1wbGF0ZS5hZGQoJ3Nob3RzX2J1dHRvbicsIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLXNlbGVjdG9yIHNob3RzLWJ1dHRvbiBzZWxlY3RvclwiPnt0ZXh0fTwvZGl2PlxuICAgIGApXG5cbiAgICBMYW1wYS5UZW1wbGF0ZS5hZGQoJ3Nob3RzX3Byb2dyZXNzJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtc2VsZWN0b3Igc2hvdHMtcHJvZ3Jlc3Mgc2VsZWN0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1wcm9ncmVzc19fdGV4dFwiPnt0ZXh0fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLXByb2dyZXNzX19iYXJcIj48ZGl2PjwvZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuXG4gICAgTGFtcGEuVGVtcGxhdGUuYWRkKCdzaG90c19wcmV2aWV3JywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtcHJldmlld1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLXByZXZpZXdfX2xlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtcHJldmlld19fc2NyZWVuc2hvdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtcHJldmlld19fYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1wcmV2aWV3X195ZWFyXCI+e3llYXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLXByZXZpZXdfX3RpdGxlXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG5cbiAgICBMYW1wYS5UZW1wbGF0ZS5hZGQoJ3Nob3RzX3RhZ3MnLCBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy10YWdzXCI+PC9kaXY+XG4gICAgYClcblxuICAgIExhbXBhLlRlbXBsYXRlLmFkZCgnc2hvdHNfdXBsb2FkX2NvbXBsZXRlX3RleHQnLCBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAxZW07XCI+XG4gICAgICAgICAgICAgICAgI3tzaG90c191cGxvYWRfY29tcGxldGVfdGV4dH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuXG4gICAgTGFtcGEuVGVtcGxhdGUuYWRkKCdzaG90c191cGxvYWRfbm90aWNlX3RleHQnLCBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAxZW07XCI+XG4gICAgICAgICAgICAgICAgI3tzaG90c191cGxvYWRfbm90aWNlX3RleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYClcblxuICAgIExhbXBhLlRlbXBsYXRlLmFkZCgnc2hvdHNfbGVudGEnLCBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1sZW50YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLWxlbnRhX192aWRlb1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLWxlbnRhX19wYW5lbFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuXG4gICAgTGFtcGEuVGVtcGxhdGUuYWRkKCdzaG90c19sZW50YV92aWRlbycsIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLWxlbnRhLXZpZGVvXCI+XG4gICAgICAgICAgICA8dmlkZW8gY2xhc3M9XCJzaG90cy1sZW50YS12aWRlb19fdmlkZW8tZWxlbWVudFwiIGF1dG9wbGF5IGxvb3AgcG9zdGVyPVwiLi9pbWcvdmlkZW9fcG9zdGVyLnBuZ1wiPjwvdmlkZW8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtbGVudGEtdmlkZW9fX3Byb2dyZXNzLWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItdmlkZW9fX2xvYWRlciBzaG90cy1sZW50YS12aWRlb19fbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtbGVudGEtdmlkZW9fX2xheWVyXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG5cbiAgICBMYW1wYS5UZW1wbGF0ZS5hZGQoJ3Nob3RzX2xlbnRhX3BhbmVsJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtbGVudGEtcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBsb3Jlci1jYXJkX19oZWFkIHNob3RzLWxlbnRhLXBhbmVsX19jYXJkIGxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwbG9yZXItY2FyZF9faGVhZC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBsb3Jlci1jYXJkX19oZWFkLWltZyBzZWxlY3RvciBzaG90cy1sZW50YS1wYW5lbF9fY2FyZC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBsb3Jlci1jYXJkX19oZWFkLWJvZHkgc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLWxlbnRhLXBhbmVsX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwbG9yZXItY2FyZF9faGVhZC1jcmVhdGUgc2hvdHMtbGVudGEtcGFuZWxfX2NhcmQteWVhclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLWxlbnRhLXBhbmVsX19jYXJkLXRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtbGVudGEtcGFuZWxfX3JlY29yZGVyIGhpZGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1sZW50YS1wYW5lbF9fdGFnc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtbGVudGEtcGFuZWxfX3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLWxlbnRhLXBhbmVsX19hdXRob3JcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1sZW50YS1wYW5lbF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0b3IgYWN0aW9uLWxpa2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzlcIiBoZWlnaHQ9XCIzNVwiIHZpZXdCb3g9XCIwIDAgMzkgMzVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI2LjY1MDQgMS41MDk3N0MyOS4yNjE3IDEuMzg1OTcgMzIuMjAzNiAyLjM2NzA1IDM0LjcxNjggNS40MjY3NkMzNy4xNTY3IDguMzk3MzcgMzcuMTU3NiAxMS4zNjI1IDM2LjIxNDggMTQuMDAyQzM1LjI0MDggMTYuNzI4OCAzMy4yNTM4IDE5LjA3MDUgMzEuODM0IDIwLjQyMzhDMzEuODI5NSAyMC40MjgxIDMxLjgyNDcgMjAuNDMyMiAzMS44MjAzIDIwLjQzNjVMMTkuMTQ4NCAzMi44MjcxTDYuNDc3NTQgMjAuNDM2NUM1LjAzMDk5IDE4Ljk4NDcgMy4wNTMgMTYuNjQ2IDIuMDgyMDMgMTMuOTQ0M0MxLjE0MTgzIDExLjMyODIgMS4xMzkzOCA4LjM5OTU5IDMuNTgxMDUgNS40MjY3NkM2LjA5NDI5IDIuMzY3MDUgOS4wMzYxMyAxLjM4NTk3IDExLjY0NzUgMS41MDk3N0MxNC4zMjk5IDEuNjM2OTMgMTYuNzA0NCAyLjkyOTk3IDE3Ljk5MzIgNC40ODczQzE4LjI3ODEgNC44MzE2NyAxOC43MDI0IDUuMDMxMjUgMTkuMTQ5NCA1LjAzMTI1QzE5LjU5NjIgNS4wMzExMyAyMC4wMTk4IDQuODMxNTcgMjAuMzA0NyA0LjQ4NzNDMjEuNTkzNCAyLjkyOTk3IDIzLjk2OCAxLjYzNjk3IDI2LjY1MDQgMS41MDk3N1pcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIzXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJpY29uLWZpbGxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RvciBhY3Rpb24tZmF2b3JpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyMSAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMiAxLjVIMTlDMTkuMjc2MSAxLjUgMTkuNSAxLjcyMzg2IDE5LjUgMlYyNy45NjE4QzE5LjUgMjguMzc1NiAxOS4wMjYxIDI4LjYxMDMgMTguNjk3IDI4LjM1OTVMMTIuNjIxMiAyMy43MzAzQzExLjM2ODIgMjIuNzc1NyA5LjYzMTgzIDIyLjc3NTcgOC4zNzg4NSAyMy43MzAzTDIuMzAzMDIgMjguMzU5NUMxLjk3MzkgMjguNjEwMyAxLjUgMjguMzc1NiAxLjUgMjcuOTYxOFYyQzEuNSAxLjcyMzg2IDEuNzIzODYgMS41IDIgMS41WlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjIuNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImljb24tZmlsbFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdG9yIGFjdGlvbi1tb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNzcHJpdGUtZG90c1wiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuXG4gICAgTGFtcGEuVGVtcGxhdGUuYWRkKCdzaG90c19jb3VudGVyJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtY291bnRlclwiPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYClcblxuICAgIExhbXBhLlRlbXBsYXRlLmFkZCgnc2hvdHNfYXV0aG9yJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtYXV0aG9yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtYXV0aG9yX19pbWdcIj5cbiAgICAgICAgICAgICAgICA8aW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdHMtYXV0aG9yX19uYW1lXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG5cbiAgICBsZXQgc3ByaXRlcyA9ICBgXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJzcHJpdGUtbG92ZVwiIHZpZXdCb3g9XCIwIDAgMzkgMzVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYuNjUwNCAxLjUwOTc3QzI5LjI2MTcgMS4zODU5NyAzMi4yMDM2IDIuMzY3MDUgMzQuNzE2OCA1LjQyNjc2QzM3LjE1NjcgOC4zOTczNyAzNy4xNTc2IDExLjM2MjUgMzYuMjE0OCAxNC4wMDJDMzUuMjQwOCAxNi43Mjg4IDMzLjI1MzggMTkuMDcwNSAzMS44MzQgMjAuNDIzOEMzMS44Mjk1IDIwLjQyODEgMzEuODI0NyAyMC40MzIyIDMxLjgyMDMgMjAuNDM2NUwxOS4xNDg0IDMyLjgyNzFMNi40Nzc1NCAyMC40MzY1QzUuMDMwOTkgMTguOTg0NyAzLjA1MyAxNi42NDYgMi4wODIwMyAxMy45NDQzQzEuMTQxODMgMTEuMzI4MiAxLjEzOTM4IDguMzk5NTkgMy41ODEwNSA1LjQyNjc2QzYuMDk0MjkgMi4zNjcwNSA5LjAzNjEzIDEuMzg1OTcgMTEuNjQ3NSAxLjUwOTc3QzE0LjMyOTkgMS42MzY5MyAxNi43MDQ0IDIuOTI5OTcgMTcuOTkzMiA0LjQ4NzNDMTguMjc4MSA0LjgzMTY3IDE4LjcwMjQgNS4wMzEyNSAxOS4xNDk0IDUuMDMxMjVDMTkuNTk2MiA1LjAzMTEzIDIwLjAxOTggNC44MzE1NyAyMC4zMDQ3IDQuNDg3M0MyMS41OTM0IDIuOTI5OTcgMjMuOTY4IDEuNjM2OTcgMjYuNjUwNCAxLjUwOTc3WlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjNcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICAgICAgPC9zeW1ib2w+XG5cbiAgICAgICAgPHN5bWJvbCBpZD1cInNwcml0ZS1zaG90c1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNTMuMjY2IDUxMmExOS4xNjYgMTkuMTY2IDAgMCAxLTE5LjE2OC0xOS4xNjhWMzMwLjYwN2wtMTM1LjA3MS0uMDQ5YTE5LjE2NCAxOS4xNjQgMCAwIDEtMTYuODMyLTI4LjMyTDI0MS4wNiAxMC4wMTNhMTkuMTY3IDE5LjE2NyAwIDAgMSAzNi4wMDUgOS4xNTR2MTYyLjUzNGgxMzUuOTAyYTE5LjE2NyAxOS4xNjcgMCAwIDEgMTYuODE1IDI4LjM2M0wyNzAuMDc4IDUwMi4wM2ExOS4xNzMgMTkuMTczIDAgMCAxLTE2LjgxMiA5Ljk3elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48L3BhdGg+XG4gICAgICAgIDwvc3ltYm9sPlxuXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJzcHJpdGUtc2hvdHMtbm90aXRsZXNcIiB2aWV3Qm94PVwiMCAwIDQ3NCAxMzhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIxLjVcIiB5PVwiMS41XCIgd2lkdGg9XCIyMTYuMTk2XCIgaGVpZ2h0PVwiMTIxLjMwOVwiIHJ4PVwiOS41XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIzXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjI1NS40OVwiIHk9XCIxLjVcIiB3aWR0aD1cIjIxNi4xOTZcIiBoZWlnaHQ9XCIxMjEuMzA5XCIgcng9XCI5LjVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjNcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiNzcuOTY5MlwiIHk9XCI0OS42Mjg5XCIgd2lkdGg9XCI2My4yNTgxXCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI1MS40MzQ4XCIgeT1cIjY0LjgxNTZcIiB3aWR0aD1cIjExNi4zMjdcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjMwMi44MTNcIiB5PVwiMjcuODkxOVwiIHdpZHRoPVwiNTguMDc3NFwiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiMzQ1LjQ4NVwiIHk9XCIxMC4xOTM4XCIgd2lkdGg9XCIzNi4yMDY4XCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzMTkuMzM2XCIgeT1cIjQ0LjEwNjlcIiB3aWR0aD1cIjQxLjU1NDJcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjMxMi43NTFcIiB5PVwiNjAuMzIxOVwiIHdpZHRoPVwiNDguMTM5NFwiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCBvcGFjaXR5PVwiMC42NlwiIHg9XCIzMTYuMjVcIiB5PVwiNzYuNTM2OFwiIHdpZHRoPVwiNDQuNjQxMVwiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCBvcGFjaXR5PVwiMC4zOFwiIHg9XCIzNDIuMzg1XCIgeT1cIjkyLjc1MTdcIiB3aWR0aD1cIjE4LjUwNTRcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT1cIjAuMjhcIiB4PVwiMzA4LjQyOVwiIHk9XCIxMDguOTY3XCIgd2lkdGg9XCI1Mi40NjEyXCIgaGVpZ2h0PVwiNC4wNDI2NlwiIHJ4PVwiMi4wMjEzM1wiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzNzEuMTEzXCIgeT1cIjI3Ljg5MTlcIiB3aWR0aD1cIjM4LjIxMjlcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjM3MS4xMTNcIiB5PVwiNDQuMTA2OVwiIHdpZHRoPVwiNDcuODI2N1wiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiMzcxLjExM1wiIHk9XCI2MC4zMjE5XCIgd2lkdGg9XCIyOS4zMDU0XCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IG9wYWNpdHk9XCIwLjY2XCIgeD1cIjM3MS4xMTNcIiB5PVwiNzYuNTM2OFwiIHdpZHRoPVwiNDQuMzI4MVwiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCBvcGFjaXR5PVwiMC4zOFwiIHg9XCIzNzEuMTEzXCIgeT1cIjkyLjc1MTdcIiB3aWR0aD1cIjI5LjMwNTRcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT1cIjAuMjhcIiB4PVwiMzcxLjExM1wiIHk9XCIxMDguOTY3XCIgd2lkdGg9XCIzMC45NTE3XCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI5OS4wMDFcIiB5PVwiODAuMDAyNVwiIHdpZHRoPVwiMjEuMTk0NlwiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiMTY5LjE2OFwiIHk9XCI4OC42ODY5XCIgd2lkdGg9XCI2Mi41MDY0XCIgaGVpZ2h0PVwiNi4yODc2MlwiIHJ4PVwiMy4xNDM4MVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSAxNjkuMTY4IDg4LjY4NjkpXCIgZmlsbD1cIiNGRjNGM0ZcIi8+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjYyLjUwNjRcIiBoZWlnaHQ9XCI2LjI4NzYyXCIgcng9XCIzLjE0MzgxXCIgdHJhbnNmb3JtPVwibWF0cml4KC0wLjcwNzEwNyAwLjcwNzEwNyAwLjcwNzEwNyAwLjcwNzEwNyAyMDguOTIxIDg4LjY4NjkpXCIgZmlsbD1cIiNGRjNGM0ZcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiNDIzLjM4NlwiIHk9XCI4OC42ODY5XCIgd2lkdGg9XCI2Mi41MDY0XCIgaGVpZ2h0PVwiNi4yODc2MlwiIHJ4PVwiMy4xNDM4MVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSA0MjMuMzg2IDg4LjY4NjkpXCIgZmlsbD1cIiNGRjNGM0ZcIi8+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjYyLjUwNjRcIiBoZWlnaHQ9XCI2LjI4NzYyXCIgcng9XCIzLjE0MzgxXCIgdHJhbnNmb3JtPVwibWF0cml4KC0wLjcwNzEwNyAwLjcwNzEwNyAwLjcwNzEwNyAwLjcwNzEwNyA0NjMuMTM4IDg4LjY4NjkpXCIgZmlsbD1cIiNGRjNGM0ZcIi8+XG4gICAgICAgIDwvc3ltYm9sPlxuXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJzcHJpdGUtc2hvdHMtaG93bmVlZFwiIHZpZXdCb3g9XCIwIDAgNDc0IDEzOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjEuNVwiIHk9XCIxLjVcIiB3aWR0aD1cIjIxNi4xOTZcIiBoZWlnaHQ9XCIxMjEuMzA5XCIgcng9XCI5LjVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjNcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiMjU1LjQ5XCIgeT1cIjEuNVwiIHdpZHRoPVwiMjE2LjE5NlwiIGhlaWdodD1cIjEyMS4zMDlcIiByeD1cIjkuNVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiM1wiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI1NC4xMjYyXCIgeT1cIjEwMy44MThcIiB3aWR0aD1cIjQ3LjcyNDFcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT1cIjAuMjhcIiB4PVwiMTYuNDQ5N1wiIHk9XCIxMDMuODE4XCIgd2lkdGg9XCIxODYuNDA5XCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzMDIuODEzXCIgeT1cIjI3Ljg5MTlcIiB3aWR0aD1cIjU4LjA3NzRcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjM0NS40ODVcIiB5PVwiMTAuMTkzOFwiIHdpZHRoPVwiMzYuMjA2OFwiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiMzE5LjMzNlwiIHk9XCI0NC4xMDY5XCIgd2lkdGg9XCI0MS41NTQyXCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzMTIuNzUxXCIgeT1cIjYwLjMyMTlcIiB3aWR0aD1cIjQ4LjEzOTRcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT1cIjAuNjZcIiB4PVwiMzE2LjI1XCIgeT1cIjc2LjUzNjhcIiB3aWR0aD1cIjQ0LjY0MTFcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT1cIjAuMzhcIiB4PVwiMzQyLjM4NVwiIHk9XCI5Mi43NTE3XCIgd2lkdGg9XCIxOC41MDU0XCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IG9wYWNpdHk9XCIwLjI4XCIgeD1cIjMwOC40MjlcIiB5PVwiMTA4Ljk2N1wiIHdpZHRoPVwiNTIuNDYxMlwiIGhlaWdodD1cIjQuMDQyNjZcIiByeD1cIjIuMDIxMzNcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiMzcxLjExM1wiIHk9XCIyNy44OTE5XCIgd2lkdGg9XCIzOC4yMTI5XCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzNzEuMTEzXCIgeT1cIjQ0LjEwNjlcIiB3aWR0aD1cIjQ3LjgyNjdcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjM3MS4xMTNcIiB5PVwiNjAuMzIxOVwiIHdpZHRoPVwiMjkuMzA1NFwiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cmVjdCBvcGFjaXR5PVwiMC42NlwiIHg9XCIzNzEuMTEzXCIgeT1cIjc2LjUzNjhcIiB3aWR0aD1cIjQ0LjMyODFcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT1cIjAuMjhcIiB4PVwiMzcxLjExM1wiIHk9XCIxMDguOTY3XCIgd2lkdGg9XCIzMC45NTE3XCIgaGVpZ2h0PVwiNS4xNDg5MVwiIHJ4PVwiMi41NzQ0NlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI1OS4yNzUxXCIgeT1cIjEwMC43NFwiIHdpZHRoPVwiMTEuMzA0NFwiIGhlaWdodD1cIjUuMTQ4OTFcIiByeD1cIjIuNTc0NDZcIiB0cmFuc2Zvcm09XCJyb3RhdGUoOTAgNTkuMjc1MSAxMDAuNzQpXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjEwMS44NVwiIHk9XCIxMDAuNzRcIiB3aWR0aD1cIjExLjMwNDRcIiBoZWlnaHQ9XCI1LjE0ODkxXCIgcng9XCIyLjU3NDQ2XCIgdHJhbnNmb3JtPVwicm90YXRlKDkwIDEwMS44NSAxMDAuNzQpXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjQyMy4zODZcIiB5PVwiODguNjg2OVwiIHdpZHRoPVwiNjIuNTA2NFwiIGhlaWdodD1cIjYuMjg3NjJcIiByeD1cIjMuMTQzODFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgNDIzLjM4NiA4OC42ODY5KVwiIGZpbGw9XCIjRkYzRjNGXCIvPlxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCI2Mi41MDY0XCIgaGVpZ2h0PVwiNi4yODc2MlwiIHJ4PVwiMy4xNDM4MVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMC43MDcxMDcgMC43MDcxMDcgMC43MDcxMDcgMC43MDcxMDcgNDYzLjEzOCA4OC42ODY5KVwiIGZpbGw9XCIjRkYzRjNGXCIvPlxuICAgICAgICA8L3N5bWJvbD5cbiAgICBgXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ByaXRlcycpLmlubmVySFRNTCArPSBzcHJpdGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0XG59IiwiZnVuY3Rpb24gdmlkZW9TY3JlZW5TaG90KHZpZGVvLCBzY3JlZW5fd2lkdGggPSAzMjApe1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgc2NhbGUgPSBzY3JlZW5fd2lkdGggLyB2aWRlby52aWRlb1dpZHRoXG5cbiAgICBsZXQgd2lkdGggPSBNYXRoLnJvdW5kKHZpZGVvLnZpZGVvV2lkdGggKiBzY2FsZSlcbiAgICBsZXQgaGVpZ2h0ID0gTWF0aC5yb3VuZCh2aWRlby52aWRlb0hlaWdodCAqIHNjYWxlKVxuXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGhcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG5cbiAgICB0cnl7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5lcnJvcignU2hvdHMnLCAndmlkZW8gc2NyZWVuc2hvdCBlcnJvcjonLCBlLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpXG59XG5cbmZ1bmN0aW9uIHZpZGVvUmVwbGFjZVN0YXR1cyhmcm9tLCB0byl7XG4gICAgdG8uc3RhdHVzID0gZnJvbS5zdGF0dXNcbiAgICB0by5zY3JlZW4gPSBmcm9tLnNjcmVlblxuICAgIHRvLmZpbGUgICA9IGZyb20uZmlsZVxufVxuXG5mdW5jdGlvbiBnZXRCYWxhbnNlcihjYXJkKXtcbiAgICBsZXQgaGlzdG9yeV9kYXRhID0gTGFtcGEuU3RvcmFnZS5nZXQoJ29ubGluZV93YXRjaGVkX2xhc3QnLCAne30nKVxuICAgIGxldCBoaXN0b3J5X2tleSAgPSBMYW1wYS5VdGlscy5oYXNoKGNhcmQubmFtZSA/IGNhcmQub3JpZ2luYWxfbmFtZSA6IGNhcmQub3JpZ2luYWxfdGl0bGUpXG4gICAgbGV0IGhpc3RvcnlfaXRlbSA9IGhpc3RvcnlfZGF0YVtoaXN0b3J5X2tleV1cblxuICAgIHJldHVybiBoaXN0b3J5X2l0ZW0gJiYgaGlzdG9yeV9pdGVtLmJhbGFuc2VyID8gaGlzdG9yeV9pdGVtLmJhbGFuc2VyIDogJydcbn1cblxuZnVuY3Rpb24gc2hvcnRWb2ljZSh2b2ljZSl7XG4gICAgcmV0dXJuICh2b2ljZSB8fCAnJykucmVwbGFjZSgvXFxzW15hLXpBLVrQsC3Rj9CQLdCvMC05XS4qJC8sICcnKS50cmltKClcbn1cblxuZnVuY3Rpb24gaXNUU1F1YWxpdHkoc3RyKXtcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignIHRzJykgPiAtMSB8fCBzdHIudG9Mb3dlckNhc2UoKS5pbmRleE9mKCcgYWQnKSA+IC0xXG59XG5cbmZ1bmN0aW9uIG1vZGFsKGh0bWwsIGJ1dHRvbnMsIGJhY2spe1xuICAgIGxldCBib2R5ID0gJCgnPGRpdj48L2Rpdj4nKVxuICAgIGxldCBmb290ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic2hvdHMtbW9kYWwtZm9vdGVyXCI+PC9kaXY+JylcblxuICAgIGJvZHkuYXBwZW5kKGh0bWwpXG4gICAgYm9keS5hcHBlbmQoZm9vdGVyKVxuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pPT57XG4gICAgICAgIGxldCBidG4gPSBMYW1wYS5UZW1wbGF0ZS5nZXQoJ3Nob3RzX2J1dHRvbicsIHt0ZXh0OiBidXR0b24ubmFtZX0pXG5cbiAgICAgICAgYnRuLm9uKCdob3ZlcjplbnRlcicsICgpPT57XG4gICAgICAgICAgICBpZihidXR0b24ub25TZWxlY3QpIGJ1dHRvbi5vblNlbGVjdCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoYnV0dG9uLmNhbmNlbCkgYnRuLmFkZENsYXNzKCdzaG90cy1zZWxlY3Rvci0tdHJhbnNwYXJlbnQnKVxuXG4gICAgICAgIGZvb3Rlci5hcHBlbmQoYnRuKVxuICAgIH0pXG5cbiAgICBMYW1wYS5Nb2RhbC5vcGVuKHtcbiAgICAgICAgaHRtbDogYm9keSxcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICBub3BhZGRpbmc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb25CYWNrOiBiYWNrXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHZpZGVvU2NyZWVuU2hvdCxcbiAgICB2aWRlb1JlcGxhY2VTdGF0dXMsXG4gICAgZ2V0QmFsYW5zZXIsXG4gICAgc2hvcnRWb2ljZSxcbiAgICBpc1RTUXVhbGl0eSxcbiAgICBtb2RhbFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBxdW90YV9uZXh0X3JlY29yZDogMTAwMCAqIDYwICogMTAsIC8vIDEwINC80LjQvdGD0YJcbiAgICB2aWRlb19zaXplOiAxMjgwLFxuICAgIHNjcmVlbl9zaXplOiA1MDAsXG4gICAgcmVjb3JkZXJfbWF4X2R1cmF0aW9uOiA2MCAqIDUsIC8vIDUg0LzQuNC90YPRglxuICAgIGNkbjogJ2h0dHBzOi8vY2RuLmN1Yi5yaXAvc2hvdHMvJ1xufSIsImZ1bmN0aW9uIGNvdW50ZXIobWV0aG9kLCB2MSwgdjIsIHYzKXtcbiAgICAkLmFqYXgoe1xuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICB1cmw6IExhbXBhLlV0aWxzLnByb3RvY29sKCkgKyBMYW1wYS5NYW5pZmVzdC5jdWJfZG9tYWluICsgJy9hcGkvbWV0cmljL3N0YXQ/bWV0aG9kPScrbWV0aG9kKycmdmFsdWVfb25lPScgKyAodjEgfHwgJycpICsgJyZ2YWx1ZV90d289JyArICh2MiB8fCAnJykgKyAnJnZhbHVlX3RocmVlPScgKyAodjMgfHwgJycpXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvdW50ZXJcbn0iLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnXG5pbXBvcnQgRGVmaW5lZCBmcm9tICcuLi9kZWZpbmVkLmpzJ1xuaW1wb3J0IE1ldHJpYyBmcm9tICcuLi91dGlscy9tZXRyaWMuanMnXG5cblxuZnVuY3Rpb24gUmVjb3JkZXIodmlkZW8pe1xuICAgIHRoaXMuaHRtbCA9IExhbXBhLlRlbXBsYXRlLmdldCgnc2hvdHNfcGxheWVyX3JlY29yZGVyJylcblxuICAgIGxldCBzdGFydF9wb2ludCA9IHZpZGVvLmN1cnJlbnRUaW1lXG5cbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgTWV0cmljLmNvdW50ZXIoJ3Nob3RzX3JlY29yZGVyX3N0YXJ0JylcbiAgICAgICAgXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdCA9IFV0aWxzLnZpZGVvU2NyZWVuU2hvdCh2aWRlbywgRGVmaW5lZC5zY3JlZW5fc2l6ZSlcblxuICAgICAgICAgICAgdGhpcy5ydW4oKVxuXG4gICAgICAgICAgICB0aGlzLmh0bWwuZmluZCgnLnNob3RzLXBsYXllci1yZWNvcmRlcl9fc3RvcCcpLm9uKCdjbGljaycsIHRoaXMuc3RvcC5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmVjb3JkZXInLCBlLm1lc3NhZ2UpXG5cbiAgICAgICAgICAgIHRoaXMuZXJyb3IoZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucnVuID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLmh0bWwpXG5cbiAgICAgICAgTGFtcGEuQ29udHJvbGxlci5hZGQoJ3JlY29yZGVyJyx7XG4gICAgICAgICAgICB0b2dnbGU6ICgpPT57XG4gICAgICAgICAgICAgICAgTGFtcGEuQ29udHJvbGxlci5jbGVhcigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW50ZXI6IHRoaXMuc3RvcC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgYmFjazogdGhpcy5zdG9wLmJpbmQodGhpcylcbiAgICAgICAgfSlcblxuICAgICAgICBMYW1wYS5Db250cm9sbGVyLnRvZ2dsZSgncmVjb3JkZXInKVxuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnRpay5iaW5kKHRoaXMpLCAxMDAwKVxuXG4gICAgICAgIHRoaXMudGlrKClcblxuICAgICAgICB0aGlzLm9uUnVuKClcbiAgICB9XG5cbiAgICB0aGlzLnRpayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBzZWNvbmRzICA9IE1hdGgucm91bmQodmlkZW8uY3VycmVudFRpbWUgLSBzdGFydF9wb2ludClcbiAgICAgICAgbGV0IHByb2dyZXNzID0gTGFtcGEuVXRpbHMuc2Vjb25kc1RvVGltZShzZWNvbmRzKS5zcGxpdCgnOicpXG4gICAgICAgICAgICBwcm9ncmVzcyA9IHByb2dyZXNzWzFdICsgJzonICsgcHJvZ3Jlc3NbMl1cblxuICAgICAgICB0aGlzLmh0bWwuZmluZCgnLnNob3RzLXBsYXllci1yZWNvcmRlcl9fdGV4dCBzcGFuJykudGV4dChwcm9ncmVzcyArICcgLyAnICsgTGFtcGEuVXRpbHMuc2Vjb25kc1RvVGltZUh1bWFuKERlZmluZWQucmVjb3JkZXJfbWF4X2R1cmF0aW9uKSlcblxuICAgICAgICBpZihzZWNvbmRzID49IERlZmluZWQucmVjb3JkZXJfbWF4X2R1cmF0aW9uKSB0aGlzLnN0b3AoKVxuICAgIH1cblxuICAgIHRoaXMuZXJyb3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdGhpcy5kZXN0cm95KClcblxuICAgICAgICB0aGlzLm9uRXJyb3IoZSlcblxuICAgICAgICBNZXRyaWMuY291bnRlcignc2hvdHNfcmVjb3JkZXJfZXJyb3InKVxuICAgIH1cblxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdmlkZW8uY3VycmVudFRpbWUgLSBzdGFydF9wb2ludFxuXG4gICAgICAgIGlmKGVsYXBzZWQgPCAxKXtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IobmV3IEVycm9yKCdTdG9wZWQgdG9vIGVhcmx5LCBtYXliZSBjb2RlY3Mgbm90IHN1cHBvcnRlZCcpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuXG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IE1hdGgucm91bmQoZWxhcHNlZCksXG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdDogdGhpcy5zY3JlZW5zaG90LFxuICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50OiBNYXRoLnJvdW5kKHN0YXJ0X3BvaW50KSxcbiAgICAgICAgICAgICAgICBlbmRfcG9pbnQ6IE1hdGgucm91bmQodmlkZW8uY3VycmVudFRpbWUpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBNZXRyaWMuY291bnRlcignc2hvdHNfcmVjb3JkZXJfZW5kJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcblxuICAgICAgICB0aGlzLmh0bWwucmVtb3ZlKClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZGVyIiwiaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuXG5mdW5jdGlvbiBUYWdzKHRhZ3NfZGF0YSA9IGZhbHNlKXtcbiAgICB0aGlzLmh0bWwgPSBMYW1wYS5UZW1wbGF0ZS5nZXQoJ3Nob3RzX3RhZ3MnKVxuXG4gICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0YWdzX2RhdGEpIHRoaXMudXBkYXRlKHRhZ3NfZGF0YSlcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICBsZXQgdGFncyA9IFtdXG5cbiAgICAgICAgdGhpcy5odG1sLmVtcHR5KClcblxuICAgICAgICBkYXRhLnNlYXNvbiAmJiB0YWdzLnB1c2goJ1MtJytkYXRhLnNlYXNvbilcbiAgICAgICAgZGF0YS5lcGlzb2RlICYmIHRhZ3MucHVzaCgnRS0nK2RhdGEuZXBpc29kZSlcblxuICAgICAgICBpZihkYXRhLnZvaWNlX25hbWUgJiYgZGF0YS52b2ljZV9uYW1lICE9PSBkYXRhLmNhcmRfdGl0bGUpIHRhZ3MucHVzaChVdGlscy5zaG9ydFZvaWNlKGRhdGEudm9pY2VfbmFtZSkpXG5cbiAgICAgICAgdGhpcy5odG1sLmFwcGVuZCh0YWdzLm1hcCh0YWc9Pic8ZGl2PicrdGFnKyc8L2Rpdj4nKS5qb2luKCcnKSlcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmh0bWwucmVtb3ZlKClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ3MiLCJpbXBvcnQgVGFncyBmcm9tICcuL3RhZ3MuanMnXG5cbmZ1bmN0aW9uIFByZXZpZXcoZGF0YSl7XG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIHRoaXMuaHRtbCA9IExhbXBhLlRlbXBsYXRlLmdldCgnc2hvdHNfcHJldmlldycpXG5cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKHRoaXMuZGF0YS5yZWNvcmRpbmcuc2NyZWVuc2hvdCl7XG4gICAgICAgICAgICB0aGlzLmh0bWwuZmluZCgnLnNob3RzLXByZXZpZXdfX3NjcmVlbnNob3QgaW1nJykuY3NzKHtvcGFjaXR5OiAxfSkuZXEoMClbMF0uc3JjID0gdGhpcy5kYXRhLnJlY29yZGluZy5zY3JlZW5zaG90XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVsZWFzZV9kYXRlID0gdGhpcy5kYXRhLnBsYXlfZGF0YS5jYXJkLnJlbGVhc2VfZGF0ZSB8fCB0aGlzLmRhdGEucGxheV9kYXRhLmNhcmQuZmlyc3RfYWlyX2RhdGUgfHwgJydcbiAgICAgICAgbGV0IHllYXIgPSByZWxlYXNlX2RhdGUuc2xpY2UoMCw0KVxuXG4gICAgICAgIHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtcHJldmlld19feWVhcicpLmh0bWwoeWVhciB8fCAnLS0tLScpXG4gICAgICAgIHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtcHJldmlld19fdGl0bGUnKS5odG1sKHRoaXMuZGF0YS5wbGF5X2RhdGEuY2FyZC5uYW1lIHx8IHRoaXMuZGF0YS5wbGF5X2RhdGEuY2FyZC50aXRsZSB8fCAnJylcblxuICAgICAgICB0aGlzLnRhZ3MgPSBuZXcgVGFncyh0aGlzLmRhdGEucGxheV9kYXRhKVxuICAgICAgICB0aGlzLnRhZ3MuY3JlYXRlKClcblxuICAgICAgICB0aGlzLmh0bWwuZmluZCgnLnNob3RzLXByZXZpZXdfX2JvZHknKS5hcHBlbmQodGhpcy50YWdzLnJlbmRlcigpKVxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbFxuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJldmlldyIsImZ1bmN0aW9uIENoZWNrYm94KHBhcmFtcyA9IHt9KXtcbiAgICB0aGlzLmh0bWwgID0gTGFtcGEuVGVtcGxhdGUuZ2V0KCdzaG90c19jaGVja2JveCcpXG4gICAgdGhpcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCBmYWxzZVxuXG4gICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNldFRleHQocGFyYW1zLnRleHQgfHwgJycpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSlcblxuICAgICAgICB0aGlzLmh0bWwub24oJ2hvdmVyOmVudGVyJywgKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIXRoaXMuc3RhdGUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRUZXh0ID0gZnVuY3Rpb24odGV4dCl7XG4gICAgICAgIHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtY2hlY2tib3hfX3RleHQnKS5odG1sKHRleHQpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKXtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlXG5cbiAgICAgICAgdGhpcy5odG1sLnRvZ2dsZUNsYXNzKCdzaG90cy1jaGVja2JveC0tY2hlY2tlZCcsc3RhdGUpXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sXG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5odG1sLnJlbW92ZSgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveCIsImZ1bmN0aW9uIHVybCh1KXtcbiAgICAvL3JldHVybiAnaHR0cDovL2xvY2FsaG9zdDozMTAwL2FwaS9zaG90cy8nICsgdVxuICAgIHJldHVybiBMYW1wYS5VdGlscy5wcm90b2NvbCgpICsgTGFtcGEuTWFuaWZlc3QuY3ViX2RvbWFpbiArICcvYXBpL3Nob3RzLycgKyB1XG59XG5cbmZ1bmN0aW9uIHBhcmFtcyh0aW1lb3V0ID0gMTUwMDApIHtcbiAgICBpZighTGFtcGEuQWNjb3VudC5QZXJtaXQuYWNjb3VudC50b2tlbikgcmV0dXJuIHt0aW1lb3V0OiB0aW1lb3V0fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgdG9rZW46IExhbXBhLkFjY291bnQuUGVybWl0LmFjY291bnQudG9rZW4sXG4gICAgICAgICAgICBwcm9maWxlOiBMYW1wYS5BY2NvdW50LlBlcm1pdC5hY2NvdW50LnByb2ZpbGUuaWRcbiAgICAgICAgfSxcbiAgICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FjaGUodG9wYXJhbXMsIGxpZmUgPSA2MCl7XG4gICAgdG9wYXJhbXMuY2FjaGUgPSB7XG4gICAgICAgIGxpZmU6IGxpZmVcbiAgICB9XG4gICAgcmV0dXJuIHRvcGFyYW1zXG59XG5cbmZ1bmN0aW9uIHVwbG9hZFJlcXVlc3QoZGF0YSwgb25zdWNjZXNzLCBvbmVycm9yKSB7XG4gICAgTGFtcGEuTmV0d29yay5zaWxlbnQodXJsKCd1cGxvYWQtcmVxdWVzdCcpLCBvbnN1Y2Nlc3MsIG9uZXJyb3IsIGRhdGEsIHBhcmFtcygpKVxufVxuXG5mdW5jdGlvbiB1cGxvYWRTdGF0dXMoaWQsIG9uc3VjY2Vzcywgb25lcnJvcikge1xuICAgIExhbXBhLk5ldHdvcmsuc2lsZW50KHVybCgndXBsb2FkLXN0YXR1cy8nICsgaWQpLCBvbnN1Y2Nlc3MsIG9uZXJyb3IsIG51bGwsIHBhcmFtcyg1MDAwKSlcbn1cblxuZnVuY3Rpb24gc2hvdHNWaWRlbyhpZCwgb25zdWNjZXNzLCBvbmVycm9yKSB7XG4gICAgTGFtcGEuTmV0d29yay5zaWxlbnQodXJsKCd2aWRlby8nICsgaWQpLCBvbnN1Y2Nlc3MsIG9uZXJyb3IsIG51bGwsIHBhcmFtcyg1MDAwKSlcbn1cblxuZnVuY3Rpb24gc2hvdHNMaXN0KHR5cGUsIHBhZ2UgPSAxLCBvbnN1Y2Nlc3MsIG9uZXJyb3IpIHtcbiAgICBMYW1wYS5OZXR3b3JrLnNpbGVudCh1cmwoJ2xpc3QvJyArIHR5cGUgKyAnP3BhZ2U9JyArIHBhZ2UpLCBvbnN1Y2Nlc3MsIG9uZXJyb3IsIG51bGwsIHBhcmFtcyg1MDAwKSlcbn1cblxuZnVuY3Rpb24gc2hvdHNDYXJkKGNhcmQsIHBhZ2UgPSAxLCBvbnN1Y2Nlc3MsIG9uZXJyb3IpIHtcbiAgICBMYW1wYS5OZXR3b3JrLnNpbGVudCh1cmwoJ2NhcmQvJyArIGNhcmQuaWQgKyAnLycgKyAoY2FyZC5vcmlnaW5hbF9uYW1lID8gJ3R2JyA6ICdtb3ZpZScpICsgJz9wYWdlPScgKyBwYWdlKSwgb25zdWNjZXNzLCBvbmVycm9yLCBudWxsLCBwYXJhbXMoNTAwMCkpXG59XG5cbmZ1bmN0aW9uIHNob3RzQ2hhbm5lbChpZCwgcGFnZSA9IDEsIG9uc3VjY2Vzcywgb25lcnJvcikge1xuICAgIExhbXBhLk5ldHdvcmsuc2lsZW50KHVybCgnY2hhbm5lbC8nICsgaWQgKyAnP3BhZ2U9JyArIHBhZ2UpLCBvbnN1Y2Nlc3MsIG9uZXJyb3IsIG51bGwsIHBhcmFtcygxMDAwMCkpXG59XG5cbmZ1bmN0aW9uIHNob3RzTGlrZWQoaWQsIHR5cGUgLG9uc3VjY2Vzcywgb25lcnJvcikge1xuICAgIGxldCB1aWQgPSBMYW1wYS5TdG9yYWdlLmdldCgnbGFtcGFfdWlkJywnJylcblxuICAgIExhbXBhLk5ldHdvcmsuc2lsZW50KHVybCgnbGlrZWQ/dWlkPScgKyB1aWQpLCBvbnN1Y2Nlc3MsIG9uZXJyb3IsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGVcbiAgICB9LCBwYXJhbXMoNTAwMCkpXG59XG5cbmZ1bmN0aW9uIHNob3RzQmxvY2soaWQsIG9uc3VjY2Vzcywgb25lcnJvcikge1xuICAgIExhbXBhLk5ldHdvcmsuc2lsZW50KHVybCgnYmxvY2snKSwgb25zdWNjZXNzLCBvbmVycm9yLCB7aWR9LCBwYXJhbXMoKSlcbn1cblxuZnVuY3Rpb24gc2hvdHNSZXBvcnQoaWQsIG9uc3VjY2Vzcywgb25lcnJvcikge1xuICAgIExhbXBhLk5ldHdvcmsuc2lsZW50KHVybCgncmVwb3J0JyksIG9uc3VjY2Vzcywgb25lcnJvciwge2lkfSwgcGFyYW1zKCkpXG59XG5cbmZ1bmN0aW9uIHNob3RzRGVsZXRlKGlkLCBvbnN1Y2Nlc3MsIG9uZXJyb3IpIHtcbiAgICBMYW1wYS5OZXR3b3JrLnNpbGVudCh1cmwoJ2RlbGV0ZScpLCBvbnN1Y2Nlc3MsIG9uZXJyb3IsIHtpZH0sIHBhcmFtcygpKVxufVxuXG5mdW5jdGlvbiBzaG90c0Zhdm9yaXRlKGFjdGlvbiwgc2hvdCwgb25zdWNjZXNzLCBvbmVycm9yKSB7XG4gICAgTGFtcGEuTmV0d29yay5zaWxlbnQodXJsKCdmYXZvcml0ZScpLCBvbnN1Y2Nlc3MsIG9uZXJyb3IsIHtcbiAgICAgICAgc2lkOiBzaG90LmlkLFxuICAgICAgICBjYXJkX3RpdGxlOiBzaG90LmNhcmRfdGl0bGUsXG4gICAgICAgIGNhcmRfcG9zdGVyOiBzaG90LmNhcmRfcG9zdGVyLFxuICAgICAgICBhY3Rpb25cbiAgICB9LCBwYXJhbXMoNTAwMCkpXG59XG5cbmZ1bmN0aW9uIGxlbnRhKHF1ZXJ5ID0ge30sIG9uc3VjY2Vzcykge1xuICAgIGxldCB1aWQgPSBMYW1wYS5TdG9yYWdlLmdldCgnbGFtcGFfdWlkJywnJylcblxuICAgIExhbXBhLkFycmF5cy5leHRlbmQocXVlcnksIHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgc29ydDogJ2lkJyxcbiAgICAgICAgdWlkOiB1aWQsXG4gICAgICAgIGxpbWl0OiAyMFxuICAgIH0pXG5cbiAgICBsZXQgcGF0aCA9IFtdXG5cbiAgICBmb3IobGV0IGtleSBpbiBxdWVyeSl7XG4gICAgICAgIHBhdGgucHVzaChrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocXVlcnlba2V5XSkpXG4gICAgfVxuXG4gICAgTGFtcGEuTmV0d29yay5zaWxlbnQodXJsKCdsZW50YT8nICsgcGF0aC5qb2luKCcmJykpLCAocmVzdWx0KT0+e1xuICAgICAgICBvbnN1Y2Nlc3MocmVzdWx0LnJlc3VsdHMpXG4gICAgfSwgKCk9PntcbiAgICAgICAgb25zdWNjZXNzKFtdKVxuICAgIH0sIG51bGwsIHBhcmFtcygxMDAwMCkpXG59XG5cbmZ1bmN0aW9uIHNob3RzVmlld2VkKGlkLCBvbnN1Y2Nlc3MsIG9uZXJyb3IpIHtcbiAgICBsZXQgdWlkID0gTGFtcGEuU3RvcmFnZS5nZXQoJ2xhbXBhX3VpZCcsJycpXG5cbiAgICBMYW1wYS5OZXR3b3JrLnNpbGVudCh1cmwoJ3ZpZXdlZD91aWQ9JyArIHVpZCksIG9uc3VjY2Vzcywgb25lcnJvciwge2lkfSwgcGFyYW1zKDUwMDApKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBsb2FkUmVxdWVzdCxcbiAgICB1cGxvYWRTdGF0dXMsXG4gICAgc2hvdHNMaXN0LFxuICAgIHNob3RzTGlrZWQsXG4gICAgc2hvdHNGYXZvcml0ZSxcbiAgICBzaG90c1ZpZGVvLFxuICAgIHNob3RzQmxvY2ssXG4gICAgc2hvdHNSZXBvcnQsXG4gICAgc2hvdHNEZWxldGUsXG4gICAgc2hvdHNDYXJkLFxuICAgIHNob3RzQ2hhbm5lbCxcbiAgICBzaG90c1ZpZXdlZCxcbiAgICBsZW50YVxufSIsImZ1bmN0aW9uIFByb2dyZXNzKHBhcmFtcyA9IHt9KXtcbiAgICB0aGlzLmh0bWwgPSBMYW1wYS5UZW1wbGF0ZS5nZXQoJ3Nob3RzX3Byb2dyZXNzJylcbiAgICB0aGlzLnRleHQgPSBwYXJhbXMudGV4dCB8fCAnJ1xuXG4gICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNldFRleHQodGhpcy50ZXh0KVxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKDApXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ3dhaXRpbmcnKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VGV4dCA9IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0XG5cbiAgICAgICAgdGhpcy5odG1sLmZpbmQoJy5zaG90cy1wcm9ncmVzc19fdGV4dCcpLnRleHQodGhpcy50ZXh0KVxuICAgIH1cblxuICAgIHRoaXMuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbihwZXJjZW50KXtcbiAgICAgICAgdGhpcy5odG1sLmZpbmQoJy5zaG90cy1wcm9ncmVzc19fYmFyIGRpdicpLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUgPSBmdW5jdGlvbihzdGF0ZSl7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmVDbGFzcygnc3RhdGUtLXdhaXRpbmcgc3RhdGUtLXVwbG9hZGluZyBzdGF0ZS0tZG9uZScpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoJ3N0YXRlLS0nICsgc3RhdGUpXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sXG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5odG1sLnJlbW92ZSgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzcyIsImltcG9ydCBBcGkgZnJvbSAnLi9hcGkuanMnXG5cbmxldCBzaG90cyA9IHt9XG5cbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBMYW1wYS5UaW1lci5hZGQoMTAwMCAqIDYwLCAoKT0+e1xuICAgICAgICBmb3IobGV0IGkgaW4gc2hvdHMpe1xuICAgICAgICAgICAgY2hlY2soc2hvdHNbaV0pXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGVjayhzaG90KXtcbiAgICBpZihzaG90LnN0YXR1cyA9PSAncmVhZHknIHx8IHNob3Quc3RhdHVzID09ICdlcnJvcicpIHJldHVybiBzdG9wKHNob3QpXG5cbiAgICBBcGkudXBsb2FkU3RhdHVzKHNob3QuaWQsIChqc29uKT0+e1xuICAgICAgICBpZihqc29uLnN0YXR1cyA9PSAncmVhZHknKXtcbiAgICAgICAgICAgIExhbXBhLkJlbGwucHVzaCh7XG4gICAgICAgICAgICAgICAgaWNvbjogJzxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1zaG90c1wiPjwvdXNlPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgdGV4dDogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX3VwbG9hZF9jb21wbGV0ZV9ub3RpZnknKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGpzb24uc3RhdHVzID09ICdlcnJvcicpe1xuICAgICAgICAgICAgTGFtcGEuQmVsbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjc3ByaXRlLXNob3RzXCI+PC91c2U+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfdXBsb2FkX2Vycm9yX25vdGlmeScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoanNvbi5zdGF0dXMgPT0gJ3JlYWR5JyB8fCBqc29uLnN0YXR1cyA9PSAnZXJyb3InKSBzdG9wKHNob3QpXG5cbiAgICAgICAgTGFtcGEuTGlzdGVuZXIuc2VuZCgnc2hvdHNfc3RhdHVzJywgey4uLmpzb259KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZChzaG90KXtcbiAgICBpZighc2hvdHNbc2hvdC5pZF0pIHNob3RzW3Nob3QuaWRdID0gc2hvdFxufVxuXG5mdW5jdGlvbiBzdG9wKHNob3Qpe1xuICAgIGRlbGV0ZSBzaG90c1tzaG90LmlkXVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCxcbiAgICBhZGQsXG4gICAgc3RvcFxufSIsImltcG9ydCBBcGkgZnJvbSAnLi9hcGkuanMnXG5cbmxldCBjcmVhdGVkID0gW11cblxuZnVuY3Rpb24gaW5pdCgpe1xuICAgIGNyZWF0ZWQgPSBMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfY3JlYXRlZCcsICdbXScpXG5cbiAgICB1cGRhdGUoKVxuXG4gICAgTGFtcGEuTGlzdGVuZXIuZm9sbG93KCdzaG90c19zdGF0dXMnLCB1cGRhdGVTdGF0dXMpXG4gICAgTGFtcGEuTGlzdGVuZXIuZm9sbG93KCdzaG90c191cGRhdGUnLCB1cGRhdGVEYXRhKVxuXG4gICAgTGFtcGEuTGlzdGVuZXIuZm9sbG93KCdzdGF0ZTpjaGFuZ2VkJywgKGUpPT57XG4gICAgICAgIGlmKGUudGFyZ2V0ID09ICdmYXZvcml0ZScgJiYgKGUucmVhc29uID09ICdwcm9maWxlJyB8fCBlLnJlYXNvbiA9PSAncmVhZCcpKXtcbiAgICAgICAgICAgIGNyZWF0ZWQgID0gW11cblxuICAgICAgICAgICAgdXBkYXRlKClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBMYW1wYS5Tb2NrZXQubGlzdGVuZXIuZm9sbG93KCdtZXNzYWdlJywgKHJlc3VsdCk9PntcbiAgICAgICAgaWYocmVzdWx0Lm1ldGhvZCA9PSAndXBkYXRlJyAmJiByZXN1bHQuZGF0YS5mcm9tID09ICdzaG90cycgJiYgcmVzdWx0LmRhdGEubGlzdCA9PSAnY3JlYXRlZCcpe1xuICAgICAgICAgICAgdXBkYXRlKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhzaG90KXtcbiAgICBsZXQgZmluZCA9IGNyZWF0ZWQuZmluZChhPT5hLmlkID09IHNob3QuaWQpXG5cbiAgICBpZihmaW5kKXtcbiAgICAgICAgZmluZC5zdGF0dXMgPSBzaG90LnN0YXR1c1xuICAgICAgICBmaW5kLnNjcmVlbiA9IHNob3Quc2NyZWVuXG4gICAgICAgIGZpbmQuZmlsZSAgID0gc2hvdC5maWxlXG5cbiAgICAgICAgTGFtcGEuU3RvcmFnZS5zZXQoJ3Nob3RzX2NyZWF0ZWQnLCBjcmVhdGVkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF0YShzaG90KXtcbiAgICBsZXQgZmluZCA9IGNyZWF0ZWQuZmluZChhPT5hLmlkID09IHNob3QuaWQpXG5cbiAgICBpZihmaW5kKXtcbiAgICAgICAgZmluZC5saWtlZCA9IHNob3QubGlrZWRcbiAgICAgICAgZmluZC5zYXZlZCA9IHNob3Quc2F2ZWRcblxuICAgICAgICBMYW1wYS5TdG9yYWdlLnNldCgnc2hvdHNfY3JlYXRlZCcsIGNyZWF0ZWQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKXtcbiAgICBBcGkuc2hvdHNMaXN0KCdjcmVhdGVkJywgMSwgKHNob3RzKT0+e1xuICAgICAgICBjcmVhdGVkID0gc2hvdHMucmVzdWx0c1xuXG4gICAgICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19jcmVhdGVkJywgY3JlYXRlZClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGQoc2hvdCl7XG4gICAgbGV0IGNsb25lID0ge31cblxuICAgIE9iamVjdC5hc3NpZ24oY2xvbmUsIHNob3QpXG5cbiAgICBkZWxldGUgY2xvbmUucGFyYW1zXG5cbiAgICBMYW1wYS5BcnJheXMuaW5zZXJ0KGNyZWF0ZWQsIDAsIGNsb25lKVxuXG4gICAgaWYoY3JlYXRlZC5sZW5ndGggPiAyMCl7XG4gICAgICAgIGNyZWF0ZWQgPSBjcmVhdGVkLnNsaWNlKDAsMjApXG4gICAgfVxuXG4gICAgTGFtcGEuU3RvcmFnZS5zZXQoJ3Nob3RzX2NyZWF0ZWQnLCBjcmVhdGVkKVxuXG4gICAgTGFtcGEuU29ja2V0LnNlbmQoJ3VwZGF0ZScsIHtwYXJhbXM6IHtmcm9tOiAnc2hvdHMnLCBsaXN0OiAnY3JlYXRlZCd9fSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKHNob3Qpe1xuICAgIGxldCBmaW5kX2luID0gY3JlYXRlZC5maW5kKGE9PmEuaWQgPT0gc2hvdC5pZClcblxuICAgIGlmKGZpbmRfaW4pIExhbXBhLkFycmF5cy5yZW1vdmUoY3JlYXRlZCwgZmluZF9pbilcblxuICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19jcmVhdGVkJywgY3JlYXRlZClcblxuICAgIExhbXBhLkxpc3RlbmVyLnNlbmQoJ3Nob3RzX3N0YXR1cycsIHtpZDogc2hvdC5pZCwgc3RhdHVzOiAnZGVsZXRlZCcsIGZpbGU6IHNob3QuZmlsZSwgc2NyZWVuOiBzaG90LnNjcmVlbn0pXG5cbiAgICBMYW1wYS5Tb2NrZXQuc2VuZCgndXBkYXRlJywge3BhcmFtczoge2Zyb206ICdzaG90cycsIGxpc3Q6ICdjcmVhdGVkJ319KVxufVxuXG5mdW5jdGlvbiBwYWdlKHBhZ2UsIGNhbGxiYWNrKXtcbiAgICBBcGkuc2hvdHNMaXN0KCdjcmVhdGVkJywgcGFnZSwgKHNob3RzKT0+e1xuICAgICAgICBjYWxsYmFjayhzaG90cy5yZXN1bHRzKVxuICAgIH0sICgpPT57XG4gICAgICAgIGNhbGxiYWNrKFtdKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldCgpe1xuICAgIHJldHVybiBMYW1wYS5BcnJheXMuY2xvbmUoY3JlYXRlZClcbn1cblxuZnVuY3Rpb24gZmluZChpZCl7XG4gICAgcmV0dXJuIEJvb2xlYW4oY3JlYXRlZC5maW5kKGE9PmEuaWQgPT0gaWQpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCxcbiAgICByZW1vdmUsXG4gICAgYWRkLFxuICAgIGdldCxcbiAgICBmaW5kLFxuICAgIHBhZ2Vcbn0iLCJmdW5jdGlvbiBTZWxlY3RvcihsaXN0KXtcbiAgICB0aGlzLmh0bWwgPSAkKCc8ZGl2IGNsYXNzPVwic2hvdHMtc2VsZWN0b3ItdGFnc1wiPjwvZGl2PicpXG4gICAgdGhpcy5saXN0ID0gbGlzdCB8fCBbXVxuXG4gICAgdGhpcy5zZWxlY3RlZCA9IFtdXG5cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKHQ9PntcbiAgICAgICAgICAgIGxldCB0YWcgPSAkKCc8ZGl2IGNsYXNzPVwic2hvdHMtc2VsZWN0b3ItdGFnc19fdGFnIHNlbGVjdG9yXCI+PHNwYW4+Jyt0LnRpdGxlKyc8L3NwYW4+PC9kaXY+JylcblxuICAgICAgICAgICAgdGFnLm9uKCdob3ZlcjplbnRlcicsIChlKT0+e1xuICAgICAgICAgICAgICAgIHRhZy50b2dnbGVDbGFzcygnYWN0aXZlJylcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZih0KSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaCh0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTGFtcGEuQXJyYXlzLnJlbW92ZSh0aGlzLnNlbGVjdGVkLCB0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGFnKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmh0bWwucmVtb3ZlKClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yIiwibGV0IHRhZ3MgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgc2x1ZzogJ2FjdGlvbidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHNsdWc6ICdjb21lZHknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBzbHVnOiAnZHJhbWEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBzbHVnOiAnZmFudGFzeSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHNsdWc6ICdob3Jyb3InXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBzbHVnOiAndGhyaWxsZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBzbHVnOiAnYW5pbWUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBzbHVnOiAnc2NpX2ZpJ1xuICAgIH1cbl1cblxuZnVuY3Rpb24gbG9hZCgpe1xuICAgIHRhZ3MgPSB0cmFuc2xhdGUodGFncylcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlKGxpc3Qpe1xuICAgIHJldHVybiBsaXN0Lm1hcCh0PT57XG4gICAgICAgIHQudGl0bGUgPSBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfdGFnXycrdC5zbHVnKVxuXG4gICAgICAgIHJldHVybiB0XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbGlzdCgpe1xuICAgIHJldHVybiB0YWdzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2FkLFxuICAgIGxpc3QsXG4gICAgdHJhbnNsYXRlXG59IiwiaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3LmpzJ1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vY2hlY2tib3guanMnXG5pbXBvcnQgQXBpIGZyb20gJy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL3Byb2dyZXNzLmpzJ1xuaW1wb3J0IEhhbmRsZXIgZnJvbSAnLi4vdXRpbHMvaGFuZGxlci5qcydcbmltcG9ydCBDcmVhdGVkIGZyb20gJy4uL3V0aWxzL2NyZWF0ZWQuanMnXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi9zZWxlY3Rvci5qcydcbmltcG9ydCBUYWdzIGZyb20gJy4uL3V0aWxzL3RhZ3MuanMnXG5cbmZ1bmN0aW9uIFVwbG9hZChkYXRhKXtcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5odG1sID0gTGFtcGEuVGVtcGxhdGUuZ2V0KCdzaG90c19tb2RhbF91cGxvYWQnKVxuXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMucHJldmlldyAgPSBuZXcgUHJldmlldyh0aGlzLmRhdGEpXG5cbiAgICAgICAgdGhpcy5jaGVja2JveCA9IG5ldyBDaGVja2JveCh7XG4gICAgICAgICAgICB0ZXh0OiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgn0KHQtNC10LvQsNGC0Ywg0L/Rg9Cx0LvQuNGH0L3QvtC5JyksXG4gICAgICAgICAgICBzdGF0ZTogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgdGV4dDogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX3VwbG9hZF9wcm9ncmVzc19zdGFydCcpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxlY3Rvcl90aXRsZSA9ICQoJzxkaXYgY2xhc3M9XCJzaG90cy1saW5lLXRpdGxlXCI+JytMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfY2hvaWNlX3RhZ3MnKSsnPC9kaXY+JylcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IG5ldyBTZWxlY3RvcihUYWdzLmxpc3QoKSlcblxuICAgICAgICB0aGlzLmNoZWNrYm94LmNyZWF0ZSgpXG4gICAgICAgIHRoaXMucHJldmlldy5jcmVhdGUoKVxuICAgICAgICB0aGlzLnByb2dyZXNzLmNyZWF0ZSgpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MucmVuZGVyKCkuYWRkQ2xhc3MoJ2hpZGUnKVxuICAgICAgICB0aGlzLnNlbGVjdG9yLmNyZWF0ZSgpXG5cbiAgICAgICAgdGhpcy5idXR0b25fdXBsb2FkICAgPSBMYW1wYS5UZW1wbGF0ZS5nZXQoJ3Nob3RzX2J1dHRvbicsIHt0ZXh0OiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfbW9kYWxfYnV0dG9uX3VwbG9hZF9zdGFydCcpfSlcbiAgICAgICAgdGhpcy5idXR0b25fY2FuY2VsICAgPSBMYW1wYS5UZW1wbGF0ZS5nZXQoJ3Nob3RzX2J1dHRvbicsIHt0ZXh0OiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfbW9kYWxfYnV0dG9uX3VwbG9hZF9jYW5jZWwnKX0pXG4gICAgICAgIHRoaXMuYnV0dG9uX2FnYWluICAgID0gTGFtcGEuVGVtcGxhdGUuZ2V0KCdzaG90c19idXR0b24nLCB7dGV4dDogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX21vZGFsX2J1dHRvbl91cGxvYWRfYWdhaW4nKX0pXG4gICAgICAgIHRoaXMuYnV0dG9uX2NvbXBsZXRlID0gTGFtcGEuVGVtcGxhdGUuZ2V0KCdzaG90c19idXR0b24nLCB7dGV4dDogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX21vZGFsX2J1dHRvbl91cGxvYWRfY29tcGxldGUnKX0pXG4gICAgICAgIHRoaXMudGV4dF9jb21wbGV0ZSAgID0gTGFtcGEuVGVtcGxhdGUuZ2V0KCdzaG90c191cGxvYWRfY29tcGxldGVfdGV4dCcpXG4gICAgICAgIHRoaXMudGV4dF9ub3RpY2UgICAgID0gTGFtcGEuVGVtcGxhdGUuZ2V0KCdzaG90c191cGxvYWRfbm90aWNlX3RleHQnKVxuXG4gICAgICAgIHRoaXMuYnV0dG9uX2FnYWluLmFkZENsYXNzKCdoaWRlJykub24oJ2hvdmVyOmVudGVyJywgdGhpcy5zdGFydFVwbG9hZC5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLmJ1dHRvbl91cGxvYWQub24oJ2hvdmVyOmVudGVyJywgdGhpcy5zdGFydFVwbG9hZC5iaW5kKHRoaXMpKVxuXG4gICAgICAgIHRoaXMuYnV0dG9uX2NvbXBsZXRlLmFkZENsYXNzKCdoaWRlJykub24oJ2hvdmVyOmVudGVyJywgKCk9PntcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXG5cbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSh0aGlzLnNob3RfcmVhZHkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50ZXh0X2NvbXBsZXRlLmFkZENsYXNzKCdoaWRlJylcblxuICAgICAgICB0aGlzLmJ1dHRvbl9jYW5jZWwuYWRkQ2xhc3MoJ3Nob3RzLXNlbGVjdG9yLS10cmFuc3BhcmVudCcpXG4gICAgICAgIHRoaXMuYnV0dG9uX2NhbmNlbC5vbignaG92ZXI6ZW50ZXInLCB0aGlzLmNhbmNlbFVwbG9hZC5iaW5kKHRoaXMpKVxuXG4gICAgICAgIHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtbW9kYWwtdXBsb2FkX19wcmV2aWV3JykuYXBwZW5kKHRoaXMucHJldmlldy5yZW5kZXIoKSlcbiAgICAgICAgdGhpcy5odG1sLmZpbmQoJy5zaG90cy1tb2RhbC11cGxvYWRfX2JvZHknKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLnRleHRfbm90aWNlKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLnNlbGVjdG9yX3RpdGxlKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLnNlbGVjdG9yLnJlbmRlcigpKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLmJ1dHRvbl91cGxvYWQpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMucHJvZ3Jlc3MucmVuZGVyKCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuYnV0dG9uX2FnYWluKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLmJ1dHRvbl9jYW5jZWwpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMudGV4dF9jb21wbGV0ZSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5idXR0b25fY29tcGxldGUpXG5cbiAgICAgICAgTGFtcGEuTW9kYWwub3Blbih7XG4gICAgICAgICAgICBodG1sOiB0aGlzLmh0bWwsXG4gICAgICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICAgICAgbm9wYWRkaW5nOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CYWNrOiAoKT0+e31cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHRoaXMuc2V0Rm9jdXMgPSBmdW5jdGlvbih0YXJnZXQpe1xuICAgICAgICBMYW1wYS5Db250cm9sbGVyLmNsZWFyKClcbiAgICAgICAgTGFtcGEuQ29udHJvbGxlci5jb2xsZWN0aW9uU2V0KHRoaXMuaHRtbClcbiAgICAgICAgTGFtcGEuQ29udHJvbGxlci5jb2xsZWN0aW9uRm9jdXModGFyZ2V0LCB0aGlzLmh0bWwpXG4gICAgfVxuXG4gICAgdGhpcy5zdGFydFVwbG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uX2FnYWluLmFkZENsYXNzKCdoaWRlJylcbiAgICAgICAgdGhpcy5idXR0b25fdXBsb2FkLmFkZENsYXNzKCdoaWRlJylcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5yZW5kZXIoKS5yZW1vdmVDbGFzcygnaGlkZScpXG5cbiAgICAgICAgdGhpcy5zZXRGb2N1cyh0aGlzLnByb2dyZXNzLnJlbmRlcigpKVxuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3Muc2V0VGV4dChMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfdXBsb2FkX3Byb2dyZXNzX3N0YXJ0JykpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3Muc2V0U3RhdGUoJ3dhaXRpbmcnKVxuXG4gICAgICAgIGxldCBwbGF5ID0gdGhpcy5kYXRhLnBsYXlfZGF0YVxuICAgICAgICBsZXQgY2FyZCA9IHBsYXkuY2FyZFxuXG4gICAgICAgIEFwaS51cGxvYWRSZXF1ZXN0KHtcbiAgICAgICAgICAgIGNhcmRfaWQ6IGNhcmQuaWQsXG4gICAgICAgICAgICBjYXJkX3R5cGU6IGNhcmQub3JpZ2luYWxfbmFtZSA/ICd0dicgOiAnbW92aWUnLFxuICAgICAgICAgICAgY2FyZF90aXRsZTogY2FyZC50aXRsZSB8fCBjYXJkLm5hbWUgfHwgY2FyZC5vcmlnaW5hbF90aXRsZSB8fCBjYXJkLm9yaWdpbmFsX25hbWUgfHwgJ1Vua25vd24nLFxuICAgICAgICAgICAgY2FyZF95ZWFyOiAoY2FyZC5yZWxlYXNlX2RhdGUgfHwgY2FyZC5maXJzdF9haXJfZGF0ZSB8fCAnLS0tLScpLnNsaWNlKDAsNCksXG4gICAgICAgICAgICBjYXJkX3Bvc3RlcjogY2FyZC5wb3N0ZXJfcGF0aCB8fCAnJyxcblxuICAgICAgICAgICAgc3RhcnRfcG9pbnQ6IHRoaXMuZGF0YS5yZWNvcmRpbmcuc3RhcnRfcG9pbnQsXG4gICAgICAgICAgICBlbmRfcG9pbnQ6IHRoaXMuZGF0YS5yZWNvcmRpbmcuZW5kX3BvaW50LFxuXG4gICAgICAgICAgICBzZWFzb246IHBsYXkuc2Vhc29uIHx8IDAsXG4gICAgICAgICAgICBlcGlzb2RlOiBwbGF5LmVwaXNvZGUgfHwgMCxcbiAgICAgICAgICAgIHZvaWNlX25hbWU6IHBsYXkudm9pY2VfbmFtZSB8fCAnJyxcbiAgICAgICAgICAgIGJhbGFuc2VyOiBwbGF5LmJhbGFuc2VyIHx8ICcnLFxuXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnNlbGVjdG9yLmdldCgpLm1hcCh0PT50LmlkKSxcblxuICAgICAgICAgICAgcmVjb3JkZXI6ICduZXcnLFxuICAgICAgICB9LCB0aGlzLmVuZFVwbG9hZC5iaW5kKHRoaXMpLCB0aGlzLmVycm9yVXBsb2FkLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgdGhpcy5lcnJvclVwbG9hZCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB0aGlzLnByb2dyZXNzLnJlbmRlcigpLmFkZENsYXNzKCdoaWRlJylcbiAgICAgICAgdGhpcy5idXR0b25fYWdhaW4ucmVtb3ZlQ2xhc3MoJ2hpZGUnKVxuXG4gICAgICAgIHRoaXMuc2V0Rm9jdXModGhpcy5idXR0b25fYWdhaW4pXG4gICAgfVxuXG5cbiAgICB0aGlzLmVuZFVwbG9hZCA9IGZ1bmN0aW9uKHVwbG9hZCl7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MucmVuZGVyKCkuYWRkQ2xhc3MoJ2hpZGUnKVxuICAgICAgICB0aGlzLmJ1dHRvbl9jYW5jZWwuYWRkQ2xhc3MoJ2hpZGUnKVxuICAgICAgICB0aGlzLmJ1dHRvbl9jb21wbGV0ZS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgICAgIHRoaXMudGV4dF9jb21wbGV0ZS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgICAgIHRoaXMudGV4dF9ub3RpY2UuYWRkQ2xhc3MoJ2hpZGUnKVxuICAgICAgICB0aGlzLnNlbGVjdG9yX3RpdGxlLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuc2VsZWN0b3IuZGVzdHJveSgpXG5cbiAgICAgICAgTGFtcGEuU3RvcmFnZS5zZXQoJ3Nob3RzX2xhc3RfcmVjb3JkJywgRGF0ZS5ub3coKSlcblxuICAgICAgICBBcGkuc2hvdHNWaWRlbyh1cGxvYWQuaWQsIChyZXN1bHQpPT57XG4gICAgICAgICAgICBDcmVhdGVkLmFkZChyZXN1bHQudmlkZW8pXG5cbiAgICAgICAgICAgIEhhbmRsZXIuYWRkKHJlc3VsdC52aWRlbylcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNldEZvY3VzKHRoaXMuYnV0dG9uX2NvbXBsZXRlKVxuICAgIH1cblxuICAgIHRoaXMuY2FuY2VsVXBsb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy51cGxvYWRpbmcpIHRoaXMudXBsb2FkaW5nLmFib3J0KClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVzdHJveSgpXG5cbiAgICAgICAgdGhpcy5vbkNhbmNlbCgpXG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgTGFtcGEuTW9kYWwuY2xvc2UoKVxuXG4gICAgICAgIHRoaXMucHJldmlldy5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGVja2JveC5kZXN0cm95KClcbiAgICAgICAgdGhpcy5odG1sLnJlbW92ZSgpXG5cbiAgICAgICAgdGhpcy5ydW5VcGxvYWQgPSAoKT0+e31cbiAgICAgICAgdGhpcy5lbmRVcGxvYWQgPSAoKT0+e31cbiAgICAgICAgdGhpcy5jYW5jZWxVcGxvYWQgPSAoKT0+e31cbiAgICAgICAgdGhpcy5ub3RpZnlVcGxvYWQgPSAoKT0+e31cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZCIsImltcG9ydCBBcGkgZnJvbSAnLi9hcGkuanMnXG5cbmxldCBsb2FkZWRfc2hvdHMgPSB7fVxuXG5mdW5jdGlvbiBpbml0KCl7XG4gICAgbGV0IGJ1dHRvbiA9IGA8ZGl2IGNsYXNzPVwiZnVsbC1zdGFydF9fYnV0dG9uIHNob3RzLXZpZXctYnV0dG9uIHNlbGVjdG9yIHZpZXctLW9ubGluZVwiIGRhdGEtc3VidGl0bGU9XCIje3Nob3RzX3dhdGNofVwiPlxuICAgICAgICA8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNzcHJpdGUtc2hvdHNcIj48L3VzZT48L3N2Zz5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cInNob3RzLXZpZXctYnV0dG9uX190aXRsZVwiPlNob3RzPC9zcGFuPlxuICAgIDwvZGl2PmBcblxuICAgIExhbXBhLkxpc3RlbmVyLmZvbGxvdygnZnVsbCcsKGUpPT57XG4gICAgICAgIGlmKGUudHlwZSA9PSAnY29tcGxpdGUnICYmIChMYW1wYS5TdG9yYWdlLmZpZWxkKCdzaG90c19pbl9jYXJkJykgfHwgTGFtcGEuU3RvcmFnZS5maWVsZCgnc2hvdHNfaW5fcGxheWVyJykpKXtcbiAgICAgICAgICAgIGxldCBidG4gPSAkKExhbXBhLkxhbmcudHJhbnNsYXRlKGJ1dHRvbikpXG4gICAgICAgICAgICBsZXQgbW92ID0gZS5kYXRhLm1vdmllXG5cbiAgICAgICAgICAgIGJ0bi5vbignaG92ZXI6ZW50ZXInLCgpPT57XG4gICAgICAgICAgICAgICAgTGFtcGEuQWN0aXZpdHkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hvdHMnLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdzaG90c19jYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgY2FyZDogbW92LFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxvYWQobW92LCAoc2hvdHMpPT57XG4gICAgICAgICAgICAgICAgaWYoc2hvdHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3RzJywnbG9hZCBmb3IgZnVsbCB2aWV3OicsIHNob3RzLmxlbmd0aCwgJ2l0ZW1zOycsICdjYXJkIGlkOicsIG1vdi5pZCwgbW92Lm9yaWdpbmFsX25hbWUgPyAndHYnIDogJ21vdmllJylcblxuICAgICAgICAgICAgICAgICAgICBidG4uYXR0cignZGF0YS1zdWJ0aXRsZScsIExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c193YXRjaCcpICsgJyA8c3BhbiBjbGFzcz1cInNob3RzLXZpZXctYnV0dG9uX19jb3VudFwiPicgKyAoc2hvdHMubGVuZ3RoID4gOTkgPyAnOTkrJyA6IHNob3RzLmxlbmd0aCkgKyAnPC9zcGFuPicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYoTGFtcGEuU3RvcmFnZS5maWVsZCgnc2hvdHNfaW5fY2FyZCcpKSBlLm9iamVjdC5hY3Rpdml0eS5yZW5kZXIoKS5maW5kKCcudmlldy0tdG9ycmVudCcpLmxhc3QoKS5hZnRlcihidG4pXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBsb2FkKGNhcmQsIGNhbGwpe1xuICAgIGxldCBrZXkgPSBjYXJkLmlkICsgJ18nICsgKGNhcmQub3JpZ2luYWxfbmFtZSA/ICd0dicgOiAnbW92aWUnKVxuXG4gICAgaWYobG9hZGVkX3Nob3RzW2tleV0pe1xuICAgICAgICBjYWxsKGxvYWRlZF9zaG90c1trZXldKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBBcGkuc2hvdHNDYXJkKGNhcmQsIDEsIChkYXRhKT0+e1xuICAgICAgICAgICAgbG9hZGVkX3Nob3RzW2tleV0gPSBkYXRhLnJlc3VsdHNcblxuICAgICAgICAgICAgY2FsbChkYXRhLnJlc3VsdHMpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcigpe1xuICAgIGxvYWRlZF9zaG90cyA9IHt9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShjYXJkKXtcbiAgICBsZXQga2V5ID0gY2FyZC5pZCArICdfJyArIChjYXJkLm9yaWdpbmFsX25hbWUgPyAndHYnIDogJ21vdmllJylcblxuICAgIGRlbGV0ZSBsb2FkZWRfc2hvdHNba2V5XVxufVxuXG5mdW5jdGlvbiBnZXQoY2FyZCl7XG4gICAgbGV0IGtleSA9IGNhcmQuaWQgKyAnXycgKyAoY2FyZC5vcmlnaW5hbF9uYW1lID8gJ3R2JyA6ICdtb3ZpZScpXG5cbiAgICByZXR1cm4gbG9hZGVkX3Nob3RzW2tleV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQsXG4gICAgbG9hZCxcbiAgICBjbGVhcixcbiAgICByZW1vdmUsXG4gICAgZ2V0XG59IiwiaW1wb3J0IFJlY29yZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcmVjb3JkZXIuanMnXG5pbXBvcnQgVXBsb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvdXBsb2FkLmpzJ1xuaW1wb3J0IEFwaSBmcm9tICcuLi91dGlscy9hcGkuanMnXG5pbXBvcnQgRGVmaW5lZCBmcm9tICcuLi9kZWZpbmVkLmpzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuaW1wb3J0IFZpZXcgZnJvbSAnLi4vdXRpbHMvdmlldy5qcydcblxubGV0IGJ1dHRvbl9yZWNvcmQgPSBudWxsXG5sZXQgcGxheV9kYXRhICAgICA9IHt9XG5sZXQgcGxheWVyX3Nob3RzICA9IG51bGxcblxuZnVuY3Rpb24gaW5pdCgpe1xuICAgIExhbXBhLlBsYXllci5saXN0ZW5lci5mb2xsb3coJ3JlYWR5Jywgc3RhcnRQbGF5ZXIpXG5cbiAgICBMYW1wYS5QbGF5ZXIubGlzdGVuZXIuZm9sbG93KCdkZXN0cm95Jywgc3RvcFBsYXllcilcblxuICAgIGJ1dHRvbl9yZWNvcmQgPSBMYW1wYS5UZW1wbGF0ZS5nZXQoJ3Nob3RzX3BsYXllcl9yZWNvcmRfYnV0dG9uJylcblxuICAgIGJ1dHRvbl9yZWNvcmQub24oJ2hvdmVyOmVudGVyJywgYmVmb3JlUmVjb3JkaW5nKVxuXG4gICAgYnV0dG9uX3JlY29yZC5hZGRDbGFzcygnaGlkZScpXG5cbiAgICBMYW1wYS5QbGF5ZXJQYW5lbC5yZW5kZXIoKS5maW5kKCcucGxheWVyLXBhbmVsX19zZXR0aW5ncycpLmFmdGVyKGJ1dHRvbl9yZWNvcmQpXG5cbiAgICBMYW1wYS5Db250cm9sbGVyLmxpc3RlbmVyLmZvbGxvdygndG9nZ2xlJywgKGUpPT57XG4gICAgICAgIGlmKHBsYXllcl9zaG90cykgcGxheWVyX3Nob3RzLnRvZ2dsZUNsYXNzKCdmb2N1cycsIGUubmFtZSA9PSAncGxheWVyX3Jld2luZCcgfHwgTGFtcGEuUGxhdGZvcm0ubW91c2UoKSB8fCBMYW1wYS5VdGlscy5pc1RvdWNoRGV2aWNlKCkpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcGxheWVyUGFuZWwoc3RhdHVzKXtcbiAgICBMYW1wYS5QbGF5ZXIucmVuZGVyKCkudG9nZ2xlQ2xhc3MoJ3Nob3RzLXBsYXllci0tcmVjb3JkaW5nJywhc3RhdHVzKVxufVxuXG5mdW5jdGlvbiBzdGFydFBsYXllcihkYXRhKXtcbiAgICBwbGF5X2RhdGEgPSB7fVxuXG4gICAgaWYoZGF0YS5jYXJkKSBwbGF5X2RhdGEuY2FyZCA9IGRhdGEuY2FyZFxuICAgIGVsc2UgaWYoTGFtcGEuQWN0aXZpdHkuYWN0aXZlKCkubW92aWUpe1xuICAgICAgICBwbGF5X2RhdGEuY2FyZCA9IExhbXBhLkFjdGl2aXR5LmFjdGl2ZSgpLm1vdmllXG4gICAgfVxuXG4gICAgbGV0IHBvc3NpYmx5ID0gdHJ1ZVxuICAgIGxldCB0eXBlICAgICA9IHBsYXlfZGF0YS5jYXJkPy5vcmlnaW5hbF9uYW1lID8gJ3R2JyA6ICdtb3ZpZSdcblxuICAgIGlmKGRhdGEuaXB0diB8fCBkYXRhLnlvdXR1YmUpIHBvc3NpYmx5ID0gZmFsc2VcbiAgICBlbHNlIGlmKCFMYW1wYS5BY2NvdW50LlBlcm1pdC50b2tlbikgcG9zc2libHkgPSBmYWxzZVxuICAgIGVsc2UgaWYodHlwZSA9PSAndHYnICYmICghZGF0YS5zZWFzb24gfHwgIWRhdGEuZXBpc29kZSkpIHBvc3NpYmx5ID0gZmFsc2VcblxuICAgIGlmKHBvc3NpYmx5KXtcbiAgICAgICAgcGxheV9kYXRhLnNlYXNvbiAgICAgPSBkYXRhLnNlYXNvbiB8fCAwXG4gICAgICAgIHBsYXlfZGF0YS5lcGlzb2RlICAgID0gZGF0YS5lcGlzb2RlIHx8IDBcbiAgICAgICAgcGxheV9kYXRhLnZvaWNlX25hbWUgPSAoZGF0YS52b2ljZV9uYW1lIHx8ICcnKS50cmltKClcblxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBwbGF5X2RhdGEuYmFsYW5zZXIgPSBVdGlscy5nZXRCYWxhbnNlcihwbGF5X2RhdGEuY2FyZCB8fCB7fSlcbiAgICAgICAgfSwxMDAwKVxuXG4gICAgICAgIGlmKHBsYXlfZGF0YS5jYXJkKXtcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ21vdmllJyl7XG4gICAgICAgICAgICAgICAgbGV0IHBsYXllcl90aXRsZSA9IExhbXBhLlBsYXllci5wbGF5ZGF0YSgpLnRpdGxlIHx8ICcnXG5cbiAgICAgICAgICAgICAgICBwbGF5X2RhdGEudm9pY2VfbmFtZSA9IChwbGF5X2RhdGEudm9pY2VfbmFtZSB8fCBwbGF5ZXJfdGl0bGUgfHwgJycpLnRyaW0oKVxuXG4gICAgICAgICAgICAgICAgaWYocGxheV9kYXRhLnZvaWNlX25hbWUgPT0gcGxheV9kYXRhLmNhcmQudGl0bGUgfHwgcGxheV9kYXRhLnRvcnJlbnRfaGFzaCkgcGxheV9kYXRhLnZvaWNlX25hbWUgPSAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighKFV0aWxzLmlzVFNRdWFsaXR5KHBsYXlfZGF0YS52b2ljZV9uYW1lKSB8fCBVdGlscy5pc1RTUXVhbGl0eShMYW1wYS5QbGF5ZXIucGxheWRhdGEoKS50aXRsZSkpKSBidXR0b25fcmVjb3JkLnJlbW92ZUNsYXNzKCdoaWRlJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKHBsYXlfZGF0YS5jYXJkICYmIChwbGF5X2RhdGEuY2FyZC5zb3VyY2UgPT0gJ3RtZGInIHx8IHBsYXlfZGF0YS5jYXJkLnNvdXJjZSA9PSAnY3ViJykpe1xuICAgICAgICBpZihMYW1wYS5TdG9yYWdlLmZpZWxkKCdzaG90c19pbl9wbGF5ZXInKSkgcGxheWVyU2hvdHNTZWdtZW50cygpXG4gICAgICAgIC8vcGxheWVyU2hvdHNGb290ZXIoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RvcFBsYXllcigpe1xuICAgIGJ1dHRvbl9yZWNvcmQuYWRkQ2xhc3MoJ2hpZGUnKVxuXG4gICAgaWYocGxheWVyX3Nob3RzKXtcbiAgICAgICAgcGxheWVyX3Nob3RzLnJlbW92ZSgpXG4gICAgICAgIHBsYXllcl9zaG90cyA9IG51bGxcbiAgICB9XG5cbiAgICBwbGF5ZXJQYW5lbCh0cnVlKVxuXG4gICAgaWYocGxheV9kYXRhLm5lZWRfdG9jb250ZW50KXtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgTGFtcGEuQ29udHJvbGxlci50b2dnbGUoJ2NvbnRlbnQnKVxuICAgICAgICB9LCAxMDApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwbGF5ZXJTaG90c1NlZ21lbnRzKCl7XG4gICAgbGV0IHR5cGUgID0gcGxheV9kYXRhLmNhcmQub3JpZ2luYWxfbmFtZSA/ICd0dicgOiAnbW92aWUnXG4gICAgbGV0IHZpZGVvID0gTGFtcGEuUGxheWVyVmlkZW8udmlkZW8oKVxuXG4gICAgaWYodHlwZSA9PSAndHYnICYmICghcGxheV9kYXRhLnNlYXNvbiB8fCAhcGxheV9kYXRhLmVwaXNvZGUpKSByZXR1cm5cblxuICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCAoKT0+e1xuICAgICAgICBWaWV3LmxvYWQocGxheV9kYXRhLmNhcmQsIChzaG90cyk9PntcbiAgICAgICAgICAgIGlmKCFMYW1wYS5QbGF5ZXIub3BlbmVkKCkpIHJldHVyblxuXG4gICAgICAgICAgICBpZih0eXBlID09ICd0dicgJiYgcGxheV9kYXRhLnNlYXNvbiAmJiBwbGF5X2RhdGEuZXBpc29kZSl7XG4gICAgICAgICAgICAgICAgc2hvdHMgPSBzaG90cy5maWx0ZXIoKGUpPT5lLnNlYXNvbiA9PSBwbGF5X2RhdGEuc2Vhc29uICYmIGUuZXBpc29kZSA9PSBwbGF5X2RhdGEuZXBpc29kZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoc2hvdHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBwbGF5ZXJfc2hvdHMgPSAkKCc8ZGl2IGNsYXNzPVwic2hvdHMtcGxheWVyLXNlZ21lbnRzXCI+PC9kaXY+JylcblxuICAgICAgICAgICAgICAgIHBsYXllcl9zaG90cy50b2dnbGVDbGFzcygnZm9jdXMnLCBMYW1wYS5QbGF0Zm9ybS5tb3VzZSgpIHx8IExhbXBhLlV0aWxzLmlzVG91Y2hEZXZpY2UoKSlcblxuICAgICAgICAgICAgICAgIHNob3RzLmZvckVhY2goKGVsZW0pPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWdtZW50ID0gJCgnPGRpdiBjbGFzcz1cInNob3RzLXBsYXllci1zZWdtZW50c19fdGltZVwiPjwvZGl2PicpXG4gICAgICAgICAgICAgICAgICAgIGxldCBwaWN0dXJlID0gJCgnPGRpdiBjbGFzcz1cInNob3RzLXBsYXllci1zZWdtZW50c19fcGljdHVyZVwiPjxpbWcgc3JjPVwiJytlbGVtLmltZysnXCI+PC9kaXY+JylcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gcGljdHVyZS5maW5kKCdpbWcnKVswXVxuXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbignbG9hZCcsICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlLmFkZENsYXNzKCdzaG90cy1wbGF5ZXItc2VnbWVudHNfX3BpY3R1cmUtLWxvYWRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogKGVsZW0uc3RhcnRfcG9pbnQgLyB2aWRlby5kdXJhdGlvbiAqIDEwMCkgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogKChlbGVtLmVuZF9wb2ludCAtIGVsZW0uc3RhcnRfcG9pbnQpIC8gdmlkZW8uZHVyYXRpb24gKiAxMDApICsgJyUnXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogKGVsZW0uc3RhcnRfcG9pbnQgLyB2aWRlby5kdXJhdGlvbiAqIDEwMCkgKyAnJSdcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJfc2hvdHMuYXBwZW5kKHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcl9zaG90cy5hcHBlbmQocGljdHVyZSlcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gZWxlbS5zY3JlZW5cblxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlLm9uKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgc2hvdCcsIGVsZW0sIGVsZW0uc3RhcnRfcG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBMYW1wYS5QbGF5ZXJWaWRlby50byhlbGVtLnN0YXJ0X3BvaW50KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBMYW1wYS5QbGF5ZXJQYW5lbC5yZW5kZXIoKS5maW5kKCcucGxheWVyLXBhbmVsX190aW1lbGluZScpLmJlZm9yZShwbGF5ZXJfc2hvdHMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcGxheWVyU2hvdHNGb290ZXIoKXtcbiAgICBBcGkuc2hvdHNDYXJkKHBsYXlfZGF0YS5jYXJkLCAxLCAoZGF0YSk9PntcbiAgICAgICAgbGV0IHR5cGUgPSBwbGF5X2RhdGEuY2FyZC5vcmlnaW5hbF9uYW1lID8gJ3R2JyA6ICdtb3ZpZSdcblxuICAgICAgICBpZih0eXBlID09ICd0dicgJiYgcGxheV9kYXRhLnNlYXNvbiAmJiBwbGF5X2RhdGEuZXBpc29kZSl7XG4gICAgICAgICAgICBkYXRhLnJlc3VsdHMgPSBkYXRhLnJlc3VsdHMuZmlsdGVyKChlKT0+ZS5zZWFzb24gPT0gcGxheV9kYXRhLnNlYXNvbiAmJiBlLmVwaXNvZGUgPT0gcGxheV9kYXRhLmVwaXNvZGUpXG4gICAgICAgIH1cblxuICAgICAgICBpZihkYXRhLnJlc3VsdHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGRhdGEudGl0bGUgPSAnU2hvdHMnXG5cbiAgICAgICAgICAgIGRhdGEucmVzdWx0cy5mb3JFYWNoKChlbGVtKT0+e1xuICAgICAgICAgICAgICAgIGVsZW0uaW1nID0gZWxlbS5zY3JlZW5cblxuICAgICAgICAgICAgICAgIGVsZW0ucGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbnN0YW5jZTogKCk9PiBMYW1wYS5NYWtlci5tYWtlKCdDYXJkJywgZWxlbSwgKG1vZHVsZSk9Pm1vZHVsZS5vbmx5KCdDYXJkJywgJ0NhbGxiYWNrJywnU3R5bGUnKSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29sbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW1pdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKCdzaG90cy1wbGF5ZXItY2FyZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25FbnRlcjogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYW1wYS5QbGF5ZXJWaWRlby50byhlbGVtLnN0YXJ0X3BvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IGxpbmUgPSBMYW1wYS5NYWtlci5tYWtlKCdMaW5lJywgZGF0YSwgKG1vZHVsZSk9Pm1vZHVsZS5vbmx5KCdJdGVtcycsICdDcmVhdGUnKSlcblxuICAgICAgICAgICAgbGluZS5jcmVhdGUoKVxuXG4gICAgICAgICAgICBMYW1wYS5QbGF5ZXJGb290ZXIuYXBwZW5kUm93KGxpbmUucmVuZGVyKHRydWUpKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcGxheVBsYXllcigpe1xuICAgIExhbXBhLlBsYXllclZpZGVvLnBsYXkoKVxuICAgIExhbXBhLlBsYXllclBhbmVsLnZpc2libGUoZmFsc2UpXG4gICAgTGFtcGEuUGxheWVyUGFuZWwuaGlkZSgpXG5cbiAgICBwbGF5ZXJQYW5lbChmYWxzZSlcbn1cblxuZnVuY3Rpb24gcGF1c2VQbGF5ZXIoKXtcbiAgICBMYW1wYS5QbGF5ZXJWaWRlby5wYXVzZSgpXG4gICAgTGFtcGEuUGxheWVyUGFuZWwudmlzaWJsZShmYWxzZSlcbiAgICBMYW1wYS5QbGF5ZXJQYW5lbC5oaWRlKClcblxuICAgIHBsYXllclBhbmVsKHRydWUpXG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKXtcbiAgICBMYW1wYS5Nb2RhbC5jbG9zZSgpXG5cbiAgICBMYW1wYS5Db250cm9sbGVyLnRvZ2dsZSgncGxheWVyJylcblxuICAgIExhbXBhLlBsYXllclZpZGVvLnBhdXNlKClcblxuICAgIHBsYXllclBhbmVsKHRydWUpXG59XG5cbmZ1bmN0aW9uIGJlZm9yZVJlY29yZGluZygpe1xuICAgIGlmKExhbXBhLk1vZGFsLm9wZW5lZCgpKXtcbiAgICAgICAgTGFtcGEuTW9kYWwuY2xvc2UoKVxuXG4gICAgICAgIHBsYXlfZGF0YS5uZWVkX3RvY29udGVudCA9IHRydWVcbiAgICB9XG5cbiAgICBwYXVzZVBsYXllcigpXG5cbiAgICBsZXQgbGVmdCA9IERhdGUubm93KCkgLSBMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfbGFzdF9yZWNvcmQnLCAnMCcpXG5cbiAgICBpZihsZWZ0IDwgRGVmaW5lZC5xdW90YV9uZXh0X3JlY29yZCl7XG4gICAgICAgIHJldHVybiBMYW1wYS5Nb2RhbC5vcGVuKHtcbiAgICAgICAgICAgIGh0bWw6IExhbXBhLlRlbXBsYXRlLmdldCgnc2hvdHNfbW9kYWxfcXVvdGFfbGltaXQnLCB7XG4gICAgICAgICAgICAgICAgdGltZTogTGFtcGEuVXRpbHMuc2Vjb25kc1RvVGltZUh1bWFuKChEZWZpbmVkLnF1b3RhX25leHRfcmVjb3JkIC0gbGVmdCkgLyAxMDAwKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICAgICAgbm9wYWRkaW5nOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2J1dHRvbl9nb29kJyksXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0OiBjbG9zZU1vZGFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9uQmFjazogY2xvc2VNb2RhbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIFV0aWxzLm1vZGFsKExhbXBhLlRlbXBsYXRlLmdldCgnc2hvdHNfbW9kYWxfYmVmb3JlX3JlY29yZGluZycpLCBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c19zdGFydF9yZWNvcmRpbmcnKSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAoKT0+e1xuICAgICAgICAgICAgICAgIExhbXBhLk1vZGFsLmNsb3NlKClcblxuICAgICAgICAgICAgICAgIHN0YXJ0UmVjb3JkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2Nob2ljZV9zdGFydF9wb2ludCcpLFxuICAgICAgICAgICAgY2FuY2VsOiB0cnVlLFxuICAgICAgICAgICAgb25TZWxlY3Q6ICgpPT57XG4gICAgICAgICAgICAgICAgTGFtcGEuTW9kYWwuY2xvc2UoKVxuXG4gICAgICAgICAgICAgICAgTGFtcGEuQ29udHJvbGxlci50b2dnbGUoJ3BsYXllcl9yZXdpbmQnKVxuXG4gICAgICAgICAgICAgICAgTGFtcGEuUGxheWVyUGFuZWwudmlzaWJsZSh0cnVlKVxuXG4gICAgICAgICAgICAgICAgcGxheWVyUGFuZWwodHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0sIGNsb3NlTW9kYWwpXG59XG5cbmZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKCl7XG4gICAgbGV0IHJlY29yZGVyID0gbmV3IFJlY29yZGVyKExhbXBhLlBsYXllclZpZGVvLnZpZGVvKCkpXG5cbiAgICByZWNvcmRlci5vblN0b3AgID0gc3RvcFJlY29yZGluZ1xuICAgIHJlY29yZGVyLm9uRXJyb3IgPSBlcnJvclJlY29yZGluZ1xuICAgIHJlY29yZGVyLm9uUnVuICAgPSBwbGF5UGxheWVyXG5cbiAgICByZWNvcmRlci5zdGFydCgpXG59XG5cbmZ1bmN0aW9uIGVycm9yUmVjb3JkaW5nKGUpe1xuICAgIFV0aWxzLm1vZGFsKExhbXBhLlRlbXBsYXRlLmdldCgnc2hvdHNfbW9kYWxfZXJyb3JfcmVjb3JkaW5nJyksIFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2J1dHRvbl9nb29kJyksXG4gICAgICAgICAgICBvblNlbGVjdDogY2xvc2VNb2RhbFxuICAgICAgICB9XG4gICAgXSwgY2xvc2VNb2RhbClcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZyhyZWNvcmRpbmcpe1xuICAgIHBhdXNlUGxheWVyKClcblxuICAgIGlmKHJlY29yZGluZy5kdXJhdGlvbiA+IDEwKXtcbiAgICAgICAgaWYocmVjb3JkaW5nLnN0YXJ0X3BvaW50IDwgNjAgfHwgcmVjb3JkaW5nLmVuZF9wb2ludCA+IChMYW1wYS5QbGF5ZXJWaWRlby52aWRlbygpLmR1cmF0aW9uIC0gNjAgKiA1KSl7XG4gICAgICAgICAgICByZWNvcmRpbmcubmVhcl9ib3JkZXIgPSB0cnVlXG5cbiAgICAgICAgICAgIFV0aWxzLm1vZGFsKExhbXBhLlRlbXBsYXRlLmdldCgnc2hvdHNfbW9kYWxfYmVmb3JlX3VwbG9hZF9yZWNvcmRpbmcnKSwgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2J1dHRvbl9jaG9pY2VfZnJhZ21lbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q6IGNsb3NlTW9kYWxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2J1dHRvbl9jb250aW51ZV91cGxvYWQnKSxcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q6ICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBMYW1wYS5Nb2RhbC5jbG9zZSgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VXBsb2FkUmVjb3JkaW5nKHJlY29yZGluZylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sIGNsb3NlTW9kYWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBzdGFydFVwbG9hZFJlY29yZGluZyhyZWNvcmRpbmcpXG4gICAgfVxuICAgIGVsc2Ugc2hvcnRSZWNvcmRpbmcoKVxufVxuXG5mdW5jdGlvbiBzdGFydFVwbG9hZFJlY29yZGluZyhyZWNvcmRpbmcpe1xuICAgIGxldCB1cGxvYWQgPSBuZXcgVXBsb2FkKHtcbiAgICAgICAgcmVjb3JkaW5nOiByZWNvcmRpbmcsXG4gICAgICAgIHBsYXlfZGF0YTogcGxheV9kYXRhXG4gICAgfSlcblxuICAgIHVwbG9hZC5vbkNhbmNlbCA9ICgpPT57XG4gICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdwbGF5ZXInKVxuXG4gICAgICAgIExhbXBhLlBsYXllclZpZGVvLnBhdXNlKClcbiAgICB9XG5cbiAgICB1cGxvYWQub25Db21wbGV0ZSA9ICgpPT57XG4gICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdwbGF5ZXInKVxuXG4gICAgICAgIExhbXBhLlBsYXllclZpZGVvLnBhdXNlKClcbiAgICB9XG5cbiAgICB1cGxvYWQuc3RhcnQoKVxufVxuXG5mdW5jdGlvbiBzaG9ydFJlY29yZGluZygpe1xuICAgIFV0aWxzLm1vZGFsKExhbXBhLlRlbXBsYXRlLmdldCgnc2hvdHNfbW9kYWxfc2hvcnRfcmVjb3JkaW5nJyksIFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2J1dHRvbl9nb29kJyksXG4gICAgICAgICAgICBvblNlbGVjdDogY2xvc2VNb2RhbFxuICAgICAgICB9XG4gICAgXSwgY2xvc2VNb2RhbClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXRcbn0iLCJpbXBvcnQgQXBpIGZyb20gJy4vYXBpLmpzJ1xuXG5sZXQgc2hvdHMgPSB7XG4gICAgZmF2b3JpdGU6IFtdLFxuICAgIG1hcDogW11cbn1cblxuZnVuY3Rpb24gaW5pdCgpe1xuICAgIHNob3RzLmZhdm9yaXRlID0gTGFtcGEuU3RvcmFnZS5nZXQoJ3Nob3RzX2Zhdm9yaXRlJywgJ1tdJylcblxuICAgIGNyZWF0ZU1hcChMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfbWFwJywgJ1tdJykpXG5cbiAgICB1cGRhdGUoKVxuXG4gICAgTGFtcGEuTGlzdGVuZXIuZm9sbG93KCdzaG90c19zdGF0dXMnLCB1cGRhdGVTdGF0dXMpXG4gICAgTGFtcGEuTGlzdGVuZXIuZm9sbG93KCdzaG90c191cGRhdGUnLCB1cGRhdGVEYXRhKVxuXG4gICAgTGFtcGEuTGlzdGVuZXIuZm9sbG93KCdzdGF0ZTpjaGFuZ2VkJywgKGUpPT57XG4gICAgICAgIGlmKGUudGFyZ2V0ID09ICdmYXZvcml0ZScgJiYgKGUucmVhc29uID09ICdwcm9maWxlJyB8fCBlLnJlYXNvbiA9PSAncmVhZCcpKXtcbiAgICAgICAgICAgIHNob3RzLmZhdm9yaXRlID0gW11cblxuICAgICAgICAgICAgY3JlYXRlTWFwKFtdKVxuXG4gICAgICAgICAgICB1cGRhdGUoKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIExhbXBhLlNvY2tldC5saXN0ZW5lci5mb2xsb3coJ21lc3NhZ2UnLCAocmVzdWx0KT0+e1xuICAgICAgICBpZihyZXN1bHQubWV0aG9kID09ICd1cGRhdGUnICYmIHJlc3VsdC5kYXRhLmZyb20gPT0gJ3Nob3RzJyAmJiByZXN1bHQuZGF0YS5saXN0ID09ICdmYXZvcml0ZScpe1xuICAgICAgICAgICAgdXBkYXRlKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcChhcnIpe1xuICAgIHNob3RzLm1hcCA9IHt9XG5cbiAgICBhcnIuZm9yRWFjaChpZD0+e1xuICAgICAgICBzaG90cy5tYXBbaWRdID0gMVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhzaG90KXtcbiAgICBpZighc2hvdHMubWFwW3Nob3QuaWRdKSByZXR1cm5cblxuICAgIGxldCBmaW5kID0gc2hvdHMuZmF2b3JpdGUuZmluZChhPT5hLmlkID09IHNob3QuaWQpXG5cbiAgICBpZihmaW5kKXtcbiAgICAgICAgZmluZC5zdGF0dXMgPSBzaG90LnN0YXR1c1xuICAgICAgICBmaW5kLnNjcmVlbiA9IHNob3Quc2NyZWVuXG4gICAgICAgIGZpbmQuZmlsZSAgID0gc2hvdC5maWxlXG5cbiAgICAgICAgTGFtcGEuU3RvcmFnZS5zZXQoJ3Nob3RzX2Zhdm9yaXRlJywgc2hvdHMuZmF2b3JpdGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhKHNob3Qpe1xuICAgIGlmKCFzaG90cy5tYXBbc2hvdC5pZF0pIHJldHVyblxuXG4gICAgbGV0IGZpbmQgPSBzaG90cy5mYXZvcml0ZS5maW5kKGE9PmEuaWQgPT0gc2hvdC5pZClcblxuICAgIGlmKGZpbmQpe1xuICAgICAgICBmaW5kLmxpa2VkID0gc2hvdC5saWtlZFxuICAgICAgICBmaW5kLnNhdmVkID0gc2hvdC5zYXZlZFxuXG4gICAgICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19mYXZvcml0ZScsIHNob3RzLmZhdm9yaXRlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCl7XG4gICAgQXBpLnNob3RzTGlzdCgnZmF2b3JpdGUnLCAxLCAoc2hvdHMpPT57XG4gICAgICAgIHNob3RzLmZhdm9yaXRlID0gc2hvdHMucmVzdWx0c1xuXG4gICAgICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19mYXZvcml0ZScsIHNob3RzLmZhdm9yaXRlKVxuICAgIH0pXG5cbiAgICBBcGkuc2hvdHNMaXN0KCdtYXAnLCAxLCAobWFwKT0+e1xuICAgICAgICBjcmVhdGVNYXAobWFwLnJlc3VsdHMpXG5cbiAgICAgICAgTGFtcGEuU3RvcmFnZS5zZXQoJ3Nob3RzX21hcCcsIG1hcC5yZXN1bHRzKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZChzaG90KXtcbiAgICBsZXQgY2xvbmUgPSB7fVxuXG4gICAgT2JqZWN0LmFzc2lnbihjbG9uZSwgc2hvdClcblxuICAgIGRlbGV0ZSBjbG9uZS5wYXJhbXNcblxuICAgIExhbXBhLkFycmF5cy5pbnNlcnQoc2hvdHMuZmF2b3JpdGUsIDAsIGNsb25lKVxuXG4gICAgaWYoc2hvdHMuZmF2b3JpdGUubGVuZ3RoID4gMjApe1xuICAgICAgICBzaG90cy5mYXZvcml0ZSA9IHNob3RzLmZhdm9yaXRlLnNsaWNlKDAsMjApXG4gICAgfVxuXG4gICAgc2hvdHMubWFwW2Nsb25lLmlkXSA9IDFcblxuICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19mYXZvcml0ZScsIHNob3RzLmZhdm9yaXRlKVxuXG4gICAgTGFtcGEuU3RvcmFnZS5hZGQoJ3Nob3RzX21hcCcsIGNsb25lLmlkKVxufVxuXG5mdW5jdGlvbiByZW1vdmUoc2hvdCl7XG4gICAgbGV0IGZpbmRfaW4gPSBzaG90cy5mYXZvcml0ZS5maW5kKGE9PmEuaWQgPT0gc2hvdC5pZClcblxuICAgIGlmKGZpbmRfaW4pIExhbXBhLkFycmF5cy5yZW1vdmUoc2hvdHMuZmF2b3JpdGUsIGZpbmRfaW4pXG5cbiAgICBkZWxldGUgc2hvdHMubWFwW3Nob3QuaWRdXG5cbiAgICBMYW1wYS5TdG9yYWdlLnNldCgnc2hvdHNfZmF2b3JpdGUnLCBzaG90cy5mYXZvcml0ZSlcblxuICAgIGxldCBtYXAgPSBMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfbWFwJywgJ1tdJylcbiAgICBcbiAgICBMYW1wYS5BcnJheXMucmVtb3ZlKG1hcCwgc2hvdC5pZClcblxuICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19tYXAnLCBtYXApXG59XG5cbmZ1bmN0aW9uIHBhZ2UocGFnZSwgY2FsbGJhY2spe1xuICAgIEFwaS5zaG90c0xpc3QoJ2Zhdm9yaXRlJywgcGFnZSwgKHNob3RzKT0+e1xuICAgICAgICBjYWxsYmFjayhzaG90cy5yZXN1bHRzKVxuICAgIH0sICgpPT57XG4gICAgICAgIGNhbGxiYWNrKFtdKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldCgpe1xuICAgIHJldHVybiBMYW1wYS5BcnJheXMuY2xvbmUoc2hvdHMuZmF2b3JpdGUpXG59XG5cbmZ1bmN0aW9uIGZpbmQoc2hvdF9pZCl7XG4gICAgcmV0dXJuIEJvb2xlYW4oc2hvdHMubWFwW3Nob3RfaWRdKVxufVxuXG5mdW5jdGlvbiB0b2dnbGUoc2hvdCwgb25zdWNjZXNzLCBvbmVycm9yKXtcbiAgICBsZXQgZmluZGVkID0gZmluZChzaG90LmlkKVxuXG4gICAgQXBpLnNob3RzRmF2b3JpdGUoZmluZGVkID8gJ3JlbW92ZScgOiAnYWRkJywgc2hvdCwgKCk9PntcbiAgICAgICAgaWYoZmluZGVkKXtcbiAgICAgICAgICAgIHJlbW92ZShzaG90KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkKHNob3QpXG4gICAgICAgIH1cblxuICAgICAgICBpZihvbnN1Y2Nlc3MpIG9uc3VjY2VzcyhmaW5kZWQpXG5cbiAgICAgICAgTGFtcGEuU29ja2V0LnNlbmQoJ3VwZGF0ZScsIHtwYXJhbXM6IHtmcm9tOiAnc2hvdHMnLCBsaXN0OiAnZmF2b3JpdGUnfX0pXG4gICAgfSwgb25lcnJvcilcblxuICAgIHJldHVybiAhZmluZGVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0LFxuICAgIHVwZGF0ZSxcbiAgICByZW1vdmUsXG4gICAgYWRkLFxuICAgIGdldCxcbiAgICBmaW5kLFxuICAgIHRvZ2dsZSxcbiAgICBwYWdlXG59IiwiaW1wb3J0IEFwaSBmcm9tICcuL2FwaS5qcydcblxubGV0IGxvYWRlZF9sYXN0ID0ge31cblxuZnVuY3Rpb24gc3RhcnQoY2FsbCl7XG4gICAgbGV0IHN0YXR1cyA9IG5ldyBMYW1wYS5TdGF0dXMoMylcbiAgICAgICAgc3RhdHVzLm9uQ29tcGxpdGUgPSAoKT0+e1xuICAgICAgICAgICAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INC/0L7RgdC70LXQtNC90LjQtSDQt9Cw0LPRgNGD0LbQtdC90L3Ri9C1INGI0L7RgtGLINC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuCDRgNC10LvQtdCy0LDQvdGC0L3Ri9GFXG4gICAgICAgICAgICBsb2FkZWRfbGFzdC5uZXcgICAgID0gc3RhdHVzLmRhdGEubmV3XG4gICAgICAgICAgICBsb2FkZWRfbGFzdC5wb3B1bGFyID0gc3RhdHVzLmRhdGEucG9wdWxhclxuXG4gICAgICAgICAgICAvLyDQpNC40LvRjNGC0YDRg9C10Lwg0L/RgNC+0YHQvNC+0YLRgNC10L3QvdGL0LUg0YjQvtGC0YtcbiAgICAgICAgICAgIHN0YXR1cy5kYXRhLm5ldyAgICAgPSBmaWx0ZXJWaWV3ZWQoc3RhdHVzLmRhdGEubmV3KVxuICAgICAgICAgICAgc3RhdHVzLmRhdGEucG9wdWxhciA9IGZpbHRlclZpZXdlZChzdGF0dXMuZGF0YS5wb3B1bGFyKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdHMnLCAncm9sbCBpdGVtcycsICduZXcnLCBzdGF0dXMuZGF0YS5uZXcubGVuZ3RoLCAncG9wdWxhcicsIHN0YXR1cy5kYXRhLnBvcHVsYXIubGVuZ3RoLCAnb2xkJywgc3RhdHVzLmRhdGEub2xkLmxlbmd0aClcblxuICAgICAgICAgICAgLy8g0KPQsdC40YDQsNC10Lwg0LTRg9Cx0LvQuCDQvNC10LbQtNGDINC90L7QstGL0LzQuCDQuCDQv9C+0L/Rg9C70Y/RgNC90YvQvNC4INC4INGB0YLQsNGA0YvQvNC4XG4gICAgICAgICAgICBzdGF0dXMuZGF0YS5wb3B1bGFyID0gc3RhdHVzLmRhdGEucG9wdWxhci5maWx0ZXIoYT0+IXN0YXR1cy5kYXRhLm5ldy5maW5kKGI9PmIuaWQgPT0gYS5pZCkpXG4gICAgICAgICAgICBzdGF0dXMuZGF0YS5vbGQgICAgID0gc3RhdHVzLmRhdGEub2xkLmZpbHRlcihhPT4hKHN0YXR1cy5kYXRhLm5ldy5maW5kKGI9PmIuaWQgPT0gYS5pZCkgfHwgc3RhdHVzLmRhdGEucG9wdWxhci5maW5kKGI9PmIuaWQgPT0gYS5pZCkpKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdHMnLCAnYWZ0ZXIgZmlsdGVyIHJvbGwgaXRlbXMnLCAnbmV3Jywgc3RhdHVzLmRhdGEubmV3Lmxlbmd0aCwgJ3BvcHVsYXInLCBzdGF0dXMuZGF0YS5wb3B1bGFyLmxlbmd0aCwgJ29sZCcsIHN0YXR1cy5kYXRhLm9sZC5sZW5ndGgpXG5cbiAgICAgICAgICAgIC8vINCh0L7QsdC40YDQsNC10Lwg0LjRgtC+0LPQvtCy0YvQuSDRgdC/0LjRgdC+0LpcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IFtdLmNvbmNhdChzdGF0dXMuZGF0YS5uZXcsIHN0YXR1cy5kYXRhLnBvcHVsYXIpXG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQtdGI0LjQstCw0LXQvCDQvdC+0LLRi9C1INC4INC/0L7Qv9GD0LvRj9GA0L3Ri9C1XG4gICAgICAgICAgICBpdGVtcyA9IExhbXBhLkFycmF5cy5zaHVmZmxlKGl0ZW1zKVxuXG4gICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LzQtdGC0LrRgyBmcm9tX2lkINC00LvRjyDRgdGC0LDRgNGL0YUg0YjQvtGC0L7QslxuICAgICAgICAgICAgc3RhdHVzLmRhdGEub2xkLmZvckVhY2goYT0+YS5mcm9tX2lkID0gYS5pZClcblxuICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGA0LXQu9C10LLQsNC90YLQvdGL0LUg0YHRgtCw0YDRi9C1INGI0L7RgtGLXG4gICAgICAgICAgICBpdGVtcyA9IGl0ZW1zLmNvbmNhdChmaWx0ZXJWaWV3ZWQoZmlsdGVyUmVsZXZhbnQoc3RhdHVzLmRhdGEub2xkKSkpXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaG90cycsICdyZWxldmFudCByb2xsIGl0ZW1zJywgaXRlbXMubGVuZ3RoKVxuXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQvdC10YIg0YjQvtGC0L7Qsiwg0LTQvtCx0LDQstC70Y/QtdC8INC90LXRgdC60L7Qu9GM0LrQviDRgdGC0LDRgNGL0YVcbiAgICAgICAgICAgIGlmKCFpdGVtcy5sZW5ndGgpIGl0ZW1zID0gc3RhdHVzLmRhdGEub2xkLnNsaWNlKC01KVxuXG4gICAgICAgICAgICBjYWxsKGl0ZW1zKVxuICAgICAgICB9XG5cbiAgICBBcGkubGVudGEoe3NvcnQ6ICduZXcnLCBsaW1pdDogNTB9LCBzdGF0dXMuYXBwZW5kLmJpbmQoc3RhdHVzLCAnbmV3JykpXG4gICAgQXBpLmxlbnRhKHtzb3J0OiAncG9wdWxhcicsIGxpbWl0OiA1MH0sIHN0YXR1cy5hcHBlbmQuYmluZChzdGF0dXMsICdwb3B1bGFyJykpXG4gICAgQXBpLmxlbnRhKHtzb3J0OiAnZnJvbV9pZCcsIGlkOiBMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfbGVudGFfbGFzdF9pZCcsJzAnKSwgbGltaXQ6IDUwfSwgc3RhdHVzLmFwcGVuZC5iaW5kKHN0YXR1cywgJ29sZCcpKVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJSZWxldmFudChpdGVtcyl7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihhPT4hKGxvYWRlZF9sYXN0Lm5ldy5maW5kKGI9PmIuaWQgPT0gYS5pZCkgfHwgbG9hZGVkX2xhc3QucG9wdWxhci5maW5kKGI9PmIuaWQgPT0gYS5pZCkpKVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJWaWV3ZWQoaXRlbXMpe1xuICAgIGxldCB2aWV3ZWQgID0gTGFtcGEuU3RvcmFnZS5jYWNoZSgnc2hvdHNfdmlld2VkJywgMjAwMCwgW10pXG4gICAgbGV0IGZpbHRyZWQgPSBpdGVtcy5maWx0ZXIoYT0+dmlld2VkLmluZGV4T2YoYS5pZCkgPT0gLTEpXG5cbiAgICByZXR1cm4gZmlsdHJlZFxufVxuXG5mdW5jdGlvbiBuZXh0KGNhbGwpe1xuICAgIEFwaS5sZW50YSh7c29ydDogJ2Zyb21faWQnLCBpZDogTGFtcGEuU3RvcmFnZS5nZXQoJ3Nob3RzX2xlbnRhX2xhc3RfaWQnLCcwJyksIGxpbWl0OiA1MH0sIChpdGVtcyk9PmNhbGwoZmlsdGVyUmVsZXZhbnQoaXRlbXMpKSlcbn1cblxuZnVuY3Rpb24gdmlld2VkUmVnaXN0ZXIoc2hvdCl7XG4gICAgaWYoIXNob3QuZnJvbV9pZCkgTGFtcGEuU3RvcmFnZS5hZGQoJ3Nob3RzX3ZpZXdlZCcsIHNob3QuaWQpXG5cbiAgICBBcGkuc2hvdHNWaWV3ZWQoc2hvdC5pZClcbn1cblxuZnVuY3Rpb24gc2F2ZUZyb21JZChpZCl7XG4gICAgTGFtcGEuU3RvcmFnZS5zZXQoJ3Nob3RzX2xlbnRhX2xhc3RfaWQnLCBpZClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0LFxuICAgIG5leHQsXG4gICAgdmlld2VkUmVnaXN0ZXIsXG4gICAgc2F2ZUZyb21JZFxufSIsImltcG9ydCBSb2xsIGZyb20gJy4uL3V0aWxzL3JvbGwuanMnXG5cbmZ1bmN0aW9uIFZpZGVvKCl7XG4gICAgdGhpcy5odG1sICAgICA9IExhbXBhLlRlbXBsYXRlLmpzKCdzaG90c19sZW50YV92aWRlbycpXG4gICAgdGhpcy52aWRlbyAgICA9IHRoaXMuaHRtbC5maW5kKCd2aWRlbycpXG4gICAgdGhpcy5wcm9ncmVzcyA9IHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtbGVudGEtdmlkZW9fX3Byb2dyZXNzLWJhciBkaXYnKVxuICAgIHRoaXMubGF5ZXIgICAgPSB0aGlzLmh0bWwuZmluZCgnLnNob3RzLWxlbnRhLXZpZGVvX19sYXllcicpXG4gICAgdGhpcy5sb2FkZXIgICA9IHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtbGVudGEtdmlkZW9fX2xvYWRlcicpXG4gICAgdGhpcy52aWV3ZWQgICA9IHt9XG5cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpPT57XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnN0eWxlLndpZHRoID0gKHRoaXMudmlkZW8uY3VycmVudFRpbWUgLyB0aGlzLnZpZGVvLmR1cmF0aW9uICogMTAwKSArICclJ1xuXG4gICAgICAgICAgICBpZigodGhpcy52aWRlby5jdXJyZW50VGltZSAvIHRoaXMudmlkZW8uZHVyYXRpb24gPiAwLjEgfHwgdGhpcy52aWRlby5jdXJyZW50VGltZSA+IDIpICYmICF0aGlzLnZpZXdlZFt0aGlzLnNob3QuaWRdKXtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdlZFt0aGlzLnNob3QuaWRdID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgUm9sbC52aWV3ZWRSZWdpc3Rlcih0aGlzLnNob3QpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExhbXBhLlNjcmVlbnNhdmVyLnJlc2V0VGltZXIoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignd2FpdGluZycsICgpPT57XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCAoKT0+e1xuICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sYXllci5vbignY2xpY2snLCgpPT57XG4gICAgICAgICAgICB0aGlzLnZpZGVvLnBhdXNlZCA/IHRoaXMucGxheSgpIDogdGhpcy5wYXVzZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoTGFtcGEuUGxhdGZvcm0uaXMoJ2FwcGxlJykpIHRoaXMudmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJylcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSA9IGZ1bmN0aW9uKHNob3Qpe1xuICAgICAgICB0aGlzLnNob3QgPSBzaG90XG5cbiAgICAgICAgaWYoc2hvdC5mcm9tX2lkKSBSb2xsLnNhdmVGcm9tSWQoc2hvdC5mcm9tX2lkKVxuXG4gICAgICAgIHRoaXMudmlkZW8uc2V0QXR0cmlidXRlKCdwb3N0ZXInLCBzaG90LmltZyB8fCAnLi9pbWcvdmlkZW9fcG9zdGVyLnBuZycpXG4gICAgICAgIHRoaXMucHJvZ3Jlc3Muc3R5bGUud2lkdGggPSAnMCUnXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIHRoaXMubG9hZCgpXG4gICAgICAgIHRoaXMucGxheSgpXG4gICAgfVxuXG4gICAgdGhpcy5wbGF5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHBsYXlQcm9taXNlXG5cbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgcGxheVByb21pc2UgPSB0aGlzLnZpZGVvLnBsYXkoKVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpeyB9XG5cblxuICAgICAgICBpZiAocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGxheVByb21pc2UudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZW50YScsJ3N0YXJ0IHBsYWluaW5nJylcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZW50YScsJ3BsYXkgcHJvbWlzZSBlcnJvcjonLCBlLm1lc3NhZ2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBwYXVzZVByb21pc2VcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBwYXVzZVByb21pc2UgPSB0aGlzLnZpZGVvLnBhdXNlKClcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKXsgfVxuXG4gICAgICAgIGlmIChwYXVzZVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGF1c2VQcm9taXNlLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTGVudGEnLCdwYXVzZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZW50YScsJ3BhdXNlIHByb21pc2UgZXJyb3I6JywgZS5tZXNzYWdlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMudmlkZW8uc3JjID0gJydcbiAgICAgICAgdGhpcy52aWRlby5sb2FkKClcblxuICAgICAgICB0aGlzLnZpZGVvLnNyYyA9IHRoaXMuc2hvdC5maWxlXG4gICAgICAgIHRoaXMudmlkZW8ubG9hZCgpXG4gICAgfVxuXG4gICAgdGhpcy5zaG93TG9hZGluZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMudGltZXJfbG9hZGluZyA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmFkZENsYXNzKCdzaG93JylcbiAgICAgICAgfSwyMDAwKVxuICAgIH1cblxuICAgIHRoaXMuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbigpe1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcl9sb2FkaW5nKVxuXG4gICAgICAgIHRoaXMubG9hZGVyLnJlbW92ZUNsYXNzKCdzaG93JylcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcl9sb2FkaW5nKVxuXG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKVxuXG4gICAgICAgIHRoaXMudmlld2VkID0ge31cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvIiwiZnVuY3Rpb24gQXV0aG9yKGF1dGhvcl9kYXRhID0gZmFsc2Upe1xuICAgIHRoaXMuaHRtbCA9IExhbXBhLlRlbXBsYXRlLmpzKCdzaG90c19hdXRob3InKVxuICAgIHRoaXMuaW1nICA9IHRoaXMuaHRtbC5maW5kKCdpbWcnKVxuICAgIHRoaXMuYm94ICA9IHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtYXV0aG9yX19pbWcnKVxuXG4gICAgdGhpcy5pbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgdGhpcy5ib3guYWRkQ2xhc3MoJ2xvYWRlZCcpXG4gICAgfVxuXG4gICAgdGhpcy5pbWcub25lcnJvciA9ICgpPT57XG4gICAgICAgIHRoaXMuaW1nLnNyYyA9ICcuL2ltZy9pbWdfYnJva2VuLnN2ZydcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGF1dGhvcl9kYXRhKSB0aGlzLnVwZGF0ZShhdXRob3JfZGF0YSlcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICB0aGlzLmJveC5yZW1vdmVDbGFzcygnbG9hZGVkJylcblxuICAgICAgICBsZXQgZW1haWwgPSBkYXRhLmVtYWlsXG4gICAgICAgIGxldCBpY29uICA9IGRhdGEuaWNvblxuXG4gICAgICAgIGlmKCFlbWFpbCl7XG4gICAgICAgICAgICBlbWFpbCA9IExhbXBhLkFjY291bnQuUGVybWl0LmFjY291bnQuZW1haWxcbiAgICAgICAgICAgIGljb24gID0gTGFtcGEuQWNjb3VudC5QZXJtaXQuYWNjb3VudC5wcm9maWxlID8gTGFtcGEuQWNjb3VudC5QZXJtaXQuYWNjb3VudC5wcm9maWxlLmljb24gOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbWcuc3JjID0gIExhbXBhLlV0aWxzLnByb3RvY29sKCkgKyBMYW1wYS5NYW5pZmVzdC5jdWJfZG9tYWluICsgJy9pbWcvcHJvZmlsZXMvJyArIChpY29uIHx8ICdsXzEnKSArICcucG5nJ1xuXG4gICAgICAgIHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtYXV0aG9yX19uYW1lJykudGV4dChMYW1wYS5VdGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIoKGVtYWlsIHx8ICdVbmtub3duJykuc3BsaXQoJ0AnKVswXSkpXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sXG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5pbWcub25sb2FkID0gbnVsbFxuICAgICAgICB0aGlzLmltZy5vbmVycm9yID0gbnVsbFxuXG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yIiwiaW1wb3J0IEFwaSBmcm9tICcuL2FwaS5qcydcblxuZnVuY3Rpb24gZmluZChzaG90X2lkKXtcbiAgICByZXR1cm4gQm9vbGVhbihMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfbGlrZXMnLCAnW10nKS5maW5kKGlkPT5zaG90X2lkID09IGlkKSlcbn1cblxuZnVuY3Rpb24gYWRkKHNob3RfaWQpe1xuICAgIGxldCBhcnIgPSBMYW1wYS5TdG9yYWdlLmNhY2hlKCdzaG90c19saWtlcycsIDEwMCwgJ1tdJylcbiAgICAgICAgYXJyLnB1c2goc2hvdF9pZClcblxuICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19saWtlcycsIGFycilcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKHNob3RfaWQpe1xuICAgIGxldCBhcnIgPSBMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfbGlrZXMnLCdbXScpXG5cbiAgICBMYW1wYS5BcnJheXMucmVtb3ZlKGFyciwgc2hvdF9pZClcblxuICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19saWtlcycsIGFycilcbn1cblxuZnVuY3Rpb24gdG9nZ2xlKHNob3RfaWQsIG9uc3VjY2Vzcywgb25lcnJvcil7XG4gICAgbGV0IGZpbmRlZCA9IGZpbmQoc2hvdF9pZClcblxuICAgIEFwaS5zaG90c0xpa2VkKHNob3RfaWQsIGZpbmRlZCA/ICd1bmxpa2UnIDogJ2xpa2UnLCAoKT0+e1xuICAgICAgICBpZihmaW5kZWQpe1xuICAgICAgICAgICAgcmVtb3ZlKHNob3RfaWQpXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkKHNob3RfaWQpXG4gICAgICAgIH1cblxuICAgICAgICBpZihvbnN1Y2Nlc3MpIG9uc3VjY2VzcyhmaW5kZWQpXG4gICAgfSwgb25lcnJvcilcblxuICAgIHJldHVybiAhZmluZGVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaW5kLFxuICAgIGFkZCxcbiAgICByZW1vdmUsXG4gICAgdG9nZ2xlXG59IiwiaW1wb3J0IEFwaSBmcm9tIFwiLi9hcGkuanNcIlxuXG5mdW5jdGlvbiBzaG90c1JlcG9ydChpZCwgY2FsbGJhY2spIHtcbiAgICBMYW1wYS5Nb2RhbC5vcGVuKHtcbiAgICAgICAgaHRtbDogTGFtcGEuVGVtcGxhdGUuZ2V0KCdzaG90c19tb2RhbF9yZXBvcnQnKSxcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICBub3BhZGRpbmc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c19idXR0b25fcmVwb3J0JyksXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q6ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIExhbXBhLk1vZGFsLmNsb3NlKClcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcG9ydHMgPSBMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfcmVwb3J0cycsICdbXScpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYocmVwb3J0cy5pbmRleE9mKGlkKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcGkuc2hvdHNSZXBvcnQoaWQsICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0cy5wdXNoKGlkKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFtcGEuU3RvcmFnZS5zZXQoJ3Nob3RzX3JlcG9ydHMnLCByZXBvcnRzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFtcGEuQmVsbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJzxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1zaG90c1wiPjwvdXNlPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c19tb2RhbF9yZXBvcnRfYmVsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbXBhLkJlbGwucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJzxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1zaG90c1wiPjwvdXNlPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX21vZGFsX3JlcG9ydF9iZWxsX2FscmVhZHllZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvbkJhY2s6ICgpPT57XG4gICAgICAgICAgICBMYW1wYS5Nb2RhbC5jbG9zZSgpXG5cbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNob3RzRGVsZXRlKGlkLCBjYWxsYmFjaykge1xuICAgIExhbXBhLk1vZGFsLm9wZW4oe1xuICAgICAgICBodG1sOiBMYW1wYS5UZW1wbGF0ZS5nZXQoJ3Nob3RzX21vZGFsX2RlbGV0ZScpLFxuICAgICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgICBzY3JvbGw6IHtcbiAgICAgICAgICAgIG5vcGFkZGluZzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2J1dHRvbl9kZWxldGVfdmlkZW8nKSxcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgTGFtcGEuTW9kYWwuY2xvc2UoKVxuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlZCA9IExhbXBhLlN0b3JhZ2UuZ2V0KCdzaG90c19kZWxldGVkJywgJ1tdJylcblxuICAgICAgICAgICAgICAgICAgICBpZihkZWxldGVkLmluZGV4T2YoaWQpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwaS5zaG90c0RlbGV0ZShpZCwgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkLnB1c2goaWQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYW1wYS5TdG9yYWdlLnNldCgnc2hvdHNfZGVsZXRlZCcsIGRlbGV0ZWQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYW1wYS5CZWxsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjc3ByaXRlLXNob3RzXCI+PC91c2U+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX21vZGFsX2RlbGV0ZWRfYmVsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbXBhLkJlbGwucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJzxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1zaG90c1wiPjwvdXNlPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX21vZGFsX2RlbGV0ZWRfYmVsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvbkJhY2s6ICgpPT57XG4gICAgICAgICAgICBMYW1wYS5Nb2RhbC5jbG9zZSgpXG5cbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG90c1JlcG9ydCxcbiAgICBzaG90c0RlbGV0ZVxufSIsImZ1bmN0aW9uIGJhY2t3YXJkKCl7XG4gICAgbGV0IGhlYWQgPSBMYW1wYS5UZW1wbGF0ZS5nZXQoJ2hlYWRfYmFja3dhcmQnLHt0aXRsZTogJyd9KVxuXG4gICAgaGVhZC5maW5kKCcuaGVhZC1iYWNrd2FyZF9fYnV0dG9uJykub24oJ2NsaWNrJywoKT0+e1xuICAgICAgICBMYW1wYS5Db250cm9sbGVyLmJhY2soKVxuICAgIH0pXG5cbiAgICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBTbGlkZXMocGFyYW1zKXtcbiAgICBsZXQgaHRtbCA9ICQoYDxkaXYgY2xhc3M9XCJzaG90cy1zbGlkZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3RzLXNsaWRlc19fc2xpZGVzXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1zbGlkZXNfX2luc3RhbGxcIj4ke0xhbXBhLkxhbmcudHJhbnNsYXRlKHBhcmFtcy5idXR0b25fdGV4dCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG90cy1zbGlkZXNfX2Rvd25cIj4ke0xhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c19kb3duJyl9PC9kaXY+XG4gICAgPC9kaXY+YClcblxuICAgIHBhcmFtcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGVfZGF0YSwgc2xpZGVfaW5kZXgpPT57XG4gICAgICAgIGh0bWwuZmluZCgnLnNob3RzLXNsaWRlc19fc2xpZGVzJykuYXBwZW5kKCQoYDxpbWcgY2xhc3M9XCJzaG90cy1zbGlkZXNfX3NsaWRlIHNsaWRlLSR7c2xpZGVfaW5kZXggKyAxfVwiPmApKVxuICAgIH0pXG5cbiAgICBsZXQgc2xpZGUgICA9IDBcbiAgICBsZXQgdG90YWwgICA9IHBhcmFtcy5zbGlkZXMubGVuZ3RoXG4gICAgbGV0IHRpbWVsb2FkXG4gICAgbGV0IGNhbmNlbCAgPSBmYWxzZVxuICAgIGxldCBkb3duICAgID0gaHRtbC5maW5kKCcuc2hvdHMtc2xpZGVzX19kb3duJylcbiAgICBsZXQgaW5zdGFsbCA9IGh0bWwuZmluZCgnLnNob3RzLXNsaWRlc19faW5zdGFsbCcpXG5cbiAgICBpZihMYW1wYS5QbGF0Zm9ybS5tb3VzZSgpIHx8IExhbXBhLlV0aWxzLmlzVG91Y2hEZXZpY2UoKSl7XG4gICAgICAgIGh0bWwuYXBwZW5kKGJhY2t3YXJkKCkpXG4gICAgfVxuXG4gICAgJCgnYm9keScpLmFwcGVuZChodG1sKVxuXG4gICAgbGV0IHB1c2ggPSAoKT0+e1xuICAgICAgICBpZihzbGlkZSA9PSB0b3RhbCl7XG4gICAgICAgICAgICBkZXN0cm95KClcblxuICAgICAgICAgICAgcGFyYW1zLm9uSW5zdGFsbCAmJiBwYXJhbXMub25JbnN0YWxsKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBuZXh0ID0gKCk9PntcbiAgICAgICAgaWYoIHNsaWRlID49IHRvdGFsICkgcmV0dXJuXG5cbiAgICAgICAgaWYoc2xpZGUgPiAwKXtcbiAgICAgICAgICAgIGh0bWwuZmluZCgnLnNsaWRlLScgKyBzbGlkZSkuYWRkQ2xhc3MoJ3VwJylcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlKytcblxuICAgICAgICBodG1sLmZpbmQoJy5zbGlkZS0nICsgc2xpZGUpLmFkZENsYXNzKCdhY3RpdmUnKVxuXG4gICAgICAgIGlmKHNsaWRlID09PSB0b3RhbCl7XG4gICAgICAgICAgICBkb3duLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgaW5zdGFsbC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgIH0sNTAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0ID0gKCk9PntcbiAgICAgICAgTGFtcGEuTG9hZGluZy5zdG9wKClcblxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBkb3duLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9LDYwMClcblxuICAgICAgICBuZXh0KClcblxuICAgICAgICBMYW1wYS5Db250cm9sbGVyLmFkZCgnc2hvdHNfcHJlc2VudCcsIHtcbiAgICAgICAgICAgIHRvZ2dsZTogKCk9PntcbiAgICAgICAgICAgICAgICBMYW1wYS5Db250cm9sbGVyLmNsZWFyKClcblxuICAgICAgICAgICAgICAgIExhbXBhLkJhY2tncm91bmQudGhlbWUoJyMwODA5MEQnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudGVyOiBwdXNoLFxuICAgICAgICAgICAgZG93bjogbmV4dCxcbiAgICAgICAgICAgIGJhY2s6IHN0b3AsXG4gICAgICAgIH0pXG5cbiAgICAgICAgTGFtcGEuQ29udHJvbGxlci50b2dnbGUoJ3Nob3RzX3ByZXNlbnQnKVxuICAgIH1cblxuICAgIGxldCBzdG9wID0gKCk9PntcbiAgICAgICAgZGVzdHJveSgpXG5cbiAgICAgICAgTGFtcGEuTG9hZGluZy5zdG9wKClcblxuICAgICAgICBwYXJhbXMub25CYWNrICYmIHBhcmFtcy5vbkJhY2soKVxuICAgIH1cblxuICAgIGxldCBwcmVsb2FkID0gKCk9PntcbiAgICAgICAgbGV0IHNsaWRlc19sb2FkZWQgPSAwXG5cbiAgICAgICAgZm9yKGxldCBpPTE7IGk8PXRvdGFsOyBpKyspe1xuICAgICAgICAgICAgbGV0IGltZyA9IGh0bWwuZmluZCgnLnNsaWRlLScgKyBpKVswXVxuICAgICAgICAgICAgaW1nLnNyYyA9IHBhcmFtcy5zbGlkZXNbaS0xXVxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgICAgICAgc2xpZGVzX2xvYWRlZCsrXG5cbiAgICAgICAgICAgICAgICBpZihzbGlkZXNfbG9hZGVkID09PSB0b3RhbCAmJiAhY2FuY2VsKXtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm9uTG9hZCAmJiBwYXJhbXMub25Mb2FkKClcblxuICAgICAgICAgICAgICAgICAgICBzdGFydCgpXG5cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVsb2FkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVsb2FkID0gc2V0VGltZW91dChzdG9wLDEwMDAwKVxuICAgIH1cblxuICAgIGxldCBkZXN0cm95ID0gKCk9PntcbiAgICAgICAgc3RhcnQgPSAoKT0+e31cblxuICAgICAgICBjYW5jZWwgPSB0cnVlXG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVsb2FkKVxuXG4gICAgICAgIGh0bWwucmVtb3ZlKClcblxuICAgICAgICBMYW1wYS5CYWNrZ3JvdW5kLnRoZW1lKCdyZXNldCcpXG4gICAgfVxuXG4gICAgZG93bi5vbignY2xpY2snLCBuZXh0KVxuICAgIFxuICAgIGluc3RhbGwub24oJ2NsaWNrJywgcHVzaClcblxuICAgIExhbXBhLkxvYWRpbmcuc3RhcnQoc3RvcClcblxuICAgIHByZWxvYWQoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXMiLCJpbXBvcnQgVGFncyBmcm9tICcuLi9jb21wb25lbnRzL3RhZ3MuanMnXG5pbXBvcnQgQXV0aG9yIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aG9yLmpzJ1xuaW1wb3J0IExpa2VzIGZyb20gJy4uL3V0aWxzL2xpa2VzLmpzJ1xuaW1wb3J0IEZhdm9yaXRlIGZyb20gJy4uL3V0aWxzL2Zhdm9yaXRlLmpzJ1xuaW1wb3J0IE1vZGFscyBmcm9tICcuLi91dGlscy9tb2RhbHMuanMnXG5pbXBvcnQgQ3JlYXRlZCBmcm9tICcuLi91dGlscy9jcmVhdGVkLmpzJ1xuaW1wb3J0IFNsaWRlcyBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlcy5qcydcbmltcG9ydCBEZWZpbmVkIGZyb20gJy4uL2RlZmluZWQuanMnXG5cbmZ1bmN0aW9uIFBhbmVsKCl7XG4gICAgdGhpcy5odG1sICAgID0gTGFtcGEuVGVtcGxhdGUuanMoJ3Nob3RzX2xlbnRhX3BhbmVsJylcbiAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTGFtcGEuUmVndWVzdCgpXG4gICAgdGhpcy5jYWNoZSAgID0ge31cblxuICAgIHRoaXMuaW1hZ2UgICA9IHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtbGVudGEtcGFuZWxfX2NhcmQtaW1nJylcbiAgICB0aGlzLnRpdGxlICAgPSB0aGlzLmh0bWwuZmluZCgnLnNob3RzLWxlbnRhLXBhbmVsX19jYXJkLXRpdGxlJylcbiAgICB0aGlzLnJlY29yZGVyPSB0aGlzLmh0bWwuZmluZCgnLnNob3RzLWxlbnRhLXBhbmVsX19yZWNvcmRlcicpXG4gICAgdGhpcy55ZWFyICAgID0gdGhpcy5odG1sLmZpbmQoJy5zaG90cy1sZW50YS1wYW5lbF9fY2FyZC15ZWFyJylcbiAgICB0aGlzLmNhcmRib3ggPSB0aGlzLmh0bWwuZmluZCgnLnNob3RzLWxlbnRhLXBhbmVsX19jYXJkJylcbiAgICB0aGlzLmJvZHkgICAgPSB0aGlzLmh0bWwuZmluZCgnLmV4cGxvcmVyLWNhcmRfX2hlYWQtYm9keScpXG4gICAgdGhpcy5sYXN0ICAgID0gdGhpcy5odG1sLmZpbmQoJy5zZWxlY3RvcicpXG5cbiAgICB0aGlzLnBvc3RlciAgPSB0aGlzLmltYWdlLmZpbmQoJ2ltZycpXG5cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMudGFncyAgICAgICAgICA9IG5ldyBUYWdzKClcbiAgICAgICAgdGhpcy5hdXRob3IgICAgICAgID0gbmV3IEF1dGhvcigpXG5cbiAgICAgICAgbGV0IHdhaXRlX2xpa2UgPSBmYWxzZSwgXG4gICAgICAgICAgICB3YWl0ZV9mYXYgID0gZmFsc2VcblxuICAgICAgICB0aGlzLmF1dGhvci5yZW5kZXIoKS5hZGRDbGFzcygnc2VsZWN0b3InKVxuXG4gICAgICAgIHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtbGVudGEtcGFuZWxfX3RhZ3MnKS5hcHBlbmQodGhpcy50YWdzLnJlbmRlcigpKVxuICAgICAgICB0aGlzLmh0bWwuZmluZCgnLnNob3RzLWxlbnRhLXBhbmVsX19hdXRob3InKS5hcHBlbmQodGhpcy5hdXRob3IucmVuZGVyKCkpXG5cbiAgICAgICAgdGhpcy5wb3N0ZXIub25sb2FkID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuYWRkQ2xhc3MoJ2xvYWRlZCcpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc3Rlci5vbmVycm9yID0gKCk9PntcbiAgICAgICAgICAgIHRoaXMucG9zdGVyLnNyYyA9ICcuL2ltZy9pbWdfYnJva2VuLnN2ZydcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdG9yJykpLmZvckVhY2goKGJ1dHRvbik9PntcbiAgICAgICAgICAgIGJ1dHRvbi5vbignaG92ZXI6Zm9jdXMgaG92ZXI6aG92ZXIgaG92ZXI6dG91Y2gnLCAoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdCA9IGJ1dHRvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmh0bWwuZmluZCgnLmFjdGlvbi1saWtlZCcpLm9uKCdob3ZlcjplbnRlcicsICgpPT57XG4gICAgICAgICAgICBpZih3YWl0ZV9saWtlKSByZXR1cm5cblxuICAgICAgICAgICAgd2FpdGVfbGlrZSA9IHRydWVcblxuICAgICAgICAgICAgTGlrZXMudG9nZ2xlKHRoaXMuc2hvdC5pZCwgKHJlYWR5KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdC5saWtlZCArPSByZWFkeSA/IC0xIDogMVxuXG4gICAgICAgICAgICAgICAgTGFtcGEuTGlzdGVuZXIuc2VuZCgnc2hvdHNfdXBkYXRlJywgey4uLnRoaXMuc2hvdH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICAgICAgICAgICAgICB3YWl0ZV9saWtlID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5odG1sLmZpbmQoJy5hY3Rpb24tZmF2b3JpdGUnKS5vbignaG92ZXI6ZW50ZXInLCAoKT0+e1xuICAgICAgICAgICAgaWYod2FpdGVfZmF2KSByZXR1cm5cblxuICAgICAgICAgICAgd2FpdGVfZmF2ID0gdHJ1ZVxuXG4gICAgICAgICAgICBGYXZvcml0ZS50b2dnbGUodGhpcy5zaG90LCAocmVhZHkpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zaG90LnNhdmVkICs9IHJlYWR5ID8gLTEgOiAxXG5cbiAgICAgICAgICAgICAgICBMYW1wYS5MaXN0ZW5lci5zZW5kKCdzaG90c191cGRhdGUnLCB7Li4udGhpcy5zaG90fSlcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcblxuICAgICAgICAgICAgICAgIHdhaXRlX2ZhdiA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtYXV0aG9yJykub24oJ2hvdmVyOmVudGVyJywgKCk9PntcbiAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIuYmFjaygpXG5cbiAgICAgICAgICAgIExhbXBhLkFjdGl2aXR5LnB1c2goe1xuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAnc2hvdHNfY2hhbm5lbCcsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTaG90cyAtICcgKyBMYW1wYS5VdGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5zaG90LmVtYWlsKSxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5zaG90LmNpZCxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNob3QuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFnZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmh0bWwuZmluZCgnLmFjdGlvbi1tb3JlJykub24oJ2hvdmVyOmVudGVyJywgdGhpcy5tZW51LmJpbmQodGhpcykpXG5cbiAgICAgICAgdGhpcy5pbWFnZS5vbignaG92ZXI6ZW50ZXInLCAoKT0+e1xuICAgICAgICAgICAgTGFtcGEuQ29udHJvbGxlci5iYWNrKClcblxuICAgICAgICAgICAgTGFtcGEuQWN0aXZpdHkucHVzaCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdmdWxsJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICd0bWRiJyxcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5zaG90LmNhcmRfaWQsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLnNob3QuY2FyZF90eXBlLFxuICAgICAgICAgICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2hvdC5jYXJkX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm1lbnUgPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgbWVudSAgICAgICA9IFtdXG4gICAgICAgIGxldCBjb250cm9sbGVyID0gTGFtcGEuQ29udHJvbGxlci5lbmFibGVkKCkuY29udHJvbGxlci5saW5rXG4gICAgICAgIGxldCBiYWNrICAgICAgID0gKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaHRtbC5yZW1vdmVDbGFzcygnaGlkZScpXG5cbiAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdzaG90c19sZW50YScpXG5cbiAgICAgICAgICAgIGNvbnRyb2xsZXIudmlkZW8ucGxheSgpXG5cbiAgICAgICAgICAgIExhbXBhLkJhY2tncm91bmQudGhlbWUoJ2JsYWNrJylcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2J1dHRvbl9yZXBvcnQnKSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAoKT0+e1xuICAgICAgICAgICAgICAgIE1vZGFscy5zaG90c1JlcG9ydCh0aGlzLnNob3QuaWQsIGJhY2spXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoTGFtcGEuQWNjb3VudC5QZXJtaXQuYWNjb3VudC5pZCA9PSB0aGlzLnNob3QuY2lkIHx8IExhbXBhLkFjY291bnQuUGVybWl0LmFjY291bnQuaWQgPT0gMSl7XG4gICAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfYnV0dG9uX2RlbGV0ZV92aWRlbycpLFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0OiAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBNb2RhbHMuc2hvdHNEZWxldGUodGhpcy5zaG90LmlkLCAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFjaygpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZWQucmVtb3ZlKHRoaXMuc2hvdClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnbW9yZScpLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfaG93X2NyZWF0ZV92aWRlb190aXRsZScpLFxuICAgICAgICAgICAgc3VidGl0bGU6IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c19ob3dfY3JlYXRlX3ZpZGVvX3N1YnRpdGxlJyksXG4gICAgICAgICAgICBvblNlbGVjdDogKCk9PntcbiAgICAgICAgICAgICAgICBTbGlkZXMoe1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXM6IFsxLDIsMyw0XS5tYXAoaT0+RGVmaW5lZC5jZG4gKyAncmVjb3JkL3NsaWRlLScgKyBpICsgJy5qcGcnKSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uX3RleHQ6ICdzaG90c19idXR0b25fZ29vZCcsXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZDogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuaHRtbC5hZGRDbGFzcygnaGlkZScpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uSW5zdGFsbDogYmFjayxcbiAgICAgICAgICAgICAgICAgICAgb25CYWNrOiBiYWNrXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb250cm9sbGVyLnZpZGVvLnBhdXNlKClcblxuICAgICAgICBMYW1wYS5TZWxlY3Quc2hvdyh7XG4gICAgICAgICAgICB0aXRsZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3RpdGxlX2FjdGlvbicpLFxuICAgICAgICAgICAgaXRlbXM6IG1lbnUsXG4gICAgICAgICAgICBvbkJhY2s6ICgpPT57XG4gICAgICAgICAgICAgICAgTGFtcGEuQ29udHJvbGxlci50b2dnbGUoJ3Nob3RzX2xlbnRhJylcblxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudmlkZW8ucGxheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmh0bWwuZmluZCgnLmFjdGlvbi1saWtlZCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnLCBMaWtlcy5maW5kKHRoaXMuc2hvdC5pZCkpXG4gICAgICAgIHRoaXMuaHRtbC5maW5kKCcuYWN0aW9uLWZhdm9yaXRlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScsIEZhdm9yaXRlLmZpbmQodGhpcy5zaG90LmlkKSlcblxuICAgICAgICB0aGlzLnRhZ3MudXBkYXRlKHRoaXMuc2hvdClcblxuICAgICAgICBpZih0aGlzLnNob3QudGFncyAmJiB0aGlzLnNob3QudGFncy5sZW5ndGgpe1xuICAgICAgICAgICAgbGV0IGVsZW1fdGFncyA9ICQoJzxkaXY+JyArIHRoaXMuc2hvdC50YWdzLnNsaWNlKDAsMykubWFwKHQ9PicjJyArIExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c190YWdfJyArIHQuc2x1ZykpLmpvaW4oJyAnKSArJzwvZGl2PicpXG5cbiAgICAgICAgICAgIHRoaXMudGFncy5yZW5kZXIoKS5hcHBlbmQoZWxlbV90YWdzKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVsZW1fbGlrZXMgPSAkKCc8ZGl2Pjxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1sb3ZlXCI+PC91c2U+PC9zdmc+ICcgKyBMYW1wYS5VdGlscy5iaWdOdW1iZXJUb1Nob3J0KHRoaXMuc2hvdC5saWtlZCB8fCAwKSsnPC9kaXY+JylcbiAgICAgICAgbGV0IGVsZW1fc2F2ZWQgPSAkKCc8ZGl2Pjxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1mYXZvcml0ZVwiPjwvdXNlPjwvc3ZnPiAnICsgTGFtcGEuVXRpbHMuYmlnTnVtYmVyVG9TaG9ydCh0aGlzLnNob3Quc2F2ZWQgfHwgMCkrJzwvZGl2PicpXG5cbiAgICAgICAgZWxlbV9saWtlcy50b2dnbGVDbGFzcygnaGlkZScsICh0aGlzLnNob3QubGlrZWQgfHwgMCkgPT0gMClcbiAgICAgICAgZWxlbV9zYXZlZC50b2dnbGVDbGFzcygnaGlkZScsICh0aGlzLnNob3Quc2F2ZWQgfHwgMCkgPT0gMClcblxuICAgICAgICB0aGlzLnRhZ3MucmVuZGVyKCkuYXBwZW5kKGVsZW1fbGlrZXMpXG4gICAgICAgIHRoaXMudGFncy5yZW5kZXIoKS5hcHBlbmQoZWxlbV9zYXZlZClcblxuICAgICAgICBpZihMYW1wYS5BY2NvdW50LlBlcm1pdC5hY2NvdW50LmlkID09IDEpIHRoaXMucmVjb3JkZXIudGV4dCh0aGlzLnNob3QucmVjb3JkZXIgfHwgJycpLnRvZ2dsZUNsYXNzKCdoaWRlJywgIXRoaXMuc2hvdC5yZWNvcmRlcilcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSA9IGZ1bmN0aW9uKHNob3Qpe1xuICAgICAgICB0aGlzLnNob3QgPSBzaG90XG4gICAgICAgIFxuICAgICAgICB0aGlzLmF1dGhvci51cGRhdGUoc2hvdClcblxuICAgICAgICB0aGlzLm5ldHdvcmsuY2xlYXIoKVxuXG4gICAgICAgIHRoaXMubG9hZCgpXG5cbiAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cblxuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuaW1hZ2UucmVtb3ZlQ2xhc3MoJ2xvYWRlZCcpXG4gICAgICAgIHRoaXMuY2FyZGJveC5hZGRDbGFzcygnbG9hZGluZycpXG5cbiAgICAgICAgaWYodGhpcy5jYWNoZVsgdGhpcy5zaG90LmlkIF0pIHJldHVybiB0aGlzLmxvYWREb25lKHRoaXMuY2FjaGVbIHRoaXMuc2hvdC5pZCBdKVxuXG4gICAgICAgIGxldCB1cmwgPSBMYW1wYS5UTURCLmFwaSh0aGlzLnNob3QuY2FyZF90eXBlICsgJy8nICsgdGhpcy5zaG90LmNhcmRfaWQgKyAnP2FwaV9rZXk9JyArIExhbXBhLlRNREIua2V5KCkgKyAnJmxhbmd1YWdlPScgKyBMYW1wYS5TdG9yYWdlLmZpZWxkKCd0bWRiX2xhbmcnKSlcblxuICAgICAgICB0aGlzLm5ldHdvcmsuc2lsZW50KHVybCwgdGhpcy5sb2FkRG9uZS5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHRoaXMubG9hZERvbmUgPSBmdW5jdGlvbihjYXJkKXtcbiAgICAgICAgdGhpcy5zaG90LmNhcmRfdGl0bGUgID0gY2FyZC50aXRsZSB8fCBjYXJkLm5hbWUgfHwgY2FyZC5vcmlnaW5hbF90aXRsZSB8fCBjYXJkLm9yaWdpbmFsX25hbWVcbiAgICAgICAgdGhpcy5zaG90LmNhcmRfcG9zdGVyID0gY2FyZC5wb3N0ZXJfcGF0aCB8fCBjYXJkLmJhY2tkcm9wX3BhdGhcbiAgICAgICAgdGhpcy5zaG90LmNhcmRfeWVhciAgID0gKGNhcmQucmVsZWFzZV9kYXRlIHx8IGNhcmQuZmlyc3RfYWlyX2RhdGUgfHwgJy0tLS0nKS5zbGljZSgwLDQpXG5cbiAgICAgICAgdGhpcy50aXRsZS50ZXh0KHRoaXMuc2hvdC5jYXJkX3RpdGxlKVxuICAgICAgICB0aGlzLnllYXIudGV4dCh0aGlzLnNob3QuY2FyZF95ZWFyKVxuXG4gICAgICAgIHRoaXMucG9zdGVyLnNyYyA9IExhbXBhLlRNREIuaW1hZ2UoJ3QvcC93MzAwLycgKyB0aGlzLnNob3QuY2FyZF9wb3N0ZXIpXG5cbiAgICAgICAgdGhpcy5jYXJkYm94LnJlbW92ZUNsYXNzKCdsb2FkaW5nJylcblxuICAgICAgICB0aGlzLmNhY2hlWyB0aGlzLnNob3QuaWQgXSA9IGNhcmRcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWxcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG93X3RpbWVvdXQpXG5cbiAgICAgICAgdGhpcy5odG1sLnJlbW92ZSgpXG5cbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9XG5cbiAgICAgICAgdGhpcy5uZXR3b3JrLmNsZWFyKClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsIiwiaW1wb3J0IFZpZGVvIGZyb20gJy4vdmlkZW8uanMnXG5pbXBvcnQgUGFuZWwgZnJvbSAnLi9wYW5lbC5qcydcbmltcG9ydCBNZXRyaWMgZnJvbSAnLi4vdXRpbHMvbWV0cmljLmpzJ1xuXG5mdW5jdGlvbiBMZW50YShmaXJzdCwgcGxheWxpc3Qpe1xuICAgIHRoaXMuaHRtbCA9IExhbXBhLlRlbXBsYXRlLmpzKCdzaG90c19sZW50YScpXG5cbiAgICB0aGlzLmN1cnJlbnQgID0gZmlyc3RcbiAgICB0aGlzLnBsYXlsaXN0ID0gcGxheWxpc3QgfHwgW11cbiAgICB0aGlzLnBvc2l0aW9uID0gcGxheWxpc3QuaW5kZXhPZihwbGF5bGlzdC5maW5kKGk9PmkuaWQgPT0gZmlyc3QuaWQpKVxuICAgIHRoaXMucGFnZSAgICAgPSAxXG4gICAgXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMudmlkZW8gPSBuZXcgVmlkZW8odGhpcy5jdXJyZW50KVxuICAgICAgICB0aGlzLnBhbmVsID0gbmV3IFBhbmVsKHRoaXMuY3VycmVudClcblxuICAgICAgICB0aGlzLnZpZGVvLmNyZWF0ZSgpXG4gICAgICAgIHRoaXMucGFuZWwuY3JlYXRlKClcblxuICAgICAgICBpZihMYW1wYS5QbGF0Zm9ybS5tb3VzZSgpIHx8IExhbXBhLlV0aWxzLmlzVG91Y2hEZXZpY2UoKSl7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IExhbXBhLlRlbXBsYXRlLmpzKCdoZWFkX2JhY2t3YXJkJywge3RpdGxlOiAnJ30pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGhlYWQuZmluZCgnLmhlYWQtYmFja3dhcmRfX2J1dHRvbicpLm9uKCdjbGljaycsIExhbXBhLkNvbnRyb2xsZXIuYmFjay5iaW5kKExhbXBhLkNvbnRyb2xsZXIpKVxuXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGhlYWQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmh0bWwuZmluZCgnLnNob3RzLWxlbnRhX192aWRlbycpLmFwcGVuZCh0aGlzLnZpZGVvLnJlbmRlcigpKVxuICAgICAgICB0aGlzLmh0bWwuZmluZCgnLnNob3RzLWxlbnRhX19wYW5lbCcpLmFwcGVuZCh0aGlzLnBhbmVsLnJlbmRlcigpKVxuXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYW1iaWVuY2UtLWVuYWJsZScpLmFwcGVuZCh0aGlzLmh0bWwpXG5cbiAgICAgICAgdGhpcy52aWRlby5jaGFuZ2UodGhpcy5jdXJyZW50LCAnbmV4dCcpXG4gICAgICAgIHRoaXMucGFuZWwuY2hhbmdlKHRoaXMuY3VycmVudCwgJ25leHQnKVxuXG4gICAgICAgIHRoaXMuY29udHJvbGxlcigpXG4gICAgICAgIHRoaXMuc2Nyb2xsKClcblxuICAgICAgICB0aGlzLmh0bWwub24oJ21vdXNlbW92ZScsIHRoaXMuZm9jdXMuYmluZCh0aGlzKSlcblxuICAgICAgICBMYW1wYS5CYWNrZ3JvdW5kLnRoZW1lKCdibGFjaycpXG5cbiAgICAgICAgTWV0cmljLmNvdW50ZXIoJ3Nob3RzX2xlbnRhX2xhdW5jaCcpXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzXG5cbiAgICAgICAgaWYoTGFtcGEuVXRpbHMuaXNUb3VjaERldmljZSgpKXtcbiAgICAgICAgICAgIGxldCBzdGFydF9wb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIGxldCBtb3ZlX3Bvc2l0aW9uICA9IDBcbiAgICAgICAgICAgIGxldCBlbmRfcG9zaXRpb24gICA9IDBcbiAgICAgICAgICAgIGxldCB0aW1lX3Njcm9sbCAgICA9IDBcbiAgICAgICAgICAgIGxldCBlbGVtbW92ZSAgICAgICA9IHRoaXMuaHRtbC5maW5kKCcuc2hvdHMtbGVudGEtdmlkZW9fX3ZpZGVvLWVsZW1lbnQnKVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3Zlc3RhcnQoZSl7XG4gICAgICAgICAgICAgICAgc3RhcnRfcG9zaXRpb24gPSBlLmNsaWVudFlcbiAgICAgICAgICAgICAgICBlbmRfcG9zaXRpb24gICA9IHN0YXJ0X3Bvc2l0aW9uXG4gICAgICAgICAgICAgICAgbW92ZV9wb3NpdGlvbiAgPSBzdGFydF9wb3NpdGlvblxuICAgICAgICAgICAgICAgIHRpbWVfc2Nyb2xsICAgID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3ZlKGUpe1xuICAgICAgICAgICAgICAgIG1vdmVfcG9zaXRpb24gPSBlLmNsaWVudFlcbiAgICAgICAgICAgICAgICBlbmRfcG9zaXRpb24gID0gZS5jbGllbnRZXG5cbiAgICAgICAgICAgICAgICBsZXQgZGVsdGEgPSBtb3ZlX3Bvc2l0aW9uIC0gc3RhcnRfcG9zaXRpb25cblxuICAgICAgICAgICAgICAgIGVsZW1tb3ZlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyBkZWx0YSArICdweCknXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVlbmQoZSl7XG4gICAgICAgICAgICAgICAgZWxlbW1vdmUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHB4KSdcblxuICAgICAgICAgICAgICAgIGxldCB0aHJlc2hvbGQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLjVcblxuICAgICAgICAgICAgICAgIGxldCBjc3JvbGxfc3BlZWQgPSBEYXRlLm5vdygpIC0gdGltZV9zY3JvbGxcblxuICAgICAgICAgICAgICAgIGlmKGNzcm9sbF9zcGVlZCA8IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9IHRocmVzaG9sZCAvIDZcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzdGFydF9wb3NpdGlvbiAtIGVuZF9wb3NpdGlvbiA+IHRocmVzaG9sZCl7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLm1vdmUoJ25leHQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGVuZF9wb3NpdGlvbiAtIHN0YXJ0X3Bvc2l0aW9uID4gdGhyZXNob2xkKXtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYubW92ZSgncHJldicpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZW5kX3Bvc2l0aW9uICAgPSAwXG4gICAgICAgICAgICAgICAgc3RhcnRfcG9zaXRpb24gPSAwXG4gICAgICAgICAgICAgICAgbW92ZV9wb3NpdGlvbiAgPSAwXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaHRtbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PntcbiAgICAgICAgICAgICAgICBtb3Zlc3RhcnQoZS50b3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmh0bWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PntcbiAgICAgICAgICAgICAgICBtb3ZlKGUudG91Y2hlc1swXSB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5odG1sLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgbW92ZWVuZClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHRpbWUgID0gMFxuXG4gICAgICAgICAgICBmdW5jdGlvbiB3aGVlbChlKXtcbiAgICAgICAgICAgICAgICBpZihEYXRlLm5vdygpIC0gdGltZSA+IDUwMCl7XG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZS53aGVlbERlbHRhIC8gMTIwID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYubW92ZSgncHJldicpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLm1vdmUoJ25leHQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDQntCx0YDQsNCx0LDRgtGL0LLQsNC10Lwg0YHQutGA0L7Qu9C7INC60L7Qu9C10YHQvtC8INC80YvRiNC4XG4gICAgICAgICAgICB0aGlzLmh0bWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHdoZWVsKVxuICAgICAgICAgICAgdGhpcy5odG1sLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoTGFtcGEuVXRpbHMuaXNUb3VjaERldmljZSgpKSByZXR1cm5cblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c190aW1lb3V0KVxuXG4gICAgICAgIHRoaXMuaHRtbC50b2dnbGVDbGFzcygnc2hvdHMtbGVudGEtLWhpZGUtcGFuZWwnLCBmYWxzZSlcblxuICAgICAgICB0aGlzLmZvY3VzX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBpZihMYW1wYS5Db250cm9sbGVyLmVuYWJsZWQoKS5uYW1lICE9PSAnc2hvdHNfbGVudGEnKSByZXR1cm5cblxuICAgICAgICAgICAgdGhpcy5odG1sLnRvZ2dsZUNsYXNzKCdzaG90cy1sZW50YS0taGlkZS1wYW5lbCcsIHRydWUpXG5cbiAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIuYWRkKCdzaG90c19sZW50YV9pZGxlJyx7XG4gICAgICAgICAgICAgICAgbGluazogdGhpcy52aWRlbyxcbiAgICAgICAgICAgICAgICB0b2dnbGU6ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIuY2xlYXIoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5jb250cm9sbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMuY29udHJvbGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIHVwOiAoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmUoJ3ByZXYnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG93bjogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKCduZXh0JylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudGVyOiB0aGlzLmNvbnRyb2xsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBiYWNrOiB0aGlzLmNvbnRyb2xsZXIuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgTGFtcGEuQ29udHJvbGxlci50b2dnbGUoJ3Nob3RzX2xlbnRhX2lkbGUnKVxuICAgICAgICB9LDcwMDApXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sbGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgTGFtcGEuQ29udHJvbGxlci5hZGQoJ3Nob3RzX2xlbnRhJyx7XG4gICAgICAgICAgICBsaW5rOiB0aGlzLFxuICAgICAgICAgICAgdG9nZ2xlOiAoKT0+e1xuICAgICAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIuY2xlYXIoKVxuXG4gICAgICAgICAgICAgICAgTGFtcGEuQ29udHJvbGxlci5jb2xsZWN0aW9uU2V0KHRoaXMuaHRtbClcbiAgICAgICAgICAgICAgICBMYW1wYS5Db250cm9sbGVyLmNvbGxlY3Rpb25Gb2N1cyh0aGlzLnBhbmVsLmJvZHksIHRoaXMuaHRtbClcblxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZnQ6ICgpPT57XG4gICAgICAgICAgICAgICAgaWYoTmF2aWdhdG9yLmNhbm1vdmUoJ2xlZnQnKSkgTmF2aWdhdG9yLm1vdmUoJ2xlZnQnKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6ICgpPT57XG4gICAgICAgICAgICAgICAgaWYoTmF2aWdhdG9yLmNhbm1vdmUoJ3JpZ2h0JykpIE5hdmlnYXRvci5tb3ZlKCdyaWdodCcpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cDogKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoJ3ByZXYnKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjogKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoJ25leHQnKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFjazogdGhpcy5iYWNrLmJpbmQodGhpcylcbiAgICAgICAgfSlcblxuICAgICAgICBMYW1wYS5Db250cm9sbGVyLnRvZ2dsZSgnc2hvdHNfbGVudGEnKVxuICAgIH1cblxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XG4gICAgICAgIGxldCBzdGFydF9wb3NpdGlvbiA9IHRoaXMucG9zaXRpb25cblxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ25leHQnKXtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24rK1xuXG4gICAgICAgICAgICBpZih0aGlzLnBvc2l0aW9uID49IHRoaXMucGxheWxpc3QubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wbGF5bGlzdC5sZW5ndGggLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT0gJ3ByZXYnKXtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24tLVxuXG4gICAgICAgICAgICBpZih0aGlzLnBvc2l0aW9uIDwgMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHN0YXJ0X3Bvc2l0aW9uICE9PSB0aGlzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGxheWxpc3RbdGhpcy5wb3NpdGlvbl1cblxuICAgICAgICAgICAgdGhpcy52aWRlby5jaGFuZ2UodGhpcy5jdXJyZW50LCBkaXJlY3Rpb24pXG4gICAgICAgICAgICB0aGlzLnBhbmVsLmNoYW5nZSh0aGlzLmN1cnJlbnQsIGRpcmVjdGlvbilcblxuICAgICAgICAgICAgTGFtcGEuQ29udHJvbGxlci50b2dnbGUoJ3Nob3RzX2xlbnRhJylcblxuICAgICAgICAgICAgTWV0cmljLmNvdW50ZXIoJ3Nob3RzX2xlbnRhX25leHQnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbiA+PSB0aGlzLnBsYXlsaXN0Lmxlbmd0aCAtIDMpe1xuICAgICAgICAgICAgdGhpcy5uZXh0UGFydCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm5leHRQYXJ0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5vbk5leHQpe1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nX3BhcnQgPSB0cnVlXG5cbiAgICAgICAgICAgIHRoaXMucGFnZSsrXG5cbiAgICAgICAgICAgIHRoaXMub25OZXh0KHRoaXMucGFnZSwgKHJlc3VsdHMpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nX3BhcnQgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaChpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5wbGF5bGlzdC5maW5kKHA9PnAuaWQgPT0gaS5pZCkpIHRoaXMucGxheWxpc3QucHVzaChpKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmJhY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmRlc3Ryb3koKVxuXG4gICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdjb250ZW50JylcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c190aW1lb3V0KVxuXG4gICAgICAgIHRoaXMudmlkZW8uZGVzdHJveSgpXG4gICAgICAgIHRoaXMucGFuZWwuZGVzdHJveSgpXG5cbiAgICAgICAgdGhpcy5odG1sLnJlbW92ZSgpXG5cbiAgICAgICAgTGFtcGEuQmFja2dyb3VuZC50aGVtZSgncmVzZXQnKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVudGEiLCJpbXBvcnQgVGFncyBmcm9tICcuL3RhZ3MuanMnXG5pbXBvcnQgTGVudGEgZnJvbSAnLi4vbGVudGEvbGVudGEuanMnXG5pbXBvcnQgSGFuZGxlciBmcm9tICcuLi91dGlscy9oYW5kbGVyLmpzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuXG5mdW5jdGlvbiBTaG90KGl0ZW1fZGF0YSwgcGFyYW1zID0ge30pe1xuICAgIGxldCBjbG9uZSA9IExhbXBhLkFycmF5cy5jbG9uZShpdGVtX2RhdGEpXG5cbiAgICBpdGVtX2RhdGEuY2FyZCA9IHtcbiAgICAgICAgaWQ6IGl0ZW1fZGF0YS5jYXJkX2lkLFxuICAgICAgICB0eXBlOiBpdGVtX2RhdGEuY2FyZF90eXBlLFxuICAgICAgICB0aXRsZTogaXRlbV9kYXRhLmNhcmRfdGl0bGUsXG4gICAgICAgIHJlbGVhc2VfZGF0ZTogaXRlbV9kYXRhLmNhcmRfeWVhcixcbiAgICAgICAgcG9zdGVyX3BhdGg6IGl0ZW1fZGF0YS5jYXJkX3Bvc3RlclxuICAgIH1cblxuICAgIGl0ZW1fZGF0YS5pbWcgPSBpdGVtX2RhdGEuc2NyZWVuXG5cbiAgICBsZXQgaXRlbSAgPSBMYW1wYS5NYWtlci5tYWtlKCdFcGlzb2RlJywgaXRlbV9kYXRhLCAobW9kdWxlKT0+bW9kdWxlLm9ubHkoJ0NhcmQnLCAnQ2FsbGJhY2snKSlcblxuICAgIGl0ZW0udXNlKHtcbiAgICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmh0bWwuZmluZCgnLmZ1bGwtZXBpc29kZV9fbmFtZScpLnJlbW92ZSgpXG4gICAgICAgICAgICB0aGlzLmh0bWwuZmluZCgnLmZ1bGwtZXBpc29kZV9fbnVtJykucmVtb3ZlKClcblxuICAgICAgICAgICAgaWYocGFyYW1zLndpdGhvdXRfY2FyZCkgdGhpcy5odG1sLmZpbmQoJy5jYXJkLWVwaXNvZGVfX2Zvb3RlcicpLmFkZENsYXNzKCdoaWRlJylcblxuICAgICAgICAgICAgbGV0IHRhZ3MgPSBuZXcgVGFncyh0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgdGFncy5jcmVhdGUoKVxuXG4gICAgICAgICAgICB0aGlzLmh0bWwuZmluZCgnLmZ1bGwtZXBpc29kZV9fZGF0ZScpLmVtcHR5KCkuYXBwZW5kKHRhZ3MucmVuZGVyKCkpXG5cbiAgICAgICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcygnZnVsbC1lcGlzb2RlLS1zaG90JylcblxuICAgICAgICAgICAgdGhpcy5saWtlZCA9ICQoYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLWVwaXNvZGVfX2xpa2VkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1sb3ZlXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7TGFtcGEuVXRpbHMuYmlnTnVtYmVyVG9TaG9ydCh0aGlzLmRhdGEubGlrZWQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGApXG5cbiAgICAgICAgICAgIHRoaXMuaHRtbC5maW5kKCcuZnVsbC1lcGlzb2RlX19kYXRlJykuYXBwZW5kKHRoaXMubGlrZWQpXG5cbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gTGFtcGEuVGVtcGxhdGUuZWxlbSgnZGl2Jywge2NsYXNzOiAnc2hvdHMtc3RhdHVzIGhpZGUnfSlcblxuICAgICAgICAgICAgdGhpcy5odG1sLmZpbmQoJy5jYXJkX19sZWZ0JykuYXBwZW5kKHRoaXMuc3RhdHVzKVxuXG4gICAgICAgICAgICB0aGlzLmh0bWwuZmluZCgnLmZ1bGwtZXBpc29kZScpLmFwcGVuZCgkKCc8ZGl2IGNsYXNzPVwiZnVsbC1lcGlzb2RlX19zaG90LWljb25cIj48c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNzcHJpdGUtc2hvdHNcIj48L3VzZT48L3N2Zz48L2Rpdj4nKSlcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNIYW5kbGVyID0gKGUpPT57XG4gICAgICAgICAgICAgICAgaWYoZS5pZCAhPT0gdGhpcy5kYXRhLmlkKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzLnRvZ2dsZUNsYXNzKCdoaWRlJywgZS5zdGF0dXMgPT0gJ3JlYWR5JylcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzLnRvZ2dsZUNsYXNzKCdzaG90cy1zdGF0dXMtLWVycm9yJywgZS5zdGF0dXMgPT0gJ2Vycm9yJylcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cy50b2dnbGVDbGFzcygnc2hvdHMtc3RhdHVzLS1wcm9jZXNzaW5nJywgZS5zdGF0dXMgPT0gJ3Byb2Nlc3NpbmcnIHx8IGUuc3RhdHVzID09ICdjb252ZXJ0aW5nJylcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cy50b2dnbGVDbGFzcygnc2hvdHMtc3RhdHVzLS1yZWFkeScsIGUuc3RhdHVzID09ICdyZWFkeScpXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMudG9nZ2xlQ2xhc3MoJ3Nob3RzLXN0YXR1cy0tZGVsZXRlZCcsIGUuc3RhdHVzID09ICdkZWxldGVkJylcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cy50b2dnbGVDbGFzcygnc2hvdHMtc3RhdHVzLS1ibG9ja2VkJywgZS5zdGF0dXMgPT0gJ2Jsb2NrZWQnKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMudGV4dChcbiAgICAgICAgICAgICAgICAgICAgZS5zdGF0dXMgPT0gJ2Vycm9yJyA/IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c19zdGF0dXNfZXJyb3InKSA6XG4gICAgICAgICAgICAgICAgICAgIGUuc3RhdHVzID09ICdwcm9jZXNzaW5nJyB8fCBlLnN0YXR1cyA9PSAnY29udmVydGluZycgPyBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfc3RhdHVzX3Byb2Nlc3NpbmcnKSA6XG4gICAgICAgICAgICAgICAgICAgIGUuc3RhdHVzID09ICdibG9ja2VkJyA/IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c19zdGF0dXNfYmxvY2tlZCcpIDpcbiAgICAgICAgICAgICAgICAgICAgZS5zdGF0dXMgPT0gJ2RlbGV0ZWQnID8gTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX3N0YXR1c19kZWxldGVkJykgOlxuICAgICAgICAgICAgICAgICAgICBlLnN0YXR1cyA9PSAncmVhZHknID8gTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX3N0YXR1c19yZWFkeScpIDogJydcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICBVdGlscy52aWRlb1JlcGxhY2VTdGF0dXMoZSwgdGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgIFV0aWxzLnZpZGVvUmVwbGFjZVN0YXR1cyhlLCBjbG9uZSlcblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pbWcgPSBlLnNjcmVlblxuXG4gICAgICAgICAgICAgICAgaWYoZS5zY3JlZW4pIHRoaXMuZW1pdCgndmlzaWJsZScpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YUhhbmRsZXIgPSAoZSk9PntcbiAgICAgICAgICAgICAgICBpZihlLmlkICE9PSB0aGlzLmRhdGEuaWQpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgdGhpcy5saWtlZC5maW5kKCdzcGFuJykudGV4dChMYW1wYS5VdGlscy5iaWdOdW1iZXJUb1Nob3J0KGUubGlrZWQgfHwgdGhpcy5kYXRhLmxpa2VkKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTGFtcGEuTGlzdGVuZXIuZm9sbG93KCdzaG90c19zdGF0dXMnLCB0aGlzLnVwZGF0ZVN0YXR1c0hhbmRsZXIpXG4gICAgICAgICAgICBMYW1wYS5MaXN0ZW5lci5mb2xsb3coJ3Nob3RzX3VwZGF0ZScsIHRoaXMudXBkYXRlRGF0YUhhbmRsZXIpXG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzSGFuZGxlcih0aGlzLmRhdGEpXG5cbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5zdGF0dXMgPT0gJ3Byb2Nlc3NpbmcnICYmIExhbXBhLkFjY291bnQuUGVybWl0LmFjY291bnQuaWQgPT0gdGhpcy5kYXRhLmNpZCkgSGFuZGxlci5hZGQoY2xvbmUpXG4gICAgICAgIH0sXG4gICAgICAgIG9ubHlFbnRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBsZW50YSA9IG5ldyBMZW50YShjbG9uZSwgcGFyYW1zLnBsYXlsaXN0IHx8IFt0aGlzLmRhdGFdKVxuXG4gICAgICAgICAgICBsZW50YS5vbk5leHQgPSBwYXJhbXMub25OZXh0XG5cbiAgICAgICAgICAgIGxlbnRhLnN0YXJ0KClcbiAgICAgICAgfSxcbiAgICAgICAgb25seUZvY3VzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgTGFtcGEuQmFja2dyb3VuZC5jaGFuZ2UodGhpcy5kYXRhLmltZyB8fCAnJylcbiAgICAgICAgfSxcbiAgICAgICAgb25SZW1vdmU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBMYW1wYS5MaXN0ZW5lci5yZW1vdmUoJ3Nob3RzX3N0YXR1cycsIHRoaXMudXBkYXRlU3RhdHVzSGFuZGxlcilcbiAgICAgICAgICAgIExhbXBhLkxpc3RlbmVyLnJlbW92ZSgnc2hvdHNfdXBkYXRlJywgdGhpcy51cGRhdGVEYXRhSGFuZGxlcilcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaXRlbVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG90IiwiaW1wb3J0IEFwaSBmcm9tICcuLi91dGlscy9hcGkuanMnXG5pbXBvcnQgU2hvdCBmcm9tICcuL3Nob3QuanMnXG5cbmZ1bmN0aW9uIGNvbXBvbmVudChvYmplY3Qpe1xuICAgIExhbXBhLlV0aWxzLmV4dGVuZFBhcmFtcyhvYmplY3QsIHtcbiAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgIGNvbHM6IDRcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgY29tcCAgICAgPSBMYW1wYS5NYWtlci5tYWtlKCdDYXRlZ29yeScsIG9iamVjdCwgKG1vZHVsZSk9Pm1vZHVsZS50b2dnbGUoTGFtcGEuTWFrZXIubW9kdWxlKCdDYXRlZ29yeScpLk1BU0suYmFzZSwgJ1BhZ2luYXRpb24nKSlcbiAgICBsZXQgcGxheWxpc3QgPSBbXVxuXG4gICAgY29tcC51c2Uoe1xuICAgICAgICBvbkNyZWF0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIEFwaS5zaG90c0xpc3Qob2JqZWN0LnVybCwgb2JqZWN0LnBhZ2UsIChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgcGxheWxpc3QgPSBMYW1wYS5BcnJheXMuY2xvbmUocmVzdWx0LnJlc3VsdHMpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkKHJlc3VsdClcbiAgICAgICAgICAgIH0sIHRoaXMuZW1wdHkuYmluZCh0aGlzKSlcbiAgICAgICAgfSxcbiAgICAgICAgb25OZXh0OiBmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgICAgQXBpLnNob3RzTGlzdChvYmplY3QudXJsLCBvYmplY3QucGFnZSwgKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICBwbGF5bGlzdCA9IHBsYXlsaXN0LmNvbmNhdChyZXN1bHQucmVzdWx0cylcblxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgfSwgcmVqZWN0LmJpbmQodGhpcykpXG4gICAgICAgIH0sXG4gICAgICAgIG9ubHlDcmVhdGVBbmRBcHBlbmQ6IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gbmV3IFNob3QoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2luc3RhbmNlJywgaXRlbSwgZWxlbWVudClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpdGVtLmNyZWF0ZSgpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FwcGVuZCcsIGl0ZW0sIGVsZW1lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmcnLCAnb25DcmVhdGVBbmRBcHBlbmQgZXJyb3I6JywgZS5tZXNzYWdlLCBlLnN0YWNrKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwbGF5bGlzdCA9IG51bGxcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29tcFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQiLCJpbXBvcnQgQXBpIGZyb20gJy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBTaG90IGZyb20gJy4vc2hvdC5qcydcbmltcG9ydCBTbGlkZXMgZnJvbSAnLi9zbGlkZXMuanMnXG5pbXBvcnQgRGVmaW5lZCBmcm9tICcuLi9kZWZpbmVkLmpzJ1xuXG5mdW5jdGlvbiBjb21wb25lbnQob2JqZWN0KXtcbiAgICBMYW1wYS5VdGlscy5leHRlbmRQYXJhbXMob2JqZWN0LCB7XG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICBjb2xzOiBMYW1wYS5TdG9yYWdlLmZpZWxkKCdpbnRlcmZhY2Vfc2l6ZScpID09ICdiaWdnZXInID8gNDogM1xuICAgICAgICB9LFxuICAgICAgICBlbXB0eToge1xuICAgICAgICAgICAgZGVzY3I6IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c19jYXJkX2VtcHR5X2Rlc2NyJyksXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX2hvd19jcmVhdGVfdmlkZW9fdGl0bGUnKSxcbiAgICAgICAgICAgICAgICAgICAgb25FbnRlcjogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIFNsaWRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzOiBbMSwyLDMsNF0ubWFwKGk9PkRlZmluZWQuY2RuICsgJ3JlY29yZC9zbGlkZS0nICsgaSArICcuanBnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uX3RleHQ6ICdzaG90c19idXR0b25fZ29vZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkOiAoKT0+e30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnN0YWxsOiAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYW1wYS5Db250cm9sbGVyLnRvZ2dsZSgnY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJhY2s6ICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdjb250ZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCBjb21wICAgICA9IExhbXBhLk1ha2VyLm1ha2UoJ0NhdGVnb3J5Jywgb2JqZWN0LCAobW9kdWxlKT0+bW9kdWxlLnRvZ2dsZShMYW1wYS5NYWtlci5tb2R1bGUoJ0NhdGVnb3J5JykuTUFTSy5iYXNlLCAnUGFnaW5hdGlvbicsICdFeHBsb3JlcicpKVxuICAgIGxldCBwbGF5bGlzdCA9IFtdXG5cbiAgICBjb21wLnVzZSh7XG4gICAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgQXBpLnNob3RzQ2FyZChvYmplY3QuY2FyZCwgb2JqZWN0LnBhZ2UsIChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgcGxheWxpc3QgPSBMYW1wYS5BcnJheXMuY2xvbmUocmVzdWx0LnJlc3VsdHMpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkKHJlc3VsdClcbiAgICAgICAgICAgIH0sIHRoaXMuZW1wdHkuYmluZCh0aGlzKSlcbiAgICAgICAgfSxcbiAgICAgICAgb25OZXh0OiBmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgICAgQXBpLnNob3RzQ2FyZChvYmplY3QuY2FyZCwgb2JqZWN0LnBhZ2UsIChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgcGxheWxpc3QgPSBwbGF5bGlzdC5jb25jYXQocmVzdWx0LnJlc3VsdHMpXG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICAgIH0sIHJlamVjdC5iaW5kKHRoaXMpKVxuICAgICAgICB9LFxuICAgICAgICBvbmx5Q3JlYXRlQW5kQXBwZW5kOiBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG5ldyBTaG90KGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3QsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhvdXRfY2FyZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2luc3RhbmNlJywgaXRlbSwgZWxlbWVudClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpdGVtLmNyZWF0ZSgpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FwcGVuZCcsIGl0ZW0sIGVsZW1lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmcnLCAnb25DcmVhdGVBbmRBcHBlbmQgZXJyb3I6JywgZS5tZXNzYWdlLCBlLnN0YWNrKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwbGF5bGlzdCA9IG51bGxcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29tcFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQiLCJpbXBvcnQgQXBpIGZyb20gJy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBTaG90IGZyb20gJy4vc2hvdC5qcydcblxuZnVuY3Rpb24gY29tcG9uZW50KG9iamVjdCl7XG4gICAgTGFtcGEuVXRpbHMuZXh0ZW5kUGFyYW1zKG9iamVjdCwge1xuICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgY29sczogNFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCBjb21wICAgICA9IExhbXBhLk1ha2VyLm1ha2UoJ0NhdGVnb3J5Jywgb2JqZWN0LCAobW9kdWxlKT0+bW9kdWxlLnRvZ2dsZShMYW1wYS5NYWtlci5tb2R1bGUoJ0NhdGVnb3J5JykuTUFTSy5iYXNlLCAnUGFnaW5hdGlvbicpKVxuICAgIGxldCBwbGF5bGlzdCA9IFtdXG5cbiAgICBjb21wLnVzZSh7XG4gICAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgQXBpLnNob3RzQ2hhbm5lbChvYmplY3QuaWQsIG9iamVjdC5wYWdlLCAocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIHBsYXlsaXN0ID0gTGFtcGEuQXJyYXlzLmNsb25lKHJlc3VsdC5yZXN1bHRzKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZChyZXN1bHQpXG4gICAgICAgICAgICB9LCB0aGlzLmVtcHR5LmJpbmQodGhpcykpXG4gICAgICAgIH0sXG4gICAgICAgIG9uTmV4dDogZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICAgIEFwaS5zaG90c0NoYW5uZWwob2JqZWN0LmlkLCBvYmplY3QucGFnZSwgKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICBwbGF5bGlzdCA9IHBsYXlsaXN0LmNvbmNhdChyZXN1bHQucmVzdWx0cylcblxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgfSwgcmVqZWN0LmJpbmQodGhpcykpXG4gICAgICAgIH0sXG4gICAgICAgIG9ubHlDcmVhdGVBbmRBcHBlbmQ6IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gbmV3IFNob3QoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdDogcGxheWxpc3RcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnN0YW5jZScsIGl0ZW0sIGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaXRlbS5jcmVhdGUoKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhcHBlbmQnLCBpdGVtLCBlbGVtZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nJywgJ29uQ3JlYXRlQW5kQXBwZW5kIGVycm9yOicsIGUubWVzc2FnZSwgZS5zdGFjaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25EZXN0cm95OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcGxheWxpc3QgPSBudWxsXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvbXBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50IiwiZnVuY3Rpb24gYmFja3dhcmQoKXtcbiAgICBsZXQgaGVhZCA9IExhbXBhLlRlbXBsYXRlLmdldCgnaGVhZF9iYWNrd2FyZCcse3RpdGxlOiAnJ30pXG5cbiAgICBoZWFkLmZpbmQoJy5oZWFkLWJhY2t3YXJkX19idXR0b24nKS5vbignY2xpY2snLCgpPT57XG4gICAgICAgIExhbXBhLkNvbnRyb2xsZXIuYmFjaygpXG4gICAgfSlcblxuICAgIHJldHVybiBoZWFkXG59XG5cbmZ1bmN0aW9uIFByZXNlbnQoKXtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSAoKT0+e31cbiAgICB0aGlzLm9uQmFjayAgICAgPSAoKT0+e31cblxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgbGFzdF90aW1lX3dhdGNoZWQgPSBMYW1wYS5TdG9yYWdlLmdldCgnc2hvdHNfcHJlc2VudF93YXRjaGVkJywgJzAnKVxuICAgICAgICBsZXQgd2FpdF90aW1lID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDUgLy8gNSDQtNC90LXQuVxuXG4gICAgICAgIGlmKERhdGUubm93KCkgLSBsYXN0X3RpbWVfd2F0Y2hlZCA8IHdhaXRfdGltZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkNvbXBsZXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIExhbXBhLkJhY2tncm91bmQudGhlbWUoJ2JsYWNrJylcblxuICAgICAgICB0aGlzLmh0bWwgPSAkKGA8ZGl2IGNsYXNzPVwic2hvdHMtdmlkZW8tcHJlc2VudFwiPlxuICAgICAgICAgICAgPHZpZGVvIGF1dG9wbGF5IHBvc3Rlcj1cIi4vaW1nL3ZpZGVvX3Bvc3Rlci5wbmdcIj48L3ZpZGVvPlxuICAgICAgICA8L2Rpdj5gKVxuXG4gICAgICAgIGlmKExhbXBhLlBsYXRmb3JtLm1vdXNlKCkgfHwgTGFtcGEuVXRpbHMuaXNUb3VjaERldmljZSgpKXtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoYmFja3dhcmQoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlkZW8gPSB0aGlzLmh0bWwuZmluZCgndmlkZW8nKVswXVxuXG4gICAgICAgIGlmKExhbXBhLlBsYXRmb3JtLmlzKCdhcHBsZScpKSB0aGlzLnZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpXG5cbiAgICAgICAgdGhpcy52aWRlby5zcmMgPSAnaHR0cHM6Ly9jZG4uY3ViLnJpcC9zaG90c19wcmVzZW50L3ByZXNlbnQubXA0J1xuXG4gICAgICAgIHRoaXMudmlkZW8ubG9hZCgpXG5cbiAgICAgICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsdGhpcy5zdG9wLmJpbmQodGhpcykpXG5cbiAgICAgICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsdGhpcy5zdG9wLmJpbmQodGhpcykpXG5cbiAgICAgICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywoKT0+e1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJfd2FpdGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50aW1lcl93YWl0ZSA9IHNldFRpbWVvdXQodGhpcy5zdG9wLmJpbmQodGhpcyksIDYwMDApXG5cbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLmh0bWwpXG5cbiAgICAgICAgTGFtcGEuQ29udHJvbGxlci5hZGQoJ3Nob3RzX3ZpZGVvX3ByZXNlbnQnLHtcbiAgICAgICAgICAgIHRvZ2dsZTogKCk9PntcbiAgICAgICAgICAgICAgICBMYW1wYS5Db250cm9sbGVyLmNsZWFyKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrOiB0aGlzLmJhY2suYmluZCh0aGlzKVxuICAgICAgICB9KVxuXG4gICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdzaG90c192aWRlb19wcmVzZW50JylcbiAgICB9XG5cbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUoKVxuXG4gICAgICAgIExhbXBhLlN0b3JhZ2Uuc2V0KCdzaG90c19wcmVzZW50X3dhdGNoZWQnLCBEYXRlLm5vdygpKVxuICAgIH1cblxuICAgIHRoaXMuYmFjayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMub25CYWNrKClcbiAgICB9XG4gICAgXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zdG9wID0gKCk9Pnt9XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9ICgpPT57fVxuICAgICAgICB0aGlzLm9uQmFjayA9ICgpPT57fVxuXG4gICAgICAgIGlmKCF0aGlzLnZpZGVvKSByZXR1cm5cblxuICAgICAgICB0aGlzLnZpZGVvLnBhdXNlKClcbiAgICAgICAgdGhpcy52aWRlby5zcmMgPSAnJ1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyX3dhaXRlKVxuXG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKVxuXG4gICAgICAgIExhbXBhLkJhY2tncm91bmQudGhlbWUoJ3Jlc2V0JylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXNlbnQiLCJsZXQgY29tcG9uZW50ID0gJ3Nob3RzJ1xubGV0IGljb24gPSBgPHN2ZyBpZD1cInNwcml0ZS1zaG90c1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMjUzLjI2NiA1MTJhMTkuMTY2IDE5LjE2NiAwIDAgMS0xOS4xNjgtMTkuMTY4VjMzMC42MDdsLTEzNS4wNzEtLjA0OWExOS4xNjQgMTkuMTY0IDAgMCAxLTE2LjgzMi0yOC4zMkwyNDEuMDYgMTAuMDEzYTE5LjE2NyAxOS4xNjcgMCAwIDEgMzYuMDA1IDkuMTU0djE2Mi41MzRoMTM1LjkwMmExOS4xNjcgMTkuMTY3IDAgMCAxIDE2LjgxNSAyOC4zNjNMMjcwLjA3OCA1MDIuMDNhMTkuMTczIDE5LjE3MyAwIDAgMS0xNi44MTIgOS45N3pcIiBmaWxsPVwid2hpdGVcIj48L3BhdGg+XG48L3N2Zz5gXG5cbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBMYW1wYS5TZXR0aW5nc0FwaS5hZGRDb21wb25lbnQoe1xuICAgICAgICBjb21wb25lbnQsXG4gICAgICAgIGljb24sXG4gICAgICAgIG5hbWU6IExhbXBhLkxhbmcudHJhbnNsYXRlKCdTaG90cycpLFxuICAgIH0pXG5cbiAgICBMYW1wYS5TZXR0aW5nc0FwaS5hZGRQYXJhbSh7XG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgcGFyYW06IHtcbiAgICAgICAgICAgIG5hbWU6ICdzaG90c19pbl9wbGF5ZXInLFxuICAgICAgICAgICAgdHlwZTogJ3RyaWdnZXInLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX3NldHRpbmdzX2luX3BsYXllcicpLFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIExhbXBhLlNldHRpbmdzQXBpLmFkZFBhcmFtKHtcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICBwYXJhbToge1xuICAgICAgICAgICAgbmFtZTogJ3Nob3RzX2luX2NhcmQnLFxuICAgICAgICAgICAgdHlwZTogJ3RyaWdnZXInLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgbmFtZTogTGFtcGEuTGFuZy50cmFuc2xhdGUoJ3Nob3RzX3NldHRpbmdzX2luX2NhcmQnKSxcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0XG59IiwiaW1wb3J0IExhbmcgZnJvbSAnLi91dGlscy9sYW5nLmpzJ1xuaW1wb3J0IFRlbXBsYXRlcyBmcm9tICcuL3V0aWxzL3RlbXBsYXRlcy5qcydcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi91dGlscy9wbGF5ZXIuanMnXG5pbXBvcnQgSGFuZGxlciBmcm9tICcuL3V0aWxzL2hhbmRsZXIuanMnXG5pbXBvcnQgRmF2b3JpdGUgZnJvbSAnLi91dGlscy9mYXZvcml0ZS5qcydcbmltcG9ydCBDcmVhdGVkIGZyb20gJy4vdXRpbHMvY3JlYXRlZC5qcydcbmltcG9ydCBTaG90IGZyb20gJy4vY29tcG9uZW50cy9zaG90LmpzJ1xuaW1wb3J0IExlbnRhIGZyb20gJy4vbGVudGEvbGVudGEuanMnXG5pbXBvcnQgQXBpIGZyb20gJy4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9jb21wb25lbnRzL2xpc3QuanMnXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC5qcydcbmltcG9ydCBWaWV3IGZyb20gJy4vdXRpbHMvdmlldy5qcydcbmltcG9ydCBDaGFubmVsIGZyb20gJy4vY29tcG9uZW50cy9jaGFubmVsLmpzJ1xuaW1wb3J0IFByZXNlbnQgZnJvbSAnLi9jb21wb25lbnRzL3ByZXNlbnQuanMnXG5pbXBvcnQgUm9sbCBmcm9tICcuL3V0aWxzL3JvbGwuanMnXG5pbXBvcnQgVGFncyBmcm9tICcuL3V0aWxzL3RhZ3MuanMnXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi91dGlscy9zZXR0aW5ncy5qcydcblxuZnVuY3Rpb24gc3RhcnRQbHVnaW4oKSB7XG4gICAgd2luZG93LnBsdWdpbl9zaG90c19yZWFkeSA9IHRydWVcblxuICAgIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgTGFuZy5pbml0KClcblxuICAgICAgICBUZW1wbGF0ZXMuaW5pdCgpXG5cbiAgICAgICAgUGxheWVyLmluaXQoKVxuXG4gICAgICAgIEhhbmRsZXIuaW5pdCgpXG5cbiAgICAgICAgU2V0dGluZ3MuaW5pdCgpXG5cbiAgICAgICAgRmF2b3JpdGUuaW5pdCgpXG5cbiAgICAgICAgQ3JlYXRlZC5pbml0KClcblxuICAgICAgICBWaWV3LmluaXQoKVxuXG4gICAgICAgIFRhZ3MubG9hZCgpXG5cbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICBAQGluY2x1ZGUoJy4uL3BsdWdpbnMvc2hvdHMvY3NzL3N0eWxlLmNzcycpXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICBgKVxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQutC+0LzQv9C+0L3QtdC90YLRi1xuXG4gICAgICAgIExhbXBhLkNvbXBvbmVudC5hZGQoJ3Nob3RzX2xpc3QnLCBMaXN0KVxuICAgICAgICBMYW1wYS5Db21wb25lbnQuYWRkKCdzaG90c19jYXJkJywgQ2FyZClcbiAgICAgICAgTGFtcGEuQ29tcG9uZW50LmFkZCgnc2hvdHNfY2hhbm5lbCcsIENoYW5uZWwpXG5cbiAgICAgICAgLy8g0K3QutGA0LDQvSDQt9Cw0LrQu9Cw0LTQvtC6IC0g0YjQvtGC0YtcblxuICAgICAgICBMYW1wYS5Db250ZW50Um93cy5hZGQoe1xuICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICBzY3JlZW46IFsnYm9va21hcmtzJ10sXG4gICAgICAgICAgICBjYWxsOiAocGFyYW1zLCBzY3JlZW4pPT57XG4gICAgICAgICAgICAgICAgbGV0IGZhdm90aXRlID0gRmF2b3JpdGUuZ2V0KClcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlZCAgPSBDcmVhdGVkLmdldCgpXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVzICAgID0gW11cbiAgICAgICAgICAgICAgICBsZXQgb25tb3JlICAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVtaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9yZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYW1wYS5BY3Rpdml0eS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLmRhdGEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAnc2hvdHNfbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgTGFtcGEuVXRpbHMuZXh0ZW5kSXRlbXNQYXJhbXMoZmF2b3RpdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5zdGFuY2U6IChpdGVtX2RhdGEpPT4gU2hvdChpdGVtX2RhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0OiBmYXZvdGl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV4dDogKHBhZ2UsIGNhbGwpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmF2b3JpdGUucGFnZShwYWdlLCBjYWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBMYW1wYS5VdGlscy5leHRlbmRJdGVtc1BhcmFtcyhjcmVhdGVkLCB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUluc3RhbmNlOiAoaXRlbV9kYXRhKT0+IFNob3QoaXRlbV9kYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdDogY3JlYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV4dDogKHBhZ2UsIGNhbGwpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlZC5wYWdlKHBhZ2UsIGNhbGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGlmKGZhdm90aXRlLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c190aXRsZV9mYXZvcml0ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogZmF2b3RpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmF2b3JpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfcGFnZXM6IGZhdm90aXRlLmxlbmd0aCA+PSAyMCA/IDIgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBvbm1vcmVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjcmVhdGVkLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IExhbXBhLkxhbmcudHJhbnNsYXRlKCdzaG90c190aXRsZV9jcmVhdGVkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBjcmVhdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NyZWF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfcGFnZXM6IGNyZWF0ZWQubGVuZ3RoID49IDIwID8gMiA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IG9ubW9yZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGxpbmVzLmxlbmd0aCkgcmV0dXJuIGxpbmVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g0JPQu9Cw0LLQvdGL0Lkg0Y3QutGA0LDQvSAtINGI0L7RgtGLXG5cbiAgICAgICAgTGFtcGEuQ29udGVudFJvd3MuYWRkKHtcbiAgICAgICAgICAgIG5hbWU6ICdzaG90c19tYWluJyxcbiAgICAgICAgICAgIHRpdGxlOiAnU2hvdHMnLFxuICAgICAgICAgICAgaW5kZXg6IDIsXG4gICAgICAgICAgICBzY3JlZW46IFsnbWFpbiddLFxuICAgICAgICAgICAgY2FsbDogKHBhcmFtcywgc2NyZWVuKT0+e1xuICAgICAgICAgICAgICAgIGlmKExhbXBhLkFjY291bnQuUGVybWl0LmNoaWxkKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjYWxsKXtcbiAgICAgICAgICAgICAgICAgICAgQXBpLmxlbnRhKHtzb3J0OiAnbmV3J30sIChzaG90cyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbXBhLlV0aWxzLmV4dGVuZEl0ZW1zUGFyYW1zKHNob3RzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5zdGFuY2U6IChpdGVtX2RhdGEpPT4gU2hvdChpdGVtX2RhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWxpc3Q6IHNob3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5leHQ6IChwYWdlLCBjYWxsKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBpLmxlbnRhKHtzb3J0OiAnbmV3JywgcGFnZTogcGFnZX0sIGNhbGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTaG90cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogc2hvdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Zhdm9yaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9wYWdlczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX3N2ZzogJzxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1zaG90c1wiPjwvdXNlPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbl9iZ2NvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbl9jb2xvcjogJyNmZDQ1MTgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IExhbXBhLk1ha2VyLm1vZHVsZSgnTGluZScpLnRvZ2dsZShMYW1wYS5NYWtlci5tb2R1bGUoJ0xpbmUnKS5NQVNLLmJhc2UsICdJY29uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyDQmtC90L7Qv9C60LAg0LIg0LzQtdC90Y5cblxuICAgICAgICBsZXQgd2FpdGluZyA9IGZhbHNlXG5cbiAgICAgICAgTGFtcGEuTWVudS5hZGRCdXR0b24oJzxzdmc+PHVzZSB4bGluazpocmVmPVwiI3Nwcml0ZS1zaG90c1wiPjwvdXNlPjwvc3ZnPicsICdTaG90cycsICgpPT57XG4gICAgICAgICAgICBsZXQgcHJlc2VudCA9IG5ldyBQcmVzZW50KClcblxuICAgICAgICAgICAgcHJlc2VudC5vbkNvbXBsZXRlID0gKCk9PntcbiAgICAgICAgICAgICAgICBwcmVzZW50Lm9uQmFjayA9ICgpPT57fVxuXG4gICAgICAgICAgICAgICAgaWYod2FpdGluZykgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICB3YWl0aW5nID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgbGV0IGNhbGwgPSAoc2hvdHMpPT57XG4gICAgICAgICAgICAgICAgICAgIExhbXBhLkxvYWRpbmcuc3RvcCgpXG5cbiAgICAgICAgICAgICAgICAgICAgcHJlc2VudC5kZXN0cm95KClcblxuICAgICAgICAgICAgICAgICAgICB3YWl0aW5nID0gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICBpZihzaG90cy5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTGFtcGEuQmVsbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjc3ByaXRlLXNob3RzXCI+PC91c2U+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnc2hvdHNfYWxlcnRfbm9zaG90cycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlbnRhID0gbmV3IExlbnRhKHNob3RzWzBdLCBzaG90cylcblxuICAgICAgICAgICAgICAgICAgICBsZW50YS5vbk5leHQgPSAocGFnZSwgY2FsbCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGwubmV4dChjYWxsKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGVudGEuc3RhcnQoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIExhbXBhLkxvYWRpbmcuc3RhcnQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2FpdGluZyA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgcHJlc2VudC5kZXN0cm95KClcblxuICAgICAgICAgICAgICAgICAgICBjYWxsID0gKCk9Pnt9XG5cbiAgICAgICAgICAgICAgICAgICAgTGFtcGEuTG9hZGluZy5zdG9wKClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgUm9sbC5zdGFydChjYWxsKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmVzZW50Lm9uQmFjayA9ICgpPT57XG4gICAgICAgICAgICAgICAgcHJlc2VudC5kZXN0cm95KClcblxuICAgICAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdjb250ZW50JylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJlc2VudC5zdGFydCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYoTGFtcGEuTWFuaWZlc3QuYXBwX2RpZ2l0YWwgPj0gMzA3KXtcbiAgICAgICAgaWYod2luZG93LmFwcHJlYWR5KSBpbml0KClcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIExhbXBhLkxpc3RlbmVyLmZvbGxvdygnYXBwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09ICdyZWFkeScpIGluaXQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaWYoIXdpbmRvdy5wbHVnaW5fc2hvdHNfcmVhZHkpIHN0YXJ0UGx1Z2luKCkiXSwibmFtZXMiOlsiaW5pdCIsIkxhbXBhIiwiTGFuZyIsImFkZCIsImVtcHR5IiwicnUiLCJlbiIsInVrIiwiYmUiLCJ6aCIsInB0IiwiYmciLCJybyIsInNob3RzX21vZGFsX2JlZm9yZV9yZWNvcmRpbmdfdHh0XzEiLCJzaG90c19tb2RhbF9iZWZvcmVfcmVjb3JkaW5nX3R4dF8yIiwic2hvdHNfc3RlcCIsInNob3RzX3N0YXJ0X3JlY29yZGluZyIsInNob3RzX2Nob2ljZV9zdGFydF9wb2ludCIsInNob3RzX21vZGFsX2J1dHRvbl91cGxvYWRfc3RhcnQiLCJzaG90c19tb2RhbF9idXR0b25fdXBsb2FkX2NhbmNlbCIsInNob3RzX21vZGFsX2J1dHRvbl91cGxvYWRfYWdhaW4iLCJzaG90c19tb2RhbF9idXR0b25fdXBsb2FkX2NvbXBsZXRlIiwic2hvdHNfbW9kYWxfc2hvcnRfcmVjb3JkaW5nX3R4dCIsInNob3RzX3VwbG9hZF9wcm9ncmVzc19zdGFydCIsInNob3RzX3VwbG9hZF9wcm9ncmVzc191cGxvYWRpbmciLCJzaG90c191cGxvYWRfcHJvZ3Jlc3Nfbm90aWZ5Iiwic2hvdHNfdXBsb2FkX2NvbXBsZXRlX3RleHQiLCJzaG90c191cGxvYWRfY29tcGxldGVfbm90aWZ5Iiwic2hvdHNfdXBsb2FkX2Vycm9yX25vdGlmeSIsInNob3RzX3VwbG9hZF9ub3RpY2VfdGV4dCIsInNob3RzX3RpdGxlX2Zhdm9yaXRlIiwic2hvdHNfdGl0bGVfY3JlYXRlZCIsInNob3RzX3RpdGxlX2xpa2VzIiwic2hvdHNfdGl0bGVfc2F2ZWQiLCJzaG90c19zdGF0dXNfZXJyb3IiLCJzaG90c19zdGF0dXNfcHJvY2Vzc2luZyIsInNob3RzX3N0YXR1c19yZWFkeSIsInNob3RzX3N0YXR1c19ibG9ja2VkIiwic2hvdHNfc3RhdHVzX2RlbGV0ZWQiLCJzaG90c19tb2RhbF9lcnJvcl9yZWNvcmRpbmdfdHh0XzEiLCJzaG90c19tb2RhbF9lcnJvcl9yZWNvcmRpbmdfdHh0XzIiLCJzaG90c19idXR0b25fZ29vZCIsInNob3RzX2J1dHRvbl9yZXBvcnQiLCJzaG90c19idXR0b25fZGVsZXRlX3ZpZGVvIiwic2hvdHNfbW9kYWxfcmVwb3J0X3R4dF8xIiwic2hvdHNfbW9kYWxfcmVwb3J0X3R4dF8yIiwic2hvdHNfbW9kYWxfcmVwb3J0X3R4dF8zIiwic2hvdHNfbW9kYWxfcmVwb3J0X2JlbGwiLCJzaG90c19tb2RhbF9yZXBvcnRfYmVsbF9hbHJlYWR5ZWQiLCJzaG90c19tb2RhbF9kZWxldGVkX2JlbGwiLCJzaG90c19tb2RhbF9kZWxldGVfdHh0XzEiLCJzaG90c19tb2RhbF9kZWxldGVfdHh0XzIiLCJzaG90c19tb2RhbF9xdW90YV90eHRfMSIsInNob3RzX21vZGFsX3F1b3RhX3R4dF8yIiwic2hvdHNfbW9kYWxfYmVmb3JlX3VwbG9hZF9yZWNvcmRpbmdfdHh0XzEiLCJzaG90c19tb2RhbF9iZWZvcmVfdXBsb2FkX3JlY29yZGluZ190eHRfMiIsInNob3RzX2J1dHRvbl9jaG9pY2VfZnJhZ21lbnQiLCJzaG90c19idXR0b25fY29udGludWVfdXBsb2FkIiwic2hvdHNfcmVjb3JkaW5nX3RleHQiLCJzaG90c193YXRjaCIsInNob3RzX2Rvd24iLCJzaG90c19ob3dfY3JlYXRlX3ZpZGVvX3RpdGxlIiwic2hvdHNfaG93X2NyZWF0ZV92aWRlb19zdWJ0aXRsZSIsInNob3RzX2NhcmRfZW1wdHlfZGVzY3IiLCJzaG90c19hbGVydF9ub3Nob3RzIiwic2hvdHNfY2hvaWNlX3RhZ3MiLCJzaG90c190YWdfYWN0aW9uIiwic2hvdHNfdGFnX2NvbWVkeSIsInNob3RzX3RhZ19kcmFtYSIsInNob3RzX3RhZ19ob3Jyb3IiLCJzaG90c190YWdfdGhyaWxsZXIiLCJzaG90c190YWdfYW5pbWUiLCJzaG90c190YWdfZmFudGFzeSIsInNob3RzX3RhZ19zY2lfZmkiLCJzaG90c19zZXR0aW5nc19pbl9wbGF5ZXIiLCJzaG90c19zZXR0aW5nc19pbl9jYXJkIiwiVGVtcGxhdGUiLCJzcHJpdGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidmlkZW9TY3JlZW5TaG90IiwidmlkZW8iLCJzY3JlZW5fd2lkdGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJzY2FsZSIsInZpZGVvV2lkdGgiLCJ3aWR0aCIsIk1hdGgiLCJyb3VuZCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwiZHJhd0ltYWdlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0b0RhdGFVUkwiLCJ2aWRlb1JlcGxhY2VTdGF0dXMiLCJmcm9tIiwidG8iLCJzdGF0dXMiLCJzY3JlZW4iLCJmaWxlIiwiZ2V0QmFsYW5zZXIiLCJjYXJkIiwiaGlzdG9yeV9kYXRhIiwiU3RvcmFnZSIsImdldCIsImhpc3Rvcnlfa2V5IiwiVXRpbHMiLCJoYXNoIiwibmFtZSIsIm9yaWdpbmFsX25hbWUiLCJvcmlnaW5hbF90aXRsZSIsImhpc3RvcnlfaXRlbSIsImJhbGFuc2VyIiwic2hvcnRWb2ljZSIsInZvaWNlIiwicmVwbGFjZSIsInRyaW0iLCJpc1RTUXVhbGl0eSIsInN0ciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm1vZGFsIiwiaHRtbCIsImJ1dHRvbnMiLCJiYWNrIiwiYm9keSIsIiQiLCJmb290ZXIiLCJhcHBlbmQiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYnRuIiwidGV4dCIsIm9uIiwib25TZWxlY3QiLCJjYW5jZWwiLCJhZGRDbGFzcyIsIk1vZGFsIiwib3BlbiIsInNpemUiLCJzY3JvbGwiLCJub3BhZGRpbmciLCJvbkJhY2siLCJxdW90YV9uZXh0X3JlY29yZCIsInZpZGVvX3NpemUiLCJzY3JlZW5fc2l6ZSIsInJlY29yZGVyX21heF9kdXJhdGlvbiIsImNkbiIsImNvdW50ZXIiLCJtZXRob2QiLCJ2MSIsInYyIiwidjMiLCJhamF4IiwiZGF0YVR5cGUiLCJ1cmwiLCJwcm90b2NvbCIsIk1hbmlmZXN0IiwiY3ViX2RvbWFpbiIsIlJlY29yZGVyIiwic3RhcnRfcG9pbnQiLCJjdXJyZW50VGltZSIsInN0YXJ0IiwiTWV0cmljIiwic2NyZWVuc2hvdCIsIkRlZmluZWQiLCJydW4iLCJmaW5kIiwic3RvcCIsImJpbmQiLCJDb250cm9sbGVyIiwidG9nZ2xlIiwiY2xlYXIiLCJlbnRlciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0aWsiLCJvblJ1biIsInNlY29uZHMiLCJwcm9ncmVzcyIsInNlY29uZHNUb1RpbWUiLCJzcGxpdCIsInNlY29uZHNUb1RpbWVIdW1hbiIsImRlc3Ryb3kiLCJvbkVycm9yIiwiZWxhcHNlZCIsIkVycm9yIiwib25TdG9wIiwiZHVyYXRpb24iLCJlbmRfcG9pbnQiLCJjbGVhckludGVydmFsIiwicmVtb3ZlIiwiVGFncyIsInRhZ3NfZGF0YSIsImNyZWF0ZSIsInVwZGF0ZSIsImRhdGEiLCJ0YWdzIiwic2Vhc29uIiwicHVzaCIsImVwaXNvZGUiLCJ2b2ljZV9uYW1lIiwiY2FyZF90aXRsZSIsIm1hcCIsInRhZyIsImpvaW4iLCJyZW5kZXIiLCJQcmV2aWV3IiwicmVjb3JkaW5nIiwiY3NzIiwib3BhY2l0eSIsImVxIiwic3JjIiwicmVsZWFzZV9kYXRlIiwicGxheV9kYXRhIiwiZmlyc3RfYWlyX2RhdGUiLCJ5ZWFyIiwic2xpY2UiLCJ0aXRsZSIsIkNoZWNrYm94IiwicGFyYW1zIiwic3RhdGUiLCJfdGhpcyIsInNldFRleHQiLCJzZXRTdGF0ZSIsInRvZ2dsZUNsYXNzIiwidSIsInRpbWVvdXQiLCJBY2NvdW50IiwiUGVybWl0IiwiYWNjb3VudCIsInRva2VuIiwiaGVhZGVycyIsInByb2ZpbGUiLCJpZCIsInVwbG9hZFJlcXVlc3QiLCJvbnN1Y2Nlc3MiLCJvbmVycm9yIiwiTmV0d29yayIsInNpbGVudCIsInVwbG9hZFN0YXR1cyIsInNob3RzVmlkZW8iLCJzaG90c0xpc3QiLCJ0eXBlIiwicGFnZSIsInNob3RzQ2FyZCIsInNob3RzQ2hhbm5lbCIsInNob3RzTGlrZWQiLCJ1aWQiLCJzaG90c0Jsb2NrIiwic2hvdHNSZXBvcnQiLCJzaG90c0RlbGV0ZSIsInNob3RzRmF2b3JpdGUiLCJhY3Rpb24iLCJzaG90Iiwic2lkIiwiY2FyZF9wb3N0ZXIiLCJsZW50YSIsInF1ZXJ5IiwiQXJyYXlzIiwiZXh0ZW5kIiwic29ydCIsImxpbWl0IiwicGF0aCIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsInJlc3VsdHMiLCJzaG90c1ZpZXdlZCIsIlByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJwZXJjZW50IiwicmVtb3ZlQ2xhc3MiLCJzaG90cyIsIlRpbWVyIiwiaSIsImNoZWNrIiwiQXBpIiwianNvbiIsIkJlbGwiLCJpY29uIiwidHJhbnNsYXRlIiwiTGlzdGVuZXIiLCJzZW5kIiwiX29iamVjdFNwcmVhZCIsImNyZWF0ZWQiLCJmb2xsb3ciLCJ1cGRhdGVTdGF0dXMiLCJ1cGRhdGVEYXRhIiwidGFyZ2V0IiwicmVhc29uIiwiU29ja2V0IiwibGlzdGVuZXIiLCJsaXN0IiwiYSIsInNldCIsImxpa2VkIiwic2F2ZWQiLCJjbG9uZSIsIk9iamVjdCIsImFzc2lnbiIsImluc2VydCIsImZpbmRfaW4iLCJjYWxsYmFjayIsIkJvb2xlYW4iLCJTZWxlY3RvciIsInNlbGVjdGVkIiwidCIsInNsdWciLCJsb2FkIiwiVXBsb2FkIiwicHJldmlldyIsImNoZWNrYm94Iiwic2VsZWN0b3JfdGl0bGUiLCJzZWxlY3RvciIsImJ1dHRvbl91cGxvYWQiLCJidXR0b25fY2FuY2VsIiwiYnV0dG9uX2FnYWluIiwiYnV0dG9uX2NvbXBsZXRlIiwidGV4dF9jb21wbGV0ZSIsInRleHRfbm90aWNlIiwic3RhcnRVcGxvYWQiLCJvbkNvbXBsZXRlIiwic2hvdF9yZWFkeSIsImNhbmNlbFVwbG9hZCIsInNldEZvY3VzIiwiY29sbGVjdGlvblNldCIsImNvbGxlY3Rpb25Gb2N1cyIsInBsYXkiLCJjYXJkX2lkIiwiY2FyZF90eXBlIiwiY2FyZF95ZWFyIiwicG9zdGVyX3BhdGgiLCJyZWNvcmRlciIsImVuZFVwbG9hZCIsImVycm9yVXBsb2FkIiwidXBsb2FkIiwiRGF0ZSIsIm5vdyIsIkNyZWF0ZWQiLCJIYW5kbGVyIiwidXBsb2FkaW5nIiwiYWJvcnQiLCJvbkNhbmNlbCIsImNsb3NlIiwicnVuVXBsb2FkIiwibm90aWZ5VXBsb2FkIiwibG9hZGVkX3Nob3RzIiwiZmllbGQiLCJtb3YiLCJtb3ZpZSIsIkFjdGl2aXR5IiwiY29tcG9uZW50IiwibG9nIiwiYXR0ciIsIm9iamVjdCIsImFjdGl2aXR5IiwibGFzdCIsImFmdGVyIiwiY2FsbCIsImJ1dHRvbl9yZWNvcmQiLCJwbGF5ZXJfc2hvdHMiLCJQbGF5ZXIiLCJzdGFydFBsYXllciIsInN0b3BQbGF5ZXIiLCJiZWZvcmVSZWNvcmRpbmciLCJQbGF5ZXJQYW5lbCIsIlBsYXRmb3JtIiwibW91c2UiLCJpc1RvdWNoRGV2aWNlIiwicGxheWVyUGFuZWwiLCJfcGxheV9kYXRhJGNhcmQiLCJhY3RpdmUiLCJwb3NzaWJseSIsImlwdHYiLCJ5b3V0dWJlIiwic2V0VGltZW91dCIsInBsYXllcl90aXRsZSIsInBsYXlkYXRhIiwidG9ycmVudF9oYXNoIiwic291cmNlIiwicGxheWVyU2hvdHNTZWdtZW50cyIsIm5lZWRfdG9jb250ZW50IiwiUGxheWVyVmlkZW8iLCJhZGRFdmVudExpc3RlbmVyIiwiVmlldyIsIm9wZW5lZCIsImZpbHRlciIsImVsZW0iLCJzZWdtZW50IiwicGljdHVyZSIsImltZyIsImxlZnQiLCJiZWZvcmUiLCJwbGF5UGxheWVyIiwidmlzaWJsZSIsImhpZGUiLCJwYXVzZVBsYXllciIsInBhdXNlIiwiY2xvc2VNb2RhbCIsInRpbWUiLCJzdGFydFJlY29yZGluZyIsInN0b3BSZWNvcmRpbmciLCJlcnJvclJlY29yZGluZyIsIm5lYXJfYm9yZGVyIiwic3RhcnRVcGxvYWRSZWNvcmRpbmciLCJzaG9ydFJlY29yZGluZyIsImZhdm9yaXRlIiwiY3JlYXRlTWFwIiwiYXJyIiwic2hvdF9pZCIsImZpbmRlZCIsImxvYWRlZF9sYXN0IiwiU3RhdHVzIiwib25Db21wbGl0ZSIsInBvcHVsYXIiLCJmaWx0ZXJWaWV3ZWQiLCJvbGQiLCJiIiwiaXRlbXMiLCJjb25jYXQiLCJzaHVmZmxlIiwiZnJvbV9pZCIsImZpbHRlclJlbGV2YW50Iiwidmlld2VkIiwiY2FjaGUiLCJmaWx0cmVkIiwibmV4dCIsInZpZXdlZFJlZ2lzdGVyIiwic2F2ZUZyb21JZCIsIlZpZGVvIiwianMiLCJsYXllciIsImxvYWRlciIsInN0eWxlIiwiUm9sbCIsIlNjcmVlbnNhdmVyIiwicmVzZXRUaW1lciIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJwYXVzZWQiLCJpcyIsInNldEF0dHJpYnV0ZSIsImNoYW5nZSIsInBsYXlQcm9taXNlIiwidGhlbiIsInBhdXNlUHJvbWlzZSIsIl90aGlzMiIsInRpbWVyX2xvYWRpbmciLCJjbGVhclRpbWVvdXQiLCJBdXRob3IiLCJhdXRob3JfZGF0YSIsImJveCIsIm9ubG9hZCIsImVtYWlsIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwicmVwb3J0cyIsImRlbGV0ZWQiLCJiYWNrd2FyZCIsImhlYWQiLCJTbGlkZXMiLCJidXR0b25fdGV4dCIsInNsaWRlcyIsInNsaWRlX2RhdGEiLCJzbGlkZV9pbmRleCIsInNsaWRlIiwidG90YWwiLCJ0aW1lbG9hZCIsImRvd24iLCJpbnN0YWxsIiwib25JbnN0YWxsIiwiTG9hZGluZyIsIkJhY2tncm91bmQiLCJ0aGVtZSIsInByZWxvYWQiLCJzbGlkZXNfbG9hZGVkIiwib25Mb2FkIiwiUGFuZWwiLCJuZXR3b3JrIiwiUmVndWVzdCIsImltYWdlIiwiY2FyZGJveCIsInBvc3RlciIsImF1dGhvciIsIndhaXRlX2xpa2UiLCJ3YWl0ZV9mYXYiLCJBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJMaWtlcyIsInJlYWR5IiwiRmF2b3JpdGUiLCJjaWQiLCJtZW51IiwiY29udHJvbGxlciIsImVuYWJsZWQiLCJsaW5rIiwiTW9kYWxzIiwic2VwYXJhdG9yIiwic3VidGl0bGUiLCJTZWxlY3QiLCJzaG93IiwiZWxlbV90YWdzIiwiZWxlbV9saWtlcyIsImJpZ051bWJlclRvU2hvcnQiLCJlbGVtX3NhdmVkIiwibG9hZERvbmUiLCJUTURCIiwiYXBpIiwiYmFja2Ryb3BfcGF0aCIsInNob3dfdGltZW91dCIsIkxlbnRhIiwiZmlyc3QiLCJwbGF5bGlzdCIsImN1cnJlbnQiLCJwb3NpdGlvbiIsInBhbmVsIiwiZm9jdXMiLCJfc2VsZiIsIm1vdmVzdGFydCIsInN0YXJ0X3Bvc2l0aW9uIiwiY2xpZW50WSIsImVuZF9wb3NpdGlvbiIsIm1vdmVfcG9zaXRpb24iLCJ0aW1lX3Njcm9sbCIsIm1vdmUiLCJkZWx0YSIsImVsZW1tb3ZlIiwidHJhbnNmb3JtIiwibW92ZWVuZCIsInRocmVzaG9sZCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY3Nyb2xsX3NwZWVkIiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwid2hlZWwiLCJ3aGVlbERlbHRhIiwiZm9jdXNfdGltZW91dCIsInJpZ2h0IiwidXAiLCJOYXZpZ2F0b3IiLCJjYW5tb3ZlIiwiZGlyZWN0aW9uIiwibmV4dFBhcnQiLCJfdGhpczMiLCJvbk5leHQiLCJsb2FkaW5nX3BhcnQiLCJwIiwiU2hvdCIsIml0ZW1fZGF0YSIsIml0ZW0iLCJNYWtlciIsIm1ha2UiLCJtb2R1bGUiLCJvbmx5IiwidXNlIiwib25DcmVhdGUiLCJ3aXRob3V0X2NhcmQiLCJ1cGRhdGVTdGF0dXNIYW5kbGVyIiwiZW1pdCIsInVwZGF0ZURhdGFIYW5kbGVyIiwib25seUVudGVyIiwib25seUZvY3VzIiwib25SZW1vdmUiLCJleHRlbmRQYXJhbXMiLCJjb2xzIiwiY29tcCIsIk1BU0siLCJiYXNlIiwiYnVpbGQiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25seUNyZWF0ZUFuZEFwcGVuZCIsImVsZW1lbnQiLCJ3YXJuIiwic3RhY2siLCJvbkRlc3Ryb3kiLCJkZXNjciIsIm9uRW50ZXIiLCJQcmVzZW50IiwibGFzdF90aW1lX3dhdGNoZWQiLCJ3YWl0X3RpbWUiLCJ0aW1lcl93YWl0ZSIsIlNldHRpbmdzQXBpIiwiYWRkQ29tcG9uZW50IiwiYWRkUGFyYW0iLCJwYXJhbSIsInN0YXJ0UGx1Z2luIiwicGx1Z2luX3Nob3RzX3JlYWR5IiwiVGVtcGxhdGVzIiwiU2V0dGluZ3MiLCJDb21wb25lbnQiLCJMaXN0IiwiQ2FyZCIsIkNoYW5uZWwiLCJDb250ZW50Um93cyIsImluZGV4IiwiZmF2b3RpdGUiLCJsaW5lcyIsIm9ubW9yZSIsIm9uTW9yZSIsImV4dGVuZEl0ZW1zUGFyYW1zIiwiY3JlYXRlSW5zdGFuY2UiLCJ0b3RhbF9wYWdlcyIsImNoaWxkIiwiaWNvbl9zdmciLCJpY29uX2JnY29sb3IiLCJpY29uX2NvbG9yIiwid2FpdGluZyIsIk1lbnUiLCJhZGRCdXR0b24iLCJwcmVzZW50IiwiYXBwX2RpZ2l0YWwiLCJhcHByZWFkeSJdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsU0FBU0EsTUFBSUEsR0FBRTtNQUNYQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDO1FBQ1hDLEtBQUssRUFBRTtVQUNIQyxFQUFFLEVBQUUsRUFBRTtVQUNOQyxFQUFFLEVBQUUsRUFBRTtVQUNOQyxFQUFFLEVBQUUsRUFBRTtVQUNOQyxFQUFFLEVBQUUsRUFBRTtVQUNOQyxFQUFFLEVBQUUsRUFBRTtVQUNOQyxFQUFFLEVBQUUsRUFBRTtVQUNOQyxFQUFFLEVBQUUsRUFBRTtVQUNOQyxFQUFFLEVBQUU7O09BRVgsQ0FBQztNQUVGWCxLQUFLLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDO1FBQ1hVLGtDQUFrQyxFQUFFO1VBQ2hDUixFQUFFLEVBQUUsMkRBQTJEO1VBQy9EQyxFQUFFLEVBQUUsd0RBQXdEO1VBQzVE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