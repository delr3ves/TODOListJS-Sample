class TaskValidator {
  verifyCreation(task) {
    const errors = {}
    if (!task.task) {
      errors["task"] = "Task can not be empty";
    }
    return errors;
  }
}

module.exports = TaskValidator;