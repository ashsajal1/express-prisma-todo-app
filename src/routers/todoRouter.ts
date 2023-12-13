import { Router } from "express";
import { createTodo, deleteTodo, editTodo, getTodoByUserId } from "../controllers/todoController";

const todoRouter = Router();

todoRouter.get('/:userid/todo', getTodoByUserId) 
todoRouter.post('/:userid/todo', createTodo);
todoRouter.put('/todo/:todoid', editTodo);
todoRouter.delete('/todo/:todoid', deleteTodo);

export default todoRouter;
