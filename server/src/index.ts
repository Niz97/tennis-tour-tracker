import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Tracker from "./models/Tracker";

config()

const app = express();

app.use(cors());
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
  const name = req.body.name;
  
  const tracker = new Tracker({
    name: name,
    is_tournament: true,
    is_player: false,
  });

  const createdTracker = await tracker.save();

  res.json(createdTracker);

})

app.get('/tracker', async (req: Request, res: Response) => {
  
  const trackers = await  Tracker.find();

  res.json(trackers);

})

app.listen(5000);