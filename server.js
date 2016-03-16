var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require ('mongodb');
var mongoose = require('mongoose');

var nodemailer = require('nodemailer');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());

//mongoose.connect("mongodb://127.0.0.1/myDatabase");

app.listen(port);
console.log("App listening on port" + port);
