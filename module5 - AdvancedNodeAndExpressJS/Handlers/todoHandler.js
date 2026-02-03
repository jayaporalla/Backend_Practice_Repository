import { setTodo, todos } from "../data/todo.js"
import Todo from "../model/todoModel.js";

export const getAllTodo = (req, res) => {
    try {
        return res.status(200).json({ todos });
    } catch (error) {
        console.log("Error occured of getAllTodo");
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const createTodo = (req, res) => {
    try {
        const { task, dueDate } = req.body;
        const todo = new Todo(task, new Date(dueDate).toDateString());
        todos.push(todo);
        return res.status(201).json({ todo: todo });
    } catch (error) {
        console.log("Error occured of createTodo");
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateTodo = (req, res) => {
    try {
        const id = req.params.id;
        const { task, dueDate } = req.body;
        const todo = todos.find((t) => t.id === id);
        todo.task = task;
        todo.dueDate = new Date(dueDate).toDateString();
        return res.status(201).json({ todo: todo });
    } catch (error) {
        console.log("Error occured of updateTodo");
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteTodo = (req, res) => {
    try {
        const id = req.params.id;
        const todo = todos.filter((t) => t.id !== id);
        setTodo(todo);
        return res.status(201).json({ message: "Deleted Successfully" });
    } catch (error) {
        console.log("Error occured of updateTodo");
        return res.status(500).json({ message: "Something went wrong" });
    }
}