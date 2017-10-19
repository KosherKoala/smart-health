const express = require('express');
// const multer  = require('multer')
const router = express.Router();
const mongoose = require('mongoose');
// const User = require('../models/user');
// const Character = require('../models/character');
// const Campaign = require('../models/campaign');
// const Npc= require('../models/npc');
// const Session = require('../models/session');
// const Post = require('../models/post');
// const Comment = require('../models/comment');
// const Party = require('../models/party');
// const Stat = require('../models/stat');
// const jwt = require('jsonwebtoken');
// const fs = require('fs');

var secret		= 'harrypotter';


//const db ="mongodb://hunter:Envision1!@ds059185.mlab.com:59185/masterpad"
const db ='mongodb://admin:Yellow123!@health-shard-00-00-5vz0l.mongodb.net:27017,health-shard-00-01-5vz0l.mongodb.net:27017,health-shard-00-02-5vz0l.mongodb.net:27017/test?ssl=true&replicaSet=Health-shard-0&authSource=admin'
mongoose.Promise = global.Promise;

var promise = mongoose.connect(db,{
	useMongoClient: true,	
  	}, function(err) {
	if(err)
	{
		console.error("Error: " + err);
	}
	else
	{
		console.log("connected");
	}
  });


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//Authenticate
	router.post('/authenticate', (req, res) => {
		

		User.findOne({'email': req.body.email, 'password': req.body.password})
		.exec(function(err, user){
			if(err){
				console.log("Error retriving players.")
			}else{
				
				if(user)
				{
					var token = jwt.sign({_id: user._id, email: user.email}, secret);
					res.json({success: true, message: "User authenticated", token: token, obj: {_id: user._id, username: user.username, email: user.email, friends: user.friends} });
				}
				else{

					res.json({success: true, message: "Incorrect username or password"});
				}
			}
		});
	});

// //Users
// 	router.post('/user', (req, res) => {

// 	 	User.findById(req.body.id)
// 			.populate(req.body.pop)
// 	 		.select(req.body.fields)
// 	        .exec(function (err, user) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving users.")
// 					console.log(err)
// 				}
// 				else
// 				{
// 		            if (user) 
// 		            {
// 		                res.json({user:user});
// 		            } else {
// 		            	console.log("No user found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/updateUser', (req, res) => {
// 		//console.log(req.body);
// 	 	User.findOneAndUpdate(req.body.id, req.body.directive)
// 	        .exec(function (err, user) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving user.")
// 				}
// 				else
// 				{
// 		            if (user) 
// 		            {
// 		                res.json({user:user});
// 		            } else {
// 		            	console.log("No user found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// // Characters

// 	router.get('/characters', (req, res) => {
//  		Character.find({})
// 	        .exec(function (err, characters) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving characters.")
// 				}
// 				else
// 				{
// 		            if (characters) 
// 		            {
// 		                res.json(characters);
// 		            } else {
// 		            	console.log("No characters found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
//         });
// 	});

// 	router.post('/character', (req, res) => {

// 	 	Character.findById(req.body.id)
// 	 		.select(req.body.fields)
// 	        .exec(function (err, character) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving players.")
// 				}
// 				else
// 				{
// 		            if (character) 
// 		            {
// 		                res.json({character:character});
// 		            } else {
// 		            	console.log("No character found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/updateCharacter', (req, res) => {

// 	 	Character.findOneAndUpdate(req.body.id, req.body.new)
// 	        .exec(function (err, character) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving players.")
// 				}
// 				else
// 				{
// 		            if (character) 
// 		            {
// 		                res.json({character:character});
// 		            } else {
// 		            	console.log("No character found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// // Npcs

// 	router.get('/npcs', (req, res) => {
//  		Npc.find({})
// 	        .exec(function (err, characters) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving npcs.")
// 				}
// 				else
// 				{
// 		            if (characters) 
// 		            {
// 		                res.json(characters);
// 		            } else {
// 		            	console.log("No npcs found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
//         });
// 	});

// 	router.post('/npc', (req, res) => {

// 	 	Npc.findById(req.body.id)
// 	 		.select(req.body.fields)
// 			.populate('comments')
// 	        .exec(function (err, character) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving npcs.")
// 				}
// 				else
// 				{
// 		            if (character) 
// 		            {
// 		                res.json({character:character});
// 		            } else {
// 		            	console.log("No npc found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/updateNpc', (req, res) => {

