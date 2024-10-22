import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import logger from "../logger";

export const userRouter = Router();
const prisma = new PrismaClient();

userRouter.get("/", (req: Request, res: Response) => {
  logger.info("Health check on user router");
  res.json({
    msg: "healthy",
  });
});
