var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var History = require('../models/history');
var jwt         = require('jwt-simple');
var config = require('../../config')


/* GET ALL EVENTS */
router.get('/', function(req, res, next) {
  History.find(req.body, function (err, historys) {
    if (err) return next(err);
    if(historys) {
        console.log(historys);
        res.json({history:historys, success: true, message: "history found with " + req.body});
    } else {
        res.json({success:false, message: "no historys found with " + req.body});
    }
  });
  console.log('dhistory api get response');
});

/* GET SINGLE EVENT BY ID */
router.get('/:id', function(req, res, next) {
  History.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('history api get by id response');
});

/* SAVE EVENT */
router.post('/', function(req, res, next) {
    History.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, history: post, message: "history made"});
    } else {
        res.json({success: false, message: "ERROR: history creation failed"});
    }
  });
  console.log('history api post response, history created.');
});

/* UPDATE EVENT */
router.put('/:id', function(req, res, next) {
  History.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, history: put, message: "history updated"});
  } else {
      res.json({success: false, message: "ERROR: history not updated"});
  }
  });
  console.log('history api put response');
});

/* DELETE EVENT */
router.delete('/:id', function(req, res, next) {
  History.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('history api delete response');
});


module.exports = router;