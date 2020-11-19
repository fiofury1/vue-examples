var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello friends!'    
    },
    methods: {
        excited:  function(arg) {
            return arg+"!!!";
        }
    }
});
