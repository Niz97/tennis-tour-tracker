import express from "express";
const tracker = express.Router();

import { 
  createTracker, 
  deleteTracker, 
  getTrackers,
  getTracker, 
} from "../controllers/trackerController";

tracker.route('/').get(getTrackers).post(createTracker);
tracker.route('/:trackerId').get(getTracker).delete(deleteTracker);
export default tracker;