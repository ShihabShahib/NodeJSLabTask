var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('admin');
});

router.post('/', function(req, res){
    if(req.body.AddEmployee == "AddEmployee"){
        res.redirect('/admin/addemployee');
    }else if(req.body.AllEmployeelist == "AllEmployeelist"){
        res.redirect('/admin/employeelist');
    }else{
        res.render('admin');
    }
});
router.get('/addemployee',function(req,res){
    res.render('addemployee');
});
router.get('/employeelist',function(req,res){
    res.render('employeelist');
});


module.exports=router;