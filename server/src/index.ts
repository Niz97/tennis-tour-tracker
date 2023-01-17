import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send("Testing express page...");
})

app.listen(5000);