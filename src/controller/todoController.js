var express = require('express');
var router = express.Router();
var TaskValidator = require('../core/TaskValidator');
var TODOService = require('../core/TodoService');
var createError = require('http-errors');

var todoService = new TODOService(
  new TaskValidator()
);
router.get('/', function (req, res, next) {
  todoService.findAll().then(allTasks => {
    res.send(allTasks);
  });
});

router.get('/:id', function (req, res, next) {
  const numericId = req.params.id * 1;
  todoService.findOne(numericId).then(task => {
    res.send(task);
  }).catch(error => {
    res.send(createError(404));
  });
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  todoService.addTask(req.body || {}).then(createdTask => {
    res.send(createdTask);
  }).catch(error => {
    res.send(createError(406, error));
  });
});

module.exports = router;
