import { Request, Response } from "express";
import prisma from "../libs/prisma";

export const getTodoByUserId = async (req: Request, res: Response) => {
  try {
    const todo = await prisma.todo.findMany({
      where: {
        userId: parseInt(req.params.userid),
      },
    });

    res.json({
      ok: true,
      todo: todo,
    });
  } catch (error) {
    res.json({
      ok: false,
      error: error,
    });
  }
};
