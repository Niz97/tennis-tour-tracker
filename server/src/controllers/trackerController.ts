import { Request, Response } from "express";
import Tracker from "../models/Tracker";

// Get all Trackers
export async function getTrackers(req: Request, res: Response) {
  
  const trackers = await Tracker.find();

  res.json(trackers);

}

// Get single Tracker

export async function getTracker(req: Request, res: Response) {
  const trackerId = req.params.trackerId;

  const tracker = await Tracker.findById(trackerId);

  res.json(tracker);
}

// Create
export async function createTracker(req: Request, res: Response) {
    
  const tracker = new Tracker({
    name: req.body.name,
    is_tournament: true,
    is_player: false,
  });

  const createdTracker = await tracker.save();

  res.json(createdTracker);

}

// Delete
export async function deleteTracker(req: Request, res: Response) {
  const trackerId = req.params.trackerId;
  const tracker = await Tracker.findByIdAndDelete(trackerId);
  

  res.json(tracker);
}