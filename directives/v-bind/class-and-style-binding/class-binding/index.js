var app = new Vue({
    el: '#app',
    data: {
        isWarning: false,
        isBold: true, 
        isError: true,
        errorsObject: {
            boldtext: false,
            "error-style": true,
        },
        primaryClass: "warning",
        secondaryClass: "boldtext",
    }

});


app.isWarning = true,
app.errorsObject.boldtext = true;