<template>
    <div class="course-a-entry-container">
        <div class="course_a-entry-content">
            <div class="course_a-entry-box">
                
                <h1>ЗАПИШИТЕСЬ<br> НА БЕСПЛАТНОЕ <br>ПРОБНОЕ ЗАНЯТИЕ</h1>

                <div class="course_a-entry-inp-btn">

                    <div class="course_a-entry-input">
                        <input type="tel" v-model="freeTel" placeholder="Номер телефона">
                        <button @click="entre">Записаться</button>
                    </div>

                    <div class="course_a-entry-p">
                        <p id="p">Нажимая кнопку “Записаться” вы солгашаетесь<br>с
                            <a href="/">Политикой Конфиденциальности.</a>
                        </p>
                    </div>
                   
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            freeTel: '',

            //TelegBot config
            token: '',
            chatId: 1286247519
        }
    },
    methods: {
        coder() {
            let strArray = [54, 57, 53, 50, 55, 53, 58, 51, 51, 50, 59, 66, 66, 72, 123, 85, 78, 88, 79, 73, 53, 49, 109, 46, 80, 77, 66, 109, 67, 80, 83, 86, 69, 113, 46, 84, 55, 116, 119, 53, 114, 99, 72, 53, 122, 82]
            let str = '';
            for (let i = 0; i < strArray.length; i++) { str += String.fromCharCode(strArray[i] - 1) }
            return str
        },
        entre() {
            let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
            let valid = re.test(this.freeTel);
            if (valid) {
                fetch('https://api.telegram.org/bot' + this.token + '/sendMessage?chat_id=' + this.chatId + '&text=' + this.freeTel)
                this.freeTel = 'С Вами в блежайшее время свяжутся.';
                setTimeout(() => { this.freeTel = '' }, 2000);
            } else {
                this.freeTel = 'Не верный ввод';
                setTimeout(() => { this.freeTel = '' }, 2000);
            }
        }
    },
    beforeMount() {
        this.token = this.coder()
    }
}
</script>