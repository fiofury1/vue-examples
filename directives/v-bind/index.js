var app = new Vue({
    el: '#app',
    data: {
        link: 'http://www.google.com',
        color: 'red',
        styleAttribute: "background-color: red;",    
        styleObject:  {
            backgroundColor: "red",
        }
    }
});

app.styleObject.backgroundColor = "blue";