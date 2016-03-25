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

var transporter = nodemailer.createTransport();

app.post("/js/contact", function(req,res) {
	var mail = {
		from: req.body.email,
		to: 'elevationstrings@gmail.com',
		subject: 'Website Contact',
		text: "Name: " + req.body.fullName + "\n" + "Email: " + req.body.email
	};
	transporter.sendMail(mail, function(error,info) {
		if (error) {
			console.log(error.message);
			res.send({
				success: error,
				message : error.message
			});
		} else {
			console.log("Message sent");
			res.send({
				success : error,
				message : "Message successful sent. We will get back to you as soon as possible! "
			})
		}
	});
});

//mongoose.connect('mongodb://localhost/myapp');

app.listen(port);
console.log("App listening on port" + port);
