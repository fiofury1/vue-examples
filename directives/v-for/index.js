var app = new Vue({
  el: '#app',
  data: {
    title: "Property To Do List",
    todos: [
      { text: 'Walk Dog' },
      { text: 'Wash Car' },
      { text: 'Make Dinner' }
    ],
    title1: "Method To Do List",
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