var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
const bodyParser = require('body-parser');

// Parsers for POST data
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET ALL USERS */
router.get('/', function(req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
  console.log('user api get response');
});

/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('user api get by id response');
});

/* SAVE USER */
router.post('/', function(req, res, next) {
    User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('user api post response, user created.');
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('user api put response');
});

/* DELETE USER */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('user api delete response');
});

module.exports = router;