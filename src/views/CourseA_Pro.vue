<script setup>
import CourseForYou from '@/components/CourseForYou.vue'
import CourseMototehn from '@/components/CourseMototehn.vue'
import CourseInstructor from '@/components/CourseInstructor.vue'
import CourseEntry from '@/components/CourseEntry.vue'
import CourseOther from '@/components/CourseOther.vue'
import CourseContact from '@/components/CourseContact.vue'
</script>

<template>

    <body>

        <div class="course-a">
            <div class="course-a-content">
                <div class="course-header">
                    <div class="logo">
                        <router-link to="/"><img src="@/assets/img-courseA/logo.svg" alt=""></router-link>
                    </div>

                    <div class="nav-course-a">
                        <ul>
                            <li><a href="/">Курсы</a></li>
                            <li><a href="/">Новости</a> </li>
                            <li><a href="/">О нас</a></li>
                            <li><a href="/">Контакты</a></li>
                            <li><a href="/">Отзывы</a></li>
                        </ul>
                    </div>

                    <div class="social">
                        <a href="/"><img src="@/assets/img-courseA/image01.svg"></a>
                        <a href="/"><img src="@/assets/img-courseA/image02.svg"></a>
                        <a href="/"><img src="@/assets/img-courseA/svg.svg"></a>
                    </div>

                    <div class="tel">
                        <a href="tel:+79184025896">+7 918 402 58 96</a>
                    </div>
                </div>


                <div class="course-card">
                    <div class="nav-course">
                        <p><router-link to="/"><span>Главная</span></router-link><a href="#"> / Курс “Категория
                                “А”</a>
                        </p>
                    </div>
                    <div class="about-course">
                        <p id="cont-p-1">Курс “Категория “А” + “PRO”</p>
                        <p>Курс для получения прав категории “А”</p>
                        <p id="cont-p-3">Курс для вас, если ваша цель – обрести уверенность на дорогах. Вы отточите и
                            углубите свои навыки вождения, отработаете поведение на дороге в типичных городских
                            ситуациях, вместе с тренером исправите ошибки, мешающие свободно управлять мотоциклом.</p>
                        <ul>
                            <li>13 индивидуальных тренировок</li>
                            <li>19.5 часов за рулем мотоцикла</li>
                            <li>100% готовность к экзамену</li>
                        </ul>
                        <p id="cont-p-4">В стоимость подготовки включены: топливные сборы, экипировка, мотоцикл, услуги
                            инструктора.</p>

                        <div class="course-price">
                            <p id="cont-p-5">50 000 рублей</p>
                            <button type="submit">Записаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- THIS YOU CORSE-PRO-БЛОК-2 -->
        <div class="this-course-container">
            <div class="about_this-course">
                <img src="@/assets/img-about-bl-2/Line 11.svg" alt="">
                <p>Этот курс для вас если...</p>
            </div>
            <div class="this-course-content">

                <div class="course-a-grid">
                    <div class="course-a-item"><img src="@/assets/img-courseA_Pro/WhoCard01.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-courseA_Pro/WhoCard02.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-courseA_Pro/WhoCard03.png" alt=""></div>
                    <div class="course-a-item"> <img src="@/assets/img-courseA_Pro/WhoCard04.png" alt=""></div>
                </div>

                <div class="this-course-photo-block">
                    <img src="@/assets/img-courseA/Group 260.png" alt="">
                </div>
            </div>
        </div>


        <!-- MOTOTEHN-COURSE-PRO-БЛОК-3 -->
        <CourseMototehn></CourseMototehn>


        <!-- PROGRAMM-COURSE-PRO-БЛОК-4 -->

        <div class="program-course-container">
            <div class="about_program-course">
                <img src="@/assets/img-about-bl-2/Line 11.svg" alt="">
                <p>Программа курса</p>
            </div>
            <div class="program-course-content">
                <div class="programm-item-box">
                    <p class="pr-bl">1</p>
                    <p class="pr-p">Знакомство и работа с органами <br>управления мотоциклом</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">2</p>
                    <p class="pr-p">Парковка в гараж, <br>“Габаритный коридор” </p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">3</p>
                    <p class="pr-p">“Змейка”, “Восьмерка”,<br>повороты, развороты</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">4</p>
                    <p class="pr-p">Скоростное маневрирование,<br>торможение</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">5</p>
                    <p class="pr-p">Скоростное маневрирование,<br>торможение</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">6</p>
                    <p class="pr-p">Упражнения для работы с  <br>коробкой передач</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">7</p>
                    <p class="pr-p">Теоретический блок<br>(дистанционно)</p>
                </div>
            </div>
        </div>


        <!-- INSTRUCTOR COURSE-БЛОК-5 -->
        <CourseInstructor></CourseInstructor>


        <!-- RESULT-COURSE-PRO-БЛОК-6 -->

       
        <div class="result-container">
            <div class="about_result">
                <img src="@/assets/img-about-bl-2/Line 11.svg" alt="">
                <p>Результаты обучения</p>
            </div>
            <div class="result-content">
                <div class="result-text-content">

                    <div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Вы научитесь уверенно управлять мотоциклом с нуля</p>
                        </div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Освоите базовые навыки: управление,
                                парковка, маневрирование</p>
                        </div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Узнаете, как устроен мотоцикл, какие у него принципы работы и движения</p>
                        </div>
                    </div>

                    <div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Сможете успешно сдать экзамен в ГИБДД*</p>
                        </div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Научитесь справляться с проблемами, связанными<br>
                                с плохим дорожным покрытием и препятствиями на дороге
                            </p>
                        </div>
                    </div>
                </div>
                <div class="result-p">
                    <p>*Если вам исполнилось 18, то вы получите права категории “А” сразу после
                        сдачи<br>экзамена в
                        ГИБДД. В ином случае, получите их сразу после наступления 18 лет.</p>
                </div>
            </div>
        </div>


           <!-- COURSE-A-DOCUMENTS-БЛОК-7 -->

           <div class="course_a-documents-container">
            <div class="about_course_a-documents">
                <img src="@/assets/img-about-bl-2/Line 11.svg" alt="">
                <p>необходимые документы</p>
            </div>
            <div class="course_a-documents-content">
                <div class="course_a-documents-box">

                    <div class="documents-wrapper-img">
                        <img src="@/assets/img-courseA/Rectangle 165.png" alt="">
                    </div>

                    <div class="course_a-text-block">
                        <p>Чтобы записаться на этот курс вам должно быть не менее 16 лет.<br>
                            Также Вам необходимо будет предоставить нам следующие документы:
                        </p>
                        <ul>
                            <li>
                                Медсправка с допуском на категорию А, А1, М, В1 с отметками диспансеров
                                <span>(наркологического и
                                    психоневрологического по месту регистрации)</span>
                            </li>
                            <li> Паспорт и его ксерокопия (главная страница + прописка)</li>
                            <li> СНИЛС</li>
                            <li> Фотография 3x4 на матовой основе - 2 шт</li>
                        </ul>
                        <p class="dos-p">Отправить список документов на WhatsApp</p>
                        <div class="doc-btn-ipt">
                            <input type="text" placeholder="номер телефона">
                            <button type="submit">Отправить список</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ЗАПИСЬ-COURSE-PRO-БЛОК-8-->
        <CourseEntry></CourseEntry>


        <!-- ДРУГИЕ КУРСЫ-COURSE-PRO-БЛОК-9-->
        <CourseOther></CourseOther>


        <!-- CONTACT-COURSE-PRO-10-BLOCK -->
        <CourseContact></CourseContact>

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


<style scoped>
@import url(../assets/courseA_Pro.css);
</style>
