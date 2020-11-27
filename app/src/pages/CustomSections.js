import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Table from 'react-bulma-components/lib/components/table'
import axios from 'axios'
import SideBar from '../components/sidebar'
import EditCustomSection from '../components/editCustomSection'
import DeleteCustomSection from '../components/deleteCustomSection'
import Button from 'react-bulma-components/lib/components/button';

export default function ManageCustomSections() {
  const token = localStorage.getItem('token')
  const [sections, setSections] = useState([])
  const [userRole, _ ] = useState(localStorage.getItem('user-role'))

  var formContainerStyle = {
    padding: '5%',
    border: '1px solid hsl(0, 0%, 86%)',
    borderRadius: '10px',
  }

  var containerStyle = {
    margin: '5% 5%',
    maxWidth: '100%',
  }

  var noteStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
  }

  useEffect(() => {
    axios
      .get('/one-community/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
        params: {
          pk: localStorage.getItem('community-id'),
        },
      })
      .then()
  }, [token])

  // Get custom sections
  useEffect(() => {
    axios
      .get('/community-custom-sections/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
        params: {
          name: localStorage.getItem('community-name'),
        },
      })
      .then(
        (response) => {
          setSections(response.data)
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
              <Columns.Column size={8}>
                {userRole === 'Administrator' ?
                  <Heading size={4}>Manage Custom Sections</Heading> : <Heading size={4}>Custom Sections</Heading>  
                }
              </Columns.Column>      
              <Columns.Column size={4}>
                {userRole === 'Administrator' &&
                  <Link to='/create-custom-section'>
                    <Button
                      style={{
                          boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                      }}
                      color='primary'
                      fullwidth={true}
                    >
                      Create Custom Section
                    </Button>
                  </Link>
                }
              </Columns.Column>      
            </Columns>

            <Container style={formContainerStyle}>
              <Table>
                <thead>
                  <tr>
                    <th>Section Name</th>
                    <th>Section Type</th>
                    {userRole === 'Administrator' && <th>Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {sections.length !== 0 ? (
                    sections.map((s, index) => (
                      <tr key={index}>
                        <td>
                          <strong>
                            {s.type === 'BUTTON' ? (
                              <a href={s.link} target='_blank'>
                                {s.name}
                              </a>
                            ) : (
                              <Link
                                to={{
                                  pathname: '/custom/' + s.name,
                                  state: {
                                    section: s.id,
                                  },
                                }}
                              >
                                {s.name}
                              </Link>
                            )}
                          </strong>
                          <br />
                          {s.title}
                        </td>
                        <td>
                          {s.type === 'DP'
                            ? 'Discussions and Pages'
                            : s.type === 'BUTTON'
                            ? 'Button'
                            : 'General'}
                        </td>
                        {userRole === 'Administrator' &&
                          <td>
                            <EditCustomSection
                              id={s.id}
                              name={s.name}
                              type={s.type}
                              title={s.title}
                              description={s.description}
                              link={s.link}
                              general_content={s.general_content}
                            />
                            <DeleteCustomSection id={s.id} />
                          </td>
                        }
                      </tr>
                    ))
                  ) : (
                    <tr className='has-text-grey-light' style={noteStyle}>
                      <td>No custom sections created.</td>
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
