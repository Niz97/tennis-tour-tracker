import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Tracker from "./models/Tracker";

config()

const app = express();

app.use(cors({
  origin: "*",
}));
app.use(express.json());

const connect_string = process.env.MONGO_URI;
const PORT = 5000;

mongoose.connect(
  connect_string!
  ).then(() => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/trackers', async (req:Request, res:Response) => {
  const trackers = await Tracker.find();

  res.json(trackers);
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