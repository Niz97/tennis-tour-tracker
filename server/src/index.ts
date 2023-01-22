import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Tracker from "./models/Tracker";

config()

const app = express();

app.use(express.json());

const connect_string = process.env.MONGO_URI; // TODO::Get this from env
const PORT = 5000;

mongoose.connect(
  connect_string!
  ).then(() => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send("Testing express page...");
})

app.post('/tracker', async (req: Request, res: Response) => {
  const { name, is_tournament, is_player } = req.body;
  
  if (is_tournament && is_player) return res.json('Please only select tournament or player. You cannot choose both!');

  const tracker = new Tracker({
    name: name,
    is_tournament: is_tournament,
    is_player: is_player,
  });

  const createdTracker = await tracker.save();

  res.json(createdTracker);

})

app.get('/tracker', async (req: Request, res: Response) => {
  
  const trackers = await  Tracker.find();

  res.json(trackers);

})

app.listen(5000);