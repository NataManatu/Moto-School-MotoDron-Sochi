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
                        <p><router-link to="/"><span>Главная</span></router-link> / Разовое занятие
                        </p>
                    </div>
                    <div class="about-course">
                        <p id="cont-p-1">Разовое занятие</p>

                        <p id="cont-p-2">Не получается "Восьмерка", поворот, маневрирование, экстренное торможение? Не
                            нужно покупать повторный курс – берем разовый урок, разбираем ошибки, достигаем успеха!</p>
                        <ul>
                            <li>1 индивидуальная тренировка
                            </li>
                            <li>90 минут</li>
                        </ul>
                        <p id="cont-p-3">В стоимость подготовки включены: топливные сборы, экипировка, мотоцикл, услуги
                            инструктора.</p>

                        <div class="course-price">
                            <p id="cont-p-5">4 000 рублей</p>
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
                    <div class="course-a-item"><img src="@/assets/img-CourseOneVisit/WhoCard01.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-CourseOneVisit/WhoCard02.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-CourseOneVisit/WhoCard03.png" alt=""></div>
                    <div class="course-a-item"> <img src="@/assets/img-CourseOneVisit/WhoCard04.png" alt=""></div>
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
                    <p class="pr-p">Всё занятие будет посвящено<br> решению вашей задачи</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">2</p>
                    <p class="pr-p">Состав занятия вы сможете предва-<br>рительно обсудить с инструктором</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">3</p>
                    <p class="pr-p">Занимаетесь индивидуально</p>
                </div>
            </div>
        </div>

        <!-- INSTRUCTOR COURSE-БЛОК-5 -->
        <CourseInstructor></CourseInstructor>

        <!-- RESULT-COURSE-PRO-БЛОК-6 -->

        <div class="result-container">
            <div class="about_result">
                <img src="@/assets/img-about-bl-2/Line 11.svg" alt="">
                <p>результаты обучения</p>
            </div>
            <div class="result-content">
                <div class="result-text-content">
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Вы повысите своё<br>мастерство водителя</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Сможете,наконец,отточить до совершенства выполнение<br>элементов,которые раньше вызывали сложности</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Получите квалифицированные рекомендации <br>
                            и поддержку опытного инструктора</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ЗАПИСЬ-COURSE-PRO-БЛОК-7-->
        <CourseEntry></CourseEntry>


        <!-- ДРУГИЕ КУРСЫ-COURSE-PRO-БЛОК-8-->
        <CourseOther></CourseOther>


        <!-- CONTACT-COURSE-PRO-9-BLOCK -->
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
@import url(../assets/CourseOneVisit.css);
</style>
