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
                        <p><router-link to="/"><span>Главная</span></router-link> / Курс “Детский”
                        </p>
                    </div>
                    <div class="about-course">
                        <p id="cont-p-1">Курс “Детский”</p>

                        <p id="cont-p-2">Мотоспорт отлично развивает силу, реакцию,<br>выносливость.</p>

                        <p id="cont-p-3">Большое внимание уделяем навыкам безопасного торможения и умению “чувствовать”
                            поведение Обучаем детей с 7 лет, для ребят у нас специальная мототехника. А инструкторы
                            умеют находить подход как каждому ученику.</p>
                        <ul>
                            <li>8 тренировок</li>
                            <li> по 1.5 часа</li>
                        </ul>
                        <p id="cont-p-4">В стоимость подготовки включены: топливные сборы, экипировка, мотоцикл, услуги
                            инструктора.</p>

                        <div class="course-price">
                            <p id="cont-p-5">7 500 рублей</p>
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
                    <div class="course-a-item"><img src="@/assets/img-CourseChild/WhoCard01.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-CourseChild/WhoCard02.png" alt=""></div>
                    <div class="course-a-item"><img src="@/assets/img-CourseChild/WhoCard03.png" alt=""></div>
                    <div class="course-a-item"> <img src="@/assets/img-CourseChild/WhoCard04.png" alt=""></div>
                </div>

                <div class="this-course-photo-block">
                    <img src="@/assets/img-courseA/Group260.png" alt="">
                </div>
            </div>
        </div>

        <!-- MOTOTEHN-COURSE-PRO-БЛОК-3 -->
        <CourseMototehn></CourseMototehn>


        <!-- PROGRAMM-COURSE-PRO-БЛОК-4 -->

        <div class="program-course-container">
            <div class="about_program-course">
                <img src="@/assets/img-about-bl-2/Line11.svg" alt="">
                <p>Программа курса</p>
            </div>
            <div class="program-course-content">
                <div class="programm-item-box">
                    <p class="pr-bl">1</p>
                    <p class="pr-p">Знакомство<br> 
                        с органами управления</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">2</p>
                    <p class="pr-p">Парковка<br>в гараж</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">3</p>
                    <p class="pr-p">“Габаритный<br>коридор”</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">4</p>
                    <p class="pr-p">“Змейка”,<br>“Восьмерка”</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">5</p>
                    <p class="pr-p">Скоростное<br>маневрирование</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">6</p>
                    <p class="pr-p">Теоретический блок<br>(дистанционно)</p>
                </div>
            </div>
        </div>

        <!-- INSTRUCTOR COURSE-БЛОК-5 -->
        <CourseInstructor></CourseInstructor>

        <!-- RESULT-COURSE-PRO-БЛОК-6 -->

        <div class="result-container">
            <div class="about_result">
                <img src="@/assets/img-about-bl-2/Line11.svg" alt="">
                <p>Результаты обучения</p>
            </div>
            <div class="result-content">
                <div class="result-text-content">

                    <div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Ваш ребенок научится уверенно управлять мотоциклом с нуля</p>
                        </div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Освоит базовые навыки: управление, парковка, маневрирование</p>
                        </div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Узнает, как устроен мотоцикл, какие у него принципы работы и движения</p>
                        </div>
                    </div>

                    <div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Сможет успешно сдать экзамен в ГИБДД*</p>
                        </div>
                        <div class="result-box">
                            <img src="@/assets/img-courseA/Vector.svg" alt="">
                            <p>Узнает, как устроен мотоцикл, какие у него принципы работы и движения</p>
                        </div>
                        <ul>
                            <li>2-х колесным</li>
                            <li>3-х колесным, с коляской</li>
                            <li>4-х колесным</li>
                        </ul>
                    </div>
                </div>
                <div class="result-p">
                    <p>*Права категории “А” ребенок получит сразу после наступления 18 лет.</p>
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
@import url(../assets/CourseChild.css);
</style>