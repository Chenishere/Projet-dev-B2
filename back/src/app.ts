import express, { Request, Response } from "express";
import cors from "cors";

import monstersRoutes from "./routes/users";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use(express.json());
app.use(cors());

app.use("/monsters", monstersRoutes);

export default app;
