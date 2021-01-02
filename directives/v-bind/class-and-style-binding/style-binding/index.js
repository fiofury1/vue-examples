var app = new Vue({
    el: '#app',
    data: {
        color: 'red',
        styleAttribute: "background-color: navy;",    
        styleObject:  {
            backgroundColor: "red",
        },
    
    }
});

app.color = "gray";
app.styleObject.backgroundColor = "yellow";