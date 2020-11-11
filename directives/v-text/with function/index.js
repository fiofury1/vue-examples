
function name_excited(name){
    return name+"!!!"
}


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, ' + name_excited("Joe"), 
    }
});

// app.message = "Yo";