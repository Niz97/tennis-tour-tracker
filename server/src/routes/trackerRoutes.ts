import express from "express";
const tracker = express.Router();

import { createTracker, deleteTracker, getTrackers } from "../controllers/trackerController";

tracker.route('/').get(getTrackers).post(createTracker);
tracker.route('/:id').delete(deleteTracker);
export default tracker;