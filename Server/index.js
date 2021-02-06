require('./mongoose');

const express = require('express');
const postRouter = require('./Routers/post');
const userRouter = require('./Routers/user');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(postRouter);
app.use(userRouter);

app.listen(port, () => {
	console.log(`Server up on ${port}`);
});
