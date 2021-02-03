const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Will need added later
// Look into ways to hold and store images.
// Featured Image
// Other Images
// Tags - Array
// Categories - Array

const BeardPostSchema = new Schema({
	created: {
		type: Number,
		default: Date.now,
		trim: true,
	},
	title: {
		type: String,
		required: true,
		trim: true,
	},
	content: {
		type: String,
		required: true,
	},
});

module.exports = BeardPost = mongoose.model('BeardPost', BeardPostSchema);
