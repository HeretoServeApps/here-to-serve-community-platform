import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Input } from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import CommunityCard from '../components/communitycard'
import { Link } from 'react-router-dom'

export default function MyCommunities() {
  const [communities, setCommunities] = useState([])
  const [search, setSearch] = useState('')
  const token = localStorage.getItem('token')
  
  useEffect(() => {
    axios
      .get('/community', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data)
          setCommunities(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token])

  const containerStyle = {
    margin: '5% 10%',
  }

  return (
    <Container style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Heading size={4}>My Communities</Heading>
        <div style={{ display: 'flex' }}>
          <Button color='primary' style={{ marginRight: '10px' }}>
            <Link to='/select-communities' style={{color: 'white'}}>
            Add
            </Link>
          </Button>
          <Button color='primary' outlined={true}>
            Edit
          </Button>
        </div>
      </div>
      <Columns>
        <Columns.Column>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Communities'
          />
        </Columns.Column>
        <Columns.Column size={2}>
          <Button
            color='light'
            fullwidth={true}
            style={{ marginRight: '10%' }}
          >
            Search
          </Button>
        </Columns.Column>
      </Columns>

      <Columns isMultiline={true}>
        {communities.map((c) => (
          <Columns.Column size={4}>
            <CommunityCard text={c.name} />
          </Columns.Column>
        ))}
      </Columns>
    </Container>
  )
}
