import { Request, Response } from "express";
import prisma from "../libs/prisma";

//get user
export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      }
    })

    res.json({
      ok: true,
      message: "User was found.",
      todo: user,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.json({
      ok: true,
      message: "User was successfully created.",
      todo: newUser,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error,
    });
  }
};
