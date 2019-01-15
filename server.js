const express = require('express')
const mongoose = require('mongoose')
const items = require("./routes/api/items")

const app = express();
app.use(express.json())

//Bodyparser was remplaced by express.json

//Db Config
const db = require("./config/keys").mongoURI;

//Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));