// 	 	Npc.findOneAndUpdate(req.body.id, req.body.directive)
// 	        .exec(function (err, character) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving players.")
// 				}
// 				else
// 				{
// 		            if (character) 
// 		            {
// 		                res.json({character:character});
// 		            } else {
// 		            	console.log("No character found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/createNpc', (req, res) => {

// 		Npc.create(req.body, function (err, npc) {
//   			if (err) 
//   				return handleError(err);
//   			else
// 				{
// 		            if (npc) 
// 		            {
// 		                res.json({npc: npc});
// 		            } else {
// 		            	console.log("No post made")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 		})
// 	});

// // Adventure Stats
// 	router.post('/adventureStat', (req, res) => {


// 	 	Stat.findOne({character_id: req.body.id})
// 	        .exec(function (err, stat) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving players.")
// 				}
// 				else
// 				{
// 		            if (stat) 
// 		            {
// 		                res.json({stats:stat});
// 		            } else {
// 		            	console.log("No character found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/updateAdventureStat', (req, res) => {

// 	 	Stat.findOneAndUpdate(req.body.id, req.body.new)
// 	        .exec(function (err, stats) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving players.")
// 				}
// 				else
// 				{
// 		            if (stats) 
// 		            {
// 		                res.json({stats:stats});
// 		            } else {
// 		            	console.log("No character found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// // Parties

// 	router.post('/parties', (req, res) => {
// 		//console.log(req.body.pop, req.body.params)
//  		Party.find(req.body.params)
//  			.populate(req.body.pop)
// 	        .exec(function (err, parties) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving parties.", err)
// 				}
// 				else
// 				{
// 		            if (parties) 
// 		            {
// 		                res.json(parties);
// 		            } else {
// 		            	console.log("No parties found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
//         });
// 	});

// 	router.post('/party', (req, res) => {

// 		console.log("party body", req.body)

// 	 	Party.findById(req.body.id)
// 	 		.select(req.body.fields)
//  			.populate(req.body.pop)
// 	        .exec(function (err, party)
// 	         {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving party.")
// 				}
// 				else
// 				{
// 		            if (party) 
// 		            {
// 		                res.json({party:party});
// 		            } else {
// 		            	console.log("No party found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// // Campaigns

// 	router.post('/campaigns', (req, res) => {
// 		console.log(req.body.pop, req.body.params)
//  		Campaign.find(req.body.params)
//  			.populate(req.body.pop)
// 	        .exec(function (err, campaigns) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving campaigns.", err)
// 				}
// 				else
// 				{
// 		            if (campaigns) 
// 		            {
// 		                res.json(campaigns);
// 		            } else {
// 		            	console.log("No campaigns found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
//         });
// 	});

// 	router.post('/campaign', (req, res) => {

// 	 	Campaign.findById(req.body.id)
// 	 		.select(req.body.fields)
//  			.populate(req.body.pop,req.body.popf)
// 	        .exec(function (err, campaign)
// 	         {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving campaign.")
// 				}
// 				else
// 				{
// 		            if (campaign) 
// 		            {
// 		                res.json({campaign:campaign});
// 		            } else {
// 		            	console.log("No campaign found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/updateCampaign', (req, res) => {
// 		console.log(req.body);
// 	 	Campaign.findOneAndUpdate(req.body.id, req.body.directive)
// 	        .exec(function (err, campaign) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving campaign.")
// 				}
// 				else
// 				{
// 		            if (campaign) 
// 		            {
// 		                res.json({campaign:campaign});
// 		            } else {
// 		            	console.log("No campaign found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// // Sessions

// 	router.post('/session', (req, res) => {

// 	 	Session.findById(req.body.id)
// 	 		.select(req.body.fields)
// 	        .exec(function (err, session)
// 	         {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving session.")
// 				}
// 				else
// 				{
// 		            if (session) 
// 		            {
// 		                res.json({session:session});
// 		            } else {
// 		            	console.log("No session found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/sessionsByCampaign', (req, res) => {


// 	 	Session.find({campaign: req.body.id})
// 	        .exec(function (err, sessions) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving sessions.")
// 				}
// 				else
// 				{
// 		            if (sessions) 
// 		            {
// 		                res.json({sessions:sessions});
// 		            } else {
// 		            	console.log("No sessions found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// // Posts

