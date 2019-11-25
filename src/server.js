var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todoController = require('./controller/todoController');
var config = require('./config');

var mongoose = require('mongoose');
console.log(config.mongo.connectionUrl());
mongoose.connect(config.mongo.connectionUrl(),
  { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use('/api/todo', todoController);

app.listen(config.server.port, function () {
  console.log(`Example app listening on port ${config.server.port}!`);
});
