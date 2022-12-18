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
                        <p id="cont-p-1">Курс “Городской”</p>

                        <p id="cont-p-3">Полноценное обучение в реальных городских условиях. Выезд в тандеме с
                            инструктором. Новые навыки вы осваиваете в процессе езды, общаетесь с инструктором через
                            гарнитуру.</p>
                        <ul>
                            <li>3 выезда</li>
                            <li>4.5 часа за рулем</li>
                        </ul>
                        <p id="cont-p-4">В стоимость подготовки включены: топливные сборы, экипировка, мотоцикл, услуги
                            инструктора.</p>

                        <div class="course-price">
                            <p id="cont-p-5">19 000 рублей</p>
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
                    <div class="course-a-item"><img src="@/assets/img-CourseGorod/WhoCard01.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-CourseGorod/WhoCard02.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-CourseGorod/WhoCard03.png" alt=""></div>
                    <div class="course-a-item"> <img src="@/assets/img-CourseGorod/WhoCard04.png" alt=""></div>
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
                    <p class="pr-p">Теория: движение в городе в общем потоке и <br>техника безопасности в городском движении</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">2</p>
                    <p class="pr-p">Выезд в тандеме с инструктором на двух мотоциклах в<br>город с радио связью (интерком)</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">3</p>
                    <p class="pr-p">4,5 часа практики в<br> городе с инструктором.</p>
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
                        <p>После обучения вы точно будетe<br> знать, где держаться в полосе</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Научитесь проезжать разметку,<br> лужи, неровности</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Поймете, какие слепые зоны есть <br>
                            у автомобилистов и мотоциклистов</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Освоите развороты</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Научитесь ездить между рядами <br>
                            и взаимодействовать с другими ТС.</p>
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
@import url(../assets/CourseGorod.css);
</style>
