const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const competition = require('./competition.js');
const stat = require('./stats.js');

// setup express
const app = express();


// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


mongoose.connect('mongodb://localhost:27017/sports-blog', {
  useNewUrlParser: true
});


app.use("/api/competition", competition.routes);
app.use("/api/stat", stat.routes);

// listen on port 3000
app.listen(3000, () => console.log('Server listening on port 3000!'));