const express = require('express');
const router = new express.Router();
const Post = require('../Models/Post');
const auth = require('../Middleware/auth');

// Posts new post
router.post('/posts', auth, async (req, res) => {
	const post = new Post({
		...req.body,
		owner: req.user._id,
	});
	try {
		await post.save();
		res.send(post);
	} catch (error) {
		res.status(400).send(error);
	}
});

// Gets posts
// Searches for data in Title, Content, Categories, and Ingredients
router.get('/posts', (req, res) => {
	const text = req.query.search;
	if (text == null) {
		return Post.find({})
			.then((posts) => {
				res.send(posts);
			})
			.catch((error) => {
				res.status(500).send(error);
			});
	}

	Post.find({ $text: { $search: text } })
		.then((posts) => {
			res.send(posts);
		})
		.catch((error) => {
			res.status(500).send(error);
		});
});

// Gets posts by the ID
router.get('/posts/:id', async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id });

		if (!post) {
			return res.status(404).send();
		}
		res.send(post);
	} catch (error) {
		res.status(500).send();
	}
});

// Need to be able to update and make edits to live posts
router.patch('/posts/:id', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const thingsThatCanBeUpdated = [
		'steps',
		'TLDR',
		'categories',
		'tags',
		'ingredients',
		'ingredients2',
		'title',
		'content',
	];

	const isValidUpdate = updates.every((update) =>
		thingsThatCanBeUpdated.includes(update)
	);

	if (!isValidUpdate) {
		return res.status(400).send({ error: 'Cannot update.' });
	}

	try {
		const post = await Post.findOne({ _id: req.params.id });
		if (!post) {
			return res.status(404).send();
		}
		updates.forEach((update) => (post[update] = req.body[update]));
		await post.save();

		res.send(post);
	} catch (error) {
		res.status(500).send();
	}
});

// Deletes single post
router.delete('/posts/:id', auth, async (req, res) => {
	try {
		const post = await Post.findOneAndDelete({
			_id: req.params.id,
		});
		if (!post) {
			return res.status(404).send();
		}
		res.send(post);
	} catch (error) {
		return res.status(500).send();
	}
});

module.exports = router;
