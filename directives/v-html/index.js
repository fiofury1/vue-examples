var app = new Vue({
    el: '#app',
    data: {
        message: 'Howdy!'    
    },
    methods: {
        excited:  function(arg) {
            return arg+"!!!";
        }
    }
});
