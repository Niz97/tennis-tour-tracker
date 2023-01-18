import mongoose, { Schema } from "mongoose";

interface Tracker {
  name: string;
  is_tournament: boolean;
  is_player: boolean;
}

const TrackerSchema = new Schema<Tracker>({
  name: { type: String, required: true },
  is_tournament: { type: Boolean, required: true },
  is_player: { type: Boolean, required: true },
});

const TrackerModel = mongoose.model('Tracker', TrackerSchema);

export default TrackerModel;
