import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './App.css'

type TTracker = {
  name: string;
  _id: string;
}

function App() {
  const [name, setName] = useState('');
  const [trackers, setTrackers] = useState<TTracker[]>([]);

  async function handleCreateTracker(e:React.FormEvent) {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/trackers', {
      method:'POST',
      body:JSON.stringify({
        name:name
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const tracker = await response.json();
    setTrackers([...trackers, tracker]);
    setName('');
  }

  async function handleDeleteTracker(trackerId: string) {
    await fetch(`http://localhost:5000/trackers/${trackerId}`, {
      method:'DELETE',
    });

    setTrackers(trackers.filter(tracker => tracker._id !== trackerId));
  }

  useEffect(() => {
    async function fetchTrackers() {
      const response = await fetch("http://localhost:5000/trackers");
      const newTrackers = await response.json();
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
