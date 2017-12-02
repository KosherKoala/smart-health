var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var Procedure = require('../models/procedure');
var jwt         = require('jwt-simple');
var config = require('../../config')

/* GET ALL PROCEDURES */
router.get('/', function(req, res, next) {
  Procedure.find(req.body.params, function (err, procedures) {
    if (err) return next(err);
    if(procedures) {
        console.log(procedures);
        res.json({procedure:procedures, success: true, message: "procedure found with " + req.body});
    } else {
        res.json({success:false, message: "no procedures found with " + req.body});
    }
  });
  console.log('procedure api get response');
});

/* GET SINGLE PROCEDURE BY ID */
router.get('/:id', function(req, res, next) {
  Procedure.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('procedure api get by id response');
});

/* SAVE PROCEDURE */
router.post('/', function(req, res, next) {
    Procedure.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, procedure: post, message: "procedure made"});
    } else {
        res.json({success: false, message: "ERROR: procedure creation failed"});
    }
  });
  console.log('procedure api post response, procedure created.');
});

/* UPDATE PROCEDURE */
router.put('/:id', function(req, res, next) {
  Procedure.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, procedure: put, message: "procedure updated"});
  } else {
      res.json({success: false, message: "ERROR: procedure not updated"});
  }
  });
  console.log('procedure api put response');
});

/* DELETE PROCEDURE */
router.delete('/:id', function(req, res, next) {
  Procedure.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('procedure api delete response');
});


module.exports = router;