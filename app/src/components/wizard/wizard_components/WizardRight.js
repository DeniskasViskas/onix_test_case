import React from "react"

function WizardRight(props) {
    const tabStatus = props.tabStatus
    return (
        <div className="wizard-right">
            <div className="tab-content text-justify">
                <div className={"tab-pane fade"+(tabStatus[0] ? ' active show' : '')} id="tab_1" role="tabpanel">
                    <div className="content-main-title">О системе контроля версий</div>
                    Git — это набор консольных утилит, которые отслеживают и фиксируют изменения в
                    файлах (чаще всего речь идет об исходном коде программ, но вы можете использовать
                    его для любых файлов на ваш вкус). С его помощью вы можете откатиться на более
                    старую версию вашего проекта, сравнивать, анализировать, сливать изменения и многое
                    другое. Этот процесс называется контролем версий. Существуют различные системы для
                    контроля версий. Вы, возможно, о них слышали: SVN, Mercurial, Perforce, CVS,
                    Bitkeeper и другие.
                    <br/><br/>
                    Git является распределенным, то есть не зависит от одного центрального сервера, на
                    котором хранятся файлы. Вместо этого он работает полностью локально, сохраняя данные
                    в папках на жестком диске, которые называются репозиторием. Тем не менее, вы можете
                    хранить копию репозитория онлайн, это сильно облегчает работу над одним проектом для
                    нескольких людей. Для этого используются сайты вроде github и bitbucket.
                </div>
                <div className={"tab-pane fade"+(tabStatus[1] ? ' active show' : '')} id="tab_2" role="tabpanel">
                    <div className="content-main-title">Основы</div>
                    <div className="content-second-title">Создание нового репозитория</div>
                    Как мы отметили ранее, git хранит свои файлы и историю прямо в папке проекта. Чтобы
                    создать новый репозиторий, нам нужно открыть терминал, зайти в папку нашего проекта
                    и выполнить команду init. Это включит приложение в этой конкретной папке и создаст
                    скрытую директорию .git, где будет храниться история репозитория и настройки.
                    <br/><br/>
                    Создайте на рабочем столе папку под названием git_exercise. Для этого в окне
                    терминала введите:
                    <div className="bg-light p-3 code-block code-block">
                        <code>
                            $ mkdir Desktop/git_exercise/<br/>
                            $ cd Desktop/git_exercise/ <br/>
                            $ git init <br/>
                        </code>
                    </div>
                    Командная строка должна вернуть что-то вроде:
                    <div className="bg-light p-3 code-block">
                        <code>
                            Initialized empty Git repository in /home/user/Desktop/git_exercise/.git/
                        </code>
                    </div>
                    Это значит, что наш репозиторий был успешно создан, но пока что пуст. Теперь
                    создайте текстовый файл под названием hello.txt и сохраните его в директории
                    git_exercise.
                    <div className="content-second-title">Определение состояния</div>
                    <b>status</b> — это еще одна важнейшая команда, которая показывает информацию о
                    текущем
                    состоянии репозитория: актуальна ли информация на нём, нет ли чего-то нового, что
                    поменялось, и так далее. Запуск git status на нашем свежесозданном репозитории
                    должен выдать:
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git status<br/>
                            On branch master<br/>
                            Initial commit<br/>
                            Untracked files:<br/>
                            (use "git add ..." to include in what will be committed)<br/>
                            hello.txt<br/>
                        </code>
                    </div>
                    Сообщение говорит о том, что файл hello.txt неотслеживаемый. Это значит, что файл
                    новый и система еще не знает, нужно ли следить за изменениями в файле или его можно
                    просто игнорировать. Для того, чтобы начать отслеживать новый файл, нужно его
                    специальным образом объявить.
                    <div className="content-second-title">Подготовка файлов</div>
                    В git есть концепция области подготовленных файлов. Можно представить ее как холст,
                    на который наносят изменения, которые нужны в коммите. Сперва он пустой, но затем мы
                    добавляем на него файлы (или части файлов, или даже одиночные строчки) командой <b>add</b>
                    и, наконец, коммитим все нужное в репозиторий (создаем слепок нужного нам состояния)
                    командой <b>commit</b>.
                    В нашем случае у нас только один файл, так что добавим его:
                    <div className="bg-light p-3 code-block">
                        <code>
                            git add hello.txt
                        </code>
                    </div>
                    Если нам нужно добавить все, что находится в директории, мы можем использовать
                    <div className="bg-light p-3 code-block">
                        <code>
                            git add -A
                        </code>
                    </div>
                    Проверим статус снова, на этот раз мы должны получить другой ответ:
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git status<br/>
                            On branch master<br/>
                            Initial commit<br/>
                            Changes to be committed:<br/>
                            (use "git rm --cached ..." to unstage)<br/>
                            new file: hello.txt<br/>
                        </code>
                    </div>
                    Файл готов к коммиту. Сообщение о состоянии также говорит нам о том, какие изменения
                    относительно файла были проведены в области подготовки — в данном случае это новый
                    файл, но файлы могут быть модифицированы или удалены

                    <div className="content-second-title">Коммит(фиксация изменений)</div>
                    Коммит представляет собой состояние репозитория в определенный момент времени. Это
                    похоже на снапшот, к которому мы можем вернуться и увидеть состояние объектов на
                    определенный момент времени.
                    Чтобы зафиксировать изменения, нам нужно хотя бы одно изменение в области подготовки
                    (мы только что создали его при помощи git add), после которого мы может коммитить:
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git commit -m "Initial commit."
                        </code>
                    </div>
                    Эта команда создаст новый коммит со всеми изменениями из области подготовки
                    (добавление файла hello.txt). Ключ -m и сообщение «Initial commit.» — это созданное
                    пользователем описание всех изменений, включенных в коммит. Считается хорошей
                    практикой делать коммиты часто и всегда писать содержательные комментарии.
                    <div className="content-second-title">Отправка изменений на сервер</div>
                    Сейчас самое время переслать наш локальный коммит на сервер. Этот процесс происходит
                    каждый раз, когда мы хотим обновить данные в удаленном репозитории.
                    Команда, предназначенная для этого - push. Она принимает два параметра: имя
                    удаленного репозитория (мы назвали наш origin) и ветку, в которую необходимо внести
                    изменения (master — это ветка по умолчанию для всех репозиториев).
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git push origin master<br/>
                            Counting objects: 3, done.<br/>
                            Writing objects: 100% (3/3), 212 bytes | 0 bytes/s, done.<br/>
                            Total 3 (delta 0), reused 0 (delta 0)<br/>
                            To https://github.com/tutorialzine/awesome-project.git<br/>
                            * [new branch] master -> master<br/>
                        </code>
                    </div>
                    В зависимости от сервиса, который вы используете, вам может потребоваться
                    аутентифицироваться, чтобы изменения отправились. Если все сделано правильно, то
                    когда вы посмотрите в удаленный репозиторий при помощи браузера, вы увидите файл
                    hello.txt
                    <div className="content-second-title">Клонирование репозитория</div>
                    Сейчас другие пользователи GitHub могут просматривать ваш репозиторий. Они могут
                    скачать из него данные и получить полностью работоспособную копию вашего проекта при
                    помощи команды clone.
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git clone https://github.com/tutorialzine/awesome-project.git <br/>
                        </code>
                    </div>
                    Новый локальный репозиторий создается автоматически с GitHub в качестве удаленного
                    репозитория.
                    <div className="content-second-title">Запрос изменений с сервера</div>
                    Если вы сделали изменения в вашем удаленном репозитории, другие пользователи могут
                    скачать изменения при помощи команды pull.
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git pull origin master <br/>
                            From https://github.com/tutorialzine/awesome-project <br/>
                            * branch master -> FETCH_HEAD <br/>
                            Already up-to-date. <br/>
                        </code>
                    </div>
                    Так как новых коммитов с тех пор, как мы склонировали себе проект, не было, никаких
                    изменений доступных для скачивания нет. <br/><br/>
                    <div className="content-main-title">Ветвление</div>
                    Во время разработки новой функциональности считается хорошей практикой работать с
                    копией оригинального проекта, которую называют веткой. Ветви имеют свою собственную
                    историю и изолированные друг от друга изменения до тех пор, пока вы не решаете слить
                    изменения вместе. Это происходит по набору причин:

                    Уже рабочая, стабильная версия кода сохраняется.
                    Различные новые функции могут разрабатываться параллельно разными программистами.
                    Разработчики могут работать с собственными ветками без риска, что кодовая база
                    поменяется из-за чужих изменений.
                    В случае сомнений, различные реализации одной и той же идеи могут быть разработаны в
                    разных ветках и затем сравниваться.
                    <div className="content-second-title">Создание новой ветки</div>
                    Основная ветка в каждом репозитории называется master. Чтобы создать еще одну ветку,
                    используем команду branch <i>name</i>
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git branch amazing_new_feature
                        </code>
                    </div>
                    Это создаст новую ветку, пока что точную копию ветки master.
                    <div className="content-second-title">Переключение между ветками</div>
                    Сейчас, если мы запустим branch, мы увидим две доступные опции:
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git branch <br/>
                            amazing_new_feature <br/>
                            * master <br/>
                        </code>
                    </div>
                    <b>master</b> — это активная ветка, она помечена звездочкой. Но мы хотим работать с
                    нашей “новой потрясающей фичей”, так что нам понадобится переключиться на другую
                    ветку. Для этого воспользуемся командой checkout, она принимает один параметр — имя
                    ветки, на которую необходимо переключиться.
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git checkout amazing_new_feature
                        </code>
                    </div>
                    <div className="content-second-title">Слияние веток</div>
                    Наша “потрясающая новая фича” будет еще одним текстовым файлом под названием
                    feature.txt. Мы создадим его, добавим и закоммитим:
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git add feature.txt <br/>
                            $ git commit -m "New feature complete.” <br/>
                        </code>
                    </div>
                    Изменения завершены, теперь мы можем переключиться обратно на ветку master.
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git checkout master
                        </code>
                    </div>
                    Теперь, если мы откроем наш проект в файловом менеджере, мы не увидим файла
                    feature.txt, потому что мы переключились обратно на ветку master, в которой такого
                    файла не существует. Чтобы он появился, нужно воспользоваться merge для объединения
                    веток (применения изменений из ветки amazing_new_feature к основной версии проекта).
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git merge amazing_new_feature
                        </code>
                    </div>
                    Теперь ветка master актуальна. Ветка amazing_new_feature больше не нужна, и ее можно
                    удалить.
                    <div className="bg-light p-3 code-block">
                        <code>
                            $ git branch -d awesome_new_feature
                        </code>
                    </div>
                </div>
                <div className={"tab-pane fade"+(tabStatus[2] ? ' active show' : '')} id="tab_3" role="tabpanel">
                    <div className="content-main-title">Что такое Node.js?</div>
                    Node.js (или просто Node) — это серверная платформа для работы с JavaScript через
                    движок V8. JavaScript выполняет действие на стороне клиента, а Node — на сервере. С
                    помощью Node можно писать полноценные приложения. Node умеет работать с внешними
                    библиотеками, вызывать команды из кода на JavaScript и выполнять роль веб-сервера.
                    <br/><br/>
                    <div className="content-main-title">В чём преимущество Node?</div>
                    C Node проще масштабироваться. При одновременном подключении к серверу тысяч
                    пользователей Node работает асинхронно, то есть ставит приоритеты и распределяет
                    ресурсы грамотнее. Java же, например, выделяет на каждое подключение отдельный
                    поток.
                    <div className="content-second-title">Установка Node.js с помощью Apt из репозиториев по
                        умолчанию
                    </div>
                    В репозиториях Ubuntu 20.04 по умолчанию содержится версия Node.js, обеспечивающая
                    согласованную работу в разных системах. На момент составления этого обучающего
                    модуля в репозиториях хранится версия 10.19. Это не самая последняя версия, но она
                    должна быть стабильной и подходить для небольших экспериментов с языком. <br/><br/>
                    Для получения этой версии можно использовать диспетчер пакетов apt. Обновите
                    указатель локальных пакетов с помощью следующей команды:
                    <div className="bg-light p-3 code-block">
                        <code>
                            sudo apt update
                        </code>
                    </div>
                    Выполните установку Node.js:
                    <div className="bg-light p-3 code-block">
                        <code>
                            sudo apt install nodejs
                        </code>
                    </div>
                    Проверьте, что установка выполнена успешно, запросив у node номер версии:
                    <div className="bg-light p-3 code-block">
                        <code>
                            nodejs -v
                        </code>
                    </div>
                    Output
                    <div className="bg-light p-3 code-block">
                        <code>
                            v10.19.0
                        </code>
                    </div>
                    Если пакет из репозитория отвечает вашим потребностям, для начала работы с Node.js
                    ничего больше не потребуется. <br/><br/>
                    Вы успешно установили Node.js, используя apt и репозитории ПО Ubuntu по
                    умолчанию.
                </div>
                <div className={"tab-pane fade"+(tabStatus[3] ? ' active show' : '')} id="tab_4" role="tabpanel">
                    <div className="content-main-title">Установка npm</div>
                    Чтобы использовать все эти инструменты (или пакеты) в Node.js нам нужна возможность
                    устанавливать и управлять ими. Для этого создан <b>npm</b>, пакетный менеджер
                    Node.js. Он
                    устанавливает нужные вам пакеты и предоставляет удобный интерфейс для работы с ними.
                    Но перед тем как начать использовать <b>npm</b>, вам надо установить в своей системе
                    Node.js как показано в предыдущем разделе <br/><br/>
                    После установки Node.js можно установить <b>npm</b> с помощью команды:
                    <div className="bg-light p-3 code-block">
                        <code>
                            sudo apt install npm
                        </code>
                    </div>
                    Выполните следующую команду для того, чтобы убедиться, что npm установлен, а также
                    для создания конфигурационного файла:
                    <div className="bg-light p-3 code-block">
                        <code>
                            npm -v
                        </code>
                    </div>
                    Вывод
                    <div className="bg-light p-3 code-block">
                        <code>
                            5.6.0
                        </code>
                    </div>
                </div>
                <div className={"tab-pane fade"+(tabStatus[4] ? ' active show' : '')} id="tab_5" role="tabpanel">
                    <div className="content-main-title">Что такое html?</div>
                    HTML (от английского HyperText Markup Language) — это язык гипертекстовой разметки
                    страницы. Он используется для того, чтобы дать браузеру понять, как нужно отображать
                    загруженный сайт.
                    <div className="content-second-title">Простыми словами</div>
                    Простыми словами, HTML — это каркас сайта. В нем могут быть прописаны:
                    <ul>
                        <li>ссылки</li>
                        <li>таблицы</li>
                        <li>изображения</li>
                        <li>блоки</li>
                        <li>абзацы</li>
                        <li>формы</li>
                        <li>заголовки и так далее</li>
                    </ul>
                    Также есть ограниченные возможности по изменению внешнего вида:
                    <ul>
                        <li>поменять цвет</li>
                        <li>указать фоновое изображение</li>
                        <li>изменить шрифт</li>
                        <li>сделать текст жирным, курсивным, подчеркнутым, зачеркнутым и так далее.</li>
                    </ul>
                    На данный момент выпущено пять версий языка. Первая версия была разработана между
                    1986 и 1991 годами, а последняя (5.2) — в 2017. Изначально он должен был стать
                    независимым от каких-либо платформ — отображаться везде одинаково. Но этого не
                    случилось, потому что у пользователей росли требования к мультимедиа. <br/><br/>

                    Как итог, код интерпретируется по-разному не только на разных устройствах, но и в
                    разных браузерах. Это не плохо, потому что требования отличаются: пользователь,
                    заходящий на сайт с телефона, готов к ограниченному функционалу и минималистичному
                    дизайну, а владелец ПК зачастую хочет большего. <br/><br/>

                    В пятой редакции HTML стал чуть независимее от других языков. Раньше проверка
                    правильного заполнения форм была исключительно на JS, а теперь часть задач можно
                    переложить на HTML. <br/><br/>

                    Например, можно указать тип данных, которые должны вводиться в поле. Если
                    пользователь попробует ввести что-то не то, у него не получится. Сами же поля стали
                    более дружелюбными: пользователь может выбрать дату, время и даже цвет, может
                    указать число из интервала, корректный адрес электронной почты или ссылку на сайте.
                    <br/><br/>

                    Появился встроенный плеер — теперь не нужно подключать Adobe Flash Player или другие
                    плагины. Визуальная часть перетаскивания элементов теперь реализуется на HTML и CSS,
                    если добавить атрибут draggable. <br/><br/>
                    Для создания полноценной страницы все еще нужно подключить таблицу стилей CSS и язык
                    скриптов JavaScript. В CSS прописываются отступы, выравнивания, позиционирование,
                    прозрачность, границы, тени и многое другое. Можно даже указать стили для разных
                    состояний элемента — например, поменять фон кнопки при наведении. <br/><br/>

                    Работа с действиями пользователей пока в основном реализуется на JS. Атрибут
                    draggable хоть и создает видимость перетаскивания, но на самом деле событие должно
                    обрабатываться на JavaScript. HTML позволяет обмениваться данными с другими
                    страницами, но чтобы их обработать, пригодится PHP. <br/><br/>

                    Пока HTML стремится к тому, чтобы ускорить разработку и снизить нагрузку на браузер,
                    но без других языков ему пока не обойтись, как и им без него. <br/><br/>
                </div>
                <div className={"tab-pane fade"+(tabStatus[5] ? ' active show' : '')} id="tab_6" role="tabpanel">
                    <div className="content-main-title">Что такое CSS?</div>
                    Каскадные таблицы стилей (Cascading Style Sheets = CSS) — это язык, который отвечает
                    за визуальное представление документов пользователю. <br/><br/>

                    Под документом мы будем понимать набор информации о структуре страницы, описываемый
                    языком разметки. <br/><br/>

                    А представление документа пользователю, в свою очередь, означает его преобразование
                    в удобную для восприятия форму. Браузеры, такие как Firefox, Chrome или Internet
                    Explorer, были созданы для визуального отображения документов, например, на экране
                    компьютера, проекторе или вывода через принтер. <br/><br/>

                    Примеры
                    <br/>
                    <ul>
                        <li>Страница сайта, которую вы сейчас читаете — это документ. Структура
                            информации,
                            которую вы видите на странице, обычно описывается при помощи языка разметки
                            HTML
                            (HyperText Markup Language — Язык ГиперТекстовой Разметки)
                        </li>
                        <li>Диалоговые окна в компьютерных программах, также называемые модальными
                            окнами, как
                            правило, также являются документами. Такие окна могут также быть описаны с
                            помощью
                            языка разметки, такого как XUL (XML User Interface Language — XML’ный Язык
                            Пользовательского Интерфейса), которые можно найти, например, в некоторых
                            приложениях от Mozilla.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default WizardRight