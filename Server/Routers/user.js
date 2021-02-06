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

// users/login still need to be able to login when admin page is created

// users/logout still need to be able to logout when admin page is created

// users/logoutAll will need this so I can logout all accounts if needed

// users/me this will be needed to change/update password

module.exports = router;
