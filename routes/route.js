var express=require('express');
var bodyparser=require('body-parser');

 var urlencodedParser = bodyparser.urlencoded({ extended: true });
var router=express.Router();
router.use(urlencodedParser);
router.use(bodyparser.json());
var  cors = require('cors');
router.use(cors());

var contact=require('../models/contact');
var sample=require('../models/sample');



router.get('/contactlist',function(req,res){
    contact.find(function(err,contacts){
        res.json(contacts);
    })
});

//add data
router.post('/contact',function(req,res){
    var newcontact=new contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone,
    });
    console.log(req.body.firstname);
    newcontact.save(function(err,contact){
        if(err){
            res.send({msg:'failed'});
        }
        else{
            res.send({msg:'Success'});
        }
    });
});
router.post('/sample',function(req,res){
    var newsample=new sample({
        name:req.body.name,
        age:req.body.age
    });
    newsample.save(function(err){
        if(err){
            res.send({msg:'failed'});
        }
        else{
            res.send({msg:'Success'});
        }
    });
});
module.exports=router;
