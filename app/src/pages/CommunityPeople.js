import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { Input } from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Table from 'react-bulma-components/lib/components/table'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import { UserPlus, AlertCircle } from 'react-feather'

import CommunityNavbar from '../components/communityNavbar'

import SideBar from '../components/sidebar'


export default function CommunityPeople() {
  var containerStyle = {
    margin: '5% 5%',
    maxWidth: '100%',
  }

  var noteStyle = {
    color: '#E5E5E5',
    fontStyle: 'italic',
    margin: '15px',
  }

  var innerContainerStyle = {
    padding: '5%',
    border: '1px solid hsl(0, 0%, 86%)',
    borderRadius: '10px',
  }

  const [people, setPeople] = useState([])
  const [search, setSearch] = useState('')

  let history = useHistory()

  useEffect(() => {
    axios
      .get('/community-people/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        params: JSON.stringify({
          user: localStorage.getItem('email'),
          community: localStorage.getItem('community-name'),
        }),
      })
      .then(
        (response) => {
          setPeople(Array.from(response.data.people))
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}>
            <SideBar />
          </Columns.Column>
          <Columns.Column size={9}>
            <Columns>
              <Columns.Column size={6}>
                <Heading size={4}>Community Members</Heading>
              </Columns.Column>
              <Columns.Column size={3}>
                <Button
                  style={{
                    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                  }}
                  color='primary'
                  onClick={() => history.push('/add-people')}
                  fullwidth={true}
                >
                  <div>
                    <UserPlus size={12} style={{ marginRight: '5px' }} />
                Invite Members
              </div>
                </Button>
              </Columns.Column>
              <Columns.Column size={3}>
                <Button
                  style={{
                    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                  }}
                  color='primary'
                  onClick={() => history.push('/join-requests')}
                  fullwidth={true}
                >
                  <div>
                    <AlertCircle size={12} style={{ marginRight: '5px' }} />
                Review Join Requests
              </div>
                </Button>
              </Columns.Column>
            </Columns>
            <Container style={innerContainerStyle}>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search members by name'
                style={{ marginBottom: '3%' }}
              />
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {people.filter(
                    (p) =>
                      search === '' ||
                      (p.first_name + p.last_name)
                        .toLowerCase()
                        .includes(search.toLowerCase())
                  ).length > 0 ? (
                      people
                        .filter(
                          (p) =>
                            search === '' ||
                            (p.first_name + p.last_name)
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .filter((p) => p.is_approved)
                        .map((p, index) => (
                          <tr key={index}>
                            <td>
                              <strong>
                                <Link
                                  to={{
                                    pathname: 'community/' + p.first_name + p.last_name,
                                    state: {
                                      first_name: p.first_name,
                                      last_name: p.last_name,
                                      email: p.email,
                                      phone_number_1: p.phone_number_1,
                                      phone_number_1_type: p.phone_number_1_type,
                                      phone_number_2: p.phone_number_2,
                                      phone_number_2_type: p.phone_number_2_type,
                                      address_line_1: p.address_line_1,
                                      address_line_2: p.address_line_2,
                                      city: p.city,
                                      state: p.state,
                                      zipcode: p.zipcode,
                                      country: p.country,
                                      role: p.role,
                                      pk: p.pk,
                                    },
                                  }}
                                >
                                  {p.first_name} {p.last_name}
                                </Link>
                              </strong>
                              <br />
                              {p.role}
                            </td>
                            <td>{p.email}</td>
                            <td>{p.phone_number_1}</td>
                          </tr>
                        ))
                    ) : (
                      <tr className='has-text-grey-light' style={noteStyle}>
                        <td>No members match this search.</td>
                      </tr>
                    )}
                </tbody>
              </Table>
            </Container>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
