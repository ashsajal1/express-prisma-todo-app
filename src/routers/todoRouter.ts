import { Router } from "express";
import { getTodoByUserId } from "../controllers/todoController";

const todoRouter = Router();

todoRouter.get('/:userid/todo', getTodoByUserId) 

export default todoRouter;
