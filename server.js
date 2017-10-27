// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use('/patient', require('./server/routes/patient'));
app.use('/doctor', require('./server/routes/doctor'));
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

const db ='mongodb://admin:Yellow123!@health-shard-00-00-5vz0l.mongodb.net:27017,health-shard-00-01-5vz0l.mongodb.net:27017,health-shard-00-02-5vz0l.mongodb.net:27017/test?ssl=true&replicaSet=Health-shard-0&authSource=admin';
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

  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  module.exports = app;
  