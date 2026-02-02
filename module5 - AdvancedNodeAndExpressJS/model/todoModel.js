import { todos } from "../data/todo.js";

export default class Todo{
    constructor(task, dueDate){
        this.task = task;
        this.dueDate = dueDate;
        this.id = crypto.randomUUID();
    }
    get(id){
        const todo = todos.find((t) => t.id === id);
        return todo;
    }
}