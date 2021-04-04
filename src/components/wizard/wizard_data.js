const arr = [
    {
        id:0,
        title:'Cистема контроля версий',
        label:'Что это? Зачем это?',
        icon:'fab fa-github',
        active:true,
        content:'<div class="content-main-title">О системе контроля версий</div>\n' +
            '                Git — это набор консольных утилит, которые отслеживают и фиксируют изменения в\n' +
            '                файлах (чаще всего речь идет об исходном коде программ, но вы можете использовать\n' +
            '                его для любых файлов на ваш вкус). С его помощью вы можете откатиться на более\n' +
            '                старую версию вашего проекта, сравнивать, анализировать, сливать изменения и многое\n' +
            '                другое. Этот процесс называется контролем версий. Существуют различные системы для\n' +
            '                контроля версий. Вы, возможно, о них слышали: SVN, Mercurial, Perforce, CVS,\n' +
            '                Bitkeeper и другие.\n' +
            '                <br/><br/>\n' +
            '                Git является распределенным, то есть не зависит от одного центрального сервера, на\n' +
            '                котором хранятся файлы. Вместо этого он работает полностью локально, сохраняя данные\n' +
            '                в папках на жестком диске, которые называются репозиторием. Тем не менее, вы можете\n' +
            '                хранить копию репозитория онлайн, это сильно облегчает работу над одним проектом для\n' +
            '                нескольких людей. Для этого используются сайты вроде github и bitbucket.',
    },
    {
        id:1,
        title:'Основы Git',
        label:'checkout, add, commit, pull, push',
        icon:'fab fa-git',
        active: false,
        content:'<div class="content-main-title">Основы</div>\n' +
            '                <div class="content-second-title">Создание нового репозитория</div>\n' +
            '                Как мы отметили ранее, git хранит свои файлы и историю прямо в папке проекта. Чтобы\n' +
            '                создать новый репозиторий, нам нужно открыть терминал, зайти в папку нашего проекта\n' +
            '                и выполнить команду init. Это включит приложение в этой конкретной папке и создаст\n' +
            '                скрытую директорию .git, где будет храниться история репозитория и настройки.\n' +
            '                <br/><br/>\n' +
            '                Создайте на рабочем столе папку под названием git_exercise. Для этого в окне\n' +
            '                терминала введите:\n' +
            '                <div class="bg-light p-3 code-block code-block">\n' +
            '                    <code>\n' +
            '                        $ mkdir Desktop/git_exercise/<br/>\n' +
            '                        $ cd Desktop/git_exercise/ <br/>\n' +
            '                        $ git init <br/>\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Командная строка должна вернуть что-то вроде:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        Initialized empty Git repository in /home/user/Desktop/git_exercise/.git/\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Это значит, что наш репозиторий был успешно создан, но пока что пуст. Теперь\n' +
            '                создайте текстовый файл под названием hello.txt и сохраните его в директории\n' +
            '                git_exercise.\n' +
            '                <div class="content-second-title">Определение состояния</div>\n' +
            '                <b>status</b> — это еще одна важнейшая команда, которая показывает информацию о\n' +
            '                текущем\n' +
            '                состоянии репозитория: актуальна ли информация на нём, нет ли чего-то нового, что\n' +
            '                поменялось, и так далее. Запуск git status на нашем свежесозданном репозитории\n' +
            '                должен выдать:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git status<br/>\n' +
            '                        On branch master<br/>\n' +
            '                        Initial commit<br/>\n' +
            '                        Untracked files:<br/>\n' +
            '                        (use "git add ..." to include in what will be committed)<br/>\n' +
            '                        hello.txt<br/>\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Сообщение говорит о том, что файл hello.txt неотслеживаемый. Это значит, что файл\n' +
            '                новый и система еще не знает, нужно ли следить за изменениями в файле или его можно\n' +
            '                просто игнорировать. Для того, чтобы начать отслеживать новый файл, нужно его\n' +
            '                специальным образом объявить.\n' +
            '                <div class="content-second-title">Подготовка файлов</div>\n' +
            '                В git есть концепция области подготовленных файлов. Можно представить ее как холст,\n' +
            '                на который наносят изменения, которые нужны в коммите. Сперва он пустой, но затем мы\n' +
            '                добавляем на него файлы (или части файлов, или даже одиночные строчки) командой <b>add</b>\n' +
            '                и, наконец, коммитим все нужное в репозиторий (создаем слепок нужного нам состояния)\n' +
            '                командой <b>commit</b>.\n' +
            '                В нашем случае у нас только один файл, так что добавим его:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        git add hello.txt\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Если нам нужно добавить все, что находится в директории, мы можем использовать\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        git add -A\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Проверим статус снова, на этот раз мы должны получить другой ответ:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git status<br/>\n' +
            '                        On branch master<br/>\n' +
            '                        Initial commit<br/>\n' +
            '                        Changes to be committed:<br/>\n' +
            '                        (use "git rm --cached ..." to unstage)<br/>\n' +
            '                        new file: hello.txt<br/>\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Файл готов к коммиту. Сообщение о состоянии также говорит нам о том, какие изменения\n' +
            '                относительно файла были проведены в области подготовки — в данном случае это новый\n' +
            '                файл, но файлы могут быть модифицированы или удалены\n' +
            '\n' +
            '                <div class="content-second-title">Коммит(фиксация изменений)</div>\n' +
            '                Коммит представляет собой состояние репозитория в определенный момент времени. Это\n' +
            '                похоже на снапшот, к которому мы можем вернуться и увидеть состояние объектов на\n' +
            '                определенный момент времени.\n' +
            '                Чтобы зафиксировать изменения, нам нужно хотя бы одно изменение в области подготовки\n' +
            '                (мы только что создали его при помощи git add), после которого мы может коммитить:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git commit -m "Initial commit."\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Эта команда создаст новый коммит со всеми изменениями из области подготовки\n' +
            '                (добавление файла hello.txt). Ключ -m и сообщение «Initial commit.» — это созданное\n' +
            '                пользователем описание всех изменений, включенных в коммит. Считается хорошей\n' +
            '                практикой делать коммиты часто и всегда писать содержательные комментарии.\n' +
            '                <div class="content-second-title">Отправка изменений на сервер</div>\n' +
            '                Сейчас самое время переслать наш локальный коммит на сервер. Этот процесс происходит\n' +
            '                каждый раз, когда мы хотим обновить данные в удаленном репозитории.\n' +
            '                Команда, предназначенная для этого - push. Она принимает два параметра: имя\n' +
            '                удаленного репозитория (мы назвали наш origin) и ветку, в которую необходимо внести\n' +
            '                изменения (master — это ветка по умолчанию для всех репозиториев).\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git push origin master<br/>\n' +
            '                        Counting objects: 3, done.<br/>\n' +
            '                        Writing objects: 100% (3/3), 212 bytes | 0 bytes/s, done.<br/>\n' +
            '                        Total 3 (delta 0), reused 0 (delta 0)<br/>\n' +
            '                        To https://github.com/tutorialzine/awesome-project.git<br/>\n' +
            '                        * [new branch] master -> master<br/>\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                В зависимости от сервиса, который вы используете, вам может потребоваться\n' +
            '                аутентифицироваться, чтобы изменения отправились. Если все сделано правильно, то\n' +
            '                когда вы посмотрите в удаленный репозиторий при помощи браузера, вы увидите файл\n' +
            '                hello.txt\n' +
            '                <div class="content-second-title">Клонирование репозитория</div>\n' +
            '                Сейчас другие пользователи GitHub могут просматривать ваш репозиторий. Они могут\n' +
            '                скачать из него данные и получить полностью работоспособную копию вашего проекта при\n' +
            '                помощи команды clone.\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git clone https://github.com/tutorialzine/awesome-project.git <br/>\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Новый локальный репозиторий создается автоматически с GitHub в качестве удаленного\n' +
            '                репозитория.\n' +
            '                <div class="content-second-title">Запрос изменений с сервера</div>\n' +
            '                Если вы сделали изменения в вашем удаленном репозитории, другие пользователи могут\n' +
            '                скачать изменения при помощи команды pull.\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git pull origin master <br/>\n' +
            '                        From https://github.com/tutorialzine/awesome-project <br/>\n' +
            '                        * branch master -> FETCH_HEAD <br/>\n' +
            '                        Already up-to-date. <br/>\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Так как новых коммитов с тех пор, как мы склонировали себе проект, не было, никаких\n' +
            '                изменений доступных для скачивания нет. <br/><br/>\n' +
            '                <div class="content-main-title">Ветвление</div>\n' +
            '                Во время разработки новой функциональности считается хорошей практикой работать с\n' +
            '                копией оригинального проекта, которую называют веткой. Ветви имеют свою собственную\n' +
            '                историю и изолированные друг от друга изменения до тех пор, пока вы не решаете слить\n' +
            '                изменения вместе. Это происходит по набору причин:\n' +
            '\n' +
            '                Уже рабочая, стабильная версия кода сохраняется.\n' +
            '                Различные новые функции могут разрабатываться параллельно разными программистами.\n' +
            '                Разработчики могут работать с собственными ветками без риска, что кодовая база\n' +
            '                поменяется из-за чужих изменений.\n' +
            '                В случае сомнений, различные реализации одной и той же идеи могут быть разработаны в\n' +
            '                разных ветках и затем сравниваться.\n' +
            '                <div class="content-second-title">Создание новой ветки</div>\n' +
            '                Основная ветка в каждом репозитории называется master. Чтобы создать еще одну ветку,\n' +
            '                используем команду branch <i>name</i>\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git branch amazing_new_feature\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Это создаст новую ветку, пока что точную копию ветки master.\n' +
            '                <div class="content-second-title">Переключение между ветками</div>\n' +
            '                Сейчас, если мы запустим branch, мы увидим две доступные опции:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git branch <br/>\n' +
            '                        amazing_new_feature <br/>\n' +
            '                        * master <br/>\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                <b>master</b> — это активная ветка, она помечена звездочкой. Но мы хотим работать с\n' +
            '                нашей “новой потрясающей фичей”, так что нам понадобится переключиться на другую\n' +
            '                ветку. Для этого воспользуемся командой checkout, она принимает один параметр — имя\n' +
            '                ветки, на которую необходимо переключиться.\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git checkout amazing_new_feature\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                <div class="content-second-title">Слияние веток</div>\n' +
            '                Наша “потрясающая новая фича” будет еще одним текстовым файлом под названием\n' +
            '                feature.txt. Мы создадим его, добавим и закоммитим:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git add feature.txt <br/>\n' +
            '                        $ git commit -m "New feature complete.” <br/>\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Изменения завершены, теперь мы можем переключиться обратно на ветку master.\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git checkout master\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Теперь, если мы откроем наш проект в файловом менеджере, мы не увидим файла\n' +
            '                feature.txt, потому что мы переключились обратно на ветку master, в которой такого\n' +
            '                файла не существует. Чтобы он появился, нужно воспользоваться merge для объединения\n' +
            '                веток (применения изменений из ветки amazing_new_feature к основной версии проекта).\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git merge amazing_new_feature\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Теперь ветка master актуальна. Ветка amazing_new_feature больше не нужна, и ее можно\n' +
            '                удалить.\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        $ git branch -d awesome_new_feature\n' +
            '                    </code>\n' +
            '                </div>'
    },
    {
        id:2,
        title:'Nodejs',
        label:'Что это? Зачем это?',
        icon:'fab fa-node-js',
        active: false,
        content:'<div class="content-main-title">Что такое Node.js?</div>\n' +
            '                Node.js (или просто Node) — это серверная платформа для работы с JavaScript через\n' +
            '                движок V8. JavaScript выполняет действие на стороне клиента, а Node — на сервере. С\n' +
            '                помощью Node можно писать полноценные приложения. Node умеет работать с внешними\n' +
            '                библиотеками, вызывать команды из кода на JavaScript и выполнять роль веб-сервера.\n' +
            '                <br/><br/>\n' +
            '                <div class="content-main-title">В чём преимущество Node?</div>\n' +
            '                C Node проще масштабироваться. При одновременном подключении к серверу тысяч\n' +
            '                пользователей Node работает асинхронно, то есть ставит приоритеты и распределяет\n' +
            '                ресурсы грамотнее. Java же, например, выделяет на каждое подключение отдельный\n' +
            '                поток.\n' +
            '                <div class="content-second-title">Установка Node.js с помощью Apt из репозиториев по\n' +
            '                    умолчанию\n' +
            '                </div>\n' +
            '                В репозиториях Ubuntu 20.04 по умолчанию содержится версия Node.js, обеспечивающая\n' +
            '                согласованную работу в разных системах. На момент составления этого обучающего\n' +
            '                модуля в репозиториях хранится версия 10.19. Это не самая последняя версия, но она\n' +
            '                должна быть стабильной и подходить для небольших экспериментов с языком. <br/><br/>\n' +
            '                Для получения этой версии можно использовать диспетчер пакетов apt. Обновите\n' +
            '                указатель локальных пакетов с помощью следующей команды:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        sudo apt update\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Выполните установку Node.js:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        sudo apt install nodejs\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Проверьте, что установка выполнена успешно, запросив у node номер версии:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        nodejs -v\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Output\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        v10.19.0\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Если пакет из репозитория отвечает вашим потребностям, для начала работы с Node.js\n' +
            '                ничего больше не потребуется. <br/><br/>\n' +
            '                Вы успешно установили Node.js, используя apt и репозитории ПО Ubuntu по\n' +
            '                умолчанию.'
    },
    {
        id:3,
        title:'Mенеджер пакетов npm',
        label:'установка npm',
        icon:'fab fa-npm',
        active: false,
        content:'<div class="content-main-title">Установка npm</div>\n' +
            '                Чтобы использовать все эти инструменты (или пакеты) в Node.js нам нужна возможность\n' +
            '                устанавливать и управлять ими. Для этого создан <b>npm</b>, пакетный менеджер\n' +
            '                Node.js. Он\n' +
            '                устанавливает нужные вам пакеты и предоставляет удобный интерфейс для работы с ними.\n' +
            '                Но перед тем как начать использовать <b>npm</b>, вам надо установить в своей системе\n' +
            '                Node.js как показано в предыдущем разделе <br/><br/>\n' +
            '                После установки Node.js можно установить <b>npm</b> с помощью команды:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        sudo apt install npm\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Выполните следующую команду для того, чтобы убедиться, что npm установлен, а также\n' +
            '                для создания конфигурационного файла:\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        npm -v\n' +
            '                    </code>\n' +
            '                </div>\n' +
            '                Вывод\n' +
            '                <div class="bg-light p-3 code-block">\n' +
            '                    <code>\n' +
            '                        5.6.0\n' +
            '                    </code>\n' +
            '                </div>'
    },
    {
        id:4,
        title:'Основы HTML',
        label:'теги, структура...',
        icon:'fab fa-html5',
        active: false,
        content:'<div class="content-main-title">Что такое html?</div>\n' +
            '                HTML (от английского HyperText Markup Language) — это язык гипертекстовой разметки\n' +
            '                страницы. Он используется для того, чтобы дать браузеру понять, как нужно отображать\n' +
            '                загруженный сайт.\n' +
            '                <div class="content-second-title">Простыми словами</div>\n' +
            '                Простыми словами, HTML — это каркас сайта. В нем могут быть прописаны:\n' +
            '                <ul>\n' +
            '                    <li>ссылки</li>\n' +
            '                    <li>таблицы</li>\n' +
            '                    <li>изображения</li>\n' +
            '                    <li>блоки</li>\n' +
            '                    <li>абзацы</li>\n' +
            '                    <li>формы</li>\n' +
            '                    <li>заголовки и так далее</li>\n' +
            '                </ul>\n' +
            '                Также есть ограниченные возможности по изменению внешнего вида:\n' +
            '                <ul>\n' +
            '                    <li>поменять цвет</li>\n' +
            '                    <li>указать фоновое изображение</li>\n' +
            '                    <li>изменить шрифт</li>\n' +
            '                    <li>сделать текст жирным, курсивным, подчеркнутым, зачеркнутым и так далее.</li>\n' +
            '                </ul>\n' +
            '                На данный момент выпущено пять версий языка. Первая версия была разработана между\n' +
            '                1986 и 1991 годами, а последняя (5.2) — в 2017. Изначально он должен был стать\n' +
            '                независимым от каких-либо платформ — отображаться везде одинаково. Но этого не\n' +
            '                случилось, потому что у пользователей росли требования к мультимедиа. <br/><br/>\n' +
            '\n' +
            '                Как итог, код интерпретируется по-разному не только на разных устройствах, но и в\n' +
            '                разных браузерах. Это не плохо, потому что требования отличаются: пользователь,\n' +
            '                заходящий на сайт с телефона, готов к ограниченному функционалу и минималистичному\n' +
            '                дизайну, а владелец ПК зачастую хочет большего. <br/><br/>\n' +
            '\n' +
            '                В пятой редакции HTML стал чуть независимее от других языков. Раньше проверка\n' +
            '                правильного заполнения форм была исключительно на JS, а теперь часть задач можно\n' +
            '                переложить на HTML. <br/><br/>\n' +
            '\n' +
            '                Например, можно указать тип данных, которые должны вводиться в поле. Если\n' +
            '                пользователь попробует ввести что-то не то, у него не получится. Сами же поля стали\n' +
            '                более дружелюбными: пользователь может выбрать дату, время и даже цвет, может\n' +
            '                указать число из интервала, корректный адрес электронной почты или ссылку на сайте.\n' +
            '                <br/><br/>\n' +
            '\n' +
            '                Появился встроенный плеер — теперь не нужно подключать Adobe Flash Player или другие\n' +
            '                плагины. Визуальная часть перетаскивания элементов теперь реализуется на HTML и CSS,\n' +
            '                если добавить атрибут draggable. <br/><br/>\n' +
            '                Для создания полноценной страницы все еще нужно подключить таблицу стилей CSS и язык\n' +
            '                скриптов JavaScript. В CSS прописываются отступы, выравнивания, позиционирование,\n' +
            '                прозрачность, границы, тени и многое другое. Можно даже указать стили для разных\n' +
            '                состояний элемента — например, поменять фон кнопки при наведении. <br/><br/>\n' +
            '\n' +
            '                Работа с действиями пользователей пока в основном реализуется на JS. Атрибут\n' +
            '                draggable хоть и создает видимость перетаскивания, но на самом деле событие должно\n' +
            '                обрабатываться на JavaScript. HTML позволяет обмениваться данными с другими\n' +
            '                страницами, но чтобы их обработать, пригодится PHP. <br/><br/>\n' +
            '\n' +
            '                Пока HTML стремится к тому, чтобы ускорить разработку и снизить нагрузку на браузер,\n' +
            '                но без других языков ему пока не обойтись, как и им без него. <br/><br/>'
    },
    {
        id:5,
        title:'Основы Css',
        label:'стили, классы, идентификаторы...',
        icon:'fab fa-css3',
        active: false,
        content:'<div class="content-main-title">Что такое CSS?</div>\n' +
            '                Каскадные таблицы стилей (Cascading Style Sheets = CSS) — это язык, который отвечает\n' +
            '                за визуальное представление документов пользователю. <br/><br/>\n' +
            '\n' +
            '                Под документом мы будем понимать набор информации о структуре страницы, описываемый\n' +
            '                языком разметки. <br/><br/>\n' +
            '\n' +
            '                А представление документа пользователю, в свою очередь, означает его преобразование\n' +
            '                в удобную для восприятия форму. Браузеры, такие как Firefox, Chrome или Internet\n' +
            '                Explorer, были созданы для визуального отображения документов, например, на экране\n' +
            '                компьютера, проекторе или вывода через принтер. <br/><br/>\n' +
            '\n' +
            '                Примеры\n' +
            '                <br/>\n' +
            '                <ul>\n' +
            '                    <li>Страница сайта, которую вы сейчас читаете — это документ. Структура\n' +
            '                        информации,\n' +
            '                        которую вы видите на странице, обычно описывается при помощи языка разметки\n' +
            '                        HTML\n' +
            '                        (HyperText Markup Language — Язык ГиперТекстовой Разметки)\n' +
            '                    </li>\n' +
            '                    <li>Диалоговые окна в компьютерных программах, также называемые модальными\n' +
            '                        окнами, как\n' +
            '                        правило, также являются документами. Такие окна могут также быть описаны с\n' +
            '                        помощью\n' +
            '                        языка разметки, такого как XUL (XML User Interface Language — XML’ный Язык\n' +
            '                        Пользовательского Интерфейса), которые можно найти, например, в некоторых\n' +
            '                        приложениях от Mozilla.\n' +
            '                    </li>\n' +
            '                </ul>'
    }
]
export {arr}