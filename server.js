/**
 * Created by Randika on 5/3/2015.
 */

// Import the modules installed to the server
var express = require('express');
var bodyParser = require('body-parser');

// Start the express web framework
var app = express();

// Configure app
app.use(bodyParser());

// Where the application will run
var port = process.env.PORT || 8080;

// Import mongoose
var mongoose = require('mongoose');

// Connect to database
// Can use your own MongoDB installation at: mongodb://127.0.0.1/databasename
mongoose.connect('mongodb://username:password@kahana.mongohq.com:10073/node-api');

// Start the node server
app.listen(port);
console.log('Magic happens on port ' + port);