const Task = require('./Task');

class TODOService {
  constructor(taskValidator, taskRepository) {
    this.taskValidator = taskValidator;
    this.taskRepository = taskRepository;
  } 

  findAll() {
    return this.taskRepository.findAll();
  }

  findOne(id) {
    return this.taskRepository.findById(id);
  }

  addTask(task) {
    const taskToBeIncluded = new Task({
      task: task.task,
      completed: false
    });
    const violations = this.taskValidator.verifyCreation(taskToBeIncluded);
    if (Object.entries(violations).length > 0 ) {
      return Promise.reject(violations);
    }
    return this.taskRepository.save(taskToBeIncluded);
  }
}

module.exports = TODOService;