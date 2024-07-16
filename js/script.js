const { createApp } = Vue;
createApp ({
    data() {
        return {
            message: 'Hello world!',
            img: ''
        }
    }
}).mount('#app')