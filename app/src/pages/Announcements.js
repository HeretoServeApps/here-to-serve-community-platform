// This is the Family Updates page

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import PostCard from '../components/postCard'
import SideBar from '../components/sidebar'
import { Coffee, Radio } from 'react-feather'

import axios from 'axios'

export default function Announcements(props) {
  const token = localStorage.getItem('token')
  const [announcements, setAnnouncements] = useState([])

  var containerStyle = {
    margin: '5% 5%',
    maxWidth: '100%',
  }

  var noteStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'hsl(0, 0%, 96%)',
    borderRadius: '10px',
  }

  useEffect(() => {
    axios
      .get('/announcement', {
        headers: {
          Authorization: `JWT ${token}`,
        },
        params: {
          name: localStorage.getItem('community-name'),
          zipcode: localStorage.getItem('community-zipcode'),
          is_closed: localStorage.getItem('community-is-closed'),
        },
      })
      .then(
        (response) => {
          setAnnouncements(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token])

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
              <Columns.Column size={9}>
                <Heading size={4}>Family Updates</Heading>
              </Columns.Column>

              <Columns.Column size={3}>
                {localStorage.getItem('user-role') === 'Administrator' ? (
                  <Link
                    to='/create-announcement'
                    style={{ marginRight: '10px' }}
                  >
                    <Button color='primary' className='is-fullwidth'>
                      <div>
                        <Radio size={12} style={{ marginRight: '5px' }} />
                        Create Update
                      </div>
                    </Button>
                  </Link>
                ) : (
                  <></>
                )}
              </Columns.Column>
            </Columns>
            <div>
              {announcements.length > 0 ? (
                announcements
                  .slice()
                  .reverse()
                  .map((a, index) => {
                    return (
                      <PostCard
                        key={index}
                        subject={a.subject}
                        message={a.message}
                        dateTime={a.date_time}
                        user={a.author_name}
                        id={a.id}
                        type='announcement'
                      />
                    )
                  })
              ) : (
                <p style={noteStyle}>
                  <Coffee size={100} color='#E5E5E5' />
                  <br />
                  <br />
                  Sit tight! Nothing has been posted yet.
                </p>
              )}
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
