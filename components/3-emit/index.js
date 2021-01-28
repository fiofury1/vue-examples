

// Example 1
// - We add an on-click event to the button
// - The button triggers a method that triggers the 'increment' event.
// - In our html the parent is listening for the 'increment' event.
// - The 'increment' event triggers the running of the 'incrementCounter' method.
// - The 'incrementCounter' method updates the property 'data', which dynamically updates on our page.
Vue.component('incrementer', {
    template: '<p><button @click="emitIncrementSignal">Increment</button></p>',
    methods: {
        emitIncrementSignal() {
            this.$emit('increment')
        }
    }
})

// Example 2
// - In this example, we show how to pass a value using $emit.
Vue.component('random-thought-box', {
    template:`
        <div>
            <input type="text" 
                   placeholder="Enter a random thought"
                   v-model="new_thought"
                   @keyup.enter="addThoughtSignal">
            </input>
        </div>`,
    data() {
        return {
            new_thought: null,
        }
    },
    methods: {
        addThoughtSignal() {
            this.$emit("add-thought", this.new_thought)
            this.new_thought=null;

        }
    }
})


var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        thoughts: []
    },
    methods: {
        incrementCounter() {
            this.counter+=1;
        },
        addThought(new_thought){
            this.thoughts.push(new_thought)
        }
    }
})