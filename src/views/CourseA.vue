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

        <!-- COURSE-A-БЛОК-1 -->


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
                        <p id="cont-p-1">Курс “Категория “А”</p>
                        <p id="cont-p-2">Курс для получения прав категории “А”</p>
                        <p id="cont-p-3">Предназначен для людей, не умеющих управлять мотоциклом. Обучение
                            проводится на
                            площадке с
                            удобной локацией. Вы научитесь уверенно обращаться с мотоциклом и сможете гарантированно
                            сдать
                            практический экзамен в ГИБДД </p>
                        <ul>
                            <li>15 часов практики</li>
                            <li>10 занятий</li>
                            <li>100% готовность к экзамену</li>
                        </ul>
                        <p id="cont-p-4">В стоимость подготовки включены: топливные сборы, экипировка, мотоцикл,
                            услуги
                            инструктора,
                            дистанционное обучение и внутренний экзамен по теории ПДД.</p>

                        <div class="course-price">
                            <p id="cont-p-5">25 000 рублей</p>
                            <button type="submit">Записаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- THIS YOU CORSE-БЛОК-2 -->

        <CourseForYou></CourseForYou>

        <!-- MOTOTEHN-COURSE-БЛОК-3 -->

        <CourseMototehn></CourseMototehn>


        <!-- PROGRAMM-COURSE-БЛОК-4 -->

        <div class="program-course-container">
            <div class="about_program-course">
                <img src="@/assets/img-about-bl-2/Line 11.svg" alt="">
                <p>Программа курса</p>
            </div>
            <div class="program-course-content">
                <div class="programm-item-box">
                    <p class="pr-bl">1</p>
                    <p class="pr-p">Знакомство с органами<br>управления</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">2</p>
                    <p class="pr-p">Парковка<br>в гараж</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">3</p>
                    <p class="pr-p">“Габаритный <br>коридор”</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">4</p>
                    <p class="pr-p">“Змейка”, <br>“Восьмерка”</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">5</p>
                    <p class="pr-p">Скоростное<br>маневрирование</p>
                </div>
                <div class="programm-item-box">
                    <p class="pr-bl">6</p>
                    <p class="pr-p">Теоретический<br>блок (дистанционно)</p>
                </div>
            </div>
        </div>


        <!-- INSTRUCTOR COURSE-БЛОК-5 -->


        <CourseInstructor></CourseInstructor>


        <!-- RESULT-БЛОК-6 -->

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
                            <p>Освоите управление любым видом мотоцикла до 400 кг. в снаряженном состоянии:
                            </p>

                        </div>
                        <ul>
                            <li>2-х колесным</li>
                            <li>3-х колесным, с коляской</li>
                            <li>4-х колесным</li>
                        </ul>
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

        <!-- ЗАПИСЬ-БЛОК-8 -->

        <CourseEntry></CourseEntry>


        <!-- ДРУГИЕ КУРСЫ-БЛОК-9 -->

        <CourseOther></CourseOther>

        <!-- CONTACT-COURSE-A-10-BLOCK -->

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

<style scroped="scoped">
@import url(../assets/coursea.css);
</style>