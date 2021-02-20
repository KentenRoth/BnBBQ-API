const express = require('express');
const router = new express.Router();
const auth = require('../Middleware/auth');
const User = require('../Models/User');

// Needs authentication added
// Need to remove ability to create new user once server is launched
// Site will not have comments or mulitple users at launch to save DB space

// Creates new user.
router.post('/users', async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();
		const authToken = await user.createAuthToken();

		res.status(201).send({ user, authToken });
	} catch (error) {
		res.status(400).send(error);
	}
});

// Logs into the account
router.post('/users/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const authToken = await user.createAuthToken();
		res.send({ user, authToken });
	} catch (error) {
		res.status(400).send(error.message);
	}
});

// Logs out of current device
router.post('/users/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();

		res.send();
	} catch (error) {
		res.status(500).send();
	}
});

// Logs out of all devices
router.post('/users/logoutAll', auth, async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.send();
	} catch (error) {
		res.status(500).send();
	}
});

router.get('/user/me', auth, async (req, res) => {
	res.send(req.user);
});

module.exports = router;
