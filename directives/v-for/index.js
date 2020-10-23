var app = new Vue({
  el: '#app',
  data: {
    title: "My To Dos",
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

app.todos.push({ text: 'New item' })