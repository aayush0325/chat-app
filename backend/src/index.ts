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

app.listen(3000, () => console.log("listening on port 3000"));
