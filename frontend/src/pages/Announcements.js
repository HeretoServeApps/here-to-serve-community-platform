import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityHomeCard from '../components/communityHomeCard'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import CheckboxField from '../components/checkboxfield'
import { Select, Control } from 'react-bulma-components/lib/components/form'
import AnnouncementCard from '../components/announcementCard'
import axios from 'axios'

export default function Announcements(props) {
  const token = localStorage.getItem('token')
  const [announcements, setAnnouncements] = useState([])
  const [loaded, setLoaded] = useState(false)

  var containerStyle = {
    margin: '5% auto',
    maxWidth: '80%',
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
      .get('/one-community/', {
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
        (response) => {},
        (error) => {
          console.log(error)
        }
      )
  }, [token])

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
          console.log(response.data)
          setAnnouncements(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token])

  /*useEffect(() => {
    var newAnnouncements = announcements
    newAnnouncements.forEach((a) => {
      axios
        .get('/all-users/' + a.user, {
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
        .then(
          (response) => {
            a.user = response.data.first_name + ' ' + response.data.last_name
          },
          (error) => {
            console.log(error)
          }
        )
    })
    setAnnouncements([...newAnnouncemnts])
    
  }, [announcements])*/

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}></Columns.Column>
          <Columns.Column size={9}>
            <Columns>
              <Columns.Column size={4}>
                <Heading size={4}>Announcements</Heading>
              </Columns.Column>
              <Columns.Column size={4}>
                <Link to='/create-announcement' style={{ marginRight: '10px' }}>
                  <Button color='primary' className='is-fullwidth' size='small'>
                    Create Announcement
                  </Button>
                </Link>
              </Columns.Column>
              <Columns.Column size={4}>
                <Link to='#'>
                  <Button
                    color='primary'
                    className='is-fullwidth is-outlined'
                    size='small'
                  >
                    Manage Announcements
                  </Button>
                </Link>
              </Columns.Column>
            </Columns>
            <div>
              {announcements.length > 0 ? (
                announcements.reverse().map((a, index) => {
                  return (
                    <AnnouncementCard
                      key={index}
                      subject={a.subject}
                      message={a.message}
                      dateTime={a.date_time}
                      user={a.author_name}
                    />
                  )
                })
              ) : (
                <p style={noteStyle}>No announcements have been created.</p>
              )}
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