// 	router.post('/postsBySession', (req, res) => {


// 	 	Post.find({session: req.body.id})
// 	        .exec(function (err, posts) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving posts.")
// 				}
// 				else
// 				{
// 		            if (posts) 
// 		            {
// 		                res.json({posts:posts});
// 		            } else {
// 		            	console.log("No posts found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/postById', (req, res) => {

// 	 	Post.findById(req.body.id)
// 	        .exec(function (err, post) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving post.")
// 				}
// 				else
// 				{
// 		            if (post) 
// 		            {
// 		                res.json({post:post});
// 		            } else {
// 		            	console.log("No post found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/createPost', (req, res) => {

// 		Post.create(req.body, function (err, post) {
//   			if (err) 
//   				return handleError(err);
//   			else
// 				{
// 		            if (post) 
// 		            {
// 		                res.json({post: post});
// 		            } else {
// 		            	console.log("No post made")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 		})
// 	});

// //Comments
	
// 	router.post('/commentsByPost', (req, res) => {

// 	 	Comment.find({post: req.body.id})
// 	        .exec(function (err, comments) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving comments.")
// 				}
// 				else
// 				{
// 		            if (comments) 
// 		            {
// 		                res.json(comments);
// 		            } else {
// 		            	console.log("No comments found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// 	router.post('/comment', (req, res) => {

// 	 	Comment.findById(req.body.id)
// 	 		.select(req.body.fields)
// 	        .exec(function (err, comment) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving comment.")
// 				}
// 				else
// 				{
// 		            if (comment) 
// 		            {
// 		            	console.log("success:", comment);
// 		                res.json({comment:comment});
// 		            } else {
// 		            	console.log("No comment found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});


// 	router.post('/createComment', (req, res) => {

// 		Comment.create(req.body, function (err, comment) {
//   			if (err) 
//   				return handleError(err);
//   			else
// 				{
// 		            if (comment) 
// 		            {
// 		                res.json({comment: comment});
// 		            } else {
// 		            	console.log("No comment made")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 		})
// 	});
	
// 	router.post('/deleteComment', (req, res) => {
// 		Comment.remove({ _id: req.body.id }, function(err) {
// 		    if (!err) {
// 		            res.json({success: true});
// 		    }
// 		    else {
// 		            return handleError(err);
// 		    }
// 		});
// 	});

// 	router.post('/updateComment', (req, res) => {

// 	 	Comment.findOneAndUpdate(req.body.id, req.body.directive)
// 	        .exec(function (err, comment) {
// 	        	if(err)
// 	        	{
// 					console.log("Error retriving comments.", err)
// 				}
// 				else
// 				{
// 		            if (character) 
// 		            {
// 		                res.json({comment:comment});
// 		            } else {
// 		            	console.log("No comment found")
// 		                res.sendStatus(404);
// 		            }
// 		        }
// 	        });
// 	});

// // File Interactions
	
// 	router.post('/deleteFile', function(req, res) {

// 			var resultHandler = function(err) { 
// 			    if(err) {
			       
//              			res.json({success:false,err_desc:err,path: req.file});
// 			    } else {
			       
//              			res.json({success:true,err_desc:null,path: req.file});
// 			    }
// 			}

// 			console.log(req.body.file);

// 			fs.unlinkSync(req.body.file, resultHandler);
//     });


// // Upload

// 	router.use(function (req, res, next) {
// 		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// 	  	res.setHeader('Access-Control-Allow-Methods', 'POST');
// 	  	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// 	  	res.setHeader('Access-Control-Allow-Credentials', true);
// 	  	next();
// 	});

// 	var storage = multer.diskStorage({ //multers disk storage settings
//         destination: function (req, file, cb) {
//             cb(null, 'src/assets/images/uploads/');
//         },
//         filename: function (req, file, cb) {
//             var datetimestamp = Date.now();
//             cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
//         }
//      });

//      var upload = multer({ //multer settings
//                     storage: storage
//                 }).single('photo');

 
// 	router.post('/upload', function(req, res) {
// 		console.log("uploading")
//         upload(req,res,function(err){
// 			console.log("file", req.file);
//             if(err){
//                  res.json({error_code:1,err_desc:err});
//                  return;
//             }
//             else
//             	console.log(req.file.path)
//              res.json({error_code:0,err_desc:null,path: req.file.path});
//         });
//     });

module.exports = router;