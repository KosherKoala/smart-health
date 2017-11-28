var express    = require('express');
var router     = express.Router();
var app = express();
var mongoose   = require('mongoose');
var Chat  = require('../models/chat');
var jwt        = require('jwt-simple');
var config     = require('../../config')

/* GET ALL CHATS */
router.get('/', function(req, res, next) {
  Chat.find(req.body, function (err, chats) {
    if (err) return next(err);
    if(chats) {
        console.log(chats);
        res.json({chat:chats, success: true, message: "chat found with " + req.body});
    } else {
        res.json({success:false, message: "no chats found with " + req.body});
    }
  });
  console.log('chat api get response');
});

/* GET SINGLE CHAT BY ID */
router.get('/:id', function(req, res, next) {
  Chat.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('chat api get by id response');
});

/* SAVE CHAT */
router.post('/', function(req, res, next) {
    Chat.create(req.body, function (err, post) {
    if (err) return next(err);
    if(post){
        res.json({success: true, chat: post, message: "chat made"});
    } else {
        res.json({success: false, message: "ERROR: chat creation failed"});
    }
  });
  console.log('chat api post response, chat created.');
});

/* UPDATE CHAT */
router.put('/:id', function(req, res, next) {
  Chat.findByIdAndUpdate(req.params.id, req.body, function (err, chat) {
    if (err) return next(err);
    res.json(chat);
  });
  console.log('chat api put response');
});

/* DELETE CHAT */
router.delete('/:id', function(req, res, next) {
  Chat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  console.log('chat api delete response');
});

module.exports = router;