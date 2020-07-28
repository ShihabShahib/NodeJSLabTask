var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('login');
});

router.post('/',function(req,res){
    if(req.body.uname == "admin" && req.body.password == "admin"){
        res.redirect('/admin');
    }
    else if(req.body.uname == "employee" && req.body.password == "employee"){
        res.redirect('/employee');
    }
    else{
        res.send('Invalid username or password');
    }
});

module.exports = router;