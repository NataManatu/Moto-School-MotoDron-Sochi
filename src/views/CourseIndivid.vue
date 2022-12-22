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
                        <p><router-link to="/"><span>Главная</span></router-link> / Курс “Индивидуальный”
                        </p>
                    </div>
                    <div class="about-course">
                        <p id="cont-p-1">Курс “Индивидуальный”</p>
                        <p id="cont-p-2">Выстраиваем программу в соответствии с вашими задачами и пожеланиями с учетом
                            ваших навыков.</p>

                        <p id="cont-p-3"> Безопасно грамотно быстро приведем вас к цели, поможем исправить ошибки,
                            научим чувствовать себя уверенно за рулем в любых условиях.</p>

                        <p id="cont-p-4">Количество часов и продолжительность курса зависят от ваших навыков и задач.
                        </p>
                        <p id="cont-p-5">В стоимость подготовки включены: топливные сборы, экипировка, мотоцикл, услуги инструктора.</p>

                        <div class="course-price">
                           
                            <button type="submit">Записаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- THIS YOU CORSE-PRO-БЛОК-2 -->

        <div class="this-course-container">
            <div class="about_this-course">
                <img src="@/assets/img-about-bl-2/Line11.svg" alt="">
                <p>Этот курс для вас если...</p>
            </div>
            <div class="this-course-content">

                <div class="course-a-grid">
                    <div class="course-a-item"><img src="@/assets/img-CourseIndivid/WhoCard01.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-CourseIndivid/WhoCard02.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-CourseIndivid/WhoCard03.png" alt=""></div>
                    <div class="course-a-item"> <img src="@/assets/img-CourseIndivid/WhoCard04.png" alt=""></div>
                </div>

                <div class="this-course-photo-block">
                    <img src="@/assets/img-courseA/Group260.png" alt="">
                </div>
            </div>
        </div>

        <!-- MOTOTEHN-COURSE-PRO-БЛОК-3 -->
        <CourseMototehn></CourseMototehn>



        <!-- INSTRUCTOR COURSE-БЛОК-4 -->
        <CourseInstructor></CourseInstructor>

        <!-- RESULT-COURSE-PRO-БЛОК-5 -->

        <div class="result-container">
            <div class="about_result">
                <img src="@/assets/img-about-bl-2/Line11.svg" alt="">
                <p>результаты обучения</p>
            </div>
            <div class="result-content">
                <div class="result-text-content">
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Получите программу, составленную лично для вас,<br>включающую только те элементы обучения,которые<br>вам по-настоящему нужны</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Вы сможете отточить своё мастерство вождения, в<br>соответствии со своими задачами</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ЗАПИСЬ-COURSE-PRO-БЛОК-6-->
        <CourseEntry></CourseEntry>


        <!-- ДРУГИЕ КУРСЫ-COURSE-PRO-БЛОК-7-->
        <CourseOther></CourseOther>


        <!-- CONTACT-COURSE-PRO-8-BLOCK -->
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
@import url(../assets/CourseIndivid.css);
</style>
