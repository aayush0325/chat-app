import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { createUserSchema } from "../zod/user.zod";
import logger from "../logger";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";

const prisma = new PrismaClient();
config();

const JWT_KEY = process.env.SECRET_KEY;
if (!JWT_KEY) {
  logger.error("Key for JWT Auth not setup");
  process.exit(1);
}

export const createUser = async (req: Request, res: Response) => {
  const reqBody = req.body;
  const { success, error } = createUserSchema.safeParse(reqBody);

  if (!success) {
    logger.warn("Invalid inputs while creating user", { errors: error });
    return res.status(400).json({
      msg: "Invalid inputs",
      errors: error.errors,
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        userName: reqBody.userName,
      },
    });

    if (existingUser) {
      logger.warn("Attempt to create user failed: Username already exists", {
        userName: reqBody.userName,
      });
      return res.status(400).json({
        msg: "Username already exists",
      });
    }

    const hashedPassword = await hash(reqBody.password, 10);
    const dbData = {
      firstName: reqBody.firstName,
      lastName: reqBody.lastName,
      password: hashedPassword,
      userName: reqBody.userName,
    };

    const user = await prisma.user.create({
      data: dbData,
    });

    logger.info(`User ${user.userName} was created`);

    const token = sign(
      {
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      JWT_KEY,
    );

    return res.status(201).json({
      msg: "User created successfully",
      token,
    });
  } catch (error) {
    logger.error("Error creating user", { error });
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

export const findUserByID = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const parsedId = parseInt(userId);

  if (isNaN(parsedId) || parsedId <= 0) {
    logger.warn("Invalid ID access requested");
    return res.status(400).json({
      error: "Invalid ID provided. It must be a positive integer.",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parsedId,
      },
    });

    if (!user) {
      logger.warn("Tried to find a user which doesn't exist");
      return res.status(404).json({
        msg: "User does not exist",
      });
    }

    logger.info(
      `Successful Search for name:${user.userName} id:${user.id} was made`,
    );

    return res.json({
      msg: "User found",
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
    });
  } catch (error) {
    logger.error("Error finding user by ID", { error });
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};
