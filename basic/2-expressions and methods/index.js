var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello friends!', 
        my_num: 5, 
        counter: 0
    },
    methods: {
        excited:  function(arg) {
            return arg+"!!!";
        },
        incrementCounter() {
            this.counter += 1;
        }
    }
});
