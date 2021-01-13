var app = new Vue({
  el: '#app',
  data: {
    todos: [
      'Exercise',
      'Sleep'
    ],
    books: [
      { title: 'White Fang', 
        author: 'Jack London' },
      { title: 'To Kill a Mockingbird', 
        author: 'Harper Lee' },
    ],
    personObject: {
      name:  "Joe",
      hairColor: "black",
      eyeColor:  "brown",
    },


  //   todo1:  "Do Laundry",
  //   todo2:  "Wash Dishes",
  //   todo3:  "Make Pie",  
  //   user: {
  //     name: "Joe",
  //     city: "El Paso",
  //     state: "TX",   
  //   },
  //   todos_with_id: [
  //     {id: 1, text: "Shower"},
  //     {id: 2, text: "Brush Teeth"},
  //   ],
  },
  // methods: {
  //   todos_func: function(){
  //       return [
  //           this.todo1,
  //           this.todo2,
  //           this.todo3
  //       ]
  //   }
  // }
});

// app.todo.push({ text: 'New item' })