import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const userRouter = Router();
const prisma = new PrismaClient();

userRouter.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "healthy",
  });
});
