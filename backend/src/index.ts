import { Request, Response, Express } from "express";
import express from "express";
import { userRouter } from "./routes/user";
import logger from "./logger";

const app: Express = express();

app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  logger.info("Health Check on server");
  res.json({
    msg: "healthy",
  });
});

logger.info("Server started on Port 3000");

app.listen(3000);
