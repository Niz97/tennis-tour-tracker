import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import Tracker from "./models/Tracker";


const app = express();

const connect_string = "" // TODO::Get this from env
const PORT = 5000;

mongoose.connect(
  connect_string
  ).then(() => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send("Testing express page...");
})

app.post('/tracker', async (req: Request, res: Response) => {
  const newTracker = new Tracker({
    name: 'My new tracker',
    is_tournament: false,
    is_player: true,
  });
  const createdTracker = await newTracker.save();
  res.json(createdTracker);
})
app.listen(5000);