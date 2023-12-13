import { Request, Response } from "express";
import prisma from "../libs/prisma";

export const getTodoByUserId = async (req: Request, res: Response) => {
  try {
    const todo = await prisma.todo.findMany({
      where: {
        userId: parseInt(req.params.userid),
      },
    });

    res.status(200).json({
      ok: true,
      todo: todo,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error,
    });
  }
};

//create todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;
    const { userid } = req.params;

    const newTodo = await prisma.todo.create({
      data: {
        title: title,
        completed: completed,
        userId: parseInt(userid),
      },
    });

    res.json({
      ok: true,
      message: "Todo was successfully created.",
      todo: newTodo,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error,
    });
  }
};

//edit todo
export const editTodo = async (req: Request, res: Response) => {
  try {
    const { newTitle, completedStatus } = req.body;
    const { todoid } = req.params;

    const editedTodo = await prisma.todo.update({
      where: {
        id: parseInt(todoid),
      },
      data: {
        title: newTitle,
        completed: completedStatus,
        updatedAt: new Date(),
      },
    });

    res.json({
      ok: true,
      message: "Todo was successfully edited.",
      todo: editedTodo,
      body: { newTitle, completedStatus },
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error,
    });
  }
};

//delete todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { todoid } = req.params;

    const deletedTodo = await prisma.todo.delete({
      where: {
        id: parseInt(todoid),
      },
    });

    res.json({
      ok: true,
      message: "Todo was successfully deleted.",
      todo: deletedTodo,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error,
    });
  }
};
