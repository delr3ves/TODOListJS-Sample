var express = require('express');
var router = express.Router();
var TODOService = require('../core/TodoService');
var createError = require('http-errors');

var todoService = new TODOService();
router.get('/', function (req, res, next) {
  todoService.findAll().then(todos => {
    res.send(JSON.stringify(todos));
  });
});

router.get('/:id', function (req, res, next){
  const numericId = req.params.id * 1;
  todoService.findOne(numericId).then(todo => {
    res.send(JSON.stringify(todo));
  }).catch(error => {
    res.send(createError(404));
  });
});

module.exports = router;
