import { Router, Request, Response } from "express";
import logger from "../logger";

import { createUser, signInHandler, deleteUser } from "../controllers/user.controller";
import { findUserByID } from "../controllers/user.controller";

import { authMiddleware } from "../middlewares/auth";

export const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  logger.info("Health check on user router");
  res.json({
    msg: "healthy",
  });
});

// Route to create user
userRouter.post("/create", createUser as any);

//Route to find user by ID
userRouter.get("/read/:userId", authMiddleware as any, findUserByID as any);

// Sign In route
userRouter.post("/signin", signInHandler as any );

// route to delete users
userRouter.delete("/delete", authMiddleware as any, deleteUser as any);