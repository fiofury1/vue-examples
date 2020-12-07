var app = new Vue({
    el: '#app',
    data: {
        myNum: 1,    
    },
    computed: {
        myNumOneHigher(){
            return this.myNum + 1;
        }
    }
});