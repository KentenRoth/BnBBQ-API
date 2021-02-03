const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Will need added later
// featured Image
// other Images

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
