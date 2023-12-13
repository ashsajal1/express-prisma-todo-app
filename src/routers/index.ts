import { Router } from "express";
import todoRouter from "./todoRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/", todoRouter)
router.use("/", userRouter)

export default router;