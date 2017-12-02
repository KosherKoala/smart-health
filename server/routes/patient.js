var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Patient  = require('../models/patient');
var jwt      = require('jwt-simple');
var config   = require('../../config')

/* GET ALL PATIENT */
router.get('/', function(req, res, next) {
  Patient.find(req.body, function (err, patients) {
    if (err) return next(err);
    if(patients) {
        res.json({patient:patients, success: true, message: "patients found with " + req.body});
    } else {
        res.json({success:false, message: "no patients found with " + req.body});
    }
  });
  console.log('patient api get response');
});

/* GET A PATIENT */
router.post('/params', function(req, res, next) {
  console.log("params", req.body)
  Patient.findOne(req.body, function (err, patient) {
    if (err) return next(err);
    if(patient) {
        res.json({patient:patient, success: true, message: "patient found with " + req.body});
    } else {
        res.json({success:false, message: "no patient found with " + req.body});
    }
  });
  console.log('patient api get response');
});

/* GET SINGLE PATIENT BY ID */
router.get('/:id', function(req, res, next) {
  Patient.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('patient api get by id response');
});

/* SAVE PATIENT */
router.post('/', function(req, res, next) {
    Patient.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, patient: post, message: "patient made"});
    } else {
        res.json({success: false, message: "ERROR: patient creation failed"});
    }
  });
  console.log('patient api post response, patient created.');
});

/* UPDATE PATIENT */
router.put('/:id', function(req, res, next) {
  Patient.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('patient api put response');
});

/* DELETE PATIENT */
router.delete('/:id', function(req, res, next) {
  Patient.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('patient api delete response');
});

module.exports = router;