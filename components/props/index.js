Vue.component('ingredient-item', {
    props: ['ingredient'],
    template: '<li>{{ ingredient.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
      singleIngredient: {text: "Butter"},
      ingredientList: [
        { id: 0, text: 'Salt' },
        { id: 1, text: 'Pepper' },
        { id: 2, text: 'Milk' }
      ]
    }
})