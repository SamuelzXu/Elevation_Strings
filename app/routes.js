var Emails = require('.models/emails');

function getEmails(res) {
	Email.find(function (err,emails) {

		if (err) {
			res.send(err);
		}

		res.json(emails);
	});
};

module.exports = function(app) {

	//api-------------------------------
	app.get('/api/emails', function (req,res) {

		getEmails(res);
	});
}