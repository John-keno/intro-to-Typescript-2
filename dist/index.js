"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.todoId = 0;
    }
    addTodo(task, dueDate) {
        this.todoId += 1;
        const newTodo = {
            id: this.todoId,
            task,
            completed: false,
            dueDate
        };
        this.todos.push(newTodo);
        console.log(`Todo with id ${this.todoId} added`);
    }
    completeTodo(id) {
        const todo = this.todos.find(todo => todo.id == id);
        if (todo) {
            todo.completed = true;
            console.log(`Todo with id ${id} completed`);
        }
        else {
            console.error(`Todo with id ${id} not found`);
        }
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        console.log(`Todo with id ${id} removed`);
    }
    listTodos() {
        console.log("List of todos:");
        return this.todos;
    }
    filterTodos(completed) {
        console.log(`List of ${completed ? "completed" : "incomplete"} todos:`);
        return this.todos.filter(todo => todo.completed == completed);
    }
    updateTodoTask(id, task) {
        const todo = this.todos.find(todo => todo.id == id);
        if (todo) {
            todo.task = task;
            console.log(`Todo with id ${id} updated`);
        }
        else {
            console.error(`Todo with ${id} not found`);
        }
    }
    clearCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log("Completed todos removed");
    }
}
const todoList = new TodoList();
todoList.addTodo("Buy groceries", new Date("2025-03-01"));
todoList.addTodo("Read a book"); // No dueDate provided
todoList.addTodo("Learn TypeScript", new Date("2025-03-02"));
todoList.completeTodo(1);
todoList.updateTodoTask(2, "Read a novel");
console.log(todoList.listTodos());
console.log(todoList.filterTodos(true));
console.log(todoList.filterTodos(false));
todoList.clearCompletedTodos();
console.log(todoList.listTodos());
