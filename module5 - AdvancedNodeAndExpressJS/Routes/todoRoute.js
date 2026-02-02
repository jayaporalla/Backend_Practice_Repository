import { Router } from "express";
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "../Handlers/todoHandler.js";
import { getMiddleware } from "../middleware/get.js";

const todoRouter = Router();

todoRouter.get("/todo", getAllTodo);
todoRouter.post("/todo", getMiddleware, createTodo);
todoRouter.put("/todo/:id", updateTodo);
todoRouter.delete("/todo/:id", deleteTodo);

export default todoRouter;