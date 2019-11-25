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

const asApiObject = (task) =>  {
  return {
    id: task._id,
    task: task.task,
    completed: task.completed
  };
}

router.get('/', function (req, res, next) {
  todoService.findAll().then(allTasks => {
    res.send(allTasks.map(asApiObject));
  });
});

router.get('/:id', function (req, res, next) {
  todoService.findOne(req.params.id).then(task => {
    if (task) {
      res.send(asApiObject(task));
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
    res.send(asApiObject(createdTask));
  }).catch(error => {
    res.send(createError(406, error));
  });
});

module.exports = router;
