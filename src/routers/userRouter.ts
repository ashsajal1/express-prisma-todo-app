import { Router } from "express";
import { createUser, editUser, getUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/:id', getUser);
userRouter.put('/:id', editUser);
userRouter.delete('/', createUser);

export default userRouter;