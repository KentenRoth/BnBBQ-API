const express = require('express');
const router = new express.Router();
const User = require('../Models/User');

// Needs authentication added
// Need to remove ability to create new user once server is launched
// Site will not have comments or mulitple users at launch to save DB space

router.post('/users', async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
