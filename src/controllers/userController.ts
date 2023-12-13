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

//create user
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
      user: newUser,
      body: {name, email}
    });
  } catch (error) {
    const { name, email } = req.body;
    res.status(400).json({
      ok: false,
      error: error,
      body: {name, email},
    });
  }
};


//update user
export const editUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const { id } = req.params;

    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        email,
      },
    });

    res.json({
      ok: true,
      message: "User was successfully updated.",
      todo: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error,
    });
  }
};

//delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await prisma.user.delete({
      where: {
        id: parseInt(id),
      }
    })

    res.json({
      ok: true,
      message: "User was successfully deleted.",
      todo: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error,
    });
  }
};
