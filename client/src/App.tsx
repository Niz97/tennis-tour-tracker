import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { createTracker } from './api/createTracker';
import { deleteTracker } from './api/deleteTracker';
import { getTrackers, TTracker } from './api/getTrackers';
import './App.css'



function App() {
  const [name, setName] = useState('');
  const [trackers, setTrackers] = useState<TTracker[]>([]);

  async function handleCreateTracker(e:React.FormEvent) {
    e.preventDefault();
    
    const tracker = await createTracker(name);
    setTrackers([...trackers, tracker]);
    setName('');
  }

  async function handleDeleteTracker(trackerId: string) {
    await deleteTracker(trackerId);
   
    setTrackers(trackers.filter(tracker => tracker._id !== trackerId));
  }

  useEffect(() => {
    async function fetchTrackers() {
      const newTrackers = await getTrackers();
      setTrackers(newTrackers)
    }
    fetchTrackers();
  }, []);

  return (
    <div className="App">
      <ul className="trackers">
        {
          trackers.map((tracker) => (
            <li key={tracker._id}>
              <button onClick={() => handleDeleteTracker(tracker._id)}>X</button>
              
              <Link to={`/trackers/${tracker._id}`}>{tracker.name}</Link>
            </li>
          ))
        }
      </ul>
     <form onSubmit={handleCreateTracker}>
      <label htmlFor="tracker-title">Tracker name</label>
      <input id="tracker-title" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        } }
        value={name}
      />
      <button>Create Tracker</button>
     </form>
    </div>
  )
}

export default App

