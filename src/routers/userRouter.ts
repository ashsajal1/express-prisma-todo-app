import { Router } from "express";
import { createUser, getUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/:id', getUser);
userRouter.put('/', createUser);
userRouter.delete('/', createUser);

export default userRouter;