var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Appointment = require('../models/appointment');
var jwt         = require('jwt-simple');
var config = require('../../config')


/* GET ALL EVENTS */
router.get('/', function(req, res, next) {
  Appointment.find(req.body, function (err, events) {
    if (err) return next(err);
    if(events) {
        console.log(events);
        res.json({appointment:events, success: true, message: "appointment found with " + req.body});
    } else {
        res.json({success:false, message: "no events found with " + req.body});
    }
  });
  console.log('devent api get response');
});

/* GET SINGLE APPOINTMENT BY ID */
router.get('/:id', function(req, res, next) {
  Appointment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('appointment api get by id response');
});

/* SAVE APPOINTMENT */
router.post('/', function(req, res, next) {
    Appointment.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, appointment: post, message: "appointment made"});
    } else {
        res.json({success: false, message: "ERROR: appointment creation failed"});
    }
  });
  console.log('appointment api post response, appointment created.');
});

/* UPDATE APPOINTMENT */
router.put('/:id', function(req, res, next) {
  Appointment.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, appointment: put, message: "appointment updated"});
  } else {
      res.json({success: false, message: "ERROR: appointment not updated"});
  }
  });
  console.log('appointment api put response');
});

/* DELETE APPOINTMENT */
router.delete('/:id', function(req, res, next) {
  Appointment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('appointment api delete response');
});


module.exports = router;