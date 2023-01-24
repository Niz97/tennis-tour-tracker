import { API_URL } from "./config";

export type TTracker = {
  name: string;
  _id: string;
}
export async function getTrackers(): Promise<TTracker[]> {
  const response = await fetch(`${API_URL}/trackers`);
  return response.json();
}