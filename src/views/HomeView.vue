<script setup>
const butVect1 = (() => {
    document.querySelector('.course-content').scrollLeft -= 300
})
const butVect2 = (() => {
    document.querySelector('.course-content').scrollLeft += 300
})
</script>

<template>

    <body>


        <!-- HEADER -->

        <header>
            <div class="header-container" >
                <div class="header-menu">
                    <div class="logo">
                        <img src="@/assets/img-header/logo.svg" alt="">
                    </div>

                    <div class="nav">
                        <ul>
                            <li><a href="#course">Курсы</a></li>
                            <li><a href="#news">Новости</a> </li>
                            <li><a href="#about">О нас</a></li>
                            <li><a href="#contact">Контакты</a></li>
                            <li><a href="#reviews">Отзывы</a></li>
                        </ul>
                    </div>

                    <div class="social">
                        <a href="/"><img src="@/assets/img-header/whatsapp.svg"></a>
                        <a href="/"><img src="@/assets/img-header/tg.svg"></a>
                        <a href="/"><img src="@/assets/img-header/inst.svg"></a>
                        <a href="/"><img src="@/assets/img-header/vk.svg"></a>
                    </div>

                    <div class="tel">
                        <a href="tel:+79384567707">+7 938 456 77 07</a>
                    </div>
                </div>

                <div class="header-box">
                    <div class="slogan">
                        <div class="dron">
                            <img src="@/assets/img-header/DRon.png" alt="">
                        </div>

                        <div class="motoschool">
                            <img src="@/assets/img-header/Мотошкола.png" alt="">
                        </div>

                        <div>
                            <p>Мы воспитываем мотоциклистов! Запишитесь<br>
                                на бесплатное пробное занятие</p>
                        </div>
                    </div>

                    <div class="button">
                        <div class="wrapper">
                            <a href="/" type="button"> Курс “Pro”</a>
                            <a href="/" type="button"> Категория “А”</a>
                        </div>
                        <button type="button" id="btn3">Записаться</button>
                    </div>
                </div>
            </div>
        </header>

        <!--ABOUT-- 2 блок -->

        <div class="about" id="about">

            <div class="about_logo">
                <img src="@/assets/img-about-bl-2/О нас.svg " alt="" id="about-logo_1">
                <img src="@/assets/img-about-bl-2/Line 11.svg" alt="" id="about-logo_3">
                <img src="@/assets/img-about-bl-2/О нас (1).svg" alt="" id="about-logo_2">
            </div>

            <div class="about-text-img">

                <div class="about-text">
                    <p>Наши инструкторы имеют огромный опыт как в управлении мототехникой, так и в обучении
                        мотоциклистов. А
                        постоянное повышение своих навыков инструкторами даст вам возможность узнать что-то новое
                        даже
                        если
                        вы уже отучились на наших курсах(перефорулировать, можно совсем)
                    </p>
                    <br>
                    <p> Наши инструкторы имеют огромный опыт как в управлении мототехникой, так и в обучении
                        мотоциклистов.
                        А постоянное повышение своих навыков инструкторами даст вам возможность узнать что-то новое
                        даже
                        если вы уже отучились на наших курсах(перефорулировать, можно совсем)
                    </p>
                </div>

                <div class="about-img">
                    <img src="@/assets/img-about-bl-2/pic 1.png" alt="" id="pic-1">
                    <img src="@/assets/img-about-bl-2/pic 5.png" alt="" id="pic-5">
                    <img src="@/assets/img-about-bl-2/pic 4.png" alt="" id="pic-4">
                    <img src="@/assets/img-about-bl-2/pic 3.png" alt="" id="pic-3">
                    <img src="@/assets/img-about-bl-2/pic 2.png" alt="" id="pic-2">
                </div>

            </div>
        </div>

        <!-- WHY ARE WE--3 блок -->

        <div class="why">
            <div class="why-2-logo">
                <img src="@/assets/img-why-bl-3/Почему мы_.svg" alt="" id="why-logo_1">
                <img src="@/assets/img-why-bl-3/Line 11.svg" alt="" id="why-logo_3">
                <img src="@/assets/img-why-bl-3/Почему мы_ (1).svg" alt="" id="why-logo_2">
            </div>

            <div class="why-content">
                <img src="@/assets/img-why-bl-3/Image.png" alt="" id="why-img-content">

                <div class="why-text-block">
                    <div class="block-1">
                        <img src="@/assets/img-why-bl-3/01.svg" alt="" id="why-svg">
                        <p id="title">ОПЫТ</p>
                        <p id="text">Наши инструкторы имеют огромный опыт как в управлении мототехникой, так и в
                            обучении
                            мотоциклистов. А постоянное повышение своих навыков инструкторами даст вам возможность
                            узнать что-то новое даже если вы уже отучились на наших курсах (перефорулировать, можно
                            совсем)
                        </p>
                    </div>
                    <div class="block-2">
                        <img src="@/assets/img-why-bl-3/02.svg" alt="" id="why-svg">
                        <p id="title">ОТВЕТСТВЕННОСТЬ</p>
                        <p id="text">Тщательная проработка всех без исключения ошибок учеников, а если точнее
                            бескомпромисное
                            отношение к ним, не оставит вам шанса на провал в постижении искусства управления
                            мотоциклом
                            и сдаче экзаменов.</p>
                    </div>
                    <div class="block-3">
                        <img src="@/assets/img-why-bl-3/03.svg" alt="" id="why-svg">
                        <p id="title">ГИБКИЙ ГРАФИК <br>ТРЕНИРОВОК</p>
                        <p id="text">Вы сами назначаете время каждой тренировки тогда, когда удобно вам. Не будет
                            никаких
                            пропущеных занятий, потраченных впустую денег (потому что вы не смогли прийти).
                            Тренировка
                            раз в неделю? - пожалуйста, каждый день? - не вопрос, три дня подряд и перерыв две
                            недели? -
                            так тоже можно.</p>
                    </div>
                    <div class="block-4">
                        <img src="@/assets/img-why-bl-3/04.svg" alt="" id="why-svg">
                        <p id="title">ИНДИВИДУАЛЬНЫЙ<br> ПОДХОД</p>
                        <p id="text">Тренировки проводятся только в индивидуальном режиме. Никаких групповых
                            занятий.
                            Всё время
                            отведенное для практических занятий достанется только вам. </p>
                    </div>
                </div>
            </div>
        </div>

        <!--COURSE-- 4 блок -->

        <div class="course">
            <div class="about-course">
                <img src="@/assets/img-course-bl-4/Наши курсы.svg" alt="" id="about-logo_1">
                <img src="@/assets/img-course-bl-4/Line 11.svg" alt="" id="about-logo_3">
                <img src="@/assets/img-course-bl-4/Наши курсы (1).svg" alt="" id="about-logo_2">
            </div>

            <div class="content-vector">
                <button @click="butVect1" class="but_vect1">
                    <div id="vector-1"><img src="@/assets/img-course-bl-4/Vector 10.png" alt=""></div>
                </button>
                <button @click="butVect2" class="but_vect2">
                    <div id="vector-2"><img src="@/assets/img-course-bl-4/Vector 10 (1).png" alt=""></div>
                </button>
            </div>

            <div class="course-content" id="course-content">
                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image-1.png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>КAТЕГОРИЯ “А”</h1>
                        <p>Курс для получения прав категории “А”, предназначен для людей, не умеющих управлять
                            мотоциклом. Вы научитесь уверенно обращаться с мотоциклом и сможете гарантированно сдать
                            практический экзамен в ГИБДД.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image.png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>“PRO”</h1>
                        <p>Предназначен для желающих максимально ознакомиться с устройством мотоцикла. Получить
                            начальные навыки безопасного управления мотоциклом на малых и средних скоростях.
                            Отработать
                            правильный алгоритм торможения. Подходит для тех, кому нужны основные навыки вождения.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (1-1).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Категория “А” + “PRO”</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (2).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>“КонтрАварийный”</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (3).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1 id="course-text-h1">Категория “А”+<br>“КонтрАварийный”</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (4).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>“Городской”</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (5).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Индивидуальный курс</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (6).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Разовое занятие</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (7).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Бесплатное пробное</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (8).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Мопед</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом.
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (9).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Детский</h1>
                        <p>Вы научитесь правильно и безопасно применять полученные и существующие навыки, сможете
                            отработать типичные городские ситуации, а также исправить ошибки, мешающие уверенно и
                            свободно управлять мотоциклом. полосе?
                        </p>
                    </div>
                    <div class="why-button">
                        <button id="why-btn">Подробнее</button>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image (10).png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Тренажер “Вилли-паук”</h1>
                        <p>Вилли машина и Вилли Паук - безопасные тренажеры для отработки базовых навыков исполнения
                            “вилли” на мотоцикле любого класса. 3500р за 1 час
                        </p>
                    </div>
                    <div class="why-button">
                        <div class="why-button">
                            <button id="why-btn">Подробнее</button>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- ENTRY--блок-5 -->

        <div class="entry">
            <div class="entry-container">
                <div class="about-entry">
                    <img src="@/assets/img-entry-bl-5/Он ждет тебя.svg" alt="" id="entry-logo_1">
                    <img src="@/assets/img-entry-bl-5/Line 11.svg" alt="" id="entry-logo_3">
                    <img src="@/assets/img-entry-bl-5/Он ждет тебя (1).svg" alt="" id="entry-logo_2">
                </div>

                <div class="entry-content">

                    <h1>ЗАПИШИТЕСЬ<br> НА БЕСПЛАТНОЕ <br>ПРОБНОЕ ЗАНЯТИЕ</h1>

                    <div class="entry-block ">
                        <p>Пробное занятие в нашей школе абсолютно<br> бесплатное, без скрытых платежей и сборов на
                            бензин.<br>
                            Также посещение пробного занятия не обязывает вас<br> покупать какой-либо курс и не входит в
                            его
                            стоимость.
                        </p>

                        <div class="entry-inp-btn">
                            <div class="entry-input">
                                <input type="tel" placeholder="Номер телефона ">
                            </div>

                            <div class="entry-button">
                                <button type="button">Записаться</button>
                            </div>
                        </div>

                        <p class="entry-p" id="p">Нажимая кнопку “Записаться” вы солгашаетесь<br>с
                            <a href="/">Политикой Конфиденциальности.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- BEE-MOTO--блок-6 -->

        <div class="bee-moto">
            <div class="bee-moto-title">
                <img src="@/assets/img-bee-moto-bl-6/бЫТЬ МОТОЦИКЛИСТОМ.svg" alt="" id="bee-moto-title_1">
                <img src="@/assets/img-entry-bl-5/Line 11.svg" id="bee-moto-title_3">
                <img src="@/assets/img-bee-moto-bl-6/Быть мотоциклистом (1).svg" alt="" id="bee-moto-title_2">
            </div>

            <div class="bee-moto-slogan">
                <p> “БЫТЬ МОТОЦИКЛИСТОМ...” Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, velit
                    perspiciatis molestias quas earum id dolorum voluptatum delectus labore qui, porro autem fugit
                    ipsam
                    repellendus magni reprehenderit optio est
                    quos!</p>
            </div>

            <div class="bee-moto-content-1">
                <div class="t-text">
                    <img src="@/assets/img-bee-moto-bl-6/01.svg" alt="" id="t-01">
                    <div class="title-01">
                        <p id="t-text">Путешествия</p>

                        <p id="p-text">Не всем нравится идея путешествовать на машине, романтика дороги на байке
                            привлекает
                            многих.
                            Если
                            использовать мотоцикл не на гоночном треке и не в городе для поездок на работу, то
                            путешествия
                            определенно в топе причин отучиться у нас.
                        </p>
                    </div>
                </div>

                <img src="@/assets/img-bee-moto-bl-6/Rectangle-160.png" alt="" id="be-moto-img-1">
            </div>

            <div class="bee-moto-content-2">
                <img src="@/assets/img-bee-moto-bl-6/sunset-motorcycle-acrobatics-silhouette 1 (1).png" alt=""
                    id="be-img-1">
                <img src="@/assets/img-bee-moto-bl-6/image 162.png" alt="" id="be-img-2">
                <div class="t-text">
                    <div class="title-02">
                        <img src="@/assets/img-bee-moto-bl-6/02.svg" alt="" id="t-02">
                        <p id="t-text">Саморазвитие</p>
                    </div>
                    <p id="p-text">Наличие мотоцикла вынуждает человека вникать в технические тонкости, а также
                        меняться
                        психологически.
                        Владение байком заставляет чаще задумываться
                        об ответственности за свои решения, адекватно воспринимать опасность возможного падения, а
                        также
                        учиться контролю над телом и разумом.
                    </p>
                </div>
            </div>

            <div class="bee-moto-content-3">
                <div class="t-text-03">
                    <div class="title-03">
                        <img src="@/assets/img-bee-moto-bl-6/03.svg" alt="" id="t-03">
                        <p id="t-text">Мотоцикл поможет</p>
                    </div>
                    <p id="p-text-3">Cправиться с кризисами в жизни. Иногда человека постоянно преследует желание
                        что-либо изменить в своей жизни. Двухколёсный друг может помочь в этом
                        вопросе.
                    </p>
                </div>
                <img src="@/assets/img-bee-moto-bl-6/image-258.png" alt="" id="be-moto-img-3">
            </div>

            <div class="bee-moto-content-4">
                <img src="@/assets/img-bee-moto-bl-6/img04.png" alt="">
                <div class="t-text">
                    <div class="title-04">
                        <img src="@/assets/img-bee-moto-bl-6/04.svg" alt="" id="t-04">
                        <p id="t-text">Братство</p>
                    </div>
                    <p id="p-text">Зачастую мы контактируем с людьми, с которыми у нас мало общего. Мотоцикл
                        позволяет
                        приобщиться к
                        абсолютно иному сообществу. В мотокругах считается нормой помогать другому мотоциклисту,
                        поддерживать друг друга. Дух взаимопомощи часто объединяет этих людей.
                    </p>
                </div>
            </div>

            <div class="bee-moto-content-5">
                <div class="t-text">
                    <div class="title-05">
                        <img src="@/assets/img-bee-moto-bl-6/05.svg" alt="" id="t-05">
                        <p id="t-text">Победить страх</p>
                    </div>
                    <p id="p-text">Не дайте страху и неизвестности встать на пути к вашей мечте. Один шаг к знаниям
                        и опыту,
                        мигом
                        развеет все опасения. Вы не будете задумываться об управлении, ваше тело будет автоматически
                        делать
                        все за вас.
                    </p>
                </div>
                <img src="@/assets/img-bee-moto-bl-6/image-259.png" alt="" id="be-moto-img-5">
            </div>


            <div class="bee-moto-border-text">

                <div class="cav-up">
                    <img src="@/assets/img-bee-moto-bl-6/quotes.svg" alt="">
                    <img src="@/assets/img-bee-moto-bl-6/quotes.svg" alt="">
                </div>

                <div class=" t-text-author">
                    <p id="autor">Человек, оседлавший мотоцикл, может сконцентрироваться только на очередной секунде
                        своей гонки; он цепляется за клочок времени, оторванный и от прошлого, и от будущего; он
                        выдернут из
                        непрерывности времени; он вне его; иначе говоря, он находится в состоянии экстаза, он ничего
                        не
                        знает ни о
                        своем возрасте, ни о своей жене, детях, заботах и, следовательно, ничего не боится, ибо
                        источник
                        страха — в будущем, а он освобожден от будущего и ему нечего бояться.<br><br><span
                            id="autor-name"> Милан Кундера, из книги «Неспешность»</span></p>
                </div>
                <div class="cav-down">
                    <img src="@/assets/img-bee-moto-bl-6/quotes-2.svg" alt="">
                    <img src="@/assets/img-bee-moto-bl-6/quotes-2.svg" alt="">
                </div>
            </div>
        </div>

        <!-- блок-7 -фотогаллерея-->

        <div class="photo-gallery">

            <div class="about-photo-gallery">
                <img src="@/assets/img-photo-gal-bl-7/Фотогалерея.svg" alt="" id="about-gallery_1">
                <img src="@/assets/img-photo-gal-bl-7/Line 11.svg" alt="" id="about-gallery_3">
                <img src="@/assets/img-photo-gal-bl-7/Фотогалерея (1).svg" alt="" id="about-gallery_2">
            </div>

            <div class="gallery-block-grid">

                <img src="@/assets/img-photo-gal-bl-7/Rectangle 41.png" alt="" id="grid-41">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 42.png" alt="" id="grid-42">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 60.png" alt="" id="grid-60">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 62.png" alt="" id="grid-62">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 63.png" alt="" id="grid-63">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 67.png" alt="" id="grid-67">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 41 (1).png" alt="" id="grid-41-b">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 177.png" alt="" id="grid-177">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 178.png" alt="" id="grid-178">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 64 (1).png" alt="" id="grid-64-1">

                <img src="@/assets/img-photo-gal-bl-7/Rectangle 61.png" alt="" id="grid-61">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 64.png" alt="" id="grid-64">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 42 (1).png" alt="" id="grid-42-1">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 54.png" alt="" id="grid-54">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 60 (1).png" alt="" id="grid-60-1">

                <img src="@/assets/img-photo-gal-bl-7/Rectangle 61 (1).png" alt="" id="grid-61-1">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 179.png" alt="" id="grid-179">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 180.png" alt="" id="grid-180">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 65.png" alt="" id="grid-65">
                <img src="@/assets/img-photo-gal-bl-7/Rectangle 66.png" alt="" id="grid-66">
            </div>
        </div>

        <!--GARAGE-- 8 блок -->

        <div class="garage">
            <div class="about-garage">
                <img src="@/assets/img-garage-bl-8/наш гараж.svg" alt="" id="about-garage_1">
                <img src="@/assets/img-garage-bl-8/Line 11.svg" alt="" id="about-garage_3">
                <img src="@/assets/img-garage-bl-8/Наш гараж (1).svg" alt="" id="about-garage_2">

            </div>

            <div class="garage-text">
                <p id="garage-text">Вы можете ознакомиться с техникой, на которой проходит обучение.<br>Вся техника
                    регулярно обслуживается во избежание аварий, травм и нештатных ситуаций.
                </p>
            </div>

            <div class="box-card">
                <div class="main_card_desc">
                    <p>Yamaha YZF-R3</p>
                </div>

                <div class="main_card_desc_text">
                    <div class="card_text_1">
                        <p>Год выпуска:</p>
                        <p>Страна производства:</p>
                        <p>Рама:</p>
                        <p>Тип двигателя:</p>
                        <p>Рабочий объем:</p>
                        <p>Максимальная мощность:</p>
                        <p>Максимальная скорость:</p>
                        <p>Коробка передач:</p>
                        <p>Высота по седлу:</p>
                        <p>Масса:</p>
                        <p>Габариты (д х ш х в):</p>
                    </div>

                    <div class="card_text_2">
                        <p>2018</p>
                        <p>Индонезия</p>
                        <p>стальная диагональная</p>
                        <p>2-цилиндровый, 4-тактный, рядный</p>
                        <p>321 см³</p>
                        <p>42,0 л.с. (31,0 кВт) при 10750 об/мин</p>
                        <p>175 км/ч</p>
                        <p>механическая, 6 передач</p>
                        <p>780 мм</p>
                        <p>125 кг</p>
                        <p>2090 мм х 720 мм х 11135 мм</p>
                    </div>
                </div>
            </div>

            <div class="garage-content">
                <img src="@/assets/img-garage-bl-8/prev_card.png" alt="" id="garage-img-1">
                <img src="@/assets/img-garage-bl-8/Rectangle 36.png" alt="" id="garage-img-2">
                <img src="@/assets/img-garage-bl-8/next_card1.png" alt="" id="garage-img-3">
                <img src="@/assets/img-garage-bl-8/next_card2.png" alt="" id="garage-img-4">
            </div>

            <div class="vector-nav">
                <div id="vector-3"><img src="@/assets/img-garage-bl-8/Vector 10.png" alt=""></div>

                <sup id="sup-1">1</sup>
                <img src="@/assets/img-garage-bl-8/Line 55.svg" alt="" id="line-55">
                <sub id="sub-2">4</sub>

                <div id="vector-4"><img src="@/assets/img-garage-bl-8/Vector 10 (1).png" alt=""></div>
            </div>
        </div>


        <!--COMMAND-- блок-9- -->

        <div class="command">

            <div class="about-command">
                <img src="@/assets/img-command-bl-9/Команда.svg" alt="" id="about-command_1">
                <img src="@/assets/img-command-bl-9/Line 11.svg" alt="" id="about-command_3">
                <img src="@/assets/img-command-bl-9/Команда (1).svg" alt="" id="about-command_2">
            </div>


            <div class="instructor-card-1">
                <div class="content-card-1">
                    <div class="text-card">
                        <img src="@/assets/img-command-bl-9/Инструктор.png" alt="" id="instructor-text-p-1">
                        <p id="instructor-text-p-2">Терентьев Андрей</p>
                        <p id="instructor-text-p-3">Легкий индийский дорожный мотоцикл. Имеет классический дизайн с
                            минимумом пластиковых
                            деталей.Выносливый и эффективный, что делает его отличным мотоциклом для городских и
                            длительных
                            поездок по пересеченной местности.<br><br>
                            Сочетание стильного дизайна и превосходных технических характеристик порадуют как новичка,
                            так и
                            опытного райдера. Boxer BM 150 - это идеальная комбинация мощности
                            и топливной эффективности.</p>
                    </div>
                    <img src="@/assets/img-command-bl-9/Photo.png" alt="" id="instructor-photo-1">
                </div>
            </div>


            <div class="instructor-card-2">
                <div class="content-card-2">
                    <img src="@/assets/img-command-bl-9/Photo-2.png" alt="" id="instructor-photo-1">
                    <div class="text-card">
                        <img src="@/assets/img-command-bl-9/Инструктор.png" alt="" id="instructor-text-p-1">
                        <p id="instructor-text-p-2">Ефимов Андрей</p>
                        <p id="instructor-text-p-3">Легкий индийский дорожный мотоцикл. Имеет классический дизайн с
                            минимумом пластиковых
                            деталей.Выносливый и эффективный, что делает его отличным мотоциклом для городских и
                            длительных
                            поездок по пересеченной местности.<br><br>
                            Сочетание стильного дизайна и превосходных технических характеристик порадуют как новичка,
                            так и
                            опытного райдера. Boxer BM 150 - это идеальная комбинация мощности
                            и топливной эффективности.</p>
                    </div>
                </div>
            </div>
        </div>


        <!-- BIKE--блок-10-->

        <div class="bike">
            <div class="about-bike">
                <img src="@/assets/img-bike-bl-10/Выбери свой байк.svg" alt="" id="about-bike_1">
                <img src="@/assets/img-bike-bl-10/Line 11.svg" alt="" id="about-bike_3">
                <img src="@/assets/img-bike-bl-10/Выбери свой байк (1).svg" alt="" id="about-bike_2">
            </div>

            <!-- если отдельные фрагменты,то бекграунд убрать -->

            <!-- <div class="bike-img-grid">
                <img src="@/assets/img-bl-10/CTA_img01/inactive.png" alt="">
                <img src="@/assets/img-bl-10/inactive.png" alt="" id="bike-img">
                <img src="@/assets/img-bl-10/CTA_img02/inactive.png" alt="" id="bike-img">
                <img src="@/assets/img-bl-10/CTA_img04/inactive.png" alt="" id="bike-img">
            </div> -->

            <div class="bike-bg">
                <div class="bike-content">
                    <div class="bike-block ">
                        <p id="bike-text">Пробное занятие в нашей школе абсолютно бесплатное, без скрытых платежей и
                            сборов на бензин.
                            Также
                            посещение пробного занятия не обязывает вас покупать какой-либо курс и не входит в его
                            стоимость.
                        </p>

                        <div class="bike-inp-btn">
                            <div class="entry-input">
                                <input type="tel" value="" placeholder="Номер телефона">
                            </div>

                            <div class="bike-button">
                                <button type="button">Записаться</button>
                            </div>
                        </div>

                        <p class="bike-p" id="p-bike">Нажимая кнопку “Записаться” вы солгашаетесь<br>с
                            <a href="/">Политикой Конфиденциальности.</a>
                        </p>
                    </div>
                    <h1>ЗАПИШИТЕСЬ<br> НА БЕСПЛАТНОЕ<br> ПРОБНОЕ ЗАНЯТИЕ</h1>
                </div>
            </div>
        </div>


        <!--NEWS --блок-11-->

        <div class="news" id="news">
            <div class="about-news">
                <img src="@/assets/img-news-bl-11/Новости и события.svg" alt="" id="about-news_1">
                <img src="@/assets/img-news-bl-11/Line 11.svg" alt="" id="about-news_3">
                <img src="@/assets/img-news-bl-11/новости и события (1).svg" alt="" id="about-news_2">
            </div>

            <div class="news-box">

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 111.png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <h1>Honda представила CB750 Hornet....</h1>
                        <div class="overflow-text">
                            <p id="news-text">Мотоцикл 2023 модельного года получил 755-кубовую рядную "двойку"
                                мощностью 92
                                л.с. и полный
                                набор электронных помощников.
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 2.png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <h1>Hero и Zero: дружба за 60 миллионов долларов</h1>
                        <div class="overflow-text">
                            <p id="news-text">Индийский мотопроизводитель Hero MotoCorp инвестирует внушительную
                                сумму в
                                калифорнийскую компанию Zero Motorcycles с целью совместной разработки премиальных
                                электромотоциклов.
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 111 (1).png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <h1>Вредна ли для мотоцикла езда без глушителя?</h1>
                        <div class="overflow-text">
                            <p id="news-text">Сегодняшние стандартные выхлопные системы кажутся слишком тихими для
                                большинства гонщиков. Многие тратят значительные средства, чтобы поставить другой
                                глушитель
                                или, так называемые слипоны (накладные выхлопные системы).
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 111 (2).png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <h1>The best fastest and most powerful road car</h1>
                        <div class="overflow-text">
                            <p id="news-text">Самая главная причина, к которой сводятся вышеперечисленные —
                                удовольствие.
                                Наши ученики искренне любят то, чем занимаются, поэтому они каждый год ждут начала
                                сезона, а
                                то и не заканчивают его вовсе. Удовольствие, которое ученики получает от управления
                                мотоциклом, заставляет их совершенствовать навыки, работать над собой. Удовольствие
                                от
                                открытий и путешествий, заставляют их планировать все новые и новые маршруты,
                                делиться
                                находками. Удовольствие самореализации в мотоспорте или мотокультуре, радость
                                общения с
                                единомышленниками — все это стоит того, чтобы купить наши курсы.
                                Здесь будет другой текст
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>11</p>
                            </div>
                        </div>
                    </div>
                </article>


                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 111 (3).png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <h1>Honda представила CB750 Hornet</h1>
                        <div class="overflow-text">
                            <p id="news-text">Мотоцикл 2023 модельного года получил 755-кубовую рядную "двойку"
                                мощностью 92 л.с. и полный
                                набор электронных помощников.
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 111 (4).png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>

                    <div class="news-text">
                        <h1>Honda представила CB750 Hornet</h1>
                        <div class="overflow-text">
                            <p id="news-text">Мотоцикл 2023 модельного года получил 755-кубовую рядную "двойку"
                                мощностью 92 л.с. и полный
                                набор электронных помощников.
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 111 (5).png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <h1>Honda представила CB750 Hornet</h1>
                        <div class="overflow-text">
                            <p id="news-text">Мотоцикл 2023 модельного года получил 755-кубовую рядную "двойку"
                                мощностью 92
                                л.с. и полный
                                набор электронных помощников.
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 111 (6).png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <h1>Honda представила CB750 Hornet</h1>
                        <div class="overflow-text">
                            <p id="news-text">Мотоцикл 2023 модельного года получил 755-кубовую рядную "двойку"
                                мощностью 92
                                л.с. и полный
                                набор электронных помощников.
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle 111 (7).png" alt="" id=" news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <div class="overflow-text">
                            <h1>Honda представила CB750 Hornet</h1>
                            <p id="news-text">Мотоцикл 2023 модельного года получил 755-кубовую рядную "двойку"
                                мощностью 92
                                л.с. и полный
                                набор электронных помощников.
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle111-8.png" alt="" id="news_img-1">
                    </div>
                    <div class="data-text">
                        <p>04 октября 2022 |
                            <a href="/">moto-magazine.ru</a>
                        </p>
                    </div>
                    <div class="news-text">
                        <div class="overflow-text">
                            <h1>Honda представила CB750 Hornet</h1>
                            <p id="news-text">Мотоцикл 2023 модельного года получил 755-кубовую рядную "двойку"
                                мощностью 92
                                л.с. и полный
                                набор электронных помощников.
                            </p>
                        </div>
                        <div class="btn-mess">
                            <button id="btn5">Подробнее</button>
                            <div class="mess">
                                <img src="@/assets/img-news-bl-11/img_543833 1 (Traced).svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <div class="see-news">
                    <p><a href="/">Смотреть все новости</a></p>
                </div>
            </div>
        </div>


        <!-- workout 12-блок  -->


        <div class="workout">
            <div class="workout-title">
                <img src="@/assets/img-workout-bl-12/Тренировки-1.svg" alt="" id="workout-title_1">
                <img src="@/assets/img-news-bl-11/Line 11.svg" alt="" id="workout-title_3">
                <img src="@/assets/img-workout-bl-12/тренировки.svg" alt="" id="workout-title_2">
            </div>

            <div class="video-block">

                <article class="video-card">
                    <p id="p-name">Наш гараж</p>
                    <img src="@/assets/img-workout-bl-12/Rectangle-57.png" alt="">
                    <p id="p-date">23.09.2022</p>
                </article>

                <article class="video-card">
                    <p id="p-name">Андрей, курс “Категория А”, 2-я тренировка</p>
                    <img src="@/assets/img-workout-bl-12/Rectangle-57.png" alt="">
                    <p id="p-date">17.08.2022</p>
                </article>

                <article class="video-card">
                    <p id="p-name-3">Анастасия, курс “Контраварийный”, 4-я <br>тренировка</p>
                    <img src="@/assets/img-workout-bl-12/Rectangle-57.png" alt="">
                    <p id="p-date">09.05.2022</p>
                </article>

                <article class="video-card">
                    <p id="p-name">Михаил, сдача внутреннего экзамена</p>
                    <img src="@/assets/img-workout-bl-12/Rectangle-57.png" alt="">
                    <p id="p-date">17.02.2022</p>
                </article>

                <article class="video-card">
                    <p id="p-name">Игорь, курс “Категория А”, 5-я тренировка</p>
                    <img src="@/assets/img-workout-bl-12/Rectangle-57.png" alt="">
                    <p id="p-date">03.02.2022</p>
                </article>

                <article class="video-card">
                    <p id="p-name">Трек, на котором мы учимся вождению</p>
                    <img src="@/assets/img-workout-bl-12/Rectangle-57.png" alt="">
                    <p id="p-date">30.12.2021 </p>
                </article>

            </div>

            <div class="vector-nav" id="video-block-vector">
                <div id="vector-3"><img src="@/assets/img-garage-bl-8/Vector 10.png" alt=""></div>
                <sup id="sup-1">1</sup>
                <img src="@/assets/img-garage-bl-8/Line 55.svg" alt="" id="line-55">
                <sub id="sub-2">9</sub>
                <div id="vector-4"><img src="@/assets/img-garage-bl-8/Vector 10 (1).png" alt=""></div>
            </div>
        </div>


        <!-- STATISTIC-блок-13 -->


        <div class="statistic">

            <div class="statistic-title">
                <img src="@/assets/img-statistic-bl-13/Статистика.svg" alt="" id="reviews-title_1">
                <img src="@/assets/img-statistic-bl-13/Line 11.svg" alt="" id="reviews-title_3">
                <img src="@/assets/img-statistic-bl-13/Статистика (1).svg" alt="" id="reviews-title_2">
            </div>

            <div class="about-figure">
                <p id="about-figure-p">Немного цифр</p>

                <p id="statistic-text-block">Не перестаем улучшать условия занятий, совершенствовать учебный
                    процесс. За прошедший год мы
                    расширили парк мототехники, обновили учебную экипировку, чтобы обеспечить каждому ученику
                    максимально безопасные эффективные тренировки.<br><br>
                    Инструкторы постоянно оттачивают мастерство управления мототехникой и навыки ее
                    обслуживания. Мы уже обучили десятки мотоциклистов, помогли им подготовиться к экзаменам
                    в ГИБДД и соревнованиям по мотоспорту, освоить тонкости экстремального вождения, обрести
                    уверенность на дороге в любых условиях.
                </p>
            </div>

            <div class="block-statistic">

                <article class="article-statistic">
                    <img src="@/assets/img-statistic-bl-13/1000.svg" alt="" id="article-statistic-img">
                    <p id="title-article">Тренировок</p>
                    <div class="article-stat-text">
                        <p>Мы провели уже более тысячи тренировок, каждый раз выкладываясь полностью Выбирала школу
                            по
                            количеству практических занятий и отзывам курсантов, которые (3-5 строк)</p>
                    </div>
                </article>

                <article class="article-statistic">
                    <img src="@/assets/img-statistic-bl-13/137.svg" alt="" id="article-statistic-img">
                    <p id="title-article_2">Выпускников</p>
                    <div class="article-stat-text">
                        <p>Каждый из них провели уже более тысячи тренировок, каждый раз выкладываясь полностью
                            Выбирала школу по количеству практических занятий и от(3-5 строк)</p>
                    </div>
                </article>

                <article class="article-statistic">
                    <img src="@/assets/img-statistic-bl-13/137 (1).svg" alt="" id="article-statistic-img">
                    <p id="title-article">Мото-часов</p>
                    <div class="article-stat-text">
                        <p>Проведено на треке и пересеченной местности вместе с учениками провели уже более тысячи
                            тренировок, каждый раз выкладываясь полностью занятий и отзывам курсантов, которые (3-5
                            строк)</p>
                    </div>
                </article>
            </div>
        </div>


        <!-- DOCUMENTS-14-БЛОК -->


        <div class="title-documets">
            <div class=" title-shadow-doc">
                <img src="@/assets/img-photo-gal-bl-7/Line 11.svg" alt="" id="about-gallery_3">
                <p>наши документы</p>
            </div>
        </div>

        <div class="documents-container">

            <div class="documents-block-grid">

                <img src="@/assets/img-doc-bl-14/Rectangle 42.png" alt="" id="doc-42">
                <img src="@/assets/img-doc-bl-14/Rectangle 60.png" alt="" id="doc-60">
                <img src="@/assets/img-doc-bl-14/Rectangle 67.png" alt="" id="doc-67">
                <img src="@/assets/img-doc-bl-14/Rectangle 61.png" alt="" id="doc-61">
                <img src="@/assets/img-doc-bl-14/Rectangle 177.png" alt="" id="doc-177">
                <img src="@/assets/img-doc-bl-14/Rectangle 178.png" alt="" id="doc-178">
                <img src="@/assets/img-doc-bl-14/Rectangle 64-1.png" alt="" id="doc-64-1">

                <img src="@/assets/img-doc-bl-14/Rectangle 64.png" alt="" id="doc-64">
                <img src="@/assets/img-doc-bl-14/Rectangle 41.png" alt="" id="doc-41">
                <img src="@/assets/img-doc-bl-14/Rectangle 179.png" alt="" id="doc-179">
                <img src="@/assets/img-doc-bl-14/Rectangle 180.png" alt="" id="doc-180">


                <img src="@/assets/img-doc-bl-14/Rectangle 181.png" alt="" id="doc-181">
                <img src="@/assets/img-doc-bl-14/Rectangle 182.png" alt="" id="doc-182">
                <img src="@/assets/img-doc-bl-14/Rectangle 60-1.png" alt="" id="doc-60-1">
                <img src="@/assets/img-doc-bl-14/Rectangle 42-1.png" alt="" id="doc-42-1">

            </div>
        </div>



        <!-- ОТЗЫВЫ-15-блок -->


        <div class="reviews" id="reviews">
            <div class="reviews-title">
                <img src="@/assets/img-revievs-bl-15/Отзывы.svg" alt="" id="reviews-title_1">
                <img src="@/assets/img-revievs-bl-15/Line 11.svg" alt="" id="reviews-title_3">
                <img src="@/assets/img-revievs-bl-15/Отзывы (1).svg" alt="" id="reviews-title_2">
            </div>

            <div class="reviews-photo-flex">
                <div class="rev-photo-text-1">
                    <img src="@/assets/img-revievs-bl-15/Photo.png" alt="">
                </div>

                <div class="rev-photo-text-2">
                    <img src="@/assets/img-revievs-bl-15/Photo (1).png" alt="">
                </div>
                <div class="rev-photo-text-2">
                    <img src="@/assets/img-revievs-bl-15/Photo (2).png" alt="">
                </div>

                <div class="rev-photo-text-4">
                    <img src="@/assets/img-revievs-bl-15/Photo (3).png" alt="">
                </div>



                <img src="@/assets/img-revievs-bl-15/Photo (4).png" alt="">
                <img src="@/assets/img-revievs-bl-15/Photo (5).png" alt="">
                <img src="@/assets/img-revievs-bl-15/Photo (6).png" alt="">
                <img src="@/assets/img-revievs-bl-15/Photo (7).png" alt="">
            </div>

            <div class="reviews-form" id="">

                <form action="">

                    <div class="reviews-btn-input">
                        <button class="reviews-btn" type="button">Закрыть</button>
                        <div class="yandex">
                            <img src="@/assets/img-revievs-bl-15/202877_normal 2.svg" alt="">
                            <p><a href="">Смотреть все отзывы</a></p>
                        </div>
                    </div>

                    <div class="row-row">

                        <div class="row">
                            <div class="col-25">
                                <label for="fname">Имя</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="fname" name="firstname" placeholder="Иван">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="lname">Фамилия</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="lname" name="lastname" placeholder="Иванов">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="subject">Отзывы</label>
                            </div>
                            <div class="col-75">
                                <textarea name="subject" placeholder="Ваш отзыв (максимум 400 символов)"></textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="">Загрузка фото или видео</label>
                            </div>
                            <div class="col-75">
                                <input type="submit" id="" name="" placeholder="" value="Выбрать файл">
                                <p>Файл не выбран</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-75">
                                <label id="rev-format"> Поддерживаемые форматы:*.jpg, *.jpeg, *.avi, *.mpeg<br>
                                    Максимальный размер 50Mb.</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="">Миниатюра</label>
                            </div>
                            <div class="col-75">
                                <div class="photo-form">
                                    <img src="@/assets/img-revievs-bl-15/Rectangle 293.png" alt="">
                                    <img src="@/assets/img-revievs-bl-15/Rectangle 292.png" alt="">
                                    <img src="@/assets/img-revievs-bl-15/Rectangle 290.png" alt="">
                                    <img src="@/assets/img-revievs-bl-15/Rectangle 291.png" alt="">
                                </div>
                                <input type="submit" value="Опубликовать отзыв" id="rev_btn">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        <!-- PARTNERS-16-BLOCK -->


        <div class="title-partners">
            <div class=" title-shadow-part">
                <img src="@/assets/img-photo-gal-bl-7/Line 11.svg" alt="" id="about-gallery_3">
                <p>партнеры</p>
            </div>
        </div>
        <div class="container-partners">

            <img src="@/assets/img-partners-bl-16/logo_gray-2.png" alt="">
            <img src="@/assets/img-partners-bl-16/Partner_Card02.png" alt="">
            <img src="@/assets/img-partners-bl-16/logo_gray (1).svg" alt="">
            <img src="@/assets/img-partners-bl-16/logo_gray (1).png" alt="">
            <img src="@/assets/img-partners-bl-16/logo_gray (2).png" alt="">
            <img src="@/assets/img-partners-bl-16/logo_gray (3).png" alt="">
            <img src="@/assets/img-partners-bl-16/logo_gray (4).png" alt="">
            <img src="@/assets/img-partners-bl-16/logo_gray (5).png" alt="">

        </div>


        <!-- question-17-блок -->


        <div class="title-question">
            <div class=" title-shadow-quest">
                <img src="@/assets/img-photo-gal-bl-7/Line 11.svg" alt="" id="about-gallery_3">
                <p>Часто задаваемые вопросы</p>
            </div>
        </div>

        <div class="container-question">

            <div class="quest-block">
                <div class="quest-text">
                    <ul>
                        <li>Работает ли контрруление на низкой скорости?</li>
                        <li>Предоставляете ли вы мотоцикл для сдачи экзамена в ГИБДД?</li>
                        <li id="li-lh-3">Выдаете ли вы экипировку на время занятий на площадке?</li>
                        <li id="li-lh">Нужна ли регистрация и гражданство,чтобы учиться и сдавать экзамены на категорию
                            ”А”?</li>
                        <li>Что делать, если не сдал экзамен?</li>
                    </ul>
                </div>
                <div class="quest-box">
                    <p>
                        В обязательном порядке предоставляется защитная экипировка:
                    </p>
                    <ul>
                        <li>шлем</li>
                        <li>перчатки</li>
                        <li>защита коленей и логктей</li>
                    </ul><br>
                    <p>
                        Для обучения травмоопасным трюкам выдаётся комплект усиленной защиты:
                    </p>
                    <ul>
                        <li>"черепаха"</li>
                        <li>мотоботы</li>
                        <li> мото шорты</li>
                        <li>кроссовые шлема</li>
                        <li>усиленная защита ног</li>
                        <li>защита спины и шеи</li>
                    </ul><br>
                    <p>Вся экипировка, прилегающая к открытому телу, регулярно проходит гигиеническую обработку!</p>
                </div>
            </div>
        </div>

        <!-- CONTACT-18-BLOCK -->

        <div class="title-contact">
            <div class=" title-shadow-cont">
                <img src="@/assets/img-photo-gal-bl-7/Line 11.svg" alt="" id="about-gallery_3">
                <p>контакты</p>
            </div>
        </div>


        <div class="container-contact" id="contact">

            <div class="contact-content">
                <div class="header-menu">
                    <div class="logo">
                        <img src="@/assets/img-header/logo.svg" alt="">
                    </div>

                    <div class="nav">
                        <ul>
                            <li><a href="#course">Курсы</a></li>
                            <li><a href="#news">Новости</a> </li>
                            <li><a href="#about">О нас</a></li>
                            <li><a href="/">Контакты</a></li>
                            <li><a href="#reviews">Отзывы</a></li>
                        </ul>
                    </div>

                    <div class="social">
                        <a href="/"><img src="@/assets/img-header/whatsapp.svg"></a>
                        <a href="/"><img src="@/assets/img-header/tg.svg"></a>
                        <a href="/"><img src="@/assets/img-header/inst.svg"></a>
                        <a href="/"><img src="@/assets/img-header/vk.svg"></a>
                    </div>

                    <div class="tel">
                        <a href="tel:+79384567707">+7 938 456 77 07</a>
                    </div>
                </div>

                
                <div class="contact-course">
                    <div class="nav-cont">
                    <p><a href=""><span>Главная</span> </a><a href=".header-container"> / Курс “Категория “А”</a></p>
                </div>
                    <div class="cont-content">
                        <p id="cont-p-1">Курс “Категория “А”</p>
                        <p id="cont-p-2">Курс для получения прав категории “А”</p>
                        <p id="cont-p-3">Предназначен для людей, не умеющих управлять мотоциклом. Обучение проводится на
                            площадке с
                            удобной локацией. Вы научитесь уверенно обращаться с мотоциклом и сможете гарантированно
                            сдать
                            практический экзамен в ГИБДД </p>
                        <ul>
                            <li>15 часов практики</li>
                            <li>10 занятий</li>
                            <li>100% готовность к экзамену</li>
                        </ul>
                        <p id="cont-p-4">В стоимость подготовки включены: топливные сборы, экипировка, мотоцикл, услуги
                            инструктора,
                            дистанционное обучение и внутренний экзамен по теории ПДД.</p>

                        <div class="contact-price">
                            <p id="cont-p-5">25 000 рублей</p>
                            <button type="submit">Записаться</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>




























    </body>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },

}
</script>

<style>

</style>
