var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Health = require('../models/health');
var jwt         = require('jwt-simple');
var config = require('../../config')

/* GET ALL EVENTS */
router.get('/', function(req, res, next) {
  Health.find(req.body.params, function (err, healths) {
    if (err) return next(err);
    if(healths) {
        console.log(healths);
        res.json({health:healths, success: true, message: "health found with " + req.body});
    } else {
        res.json({success:false, message: "no healths found with " + req.body});
    }
  });
  console.log('devent api get response');
});

/* GET SINGLE PROCEDURE BY ID */
router.get('/:id', function(req, res, next) {
  Health.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('health api get by id response');
});

/* SAVE PROCEDURE */
router.post('/', function(req, res, next) {
    Health.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, health: post, message: "health made"});
    } else {
        res.json({success: false, message: "ERROR: health creation failed"});
    }
  });
  console.log('health api post response, health created.');
});

/* UPDATE PROCEDURE */
router.put('/:id', function(req, res, next) {
  Health.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, health: put, message: "health updated"});
  } else {
      res.json({success: false, message: "ERROR: health not updated"});
  }
  });
  console.log('health api put response');
});

/* DELETE PROCEDURE */
router.delete('/:id', function(req, res, next) {
  Health.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('health api delete response');
});


module.exports = router;