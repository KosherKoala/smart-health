var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Event = require('../models/event');
var jwt         = require('jwt-simple');
var config = require('../../config')


/* GET ALL EVENTS */
router.get('/', function(req, res, next) {
  Event.find(req.body, function (err, events) {
    if (err) return next(err);
    if(events) {
        console.log(events);
        res.json({event:events, success: true, message: "event found with " + req.body});
    } else {
        res.json({success:false, message: "no events found with " + req.body});
    }
  });
  console.log('devent api get response');
});

/* GET SINGLE EVENT BY ID */
router.get('/:id', function(req, res, next) {
  Event.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('event api get by id response');
});

/* SAVE EVENT */
router.post('/', function(req, res, next) {
    Event.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, event: post, message: "event made"});
    } else {
        res.json({success: false, message: "ERROR: event creation failed"});
    }
  });
  console.log('event api post response, event created.');
});

/* UPDATE EVENT */
router.put('/:id', function(req, res, next) {
  Event.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, event: put, message: "event updated"});
  } else {
      res.json({success: false, message: "ERROR: event not updated"});
  }
  });
  console.log('event api put response');
});

/* DELETE EVENT */
router.delete('/:id', function(req, res, next) {
  Event.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('event api delete response');
});


module.exports = router;