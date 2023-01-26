import { useEffect, useState } from 'react';
import { getTracker } from './api/getTracker';
import { useParams } from "react-router-dom";
import { TTracker } from './api/getTrackers';

function Tracker() {
  const [tracker, setTracker] = useState<TTracker>();
  const { trackerId } = useParams();
  
  useEffect(() => {
    async function fetchTracker() {
      const tracker = await getTracker(trackerId!);
      setTracker(tracker);
    }
  })

  return (
    <div>{tracker!}</div>
  )
}

export default Tracker