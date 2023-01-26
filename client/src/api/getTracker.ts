import { TTracker } from "./getTrackers";
import { API_URL } from "./config";


export async function getTracker(trackerId:string): Promise<TTracker[]> {
  const response = await fetch(`${API_URL}/trackers/${trackerId}`);
  return response.json();
}