var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var requireDir = require('require-dir');

var config = requireDir('./config/');
mongoose.connect(process.env.MONGODB_URI || config.db.mongodb);

requireDir('./models/');
var routes = requireDir('./routes/');

var app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', function(req, res) {
    return res.status(200).send('Welcome to Gruber API');
});
app.use('/drivers', routes.drivers);
app.use('/passengers', routes.passengers);
app.use('/requests', routes.requests);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Gruber API listening on port ${port}!`);
});
