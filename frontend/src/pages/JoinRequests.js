import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { Input } from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Table from 'react-bulma-components/lib/components/table'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import { UserPlus, Check } from 'react-feather'
import SideBar from '../components/sidebar'
import CommunityNavbar from '../components/communityNavbar'

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

  const [people, setPeople] = useState([])
  const [userRole, setUserRole] = useState('')
  const [search, setSearch] = useState('')

  let history = useHistory()

  const roleMap = {
    'Community Leader': 'COMM_LEADER',
    Coordinator: 'COORDINATOR',
    'Community Member': 'COMM_MEMBER',
  }

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
          setUserRole(response.data.user_role)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  const editRole = useCallback((email, role) => {
    const param = JSON.stringify({
      'community-id': localStorage.getItem('community-id'),
      'user-email': email,
      role: roleMap[role],
      is_approved: true,
    })
    axios
      .post('/edit-community-user-role/', param, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then((result) => window.location.reload())
      .catch((error) => console.log('error', error))
  })

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}>
            <SideBar />
          </Columns.Column>
          <Columns.Column size={9}>
            <Heading size={4}>Review Join Requests</Heading>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search requests by name'
              style={{ marginBottom: '3%' }}
            />
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Approve Request</th>
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
                    .filter((p) => !p.is_approved)
                    .map((p, index) => (
                      <tr key={index}>
                        <td>
                          <strong>
                            <Link
                              to={{
                                pathname:
                                  'community/' + p.first_name + p.last_name,
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
                        <td>
                          <Button
                            color='primary'
                            onClick={() => editRole(p.email, p.role)}
                          >
                            <Check size={12} style={{ marginRight: '10px' }} />
                            Approve
                          </Button>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr className='has-text-grey-light' style={noteStyle}>
                    <td>No join requests.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
