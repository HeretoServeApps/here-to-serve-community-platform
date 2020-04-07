import React, { useEffect, useState } from "react"
import axios from 'axios'

export default function MyCommunities() {
    const [communities, setCommunities] = useState([])
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get('/community', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((response) => {
            console.log(response.data)
            setCommunities(response.data)
        }, (error) => {
            console.log(error)
        })
    }, [])
    
    return(
        <div>
        <h1>Here to Serve</h1>
        <p>List of Communities:</p>
        {communities.map(c => (
          <li>{c.name}</li>
        ))}
      </div>
    )
}