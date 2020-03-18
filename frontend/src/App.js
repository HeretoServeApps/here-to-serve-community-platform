import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [communities, setCommunities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/community/').then(({ data }) => {
      setCommunities(data)
    })
  }, [])

  return (
    <div>
      <h1>Here to Serve</h1>

      <p>List of Communities:</p>
      {communities.map(c => (
        <li>{c.name}</li>
      ))}
    </div>
  )
}

export default App
