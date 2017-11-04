var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Calendar= require('../models/calendar');
var jwt         = require('jwt-simple');
var config = require('../../config')

/* GET ALL EVENTS */
router.get('/', function(req, res, next) {
  Calendar.find(req.body, function (err, calendars) {
    if (err) return next(err);
    if(calendars) {
        console.log(calendars);
        res.json({calendar:calendars, success: true, message: "calendar found with " + req.body});
    } else {
        res.json({success:false, message: "no calendars found with " + req.body});
    }
  });
  console.log('devent api get response');
});

/* GET SINGLE CALENDAR BY ID */
router.get('/:id', function(req, res, next) {
  Calendar.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('calendar api get by id response');
});

/* SAVE CALENDAR */
router.post('/', function(req, res, next) {
    Calendar.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, calendar: post, message: "calendar made"});
    } else {
        res.json({success: false, message: "ERROR: calendar creation failed"});
    }
  });
  console.log('calendar api post response, calendar created.');
});

/* UPDATE CALENDAR */
router.put('/:id', function(req, res, next) {
  Calendar.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, calendar: put, message: "calendar updated"});
  } else {
      res.json({success: false, message: "ERROR: calendar not updated"});
  }
  });
  console.log('calendar api put response');
});

/* DELETE CALENDAR */
router.delete('/:id', function(req, res, next) {
  Calendar.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('calendar api delete response');
});


module.exports = router;