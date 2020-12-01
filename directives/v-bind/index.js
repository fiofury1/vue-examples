var app = new Vue({
    el: '#app',
    data: {
        link: 'http://www.google.com',
        styleAttribute: "background-color: red;",    
        styleObject:  {
            backgroundColor: "red",
        }
    }
});

app.styleObject.backgroundColor = "blue";