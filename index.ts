interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
}

interface TodoWithDueDate extends TodoItem {
    dueDate: Date;
}

type TodoItemTypes = TodoItem | TodoWithDueDate;

class TodoList {
    private todos: TodoItemTypes[];
    private todoId: number;

    constructor(){
        this.todos = [];
        this.todoId = 0;
    }

    addTodo(task: string, dueDate?: Date): void {
        this.todoId += 1;
        const newTodo: TodoItemTypes = {
            id: this.todoId,
            task,
            completed: false,
            dueDate
        };

        this.todos.push(newTodo);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id == id);
        if(todo) {
            todo.completed = true;
        }else{
            console.error(`Todo with id ${id} not found`);
        }
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    listTodos(): TodoItemTypes[] {
        return this.todos;
    }

    filterTodos(completed: boolean): TodoItemTypes[] {
        return this.todos.filter(todo => todo.completed == completed);
    }

    updateTodoTask(id: number, task: string): void {
        const todo = this.todos.find(todo => todo.id == id);
        if(todo) {
            todo.task = task;
        }else{
            console.error(`Todo with ${id} not found`);
        }
    }

    clearCompletedTodos(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}

// Example usage
const todoList = new TodoList();
todoList.addTodo("Buy groceries", new Date("2025-01-01"));
todoList.addTodo("Read a book"); // No dueDate
todoList.completeTodo(1);
todoList.updateTodoTask(2, "Read a novel");
console.log(todoList.listTodos());
console.log(todoList.filterTodos(true));
todoList.clearCompletedTodos();
console.log(todoList.listTodos());