const express = require('express');
// const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const dotenv = require('dotenv').config();


const PORT = process.env.PORT || 3001;

//sets up Express as our server
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};

// Connect to the Mongo DB
// let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/resilientResinProducts';
// mongoose.connect(
//   MONGODB_URI, { 
//     useNewUrlParser: true,
//     useFindAndModify: false
//   }
// );

// console.log(MONGODB_URI);

// Add routes, both API and view (view is handled by React, so no html routes will be needed)
app.use(routes);

//tells path when not using an API route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌎  ==> now listening on PORT ${PORT}!`);
});