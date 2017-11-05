var express  = require('express');
var router   = express.Router();
var app = express();
var mongoose = require('mongoose');
var Note  = require('../models/note');
var jwt      = require('jwt-simple');
var config   = require('../../config')

/* GET ALL NOTE */
router.get('/', function(req, res, next) {
  Note.find(req.body, function (err, notes) {
    if (err) return next(err);
    if(notes) {
        console.log(notes);
        res.json({note:notes, success: true, message: "notes found with " + req.body});
    } else {
        res.json({success:false, message: "no notes found with " + req.body});
    }
  });
  console.log('note api get response');
});

/* GET SINGLE NOTE BY ID */
router.get('/:id', function(req, res, next) {
  Note.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('note api get by id response');
});

/* SAVE NOTE */
router.post('/', function(req, res, next) {
    Note.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, note: post, message: "note made"});
    } else {
        res.json({success: false, message: "ERROR: note creation failed"});
    }
  });
  console.log('note api post response, note created.');
});

/* UPDATE NOTE */
router.put('/:id', function(req, res, next) {
  Note.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('note api put response');
});

/* DELETE NOTE */
router.delete('/:id', function(req, res, next) {
  Note.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('note api delete response');
});

module.exports = router;