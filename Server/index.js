require('./mongoose');

const express = require('express');
const beardPostRouter = require('./Routers/beardPost');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(beardPostRouter);

app.listen(port, () => {
	console.log(`Server up on ${port}`);
});
