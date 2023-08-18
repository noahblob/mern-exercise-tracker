const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configures so we can have environment variables in .env file
require('dotenv').config();

// create express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware and express that allows us to parse json
app.use(cors());
app.use(express.json());

// start connection to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// use the routes
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});