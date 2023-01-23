import React, { useState, useEffect } from 'react'
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
    await fetch('http://localhost:5000/tracker', {
      method:'POST',
      body:JSON.stringify({
        name:name
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setName('');
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
            <li key={tracker._id}>{tracker.name}</li>
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
