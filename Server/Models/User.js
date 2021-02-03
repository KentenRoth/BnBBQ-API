const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});

module.exports = User = mongoose.model('User', UserSchema);
