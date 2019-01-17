const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const path = require('path');

const app = express();
app.use(express.json());

//Bodyparser was remplaced by express.json

//Db Config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
	.connect(db, {
		useNewUrlParser: true
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

//Use Routes
app.use('/api/items', items);

//Serve statuc assest if in production
if (process.env.NODE_ENV == 'production') {
	//Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
