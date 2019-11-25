
class TODOService {
  availableTasks = [
    {
      id: 1,
      task: "Just test the simplest API",
      completed: false
    },
    {
      id: 2,
      task: "A completed task",
      completed: true
    },
  ];
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

}

module.exports = TODOService;