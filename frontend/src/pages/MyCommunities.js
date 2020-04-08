import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Input } from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import CommunityCard from '../components/communitycard'

export default function MyCommunities() {
  const [communities, setCommunities] = useState([])
  const [search, setSearch] = useState('')
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
        }
      )
  }, [])

  const containerStyle = {
    margin: '5% 10%',
  }

  const splitEvery = (array, length) =>
    array.reduce((result, item, index) => {
      if (index % length === 0) result.push([])
      result[Math.floor(index / length)].push(item)
      return result
    }, [])

  return (
    <Container style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Heading size={4}>My Communities</Heading>
        <div style={{ display: 'flex' }}>
          <Button color='primary' style={{ marginRight: '10px' }}>
            Add
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

      {splitEvery(communities, 3).map((row) => (
        <Columns>
          {row.map((c) => (
            <Columns.Column>
              <CommunityCard text={c.name} />
            </Columns.Column>
          ))}
        </Columns>
      ))}
    </Container>
  )
}
