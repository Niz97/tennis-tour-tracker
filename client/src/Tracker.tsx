import { useEffect, useState } from 'react';
import { getTracker } from './api/getTracker';
import { useParams } from "react-router-dom";
import { TTracker } from './api/getTrackers';

function Tracker() {
  const [tracker, setTracker] = useState<TTracker | any>('');
  const { trackerId } = useParams();
  
  useEffect(() => {
    async function fetchTracker() {
      const tracker = await getTracker(trackerId!);
      setTracker(tracker);
    }
    fetchTracker();
  }, [])

  return (
    <div>
      <div className="tracker-name">Name:{tracker.name}</div>
      <div>Ranking: </div>
      <div>Live Points:</div>
      <div>Official Points:</div>

    </div>
  )
}

export default Tracker