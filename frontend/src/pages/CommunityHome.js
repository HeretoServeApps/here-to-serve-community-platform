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
import axios from 'axios'

export default function CommunityHome(props) {
  const [month, setMonth] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const token = localStorage.getItem('token')

  var containerStyle = {
    margin: '5% auto',
    maxWidth: '80%',
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
        (response) => {
          setName(response.data[0].name)
          setDescription(response.data[0].description)
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
            <Heading size={4}>{name}</Heading>
            <Heading size={6}>About</Heading>
            <p>{description}</p>
            <br />
            <Heading size={6}>Community Leaders</Heading>
            <Button color='primary'>
              <Link to='#' style={{ color: 'white' }}>
                Edit Community
              </Link>
            </Button>
          </Columns.Column>
          <Columns.Column size={6}>
            <Control>
              <Select
                onChange={(e) => setMonth(e.target.value)}
                name='month'
                value={month}
              >
                <option>May 2020</option>
                <option>April 2020</option>
                <option>March 2020</option>
              </Select>
            </Control>
            <br />
            <CommunityHomeCard link='#' />
            <br />
            <Heading size={6}>Activity Feed</Heading>
          </Columns.Column>
          <Columns.Column size={3}>
            <Button color='primary' className='is-fullwidth'>
              <Link to='#' style={{ color: 'white' }}>
                Create a New Activity
              </Link>
            </Button>
            <br />
            <Heading size={6}>Upcoming Tasks</Heading>
            <CommunityHomeCard link='#' />
            <br />
            <Heading size={6}>Filter Activity</Heading>
            <CheckboxField text='Well Wishes' />
            <CheckboxField text='Announcements' />
            <CheckboxField text='Message Board' />
            <CheckboxField text='Photos' />
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
