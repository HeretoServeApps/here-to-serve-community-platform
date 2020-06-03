import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityHomeCard from '../components/communityHomeCard'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import { Select, Control } from 'react-bulma-components/lib/components/form'

import CheckboxField from '../components/checkboxfield'
import CustomSections from '../components/customSections'

export default function CommunityHome(props) {
  const [month, setMonth] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const token = localStorage.getItem('token')
  const [coordinators, setCoordinators] = useState([])

  var containerStyle = {
    margin: '3% auto',
    maxWidth: '80%',
  }

  var linkStyle = {
    fontSize: '0.8em',
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

  useEffect(() => {
    axios
      .get(`/community-coordinators/${localStorage.getItem('community-id')}`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(
        (response) => {
          console.log(response.data)
          const options = response.data.map((item) => ({
            label: `${item['first_name']} ${item['last_name']}`,
            value: item['id'],
            email: item['email'],
            phone: item['phone_number_1'],
          }))
          setCoordinators(options)
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
      <Container style={{margin: '5% auto', textAlign: 'center'}}>
        <Heading size={2}>{name}</Heading>
      </Container>
        <Columns isMultiline={true}>
          <Columns.Column size={3}>
            <Heading size={6}>About</Heading>
            <p>{description}</p>
            <br />
            <Heading size={6}>Community Leaders</Heading>
            {coordinators.map((c) => (
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold' }}>{c.label}</p>
                <p style={linkStyle}>
                  <a
                    href={'mailto:' + c.email}
                    style={{ color: '#2C8595', fontWeight: '500' }}
                  >
                    {c.email}
                  </a>
                </p>
                <p style={{ fontSize: '0.8em' }}>{c.phone}</p>
              </div>
            ))}
            <br />
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
            <Link to='/create-new-activity' style={{ color: 'white' }}>
              <Button color='primary' className='is-fullwidth'>
                Create a New Activity
              </Button>
            </Link>
            <br />
            <CustomSections />
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
