const Task = require('./Task');

class TaskRepository {
  findAll() {
    return Task.find();
  }

  findById(id) {
    return Task.findOne({_id: id});
  }

  save(task) {
    return task.save();
  }
}

module.exports = TaskRepository;