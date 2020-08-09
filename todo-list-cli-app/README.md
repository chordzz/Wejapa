# TO-DO List CLI application with Node.js

This is a basic to-do list application that can be built upon to add more custom functions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js version 10.15.3(and above)
A code editor IDE
Git and Github
Installation of all dependencies as stated in the package.json file
A command-line interface (Git bash or windows cmd etc.)
```

### Installing

First clone the repository from https://github.com/chordzz/Wejapa.
Then open your command-line interface and navigate to the folder that contains the "index.js" file.

Next Open the package.json file and install the dependencies as stated in the file by running
```
npm install --save dependencyName1 dependencyName2 
```
This installs the dependencies needed to run your CLI app

After installing your dependencies, your CLI app is ready to run.
Give it a spin by running the following command in the Command-line

```
node index.js
```
On getting the first prompt, type in ```addTodo``` press enter, then type in any task to your to-do list. When added run ```node index.js ``` again, on getting the prompt this time, type in ```listTodos```. A list of all the tasks on your to-do list will be shown.

## App functionalities

The following commands are available on this app as at the writing of this document

- addTodo: Adds a new task to the list of tasks on your todo list
- deleteTask: Deletes a specified task by the user from the list of tasks
- readTodo: To read details of a particular task
- listTodos: This command list all the tasks available on your todo list

### Using the commands

* addTodo:

The app prompts for the input of one of four commands.
Enter ```addTodo``` (using the stated casing).
The app then prompts for the entering of your task. Enter any task you plan on adding e.g Add a deleteAll functionality to my app.

Example:
```
Enter one of the following

...............
addTodo: To add a new task
deleteTodo: To delete a task
readTodo: To read a particular task
listTodos: To list all tasks

...............
prompt: task: addTodo

...............
Data-Received


Task: addTodo


Running command:  addTodo
...............


Enter your new task:
prompt: newtask: Add a deleteAll functionality to my app


New task is added
```

* deleteTodo:

The app prompts for the input of one of four commands.
Enter ```deleteTodo``` (using the stated casing).
The app then prompts for the entering of the task. Enter any task you plan on deleting e.g Add a deleteAll functionality to my app. Provided the task already exists on the list it will be deleted.

Example: 
```
Enter one of the following

...............
addTodo: To add a new task
deleteTodo: To delete a task
readTodo: To read a particular task
listTodos: To list all tasks

...............
prompt: task: deleteTodo

...............
Data-Received


Task: deleteTodo


Running command:  deleteTodo
...............

Enter task to delete:
prompt: deletetask: Add a deleteAll functionality to my app


Task was deleted
```
**Note** : This app is case sensitive at this point, therefore all commands and tasks must be carefully stated. It returns ```Task not found``` if the task does not exist of if it was not well typed.

* readTodo:

The app prompts for the input of one of four commands.
Enter ```readTodo``` (using the stated casing).
The app then prompts for the entering of your task. Enter any task you plan on reading e.g Add a deleteAll functionality to my app.

This particular functionality is still in development as the only detail available to be read is the task title.

```
Enter one of the following

...............
addTodo: To add a new task
deleteTodo: To delete a task
readTodo: To read a particular task
listTodos: To list all tasks

...............
prompt: task: readTodo

...............
Data-Received


Task: readTodo


Running command: readTodo
...............

Enter task to read:
prompt: readtask: Add a deleteAll functionality to my app


Great! The task was found.
It's title is: Add a deleteAll functionality to my app
```

* listTodos:

The app prompts for the input of one of four commands.
Enter ```listTodos``` (using the stated casing).
The app then lists all the available tasks on the list.

Example: 

```
Enter one of the following


...............
addTodo: To add a new task
deleteTodo: To delete a task
readTodo: To read a particular task
listTodos: To list all tasks


...............
prompt: task:  listTodos


...............
Data-Received


Task: listTodos


Running command:  listTodos
...............
...............


Printing 7 task(s).
It's title is: Mow the lawn
It's title is: Code more Node Js
It's title is: Include other requirements in the todo-app
It's title is: Watch Ball
It's title is: Juggle
It's title is: hehehe
It's title is: test

```


### Additional notes

This app as a lot of functionalities that can and should be added as it is just a basic backbone of how a todo list works. Feel free to fork this project,add new functionalities and send pull requests.

#### Examples of some requirements hoped to be covered in future

- Clear all tasks
- Add and View dates of when task was added and when it is due
- View task status e.g Done, pending

etc.

#### Issues Faced
Most of the members of Team JM have little or no experience with node.js, so collaboration was a really hard as most people had no idea what to do or how to go about it.

**Cheers**

## Built With

* [Node.js] - The web framework used
* [JSON]- Dependency Management
* [Javascript]

## Contributing

JM3

 

## Authors

* **Olaife Olawore** - *Initial work* (https://github.com/chordzz)

### See also the list of [contributors]
- Members of Team Javascript M (Wejapa internship 2020)


## Acknowledgments

* www.sitepoint.com
* www.vegibit.com
* etc
