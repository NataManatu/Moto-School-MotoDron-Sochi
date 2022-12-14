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
                        <p id="cont-p-1">Курс “PRO”</p>

                        <p id="cont-p-3">Профессиональная программа для тех, кому важно максимально полно изучить
                            устройство мотоцикла и освоить основные навыки вождения. Вы научитесь уверенно безопасно
                            управлять мотоциклом на малых и средних скоростях, отработаете правильный алгоритм
                            торможения.</p>
                        <ul>
                            <li>12 индивидуальных тренировок</li>
                            <li>18 часов за рулем мотоцикла</li>
                        </ul>
                        <p id="cont-p-4">В стоимость подготовки включены: топливные сборы, экипировка, мотоцикл, услуги
                            инструктора.</p>

                        <div class="course-price">
                            <p id="cont-p-5">35 000 рублей</p>
                            <button type="submit">Записаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- THIS YOU CORSE-PRO-БЛОК-2 -->
        <CourseForYou></CourseForYou>


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
                    <p class="pr-p">Работа с рычагами<br>управления</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">2</p>
                    <p class="pr-p">Прохождение поворотов <br>и разворот с места</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">3</p>
                    <p class="pr-p">Тренировка торможения <br>в разных ситуациях</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">4</p>
                    <p class="pr-p">Принципы руления <br>на разных передачах</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">5</p>
                    <p class="pr-p">Упражнения для работы<br> с коробкой передач</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">6</p>
                    <p class="pr-p">Закрепление и повторение <br>всех пройденных занятий</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">7</p>
                    <p class="pr-p">Свободная <br>практика</p>
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
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Вы усилите свои навыки управления мотоциклом, маневрирования, торможения</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Сможете заранее распознавать препятствия и избегать опасности на дороге</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Научитесь справляться с проблемами, связанными с плохим дорожным покрытием</p>
                    </div>
                    <div class="result-box">
                        <img src="@/assets/img-courseA/Vector.svg" alt="">
                        <p>Научитесь правильно вести себя на мокром и скользком асфальте</p>
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
@import url(../assets/courseaPro.css);
</style>

