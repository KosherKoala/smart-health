var express    = require('express');
var router     = express.Router();
var app = express();
var mongoose   = require('mongoose');
var Insurance  = require('../models/insurance');
var jwt        = require('jwt-simple');
var config     = require('../../config')

/* GET ALL INSURANCES */
router.get('/', function(req, res, next) {
  Insurance.find(req.body, function (err, insurances) {
    if (err) return next(err);
    if(insurances) {
        console.log(insurances);
        res.json({insurance:insurances, success: true, message: "insurance found with " + req.body});
    } else {
        res.json({success:false, message: "no insurances found with " + req.body});
    }
  });
  console.log('insurance api get response');
});

/* GET SINGLE INSURANCE BY ID */
router.get('/:id', function(req, res, next) {
  Insurance.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('insurance api get by id response');
});

/* SAVE INSURANCE */
router.post('/', function(req, res, next) {
    Insurance.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, insurance: post, message: "insurance made"});
    } else {
        res.json({success: false, message: "ERROR: insurance creation failed"});
    }
  });
  console.log('insurance api post response, insurance created.');
});

/* UPDATE PROCEDURE */
router.put('/:id', function(req, res, next) {
  Insurance.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, insurance: put, message: "insurance updated"});
  } else {
      res.json({success: false, message: "ERROR: insurance not updated"});
  }
  });
  console.log('insurance api put response');
});

/* DELETE INSURANCE */
router.delete('/:id', function(req, res, next) {
  Insurance.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('insurance api delete response');
});

module.exports = router;