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

## Typical endpoints in a REST Style:

`/tasks:`
*GET* (used for read-only operations, find, get, search): Will retrieve the list of tasks. It'll return the empty list when there is no tasks.
*POST* (used for creation: create, save, add): Will store the task into the list. It'll send the task as part of the request.

`/tasks/{taskId}:` Including the ID.

*GET* Find the task and return it. 404 Not found
*PUT* (used for edition: update, edit, save): 200 Updated, 404 Not found, 4**: Can not update
*DELETE*(used for deletion: remove, delete) 201 No content


## Development
I've used `yarn` as build system so you'll need to install dependencies by running:

```
yarn install
```

After that you'll be able to start the server, or run it in a watch mode in order to automatize reloadings after every change:

```
yarn start #to run the server
yarn watch #to listen code changes.
```

### Infrastructure:

As we're using mongo as storage for our API, you'll need this database up and running. To do so, the project manages it using docker.
So, to start mongo, you'll need to install docker first and then execute:

```
docker-compose up -d
```

Once you want to stop the database, just run:
```
docker-compose stop
```


### How the code was written?

I recomend, that you read the code commit by commit so you'll be able to se how the project was developed and what decissions I made in every step.
