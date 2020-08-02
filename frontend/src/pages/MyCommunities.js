import React, { useEffect, useState, useCallback } from 'react'
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
      .get('/community/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(
        (response) => {
          setCommunities(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token])
  

  const setCommunityInfoInLocalStorage = useCallback((name, zipcode, is_closed, id) => {
    localStorage.setItem('community-name', name)
    localStorage.setItem('community-zipcode', zipcode)
    localStorage.setItem('community-is-closed', is_closed)
    localStorage.setItem('community-id', id)
  }, [])


  const containerStyle = {
    margin: '5% 5%',
    fullheight: true
  }

  var noteStyle = {
    color: '#E5E5E5',
    fontStyle: 'italic',
    margin: '15px',
  }

  return (
    <Container style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Heading size={4}>My Communities</Heading>
        <div style={{ display: 'flex' }}>
          {localStorage.getItem('is-staff') !== 'true' ?
            (<Button color='primary' style={{ marginRight: '10px' }}>
              <Link to='/select-communities' style={{ color: 'white' }}>
                Join
              </Link>
            </Button>) 
            :
            (<></>)
          }
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
      </Columns>
      <Columns isMultiline={true}>
        {communities.filter(
          (c) =>
            search === '' || c.name.toLowerCase().includes(search.toLowerCase())
        ).length > 0 ? (
          communities
            .filter(
              (c) =>
                search === '' ||
                c.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((c) => (
              <Columns.Column size={4} key={c.id}>
                <Link
                  to={{
                    pathname: '/community-home/',
                    state: {
                      name: c.name,
                      zipcode: c.zipcode,
                      is_closed: c.is_closed,
                    },
                  }}
                  onClick={() => setCommunityInfoInLocalStorage(c.name, c.zipcode, c.is_closed, c.id)}
                >
                  <CommunityCard title={c.name} img={c.photo_file} />
                </Link>
              </Columns.Column>
            ))
        ) : (
          <p className='has-text-grey-light' style={noteStyle}>
            No communities match this search. Click 'Add' to request to join
            more communities.
          </p>
        )}
      </Columns>
    </Container>
  )
}
