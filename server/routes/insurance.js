<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Insurance = require('../models/insurance');
var jwt         = require('jwt-simple');
var config = require('../../config')

/* GET ALL EVENTS */
router.get('/', function(req, res, next) {
  Insurance.find(req.body).populate(req.body.pop).exec(function (err, insurances) {
=======
var express    = require('express');
var router     = express.Router();
var app = express();
var mongoose   = require('mongoose');
var Insurance  = require('../models/insurance');
var jwt        = require('jwt-simple');
var config     = require('../../config')

/* GET ALL INSURANCES */
router.get('/', function(req, res, next) {
  Insurance.find(req.body, function (err, insurances) {
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
    if (err) return next(err);
    if(insurances) {
        console.log(insurances);
        res.json({insurance:insurances, success: true, message: "insurance found with " + req.body});
    } else {
        res.json({success:false, message: "no insurances found with " + req.body});
    }
  });
<<<<<<< HEAD
  console.log('devent api get response');
});

/* GET SINGLE PROCEDURE BY ID */
=======
  console.log('insurance api get response');
});

/* GET SINGLE INSURANCE BY ID */
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
router.get('/:id', function(req, res, next) {
  Insurance.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('insurance api get by id response');
});

<<<<<<< HEAD
/* SAVE PROCEDURE */
=======
/* SAVE INSURANCE */
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
router.post('/', function(req, res, next) {
    Insurance.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, insurance: post, message: "insurance made"});
    } else {
        res.json({success: false, message: "ERROR: insurance creation failed"});
    }
  });
  console.log('insurance api post response, insurance created.');
});

<<<<<<< HEAD
/* UPDATE PROCEDURE */
router.put('/:id', function(req, res, next) {
  Insurance.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, insurance: put, message: "insurance updated"});
  } else {
      res.json({success: false, message: "ERROR: insurance not updated"});
  }
=======
/* UPDATE INSURANCE */
router.put('/:id', function(req, res, next) {
  Insurance.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    res.json(post);
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
  });
  console.log('insurance api put response');
});

<<<<<<< HEAD
/* DELETE PROCEDURE */
=======
/* DELETE INSURANCE */
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
router.delete('/:id', function(req, res, next) {
  Insurance.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('insurance api delete response');
});

<<<<<<< HEAD

=======
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
module.exports = router;