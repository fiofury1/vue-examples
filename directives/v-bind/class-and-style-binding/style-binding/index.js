var app = new Vue({
    el: '#app',
    data: {
        color: 'red',
        styleAttribute: "background-color: navy;",    
        styleObject1:  {
            backgroundColor: "red",
            fontWeight: "bold",
        },
        styleObject2:  {
            "font-style": "italic",
        }
    }
});

app.color = "gray";
app.styleObject.backgroundColor = "yellow";