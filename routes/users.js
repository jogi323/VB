var express = require('express');
var router = express.Router();

var controller = require('../controllers/userActions');
var verifyToken = require('./verifyToken');

router.post('/register', function(req, res, next) {
  controller.register(req,res);
});

router.post('/login', function(req, res, next) {
  controller.login(req,res);
});

router.get('/profile/:id',verifyToken,function(req,res,next){
  controller.profile(req,res);
});

module.exports = router;
