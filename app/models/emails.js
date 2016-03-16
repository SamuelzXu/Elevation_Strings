var mongoose = require('mongoose');

module.exports = mongoose.model('Emails',{
	message: {
		type: String,
		default: ''
	}
	usr_email: {
		type: String
		default: ''
	}
	usr_name: {
		type: String
		default: ''
	}
});