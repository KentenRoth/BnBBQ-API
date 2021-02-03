const express = require('express');
const router = new express.Router();
const Post = require('../Models/Post');

// Need authentication to Post, Delete, or Edit

router.post('/posts', async (req, res) => {
	const post = new Post(req.body);
	try {
		await post.save();
		res.send(post);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.get('/posts', (req, res) => {
	Post.find({})
		.then((posts) => {
			res.send(posts);
		})
		.catch((error) => {
			res.status(500).send();
		});
});

module.exports = router;
