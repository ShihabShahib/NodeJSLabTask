var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var login = require('./controller/login');

app.set('view engine', 'ejs');


//middleware
app.use(bodyParser());
app.use('/login', login);



app.listen(3000, function(){
    console.log('express http server started at 3000....')
});