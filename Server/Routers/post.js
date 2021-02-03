const express = require('express');
const router = new express.Router();
const Post = require('../Models/Post');

router.post('/post', async (req, res) => {
	const post = new Post(req.body);
	try {
		await post.save();
		res.send(post);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
