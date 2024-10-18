import { Request, Response, Express } from "express";
import express from "express";
import { userRouter } from "./routes/user";

const app: Express = express();

app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "healthy",
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
