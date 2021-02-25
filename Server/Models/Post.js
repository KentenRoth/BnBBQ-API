const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Will need added later
// Look into ways to hold and store images.
// Featured Image
// Other Images
// TLDR

const PostSchema = new Schema({
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
	content: [
		{
			type: String,
			required: true,
		},
	],
	steps: [
		{
			type: String,
			trim: true,
		},
	],
	TLDR: [
		{
			type: String,
			trim: true,
		},
	],
	categories: [
		{
			type: String,
			default: 'No Category',
			trim: true,
		},
	],
	tags: [
		{
			type: String,
			default: 'No Tag',
			trim: true,
		},
	],
	ingredients: [
		{
			type: String,
			default: 'None',
			trim: true,
		},
	],
	ingredients2: [
		{
			type: String,
			default: 'None',
			trim: true,
		},
	],
	time: {
		type: String,
		trim: true,
	},
	location: {
		type: String,
		trim: true,
	},
	f_image: {
		type: String,
		required: true,
		trim: true,
	},
});

module.exports = Post = mongoose.model('Post', PostSchema);
