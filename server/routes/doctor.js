var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Doctor = require('../models/doctor');
const bodyParser = require('body-parser');

// Parsers for POST data
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET ALL DOCTOR */
router.get('/', function(req, res, next) {
  Doctor.find(req.body, function (err, doctors) {
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
  Doctor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
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

module.exports = router;