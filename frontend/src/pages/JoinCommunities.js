import React, { useState, useEffect, useCallback } from "react"
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button'
import Table from 'react-bulma-components/lib/components/table'
import { Radio } from 'react-bulma-components/lib/components/form'


export default function JoinCommunities() {
  // Non-bulma styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '800px',
    maxHeight: '1000px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem'
  }
  const [newCommunities, setNewCommunities] = useState([])
  const [myCommunities, setMyCommunities] = useState([])
  const token = localStorage.getItem('token')
  const [selectedId, setSelectedId] = useState('')
  let history = useHistory()

  //adds volunteer to community
  const addVolunteer = useCallback(() => {
    const param = JSON.stringify({
      community: parseInt(selectedId),
      user: localStorage.getItem('email'),
    })

    axios
      .post('/add-volunteer-to-community/', param, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          history.push('/my-communities')
        },
        (error) => {
          console.log(error)
        }
      )
  }, [selectedId, token])

  // Get all communities
  useEffect(() => {
    axios.get('/communities/')
      .then((response) => {
        setNewCommunities(Array.from(response.data))
      })
  }, [])

  // Get communities user is in 
  useEffect(() => {
    axios
      .get('/community/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(
        (response) => {
          let communitiesUserIsIn = []
          for(var i = 0; i < response.data.length; i++) {
            communitiesUserIsIn.push(response.data[i].id)
          }
          setMyCommunities(communitiesUserIsIn)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  return (
    <Container style={containerStyle}>
      <Heading size={4}>Join Communities</Heading>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {newCommunities.map((c) => (
            !myCommunities.includes(c.id) &&
            (<tr>
              <td>{c.name}</td>
              <td>
                <Radio
                  onChange={(e) => {
                    setSelectedId(e.target.value)
                  }}
                  checked={selectedId === String(c.id)}
                  value={String(c.id)}
                  name="community"
                />
              </td>
            </tr>)
          ))}
        </tbody>
      </Table>
      
      <Button onClick={() => addVolunteer()} style={{ marginTop: '1rem', marginBottom: '1rem' }}
        color='primary' fullwidth={true}>
        JOIN SELECTED COMMUNITY
      </Button>
    </Container>
  )
}