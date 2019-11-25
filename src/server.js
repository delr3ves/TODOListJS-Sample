var express = require('express');
var app = express();
var todoController = require('./controller/todoController');

app.use('/api/todo', todoController);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
