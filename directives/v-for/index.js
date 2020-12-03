var app = new Vue({
  el: '#app',
  data: {
    todos1: [
      'Exercise',
      'Sleep'
    ],
    todos2: [
      { text: 'Walk Dog' },
      { text: 'Wash Car' },
    ],
    todo1:  "Do Laundry",
    todo2:  "Wash Dishes",
    todo3:  "Make Pie",
  },  
  methods: {
    todos_func: function(){
        return [
            this.todo1,
            this.todo2,
            this.todo3
        ]
    }
  }
});

app.todos.push({ text: 'New item' })