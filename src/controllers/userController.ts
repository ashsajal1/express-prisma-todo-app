import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
  } catch (error) {}
};
