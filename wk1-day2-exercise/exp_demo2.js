var express = require('express');
var app = express();

app.get('/hello',function(req,res){
    res.send('Hello World! Great to be here!');

})

app.listen(3000);


