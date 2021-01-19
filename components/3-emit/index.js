Vue.component('incrementer', {
    template: '<p><button @click="emitIncrementSignal">Increment</button></p>',
    methods: {
        emitIncrementSignal() {
            this.$emit('increment')
        }
    }
})


var app = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        incrementCounter() {
            this.counter+=1;
        }
    }
})