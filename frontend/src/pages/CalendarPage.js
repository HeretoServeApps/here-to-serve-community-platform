import React, { useState, useEffect, useCallback } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Dropdown from 'react-bulma-components/lib/components/dropdown';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import {
  Select,
  Control,
  Field,
  Checkbox
} from 'react-bulma-components/lib/components/form'

import CheckboxField from '../components/checkboxfield'
import CommunityNavbar from '../components/communityNavbar'

export default function CalendarPage(props) {
  var containerStyle = {
    margin: '8% 10% 0% 0%',
    maxWidth: '100%',
  }

  var statusContainerStyle = {
    margin: '20% 0% 0% 30%',
    maxWidth: '100%',
  }

  const [selectedMonth, setSelectedMonth] = useState(moment().format("MMMM"))
  const [selectedYear, setSelectedYear] = useState(moment().format("YYYY"))
  const [date, setDate] = useState()

  const years = [...Array(15).keys()].map(i => i + 2020);
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
    'December'
  ]

  const categories = [
    'Giving Rides',
    'Preparing Meals',
    'Shopping',
    'Childcare',
    'Visits',
    'Coverage',
    'Miscellaneous',
    'Event'
  ]

  // Events and event selection
  const [events, setEvents] = useState([
    // {
    //   'title': 'Test event 1',
    //   'start': new Date('May 21, 2020 8:13:00'),
    //   'end': new Date('May 21, 2020 10:13:00'),
    // },
  ])
  
  const [selectedEvent, setSelectedEvent] = useState(-1) // primary key field
  
  // Setup the localizer by providing the moment (or globalize) Object
  // to the correct localizer.
  const localizer = momentLocalizer(moment)

  // filter parameters
  const [member, setMember] = useState('')
  const [members, setMembers] = useState([])
  const [acivityType, setActivityType] = useState('')
  const [activityStatus, setActivityStatus] = useState('')
  
  function updateDate() {
    setDate(moment(`${selectedMonth} ${selectedYear}`, "MMMM YYYY").toDate())
  }

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title) {
      setEvents(events.concat({
        'start': start,
        'end': end,
        'title': title,
      }))
    }
  }

  useEffect(() => {
    axios
        .get('/community-people/', {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            params: JSON.stringify({
                user: localStorage.getItem('email'),
                community: localStorage.getItem('community-name')
            })
        })
        .then(
            (response) => {
                setMembers(Array.from(response.data.people))
            },
            (error) => {
                console.log(error)
            }
        )
  }, [])

  return (
    <div>
      <CommunityNavbar /> 
      <Columns>
        <Columns.Column size={3}>
          <Container style={statusContainerStyle}>
            <Heading size={6}>Status</Heading>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Checkbox style={{ marginRight: '10px' }}/>
              <span class="dot-green"></span>Help needed
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Checkbox style={{ marginRight: '10px' }}/>
              <span class="dot-blue"></span>Needs met
            </div>            
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Checkbox style={{ marginRight: '10px' }}/>
              <span class="dot-orange"></span>Event
            </div>
            <Heading size={6} style={{marginTop: '10%'}}>Members</Heading>
            <Field>
                <Control>
                  <Select
                    name='member'
                    value={member}
                    fullwidth={true}
                  >
                    {members.map((m) => (
                      <option>{m.first_name} {m.last_name}</option>
                    ))}
                  </Select>
                </Control>
            </Field>
            <Heading size={6} style={{marginTop: '10%'}}>Event Type</Heading>
            {categories.map((t) => (
              <CheckboxField text={t}/>
            ))}
          </Container>
        </Columns.Column> 
        <Columns.Column size={9}>
          <Container style={containerStyle}>
          <Columns>
            <Columns.Column size={8} style={{marginRight: '6%'}}>
              <Columns variableGap={{ mobile: 0, tablet: 0, desktop: 0, widescreen: 0, fullhd: 0 }}>
                <Columns.Column size={1} style={{marginRight: '4%'}}>
                  <Dropdown label={selectedMonth} onChange={(m) => setSelectedMonth(m)}>
                    {months.map((month) => (
                      <Dropdown.Item value={month} >
                        {month}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                </Columns.Column>
                <Columns.Column size={1} style={{marginRight: '5%'}}>      
                  <Dropdown label={selectedYear} onChange={(y) => setSelectedYear(y)}>
                    {years.map((year) => (
                      <Dropdown.Item value={year} >
                        {year}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                </Columns.Column>
                <Columns.Column size={1}>
                  <Button onClick={updateDate} color="info">Go</Button>
                </Columns.Column>
              </Columns>
            </Columns.Column>
            <Columns.Column>
              <Link to='/create-new-activity' style={{ color: 'white' }}>
                <Button color='primary'>
                  Create a New Activity
              </Button>
              </Link>
            </Columns.Column>
          </Columns>
          <div class='rbc-calendar'>
            <Calendar
              selectable
              localizer={localizer}
              style={{ 'height': 500, 'margin-top': 15 }}
              date={date}
              onNavigate={date => setDate(date)}
              events={events}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={handleSelect}
            />
          </div>
        </Container>
        </Columns.Column>             
      </Columns>             
    </div>
  )
}
