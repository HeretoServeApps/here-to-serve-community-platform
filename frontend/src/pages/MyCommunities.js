import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

export default function MyCommunities() {
  const [communities, setCommunities] = useState([])
  const token = localStorage.getItem('token')
  useEffect(() => {
    axios
      .get('/community', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data)
          setCommunities(response.data)
        },
        (error) => {
          console.log(error)
          console.log(token)
        }
      )
  }, [])

  var containerStyle = {
    margin: '5% 10%',
  }

  return (
    <Container style={containerStyle}>
      <Heading size={4}>My Communities</Heading>
      {communities.map((c) => (
        <li>{c.name}</li>
      ))}
    </Container>
  )
}
