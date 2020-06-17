import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityHomeCard from '../components/communityHomeCard'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import { Select, Control } from 'react-bulma-components/lib/components/form'
import Dropdown from 'react-bulma-components/lib/components/dropdown'

import CheckboxField from '../components/checkboxfield'
import CustomSections from '../components/customSections'

export default function CommunityHome(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const token = localStorage.getItem('token')
  const [coordinators, setCoordinators] = useState([])

  const [selectedMonth, setSelectedMonth] = useState(moment().format('MMMM'))
  const [selectedYear, setSelectedYear] = useState(moment().format('YYYY'))
  const [date, setDate] = useState()
  const localizer = momentLocalizer(moment)

  const [events, setEvents] = useState([])

  const years = [...Array(15).keys()].map((i) => i + 2020)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  var linkStyle = {
    fontSize: '0.8em',
  }

  var containerStyle = {
    margin: '5% 5%',
    maxWidth: '100%',
  }

  function updateDate() {
    setDate(moment(`${selectedMonth} ${selectedYear}`, 'MMMM YYYY').toDate())
  }

  function processEvents(data) {
    data.forEach((activity) => {
      if (typeof activity['start_time'] === 'string') {
        activity['start_time'] = new Date(activity['start_time'])
        activity['end_time'] = new Date(activity['end_time'])
        activity['title'] = activity['activity_type'] + ': ' + activity['title']
      }
    })
    return data
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

  useEffect(() => {
    axios
      .get('/activity', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
      })
      .then(
        (response) => {
          setEvents(response.data)
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
        <Container style={{ margin: '5% auto', textAlign: 'center' }}>
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
          <Columns.Column size={7}>
            <Control>
              <Select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                style={{ marginRight: '10px' }}
              >
                {months.map((month) => (
                  <option value={month}>{month}</option>
                ))}
              </Select>
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                style={{ marginRight: '10px' }}
              >
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </Select>
              <Button onClick={updateDate} color='info'>
                Go
              </Button>
            </Control>
            <br />

            <div class='rbc-calendar'>
              <Calendar
                localizer={localizer}
                toolbar={false}
                date={date}
                onNavigate={(date) => setDate(date)}
                events={processEvents(events)}
                startAccessor='start_time'
                endAccessor='end_time'
                allDayAccessor='all_day'
                popup={true}
                eventPropGetter={(event) => ({
                  style: {
                    backgroundColor: event.color,
                  },
                })}
              />
            </div>

            <br />
            <Heading size={6}>Activity Feed</Heading>
          </Columns.Column>
          <Columns.Column size={2}>
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
