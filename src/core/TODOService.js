class TODOService {
  constructor(taskValidator) {
    this.taskValidator = taskValidator;
  } 

  availableTasks = [];
  findAll() {
    return Promise.resolve(this.availableTasks);
  }

  findOne(id) {
    const foundTask = this.availableTasks.find((task) => (task.id === id));
    if (!foundTask) {
      return Promise.resolve({error: `TODO List with id ${id} not found`})
    }
    return Promise.resolve(foundTask);
  }

  addTask(task) {
    const taskToBeIncluded = {
      id: new Date().getTime(),
      task: task.task,
      completed: false
    };
    const violations = this.taskValidator.verifyCreation(taskToBeIncluded);
    if (Object.entries(violations).length > 0 ) {
      return Promise.reject(violations);
    }
    this.availableTasks.push(taskToBeIncluded);
    return Promise.resolve(taskToBeIncluded);
  }
}

module.exports = TODOService;