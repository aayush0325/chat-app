import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { config } from "dotenv";
import logger from "../logger";

config();
const JWT_KEY = process.env.SECRET_KEY;

if (!JWT_KEY) {
  logger.error("Key for JWT Auth not set up");
  process.exit(1);
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    logger.warn(
      "Unauthorized access attempt: No authorization header or malformed token",
    );
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    verify(token, JWT_KEY);
    next();
  } catch (error) {
    logger.warn("Unauthorized access attempt: Invalid token");
    return res.status(401).json({
      msg: "Unauthorized",
      error,
    });
  }
};
