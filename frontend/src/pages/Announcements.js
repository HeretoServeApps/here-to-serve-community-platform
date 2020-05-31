import React, { useState, useEffect, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'

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
  const [pk, setPk] = useState('')
  let history = useHistory()

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

  const removeAnnouncement = useCallback(() => {
    var url = '/edit-announcement/' + pk + '/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
    myHeaders.append('id', pk)

    var formdata = new FormData()
    formdata.append('first_name', '')

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => history.push('/announcements'))
      .catch((error) => console.log('error', error))
  })

  const editMember = useCallback(() => {
    // Edit user's information. First_name, last_name, and email are required.
    var url = '/edit-announcement/' + pk + '/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
    myHeaders.append('id', pk)

    var formdata = new FormData()
    formdata.append('email', '')

    // Edit user's role in the community
    // formdata.append('role', newRole)
    // formdata.append('community', localStorage.getItem('community-name'))

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => history.push('/announcements'))
      .catch((error) => console.log('error', error))
  })

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

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}></Columns.Column>
          <Columns.Column size={9}>
            <Columns>
              <Columns.Column size={8}>
                <Heading size={4}>Announcements</Heading>
              </Columns.Column>
              <Columns.Column size={4}>
                <Link to='/create-announcement' style={{ marginRight: '10px' }}>
                  <Button color='primary' className='is-fullwidth'>
                    Create Announcement
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
