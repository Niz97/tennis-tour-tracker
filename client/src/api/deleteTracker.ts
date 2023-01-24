import { API_URL } from "./config";

export async function deleteTracker(trackerId:string) {
  await fetch(`${API_URL}/trackers/${trackerId}`, {
    method:'DELETE',
  });
}