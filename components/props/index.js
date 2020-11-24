Vue.component('ingredient-item1', {
    props: ['ingredient'],
    template: '<li>{{ ingredient }}</li>'
})

Vue.component('ingredient-item2', {
    props: ['ingredient'],
    template: '<li>{{ ingredient.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
      singleIngredient1: "Garlic",
      singleIngredient2: {text: "Butter"},
      ingredientList: [
        { id: 0, text: 'Salt' },
        { id: 1, text: 'Pepper' },
        { id: 2, text: 'Milk' }
      ]
    }
})