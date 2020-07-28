var express = require('express');
var router = express.Router();

const profile = {
    id: "17-34216-1",
    name: "Shihab",
    phone: "01409646346",
    gender: "male",
    designation: "employee",
};
router.get('/',function(req,res){
    res.render('employee');
});
router.post("/", function(req,res){
    if(req.body.MyProfile == "MyProfile"){
        console.log('employeeprofile');
        res.redirect("/Employee/employeeprofile");
    } else if(req.body.UpdateProfile == "UpdateProfile"){
        console.log('employeupdateeprofile');
        res.redirect("/Employee/employeeupdateprofile");
    }else{
        console.log('Employee');
        res.render("Employee");
    }
});
router.get('/employeeprofile',function(req,res){
    res.render('employeeprofile', profile);
});
router.get('/employeeupdateprofile',function(req,res){
    res.render('employeeupdateprofile', profile);
});


module.exports=router;