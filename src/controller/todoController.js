var express = require('express');
var router = express.Router();
var TaskValidator = require('../core/TaskValidator');
var TaskRepository = require('../core/TaskRepository');
var TODOService = require('../core/TodoService');
var createError = require('http-errors');

var todoService = new TODOService(
  new TaskValidator(),
  new TaskRepository()
);
router.get('/', function (req, res, next) {
  todoService.findAll().then(allTasks => {
    res.send(allTasks);
  });
});

router.get('/:id', function (req, res, next) {
  todoService.findOne(req.params.id).then(task => {
    if (task) {
      res.send(task);
    } else {
      res.send(createError(404));
    }
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
