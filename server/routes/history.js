<<<<<<< HEAD
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
=======
var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var History  = require('../models/history');
var jwt      = require('jwt-simple');
var config   = require('../../config')

/* GET ALL PATIENT */
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

/* GET A PATIENT */
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

/* GET SINGLE PATIENT BY ID */
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
router.get('/:id', function(req, res, next) {
  History.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('history api get by id response');
});

<<<<<<< HEAD
/* SAVE EVENT */
=======
/* SAVE PATIENT */
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
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

<<<<<<< HEAD
/* UPDATE EVENT */
router.put('/:id', function(req, res, next) {
  History.findByIdAndUpdate(req.params.id, req.body, function (err, put) {
    if (err) return next(err);
    if(put){
      res.json({success: true, history: put, message: "history updated"});
  } else {
      res.json({success: false, message: "ERROR: history not updated"});
  }
=======
/* UPDATE PATIENT */
router.put('/:id', function(req, res, next) {
  History.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
  });
  console.log('history api put response');
});

<<<<<<< HEAD
/* DELETE EVENT */
=======
/* DELETE PATIENT */
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
router.delete('/:id', function(req, res, next) {
  History.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('history api delete response');
});

<<<<<<< HEAD

=======
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
module.exports = router;