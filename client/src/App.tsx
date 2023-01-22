import React, { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');

  function handleCreateTracker(e:React.FormEvent) {
    e.preventDefault();
    fetch('http://localhost:5000/tracker', {
      method:'POST',
      body:JSON.stringify({
        name: name
      })
    })
  }

  return (
    <div className="App">
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
