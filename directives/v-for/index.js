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
    user: {
      name: "Joe",
      city: "El Paso",
      state: "TX",   
    },
    todos_with_id: [
      {id: 1, text: "Shower"},
      {id: 2, text: "Brush Teeth"},
    ],
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