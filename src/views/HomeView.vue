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
            <div class="header-container" id="home">
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

                    <div class="button-gpoup">
                        <div class="wrapper">
                            <router-link to="/coursePro" type="button"> Курс “Pro”</router-link>
                            <router-link to="/coursea" type="button"> Категория “А”</router-link>
                        </div>
                        <button type="button" id="btn3">Записаться</button>
                    </div>
                </div>
            </div>
        </header>

        <!--ABOUT-- 2 блок -->

        <div class="about" id="about">

            <div class="about_logo">
                <img src="@/assets/img-about-bl-2/Line11.svg" alt="">
                <p>о нас</p>
            </div>

            <div class="about-content">

                <div class="about-text">
                    <p>Освойте базовые и профессиональные навыки вождения мотоцикла в Сочи, Адлере, Красной поляне.
                        Обучаем с нуля по гос. регламенту для сдачи экзамена на категорию "А" и для уверенного
                        свободного управления мотоциклом, в том числе в экстремальных условиях.
                    </p>
                    <br>
                    <p> Инструкторы с водительским стажем более 20 лет и многолетним опытом подготовки мотоциклистов,
                        подтвержденным дипломами и сертификатами. Собственный мотопарк с техникой как для подготовки на
                        категорию "А", так и для профессионального вождения в городе.
                    </p>
                </div>

                <div class="about-img-modul">
                    <img src="@/assets/img-about-bl-2/pic-1.png" alt="" id="pic-1">
                    <img src="@/assets/img-about-bl-2/pic-5.png" alt="" id="pic-5">
                    <img src="@/assets/img-about-bl-2/pic-4.png" alt="" id="pic-4">
                    <img src="@/assets/img-about-bl-2/pic-3.png" alt="" id="pic-3">
                    <img src="@/assets/img-about-bl-2/pic-2.png" alt="" id="pic-2">
                </div>

            </div>
        </div>

        <!-- WHY ARE WE--3 блок -->

        <div class="why">
            <div class="why-title">
                <img src="@/assets/img-why-bl-3/Line11.svg" alt="">
                <p>почему мы?</p>
            </div>

            <div class="why-content">
                <div class="why-content-wrapper-img">
                    <img src="@/assets/img-why-bl-3/Image.png" alt="" id="why-img-content">
                </div>
                <div class="why-text-block">
                    <div class="block-1">
                        <img src="@/assets/img-why-bl-3/01.svg" alt="" id="why-svg">
                        <p id="title">ОПЫТ</p>
                        <p id="text">Наши инструкторы – не только опытные мотоциклисты, но и отличные педагоги со
                            знанием психологии, методик преподавания. Все они регулярно повышают квалификацию,
                            оттачивают мастерство – даже если вы когда-то уже отучились на наших курсах, всё равно
                            узнаете что-то новое, если придете снова.
                        </p>
                    </div>
                    <div class="block-2">
                        <img src="@/assets/img-why-bl-3/02.svg" alt="" id="why-svg">
                        <p id="title">ОТВЕТСТВЕННОСТЬ</p>
                        <p id="text">Бескомпромиссное отношение к ошибкам и тщательная проработка каждой из них в
                            процессе обучения не оставят вам шанса на провал на экзамене в ГИБДД или в реальных условиях
                            на дороге.</p>
                    </div>
                    <div class="block-3">
                        <img src="@/assets/img-why-bl-3/03.svg" alt="" id="why-svg">
                        <p id="title">ГИБКИЙ ГРАФИК <br>ТРЕНИРОВОК</p>
                        <p id="text">Тренируемся с вами один на один. Никаких групповых занятий. Всё время, отведенное
                            для практических занятий, и внимание инструктора достанутся только вам. Адаптируем каждое
                            занятие под ваши задачи.</p>
                    </div>
                    <div class="block-4">
                        <img src="@/assets/img-why-bl-3/04.svg" alt="" id="why-svg">
                        <p id="title">ИНДИВИДУАЛЬНЫЙ<br> ПОДХОД</p>
                        <p id="text">Вы сами назначаете удобное вам время каждой тренировки. Адаптируйте обучение под
                            свой график и задачи. Тренировка раз в неделю? - пожалуйста! Каждый день? - не вопрос! Три
                            дня подряд и перерыв две недели? - так тоже можно. </p>
                    </div>
                </div>
            </div>
        </div>

        <!--COURSE-- 4 блок -->

        <div class="course" id="course">
            <div class="course-title">
                <img src="@/assets/img-course-bl-4/Line11.svg" alt="" id="">
                <p>наши курсы</p>
            </div>

            <div class="content-vector">
                <button @click="butVect1" class="but_vect1">
                    <div id="vector-1"><img src="@/assets/img-course-bl-4/Vector10.png" alt=""></div>
                </button>
                <button @click="butVect2" class="but_vect2">
                    <div id="vector-2"><img src="@/assets/img-course-bl-4/Vector-101.png" alt=""></div>
                </button>
            </div>

            <div class="course-content" id="course-content">
                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image-1.png" alt="" id="cours_img">
                        <div id="price">25 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>КAТЕГОРИЯ “А”</h1>
                        <div class="course-text-p">
                            <p>Курс для тех, кто планирует получать права категории “А”. С нами вы не только блестяще
                                сдадите практический экзамен в ГИБДД,
                                но по-настоящему научитесь управлять мотоциклом.
                            </p>
                        </div>
                        <!-- <router-link to="/coursea" type="button" id="why-btn"> Категория “А”</router-link> -->
                        <router-link to="/coursea">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>


                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image.png" alt="" id="cours_img">
                        <div id="price">35 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>“PRO”</h1>
                        <div class="course-text-p">
                            <p>Профессиональная программа для тех, кому важно максимально полно изучить устройство
                                мотоцикла
                                и освоить основные навыки вождения. Вы научитесь уверенно безопасно управлять мотоциклом
                                на
                                малых и средних скоростях, отработаете правильный алгоритм торможения.
                            </p>
                        </div>
                        <router-link to="/coursePro">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>

                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image1-1.png" alt="" id="cours_img">
                        <div id="price">50 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Категория “А” + “PRO”</h1>
                        <div class="course-text-p">
                            <p>Курс для вас, если ваша цель – обрести уверенность на дорогах. Вы отточите и углубите
                                свои
                                навыки вождения, отработаете поведение на дороге в типичных городских ситуациях, вместе
                                с
                                тренером исправите ошибки, мешающие свободно управлять мотоциклом.
                            </p>
                        </div>
                        <router-link to="/courseA_Pro">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>

                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image2.png" alt="" id="cours_img">
                        <div id="price">60 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>“КонтрАварийный”</h1>
                        <div class="course-text-p">
                            <p>Подготовьтесь к любым неожиданностям на дороге, научитесь справляться с нестандартными
                                дорожными ситуациями. На курсе вы отработаете реакцию на внезапные препятствия, освоите
                                технику скоростных поворотов и навык экстренного торможения.
                            </p>
                        </div>
                        <router-link to="/courseContr">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>

                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image3.png" alt="" id="cours_img">
                        <div id="price">70 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1 id="course-text-h1">Категория “А”+<br>“КонтрАварийный”</h1>
                        <div class="course-text-p">
                            <p>Профессиональный курс вождения + категория А. Комплекс авторских упражнений, разработанный на базе профессиональных курсов вождения для специальных служб. На курсе вы освоите навыки вождения, необходимые не только в привычных стабильных условиях тренировочной площадки, но и при вождении в городе.
                            </p>
                        </div>
                        <router-link to="/courseA_Contr">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image4.png" alt="" id="cours_img">
                        <div id="price">19 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>“Городской”</h1>
                        <div class="course-text-p">
                            <p>Полноценное обучение в реальных городских условиях. Выезд в тандеме с инструктором. После
                                обучения вы точно будет знать, где держаться в полосе, какие слепые зоны есть у
                                автомобилистов и мотоциклистов, научитесь проезжать разметку, лужи, неровности,
                                разворачиваться, ездить между рядами и взаимодействовать с другими ТС.
                            </p>
                        </div>
                        <router-link to="/CourseGorod">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image5.png" alt="" id="cours_img">
                    </div>

                    <div class="course-text">
                        <h1>Индивидуальный курс</h1>
                        <div class="course-text-p">
                            <p>Выстраиваем программу в соответствии с вашими задачами и пожеланиями с учетом ваших
                                навыков.
                                Безопасно грамотно быстро приведем вас к цели, поможем исправить ошибки, научим
                                чувствовать
                                себя уверенно за рулем в любых условиях.
                            </p>
                        </div>
                        <router-link to="/CourseIndivid">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image6.png" alt="" id="cours_img">
                        <div id="price">4 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Разовое занятие</h1>
                        <div class="course-text-p">
                            <p>Не получается "Восьмерка", поворот, маневрирование, экстренное торможение? Не нужно
                                покупать
                                повторный курс – берем разовый урок, разбираем ошибки, достигаем успеха!
                            </p>
                        </div>
                        <router-link to="/CourseOneVisit">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image7.png" alt="" id="cours_img">
                        <div id="price-b">БЕСПЛАТНО</div>
                    </div>

                    <div class="course-text">
                        <h1>Бесплатное пробное</h1>
                        <div class="course-text-p">
                            <p>Инструктаж + практика для тех, кто пока не определился, какой курс выбрать и хочется ли
                                вообще становиться учеником нашей мотошколы. Курс – также тест-драйв для новичков,
                                которые
                                впервые садятся за руль и хотят понять, как это – управлять мотоциклом.
                            </p>
                        </div>
                        <router-link to="/CourseTrialSession">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image8.png" alt="" id="cours_img">
                        <div id="price">7 500 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Мопед</h1>
                        <div class="course-text-p">
                            <p>Научитесь управлять скутером в реальных условиях. Большое внимание уделяем навыкам
                                безопасного торможения и умению “чувствовать” поведение техники. Собираетесь и
                                планируете
                                арендовать там мотороллер? Работаете в доставке или купили мопед для себя? Обучим
                                базовым
                                навыкам вождения.
                            </p>
                        </div>
                        <router-link to="/CourseMoped">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image9.png" alt="" id="cours_img">
                        <div id="price">15 000 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Детский</h1>
                        <div class="course-text-p">
                            <p>Мотоспорт отлично развивает силу, реакцию, выносливость. Обучаем детей с 7 лет, для ребят
                                у
                                нас специальная мототехника. А инструкторы умеют находить подход как каждому ученику.
                            </p>
                        </div>
                        <router-link to="/CourseChild">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>
                </article>

                <article class="course-program-card">
                    <div class="course-img">
                        <img src="@/assets/img-course-bl-4/Image10.png" alt="" id="cours_img">
                        <div id="price">3 500 ₽</div>
                    </div>

                    <div class="course-text">
                        <h1>Тренажер “Вилли-паук”</h1>
                        <div class="course-text-p">
                            <p>Вилли машина и Вилли Паук – безопасные тренажеры для отработки базовых навыков исполнения
                                “вилли” (езде на заднем колесе) на мотоцикле любого класса. Установка помогает развить
                                чувство баланса.
                            </p>
                        </div>
                        <router-link to="/CourseSpider">
                            <button type="button" id="why-btn">Подробнее</button>
                        </router-link>
                    </div>
                </article>
            </div>
        </div>

        <!-- ENTRY--блок-5 -->

        <div class="entry">

            <div class="entry-title">
                <img src="@/assets/img-entry-bl-5/Line11.svg" alt="">
                <p>он ждет тебя</p>
            </div>

            <div class="entry-content">

                <h1>ЗАПИШИТЕСЬ<br> НА БЕСПЛАТНОЕ <br>ПРОБНОЕ ЗАНЯТИЕ</h1>

                <div class="entry-block ">
                    <p>Это абсолютно бесплатно! Никаких скрытых платежей и сборов на бензин. Посещение пробного занятия
                        не обязывает вас покупать какой-либо курс и не входит в его стоимость.
                    </p>

                    <div class="entry-inp-btn">
                        <div class="entry-input">
                            <input type="tel" placeholder="Номер телефона ">
                        </div>

                        <button type="submit" id="#entry-button">Записаться</button>
                    </div>

                    <p class="entry-p" id="p">Нажимая кнопку “Записаться” вы солгашаетесь<br>с
                        <a href="/">Политикой Конфиденциальности.</a>
                    </p>
                </div>
            </div>
        </div>

        <!-- BEE-MOTO--блок-6 -->

        <div class="bee-moto">
            <div class="bee-moto-title">
                <img src="@/assets/img-entry-bl-5/Line11.svg">
                <p>быть мотоциклистом</p>
            </div>

            <div class="be-moto-content">
                <div class="bee-moto-slogan">
                    <p> Значит открывать для себя новые грани свободы. Кайфовать от скорости, но всегда помнить
                        о безопасности. Узнавать, на что ты способен
                        по-настоящему и чувствовать себя уверенно
                        не только на дороге, но и в жизни.</p>
                </div>

                <div class="bee-moto-content-1">
                    <div class="t-text">
                        <img src="@/assets/img-bee-moto-bl-6/01.svg" alt="" id="t-1">
                        <div class="title-1">
                            <p id="t-text">Путешествия</p>

                            <p id="p-text">Романтика дороги и свобода передвижения, когда можно быстро без пробок
                                преодолеть большие расстояния, привлекает многих. Если использовать мотоцикл не на
                                гоночном треке и не в городе для поездок на работу, то путешествия – определенно в топе
                                причин отучиться у нас.
                            </p>
                        </div>
                    </div>

                    <img src="@/assets/img-bee-moto-bl-6/Rectangle-160.png" alt="" id="be-moto-img-1">
                </div>

                <div class="bee-moto-content-2">
                    <img src="@/assets/img-bee-moto-bl-6/sunset-motorcycle-acrobatics-silhouette 1 (1).png" alt=""
                        id="be-img-1">
                    <img src="@/assets/img-bee-moto-bl-6/image-162.png" alt="" id="be-img-2">
                    <div class="t-text-2">
                        <div class="title-2">
                            <img src="@/assets/img-bee-moto-bl-6/02.svg" alt="" id="t-2">
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
                        <p id="p-text-3">Мотоцикл помогает справиться
                            с кризисами в жизни. Мотоспорт
                            или просто навык езды на двух колесах может стать новым хобби, теми самыми долгожданными
                            переменами, поводом расширить круг общения, узнать себя
                            с иной непривычной стороны.
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
                        <p id="p-text">В мотокругах норма – помогать другому мотоциклисту, поддерживать друг друга
                            не только на дороге. Дух взаимопомощи
                            часто объединяет этих людей. Общайтесь
                            с теми, с кем вам, действительно, интересно, кто “на одной волне” с вами и разделяет ваши
                            ценности.
                        </p>
                    </div>
                </div>

                <div class="bee-moto-content-5">
                    <div class="t-text">
                        <div class="title-05">
                            <img src="@/assets/img-bee-moto-bl-6/05.svg" alt="" id="t-05">
                            <p id="t-text">ПобедА над страхом</p>
                        </div>
                        <p id="p-text">Вы способны на большее, чем думаете
                            о себе. Сделайте шаг к знаниям и опыту, чтобы развеять сомнения. После обучения
                            на наших курсах вы не будете задумываться об управлении – научитесь “чувствовать” технику,
                            превратите вождение мотоцикла
                            в естественный комфортный процесс.
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
                            страха — в будущем, а он освобожден от будущего и ему нечего бояться.</p>

                        <p id="autor-name">Милан Кундера, из книги «Неспешность»</p>
                    </div>

                    <div class="cav-down">
                        <img src="@/assets/img-bee-moto-bl-6/quotes-2.svg" alt="">
                        <img src="@/assets/img-bee-moto-bl-6/quotes-2.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- блок-7 -фотогаллерея-->

        <div class="photo-gallery">

            <div class="photo-gallery-title">
                <img src="@/assets/img-photo-gal-bl-7/Line11.svg" alt="">
                <p>Фотогаллерея</p>
            </div>

            <div class="gallery-block-grid">
                <div class="grid-item" id="grid-41"><img src="@/assets/img-photo-gal-bl-7/Rectangle41.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-42"><img src="@/assets/img-photo-gal-bl-7/Rectangle42.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-60"><img src="@/assets/img-photo-gal-bl-7/Rectangle60.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-62"><img src="@/assets/img-photo-gal-bl-7/Rectangle-62.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-63"><img src="@/assets/img-photo-gal-bl-7/Rectangle-63.png"
                        class="gallery__img" alt=""></div>


                <div class="grid-item" id="grid-67"><img src="@/assets/img-photo-gal-bl-7/Rectangle67.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-41-b"><img src="@/assets/img-photo-gal-bl-7/Rectangle41-1.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-177"><img src="@/assets/img-photo-gal-bl-7/Rectangle177.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-178"><img src="@/assets/img-photo-gal-bl-7/Rectangle178.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-64-1"><img src="@/assets/img-photo-gal-bl-7/Rectangle641.png"
                        class="gallery__img" alt="">
                </div>

                <div class="grid-item" id="grid-61"><img src="@/assets/img-photo-gal-bl-7/Rectangle61.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-64"><img src="@/assets/img-photo-gal-bl-7/Rectangle64.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-42-1"><img src="@/assets/img-photo-gal-bl-7/Rectangle421.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-54"><img src="@/assets/img-photo-gal-bl-7/Rectangle-54.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-60-1"><img src="@/assets/img-photo-gal-bl-7/Rectangle601.png"
                        class="gallery__img" alt="">
                </div>


                <div class="grid-item" id="grid-61-1"><img src="@/assets/img-photo-gal-bl-7/Rectangle611.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-179"><img src="@/assets/img-photo-gal-bl-7/Rectangle179.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-180"><img src="@/assets/img-photo-gal-bl-7/Rectangle180.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-65"><img src="@/assets/img-photo-gal-bl-7/Rectangle65.png"
                        class="gallery__img" alt="">
                </div>
                <div class="grid-item" id="grid-66"><img src="@/assets/img-photo-gal-bl-7/Rectangle66.png"
                        class="gallery__img" alt="">
                </div>
            </div>
        </div>

        <!--GARAGE-- 8 блок -->

        <div class="garage">
            <div class="garage-title">
                <img src="@/assets/img-garage-bl-8/Line11.svg" alt="">
                <p>Наш гараж</p>
            </div>

            <div class="garage-content">

                <div class="garage-text">
                    <p id="garage-text">Ознакомьтесь с техникой, на которой проходит обучение. Мы следим, чтобы наш
                        мотопарк получал своевременное качественное ТО во избежание аварий, травм и нештатных ситуаций.
                        Ваша безопасность – наш приоритет.
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

                <div class="garage-img">
                    <img src="@/assets/img-garage-bl-8/prev_card.png" alt="" id="garage-img-1">
                    <img src="@/assets/img-garage-bl-8/Rectangle36.png" alt="" id="garage-img-2">
                    <img src="@/assets/img-garage-bl-8/next_card1.png" alt="" id="garage-img-3">
                    <img src="@/assets/img-garage-bl-8/next_card2.png" alt="" id="garage-img-4">
                </div>

                <div class="vector-nav">
                    <div id="vector-3"><img src="@/assets/img-garage-bl-8/Vector10.png" alt=""></div>

                    <sup id="sup-1">1</sup>
                    <img src="@/assets/img-garage-bl-8/Line55.svg" alt="" id="line-55">
                    <sub id="sub-2">4</sub>

                    <div id="vector-4"><img src="@/assets/img-garage-bl-8/Vector101.png" alt=""></div>
                </div>
            </div>
        </div>


        <!--COMMAND-- блок-9- -->

        <div class="command">

            <div class="command-title">
                <img src="@/assets/img-command-bl-9/Line-11.svg" alt="">
                <p>команда</p>

            </div>

            <div class="command-content">
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
                                Сочетание стильного дизайна и превосходных технических характеристик порадуют как
                                новичка,
                                так и
                                опытного райдера. Boxer BM 150 - это идеальная комбинация мощности
                                и топливной эффективности.</p>
                        </div>
                        <img src="@/assets/img-command-bl-9/Photo-1.png" alt="" id="photo-instr">
                    </div>
                </div>


                <div class="instructor-card-2">
                    <div class="content-card-2">
                        <img src="@/assets/img-command-bl-9/Photo2.png" alt="" id="photo-instr">
                        <div class="text-card">
                            <img src="@/assets/img-command-bl-9/Инструктор.png" alt="" id="instructor-text-p-1">
                            <p id="instructor-text-p-2">Ефимов Андрей</p>
                            <p id="instructor-text-p-3">Легкий индийский дорожный мотоцикл. Имеет классический дизайн с
                                минимумом пластиковых
                                деталей.Выносливый и эффективный, что делает его отличным мотоциклом для городских и
                                длительных
                                поездок по пересеченной местности.<br><br>
                                Сочетание стильного дизайна и превосходных технических характеристик порадуют как
                                новичка,
                                так и
                                опытного райдера. Boxer BM 150 - это идеальная комбинация мощности
                                и топливной эффективности.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- BIKE--блок-10-->

        <div class="bike">

            <div class="bike-title">
                <img src="@/assets/img-bike-bl-10/Line-11.svg" alt="">
                <p>выбери свой байк</p>
            </div>

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
            <div class="news-title">
                <img src="@/assets/img-news-bl-11/Line11.svg" alt="">
                <p>новости и события</p>
            </div>

            <div class="news-content">

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle111.png" alt="" id="news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle2.png" alt="" id="news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle1111.png" alt="" id="news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle1112.png" alt="" id="news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>11</p>
                            </div>
                        </div>
                    </div>
                </article>


                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle1113.png" alt="" id="news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle1114.png" alt="" id="news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle1115.png" alt="" id="news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle1116.png" alt="" id="news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="news-program-card">
                    <div class="article-header">
                        <img src="@/assets/img-news-bl-11/Rectangle1117.png" alt="" id=" news_img-1">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
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
                                <img src="@/assets/img-news-bl-11/img_5438331Traced.svg" alt="" id="svg_mess">
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </article>

                <div class="see-news">
                    <p><router-link to="/NewsPage" type="button"> Смотреть все новости</router-link></p>
                </div>
            </div>
        </div>


        <!-- workout 12-блок  -->


        <div class="workout">
            <div class="workout-title">
                <img src="@/assets/img-news-bl-11/Line11.svg" alt="">
                <p>тренировки</p>
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
                <div id="vector-3"><img src="@/assets/img-garage-bl-8/Vector10.png" alt=""></div>
                <sup id="sup-1">1</sup>
                <img src="@/assets/img-garage-bl-8/Line55.svg" alt="" id="line-55">
                <sub id="sub-2">9</sub>
                <div id="vector-4"><img src="@/assets/img-garage-bl-8/Vector101.png" alt=""></div>
            </div>


        </div>


        <!-- STATISTIC-блок-13 -->


        <div class="statistic">

            <div class="statistic-title">
                <img src="@/assets/img-statistic-bl-13/Line-11.svg" alt="">
                <p>Статистика</p>
            </div>
            <div class="statistic-content">
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
                        <img src="@/assets/img-statistic-bl-13/1371.svg" alt="" id="article-statistic-img">
                        <p id="title-article">Мото-часов</p>
                        <div class="article-stat-text">
                            <p>Проведено на треке и пересеченной местности вместе с учениками провели уже более тысячи
                                тренировок, каждый раз выкладываясь полностью занятий и отзывам курсантов, которые (3-5
                                строк)</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>


        <!-- DOCUMENTS-14-БЛОК -->

        <div class="documents">

            <div class="title-documets">
                <img src="@/assets/img-photo-gal-bl-7/Line11.svg" alt="">
                <p>наши документы</p>
            </div>


            <div class="documents-block-grid">
                <div class="item-blok-grid" id="doc-42"><img src="@/assets/img-doc-bl-14/Rectangle42.png" alt=""></div>
                <div class="item-blok-grid" id="doc-60"><img src="@/assets/img-doc-bl-14/Rectangle60.png" alt=""></div>
                <div class="item-blok-grid" id="doc-67"><img src="@/assets/img-doc-bl-14/Rectangle67.png" alt=""></div>
                <div class="item-blok-grid" id="doc-61"><img src="@/assets/img-doc-bl-14/Rectangle61.png" alt=""></div>
                <div class="item-blok-grid" id="doc-177"><img src="@/assets/img-doc-bl-14/Rectangle177.png" alt="">
                </div>
                <div class="item-blok-grid" id="doc-178"><img src="@/assets/img-doc-bl-14/Rectangle178.png" alt="">
                </div>
                <div class="item-blok-grid" id="doc-64-1"><img src="@/assets/img-doc-bl-14/Rectangle64-1.png" alt="">
                </div>

                <div class="item-blok-grid" id="doc-64"><img src="@/assets/img-doc-bl-14/Rectangle64.png" alt=""></div>
                <div class="item-blok-grid" id="doc-41"><img src="@/assets/img-doc-bl-14/Rectangle41.png" alt=""></div>
                <div class="item-blok-grid" id="doc-179"><img src="@/assets/img-doc-bl-14/Rectangle179.png" alt="">
                </div>
                <div class="item-blok-grid" id="doc-180"><img src="@/assets/img-doc-bl-14/Rectangle180.png" alt="">
                </div>

                <div class="item-blok-grid" id="doc-181"><img src="@/assets/img-doc-bl-14/Rectangle181.png" alt="">
                </div>
                <div class="item-blok-grid" id="doc-182"><img src="@/assets/img-doc-bl-14/Rectangle182.png" alt="">
                </div>
                <div class="item-blok-grid" id="doc-60-1"><img src="@/assets/img-doc-bl-14/Rectangle60-1.png" alt="">
                </div>
                <div class="item-blok-grid" id="doc-42-1"><img src="@/assets/img-doc-bl-14/Rectangle42-1.png" alt="">
                </div>
            </div>
        </div>



        <!-- ОТЗЫВЫ-15-блок -->


        <div class="reviews" id="reviews">
            <div class="reviews-title">

                <img src="@/assets/img-revievs-bl-15/Line11.svg" alt="">
                <p>отзывы</p>

            </div>
            <div class="reviews-content">
                <div class="reviews-photo-flex">
                    <div class="rev-photo-text-1">
                        <img src="@/assets/img-revievs-bl-15/Photo.png" alt="">
                    </div>

                    <div class="rev-photo-text-2">
                        <img src="@/assets/img-revievs-bl-15/Photo1.png" alt="">
                    </div>
                    <div class="rev-photo-text-2">
                        <img src="@/assets/img-revievs-bl-15/Photo2.png" alt="">
                    </div>

                    <div class="rev-photo-text-4">
                        <img src="@/assets/img-revievs-bl-15/Photo3.png" alt="">
                    </div>



                    <img src="@/assets/img-revievs-bl-15/Photo4.png" alt="">
                    <img src="@/assets/img-revievs-bl-15/Photo5.png" alt="">
                    <img src="@/assets/img-revievs-bl-15/Photo6.png" alt="">
                    <img src="@/assets/img-revievs-bl-15/Photo7.png" alt="">
                </div>

                <div class="reviews-form" id="">

                    <form action="">

                        <div class="reviews-btn-input">
                            <button class="reviews-btn" type="button">Закрыть</button>
                            <div class="yandex">
                                <img src="@/assets/img-revievs-bl-15/202877_normal2.svg" alt="">
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
                                        <img src="@/assets/img-revievs-bl-15/Rectangle293.png" alt="">
                                        <img src="@/assets/img-revievs-bl-15/Rectangle292.png" alt="">
                                        <img src="@/assets/img-revievs-bl-15/Rectangle290.png" alt="">
                                        <img src="@/assets/img-revievs-bl-15/Rectangle291.png" alt="">
                                    </div>
                                    <input type="submit" value="Опубликовать отзыв" id="rev_btn">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <!-- PARTNERS-16-BLOCK -->

        <div class="parters">

            <div class="title-partners">
                <img src="@/assets/img-photo-gal-bl-7/Line11.svg" alt="">
                <p>партнеры</p>
            </div>

            <div class="container-partners">

                <img src="@/assets/img-partners-bl-16/logo_gray_02.png" alt="">
                <img src="@/assets/img-partners-bl-16/Partner_Card02.png" alt="">
                <img src="@/assets/img-partners-bl-16/logo_gray_1.svg" alt="">
                <img src="@/assets/img-partners-bl-16/logo_gray01.png" alt="">
                <img src="@/assets/img-partners-bl-16/logo_gray12.png" alt="">
                <img src="@/assets/img-partners-bl-16/logo_gray_3.png" alt="">
                <img src="@/assets/img-partners-bl-16/logo_gray_4.png" alt="">
                <img src="@/assets/img-partners-bl-16/logo_gray_5.png" alt="">

            </div>
        </div>



        <!-- question-17-блок -->


        <div class="question">

            <div class=" title-quest">
                <img src="@/assets/img-photo-gal-bl-7/Line11.svg" alt="" id="about-gallery_3">
                <p>Часто задаваемые вопросы</p>
            </div>

            <div class="question-content">

                <div class="quest-block">
                    <div class="quest-text">
                        <ul>
                            <li>Работает ли контрруление на низкой скорости?</li>
                            <li>Предоставляете ли вы мотоцикл для сдачи экзамена в ГИБДД?</li>
                            <li id="li-lh-3">Выдаете ли вы экипировку на время занятий на площадке?</li>
                            <li id="li-lh">Нужна ли регистрация и гражданство,чтобы учиться и сдавать экзамены на
                                категорию
                                ”А”?</li>
                            <li>Что делать, если не сдал экзамен?</li>
                        </ul>
                    </div>
                    <!-- <div class="quest-box">
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
                    </div> -->
                </div>
            </div>
        </div>

        <!-- CONTACT-18-BLOCK -->

        <div class="contact" id="contact">
            <div class=" title-contact">
                <img src="@/assets/img-photo-gal-bl-7/Line11.svg" alt="" id="about-gallery_3">
                <p>контакты</p>
            </div>
            <div class="contact-mess">
                <div class="mess-block">
                    <div class="mess-col">
                        <img src="@/assets/img-cont-bl-18/icon.svg" alt="">
                        <p>E-mail</p>
                        <p class="mess-cont"><a href="#">dronmotoshkola@yandex.ru</a></p>
                    </div>
                    <div class="mess-col">
                        <img src="@/assets/img-cont-bl-18/icon01.svg" alt="">
                        <p>Мессенджеры</p>
                        <div class="mess-cont-p">
                            <p class="mess-cont"><a href="#">Начать чат в WhatsApp</a><br>
                                <a href="#">Начать чат в Telegram</a>
                            </p>
                        </div>
                    </div>
                    <div class="mess-col">
                        <img src="@/assets/img-cont-bl-18/icon02.svg" alt="">
                        <p>Телефон</p>
                        <p class="mess-cont"><a href="#">+7 938 456 77 07</a></p>
                    </div>
                    <div class="mess-col">
                        <img src="@/assets/img-cont-bl-18/icon03.svg" alt="">
                        <p>Офис</p>
                        <p class="mess-cont"><a href="#">Сочи, переулок Бригадный 1</a></p>
                    </div>
                </div>
                <hr>

                <div class="contact-container" id="">
                    <div class="contact-logo">
                        <router-link to="/"><img src="@/assets/img-header/logo.svg" alt=""></router-link>
                    </div>

                    <div class="contact-nav">
                        <ul>
                            <li><a href="#course">Курсы</a></li>
                            <li><a href="#news">Новости</a> </li>
                            <li><a href="#about">О нас</a></li>
                            <li><a href="/">Контакты</a></li>
                            <li><a href="#reviews">Отзывы</a></li>
                        </ul>
                    </div>

                    <div class="social-contact-futer">
                        <a href="/"><img src="@/assets/img-cont-bl-18/WA.svg"></a>
                        <a href="/"><img src="@/assets/img-cont-bl-18/TG.svg"></a>
                        <a href="/"><img src="@/assets/img-cont-bl-18/IN.svg"></a>
                        <a href="/"><img src="@/assets/img-cont-bl-18/VK.svg"></a>
                    </div>

                    <div class="contact-tel">
                        <a href="tel:+79384567707">+7 938 456 77 07</a>
                    </div>
                </div>

                <div class="contact-futer">
                    <p><a href="#">Политика Конфиденциальности</a></p>
                    <p>designed by <span>dixa </span>2022</p>
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
