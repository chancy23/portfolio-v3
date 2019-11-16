const express = require('express');
const expressEnforcesSSL = require('express-enforces-ssl');
const routes = require('./routes');
const path = require('path');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

if(process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
  app.use(expressEnforcesSSL());
}
else {
  app.disable(expressEnforcesSSL());
};

//express sessions setup 
app.disable('x-powered-by');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};

app.use(routes);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌎  ==> now listening on PORT ${PORT}!`);
});