# TODO List

## Resources:
TASK:

```
  Task.propTypes = {
    id: PropType.string,
    tasks: PropType.string,
    completed: PropType.bool
  }
```

This could generate objects like:

```
  {
    "id": "mySuperId",
    "task": "This is Sparta!!!",
    "completed": false
  }
```

/tasks:

GET (búsqueda, find, get, search): Will retrieve the list of tasks, []
POST (creación: create, save, add): Will store the task into the list. It'll send the task as part of the request.

/tasks/{taskId}:
GET: Find the task and return it. 404 Not found
PUT (edición: update, edit, save): 200 Updated, 404 Not found, 4**: Can not update
DELETE: 201 No content
