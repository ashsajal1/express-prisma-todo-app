import { Router } from "express";
import { createUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/create', createUser);

export default userRouter;