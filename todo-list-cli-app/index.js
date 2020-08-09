//Todo-List Command-Line Application


//Requiring various dependencies needed
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const prompt = require('prompt');

//Requiring other file needed
const todos = require('./todos.js');


//Clears current command-line page
clear();



//Creates welcome banner and app name
console.log(
    chalk.green(
        figlet.textSync('Todo-CLI-App', {
            horizontalLayout: 'half'
        })
    ),
    
    chalk.yellow(
        figlet.textSync('Welcome', {
            horizontalLayout: 'half'
        })
    )
);


//Explains a little on how to use the app
console.log("Enter one of the following");
console.log("\n");
console.log("...............");
console.log("addTodo: To add a new task\ndeleteTodo: To delete a task\nreadTodo: To read a particular task\nlistTodos: To list all tasks");
console.log("\n");
console.log("...............");


//creates prompt object responsible for receiving input from user
var prompt_details = [
    {
        name: "task",
        hidden: false
    }
]

//Starts prompting for user input
prompt.start();

//Command entered is stored in this variable
var command;

//Getting user input through prompt
prompt.get(prompt_details, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        console.log("\n");
        console.log("...............");
        console.log("Data-Received");
        console.log("\n");
//        gets the command entered from the prompt result object
        command = result.task;
        console.log("Task: " + command);
        console.log("\n");
        console.log("Running command: ", command);
        console.log("...............");


//        checks what command was entered and performs the appropriate action
        
        if (command === 'addTodo') {
            console.log("\n");
            console.log("Enter your new task: ");
            var new_task = [
                {
                    name: "newtask",
                    hidden: false
                }
            ]
            prompt.get(new_task, function (err, result) {
                if (err) {
                    console.log(err);
                    return 1;
                } else {
                    var newtask = result.newtask
                    todos.addTodo(newtask);
                }
            });
        } else if (command === 'deleteTodo') {
            console.log("\n");
            console.log("Enter task to delete");
            var delete_task = [
                {
                    name: "deletetask",
                    hidden: false
                }
            ]
            prompt.get(delete_task, function (err, result) {
                if (err) {
                    console.log(err);
                    return 1;
                } else {
                    var deletetask = result.deletetask
                    var todoDeleted = todos.deleteTodo(deletetask);
                    var message = todoDeleted ? 'Task was deleted' : 'Task not found';
                    console.log("\n");
                    console.log(message);
                }
            });

        }
        else if(command === 'readTodo') {
            console.log("\n");
            console.log("Enter task to read");
            var read_task = [
                {
                    name: "readtask",
                    hidden: false
                }
            ]
            prompt.get(read_task, function (err, result) {
                if (err) {
                    console.log(err);
                    return 1;
                } else {
                    var readtask = result.readtask;
                    var todo = todos.readTodo(readtask);

                    if (todo) {
                        console.log("\n");
                        console.log('Great! The task was found.');
                        todos.logTodo(todo);
                    } else {
                        console.log("\n");
                        console.log('Whoops! The task was not found.');
                    }

                }
            });

        }
        else if (command === 'listTodos') {
            console.log("...............");
            console.log("\n");
            var allTodos = todos.listTodos();
            console.log(`Printing ${allTodos.length} task(s).`);
            allTodos.forEach((todo) => todos.logTodo(todo));
            
        }
        else {
                console.log("Invalid command.");
        }
    }
});

