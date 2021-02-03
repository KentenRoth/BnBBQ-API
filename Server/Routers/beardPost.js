const express = require('express');
const router = new express.Router();
const BeardPost = require('../Models/BeardPosts');

router.post('/beardPost', async (req, res) => {
	const beardPost = new BeardPost(req.body);
	try {
		await beardPost.save();
		res.send(beardPost);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
