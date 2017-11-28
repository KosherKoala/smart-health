var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var History  = require('../models/history');
var jwt      = require('jwt-simple');
var config   = require('../../config')

/* GET ALL HISTORY */
router.get('/', function(req, res, next) {
  History.find(req.body, function (err, histories) {
    if (err) return next(err);
    if(histories) {
        res.json({history:histories, success: true, message: "histories found with " + req.body});
    } else {
        res.json({success:false, message: "no histories found with " + req.body});
    }
  });
  console.log('history api get response');
});

/* GET A HISTORY */
router.post('/params', function(req, res, next) {
  console.log("params", req.body)
  History.findOne(req.body, function (err, history) {
    if (err) return next(err);
    if(history) {
        res.json({history:history, success: true, message: "history found with " + req.body});
    } else {
        res.json({success:false, message: "no history found with " + req.body});
    }
  });
  console.log('history api get response');
});

/* GET SINGLE HISTORY BY ID */
router.get('/:id', function(req, res, next) {
  History.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('history api get by id response');
});

/* SAVE HISTORY */
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

/* UPDATE HISTORY */
router.put('/:id', function(req, res, next) {
  History.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, post) {
    if (err) return next(err);
    console.log("updated history", post)
    res.json(post);
  });
  console.log('history api put response');
});

/* DELETE HISTORY */
router.delete('/:id', function(req, res, next) {
  History.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('history api delete response');
});

module.exports = router;