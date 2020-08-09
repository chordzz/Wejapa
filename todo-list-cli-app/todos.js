console.log("Running todos.js");

//imports dependecy
const fs = require('fs');


//method to add a todo item
var addTodo = (title) => {
    var todos = fetchTodos();
    var todo = {
        title
    };

    var duplicatetodos = todos.filter((todo) => todo.title === title);
    
    if(duplicatetodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        console.log("\n");
        console.log("\n");
        console.log("New task is added");
        return todo;
    }
};

//delete a todo item
var deleteTodo = (title) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);
    
    return todos.length !== filteredtodos.length;
};

//Read a todo item
var readTodo = (title) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter((todo) => todo.title === title);
    return filteredTodos[0];
}

//List all todo items
var listTodos = () => {
    return fetchTodos();
};


//Utility functions
var fetchTodos = () => {
    try {
        var todosString = fs.readFileSync('todos-data.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

var saveTodos = (todos) => {
    fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

var logTodo = (todo) => {
    console.log(`It's title is: ${todo.title}`);
};



//exported functions
module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    logTodo,
    listTodos
};