import { useEffect, useState } from 'react';
import { getTracker } from './api/getTracker';
import { useParams } from "react-router-dom";
import { TTracker } from './api/getTrackers';

function Tracker() {
  const [tracker, setTracker] = useState<any>('');
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
      <div className="head-to-head-container">
        <div style={{display:'flex'}} className="player-1">
          <div className="player-name">Muray:</div>
          <div className="score-container">
            <div className="set-1">1</div>
            <div className="set-1">2</div>
            <div className="set-1">3</div>
          </div>
        </div>
        <div style={{display:'flex'}} className="player-2">
          <div className="player-name">Nadal:</div>
          <div className="score-container">
            <div className="set-1">2</div>
            <div className="set-1">4</div>
            <div className="set-1">6</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracker