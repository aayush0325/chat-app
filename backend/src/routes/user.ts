import { Router, Request, Response, Application } from "express";
import logger from "../logger";

import { createUser } from "../controllers/user.controller";
import { findUserByID } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  logger.info("Health check on user router");
  res.json({
    msg: "healthy",
  });
});

// Route to create user
userRouter.post("/create", createUser as any)

//Route to find user by ID
userRouter.get("/read/:userId", findUserByID as any)
