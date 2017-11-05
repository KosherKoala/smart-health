var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Doctor = require('../models/doctor');
var jwt         = require('jwt-simple');
var config = require('../../config')

/* GET ALL DOCTOR */
router.post('/', function(req, res, next) {
  Doctor.find(req.body.params).populate(req.body.pop).exec(function (err, doctors) {
    if (err) return next(err);
    if(doctors) {
        res.json({doctor:doctors, success: true, message: "doctor found with " + req.body});
    } else {
        res.json({success:false, message: "no doctors found with " + req.body});
    }
  });
  console.log('doctor api get response');
});

/* GET SINGLE DOCTOR BY ID */
router.get('/:id', function(req, res, next) {
  Doctor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('doctor api get by id response');
});

/* SAVE DOCTOR */
router.post('/', function(req, res, next) {
    Doctor.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, doctor: post, message: "doctor made"});
    } else {
        res.json({success: false, message: "ERROR: doctor creation failed"});
    }
  });
  console.log('doctor api post response, doctor created.');
});

/* UPDATE DOCTOR */
router.put('/:id', function(req, res, next) {
  Doctor.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, doctor: put, message: "doctor updated"});
  } else {
      res.json({success: false, message: "ERROR: doctor not updated"});
  }
  });
  console.log('patient api put response');
});

/* DELETE DOCTOR */
router.delete('/:id', function(req, res, next) {
  Doctor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('patient api delete response');
});

 
router.post('/authenticate/', function authenticate(req, res) {
  Doctor.find({ email: req.body.email, password: req.body.password }, function(err, doctor) {
    
    console.log(doctor);
    if (err) throw err;

    if (!doctor) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (doctor) {

      // check if password matches
      if (doctor.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        var token = jwt.encode(doctor, config.secret);
        res.json({success: true, message: "Successful Authentication.", token: 'JWT ' + token});
      }
    }
  });
});

module.exports = router;