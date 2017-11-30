var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var User  = require('../models/user');
var jwt      = require('jwt-simple');
var config   = require('../../config')

/* GET ALL USER */
router.get('/', function(req, res, next) {
  User.find(req.body, function (err, users) {
    if (err) return next(err);
    if(users) {
        res.json({user:users, success: true, message: "users found with " + req.body});
    } else {
        res.json({success:false, message: "no users found with " + req.body});
    }
  });
  console.log('user api get response');
});

/* GET A USER */
router.post('/params', function(req, res, next) {
  console.log("params", req.body)
  User.findOne(req.body, function (err, user) {
    if (err) return next(err);
    if(user) {
        res.json({user:user, success: true, message: "user found with " + req.body});
    } else {
        res.json({success:false, message: "no user found with " + req.body});
    }
  });
  console.log('user api get response');
});

/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('user api get by id response');
});

/* SAVE USER */
router.post('/', function(req, res, next) {
    User.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, user: post, message: "user made"});
    } else {
        res.json({success: false, message: "ERROR: user creation failed"});
    }
  });
  console.log('user api post response, user created.');
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('user api put response');
});

/* DELETE USER */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('user api delete response');
});

/* is doctor */
router.get('/isDoctor/:id', function(req, res, next) {
  console.log('isDoctor');
  User.findOne({_id: req.params.id, doctor: { $ne: null } }, function (err, user) {
    if (err) return next(err);
    if(user) {
        res.json({user:user, success: true, message: "its a doctor"});
    } else {
        res.json({success:false, message: "not a doctor"});
    }
  });
  console.log('user api get response');
});

//Authenticate
router.post('/authenticate/', function authenticate(req, res) {
  console.log('body', req.body)
  User.findOne({ email: req.body.email, password: req.body.password }, function(err, user ) {
    
    console.log(user);
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        var token = jwt.encode(user, config.secret);
        res.json({success: true, message: "Successful Authentication.", obj: user, token: 'JWT ' + token});
      }
    }
  });
});
module.exports = router;