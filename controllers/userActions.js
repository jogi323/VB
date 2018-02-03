var User = require('../models/userSchema');
var jwt    = require('jsonwebtoken');
var config = require('../config/config')

exports.register = function(req,res){
    User.find({mobileNumber:req.body.mobileNumber},function(err,docs){
        if(err){
            res.json({error:err});
        }else if(docs[0]){
            res.json({sucess:false,message:'User already registered.'});
        }else{
            var user = new User ({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mobileNumber: req.body.mobileNumber,
                username: req.body.username,
                password: req.body.password
            });
            user.save(function(err,data){
                if(err){
                    res.json({error:err});
                }else{
                    res.json({sucess:true,message:'User registered successfuly'});
                }
            });
        }
    })
}

exports.login = function(req,res){
    User.find({$and:[{username: req.body.username},{password: req.body.password}]},function(err,docs){
        if(err){
            res.json({error:err});
        }else if(docs.length){
            var token = jwt.sign({ id: docs._id },config.secret);
            res.json({sucess:true,message:'Logged in successfully.',data:docs,token:token});
        }else{
            res.json({sucess:false,message:'Invalid credentials.'});
        }
    });
}

exports.profile = function(req,res){
    User.find({username:req.params.id},function(err,docs){
        if(err){
            res.json({error:err});
        }else{
            console.log(docs);
        }
    });
}