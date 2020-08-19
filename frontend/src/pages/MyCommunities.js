import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Input } from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import CommunityCard from '../components/communitycard'

import ApprovalCover from '../images/waiting_approval.png'

export default function MyCommunities() {
  const [communities, setCommunities] = useState([])
  const [search, setSearch] = useState('')
  const [approvedCommunityIds, setApprovedCommunityIds] = useState([])
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
  }, [])

  useEffect(() => {
    axios
      .get('/community-user-roles-one-user/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
        params: {
          user_email: localStorage.getItem('email'),
        },
      })
      .then(
        (response) => {
          let approvedCommunities = []
          for(var i = 0; i < response.data.length; i++) {
            if(response.data[i].is_approved) {
              approvedCommunities.push(response.data[i].community)
            }
          }
          setApprovedCommunityIds(approvedCommunities)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  const setCommunityInfoInLocalStorage = useCallback(
    (name, zipcode, is_closed, id) => {
      localStorage.setItem('community-name', name)
      localStorage.setItem('community-zipcode', zipcode)
      localStorage.setItem('community-is-closed', is_closed)
      localStorage.setItem('community-id', id)
    },
    []
  )

  const containerStyle = {
    margin: '5% auto',
    minHeight: '600px',
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
          {localStorage.getItem('is-staff') !== 'true' ? (
            <Button color='primary' style={{ marginRight: '10px' }}>
              <Link to='/select-communities' style={{ color: 'white' }}>
                Join
              </Link>
            </Button>
          ) : (
            <></>
          )}
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
              <Columns.Column size={3} key={c.id}>
                {approvedCommunityIds.includes(c.id) ?  
                  (<Link
                    to={{
                      pathname: '/community-home/',
                      state: {
                        name: c.name,
                        zipcode: c.zipcode,
                        is_closed: c.is_closed,
                      },
                    }}
                    onClick={() =>
                      setCommunityInfoInLocalStorage(
                        c.name,
                        c.zipcode,
                        c.is_closed,
                        c.id
                      )
                    }
                    style={{ color: 'black' }}
                  >
                    <CommunityCard text={c.name} photo={c.photo_file} />
                  </Link>)
                  :
                  (<CommunityCard text={c.name} photo={ApprovalCover} />)
                }
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
