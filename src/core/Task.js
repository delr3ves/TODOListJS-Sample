const mongoose = require('mongoose');

const Task = mongoose.model('Task', { 
  task: String,
  completed: Boolean
});

module.exports = Task;