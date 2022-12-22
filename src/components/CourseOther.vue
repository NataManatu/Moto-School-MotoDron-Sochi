<template>
    <div class="other-course-container">
        <div class="about_other-course">
            <img src="@/assets/img-about-bl-2/Line11.svg" alt="">
            <p>Другие курсы</p>
        </div>
        <div class="other-course-contant">
            <div class="other-course-box">

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
            </div>
        </div>
    </div>
</template>