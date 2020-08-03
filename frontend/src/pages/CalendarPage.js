import React, { useState, useEffect, useCallback } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import {
  Select,
  Control,
  Field,
  Checkbox,
} from 'react-bulma-components/lib/components/form'

import CheckboxField from '../components/checkboxfield'
import CommunityNavbar from '../components/communityNavbar'
import CustomSections from '../components/customSections'

export default function CalendarPage() {
  var containerStyle = {
    margin: '5% 10% 0% 0%',
    maxWidth: '100%',
  }

  var statusContainerStyle = {
    margin: '20% 0% 0% 30%',
    maxWidth: '100%',
  }

  var eventContainerStyle = {
    margin: '5% auto',
    maxWidth: '870px',
    maxHeight: '1000px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }

  const token = localStorage.getItem('token')

  const [selectedMonth, setSelectedMonth] = useState(moment().format('MMMM'))
  const [selectedYear, setSelectedYear] = useState(moment().format('YYYY'))
  const [date, setDate] = useState()

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

  const categories = [
    'Giving Rides',
    'Preparing Meals',
    'Shopping',
    'Childcare',
    'Pet Care',
    'House Cleaning',
    'Laundry',
    'Visits',
    'Miscellaneous',
    'Occasion',
  ]

  let history = useHistory()

  // Events and event selection
  const [events, setEvents] = useState([])

  //for current user email
  const [currentUserEmail, setUserEmail] = useState('')

  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isSelectingEvent, setIsSelectingEvent] = useState(false)
  // Setup the localizer by providing the moment (or globalize) Object
  // to the correct localizer.
  const localizer = momentLocalizer(moment)

  // filter parameters
  const [selectedMember, setSelectedMember] = useState('All')
  const [members, setMembers] = useState([{ first_name: 'All', last_name: '' }])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [originalEvents, setOriginalEvents] = useState([])
  const [selectedStatuses, setSelectedStatuses] = useState([])


  // FUNCTIONS ---------------------------------------------------------------------------------------------

  function updateDate() {
    setDate(moment(`${selectedMonth} ${selectedYear}`, 'MMMM YYYY').toDate())
  }

  function processEvents(data) {
    data.forEach((activity) => {
      if (typeof activity['start_time'] === 'string') {
        var timezone_offset = new Date(
          activity['start_time']
        ).getTimezoneOffset()
        activity['start_time'] = moment(activity['start_time'])
          .add(timezone_offset, 'm')
          .toDate()
        activity['end_time'] = moment(activity['end_time'])
          .add(timezone_offset, 'm')
          .toDate()
        activity['title'] = activity['activity_type'] + ': ' + activity['title']
      }
    })
    setEvents(data)
    setOriginalEvents(data)
  }

  const getEventInfo = useCallback((event) => {
    setSelectedEvent(event)
    setIsSelectingEvent(true)
  })

  const goBackToCalendar = useCallback(() => {
    setSelectedEvent(null)
    setIsSelectingEvent(false)
  })

  // Filter by activity function
  function addSelectedCategories(category, isChecked) {
    if (isChecked) {
      var newSelectedCategories = selectedCategories.concat(category)
      setSelectedCategories(newSelectedCategories)
    } else {
      var newSelectedCategories = selectedCategories
      var index = newSelectedCategories.indexOf(category)
      if (index !== -1) {
        newSelectedCategories.splice(index, 1)
        setSelectedCategories(newSelectedCategories)
      }
    }
    var filteredEvents = []
    const splitNames = selectedMember.split(' ')
    var member_object = {
      first_name: splitNames[0],
      last_name: splitNames[1],
    }
    originalEvents.forEach((activity) => {
      if (
        (newSelectedCategories.includes(activity['activity_type']) ||
          newSelectedCategories.length === 0) &&
        (selectedStatuses.includes(activity['activity_status']) ||
          selectedStatuses.length === 0) &&
        (selectedMember === 'All' ||
          activity['volunteers'].includes(member_object))
      ) {
        filteredEvents.push(activity)
      }
    })
    setEvents(filteredEvents)
  }

  // Filter by status function
  function addSelectedStatus(status, isChecked) {
    if (isChecked) {
      var newSelectedStatuses = selectedStatuses.concat(status)
      setSelectedStatuses(newSelectedStatuses)
    } else {
      var newSelectedStatuses = selectedStatuses
      var index = newSelectedStatuses.indexOf(status)
      if (index !== -1) {
        newSelectedStatuses.splice(index, 1)
        setSelectedStatuses(newSelectedStatuses)
      }
    }
    var filteredEvents = []
    const splitNames = selectedMember.split(' ')
    var member_object = {
      first_name: splitNames[0],
      last_name: splitNames[1],
    }
    originalEvents.forEach((activity) => {
      if (
        (selectedCategories.includes(activity['activity_type']) ||
          selectedCategories.length === 0) &&
        (newSelectedStatuses.includes(activity['activity_status']) ||
          newSelectedStatuses.length === 0) &&
        (selectedMember === 'All' ||
          activity['volunteers'].includes(member_object))
      ) {
        filteredEvents.push(activity)
      }
    })
    setEvents(filteredEvents)
  }

  // Filter by member function
  function filterMember(member) {
    setSelectedMember(member)
    var filteredEvents = []
    const splitNames = member.split(' ')
    var member_object = {
      first_name: splitNames[0],
      last_name: splitNames[1],
    }
    originalEvents.forEach((activity) => {
      if (
        (selectedCategories.includes(activity['activity_type']) ||
          selectedCategories.length === 0) &&
        (selectedStatuses.includes(activity['activity_status']) ||
          selectedStatuses.length === 0) &&
        (member === 'All' || activity['volunteers'].includes(member_object))
      ) {
        filteredEvents.push(activity)
      }
    })
    setEvents(filteredEvents)
  }

//adds volunteer to activity 
const addVolunteer = useCallback(() => {
    const param = JSON.stringify({
      activity : selectedEvent.id,
      user: localStorage.getItem('email'),
    })

    axios
      .post('/add-volunteer-to-activity/', param, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          history.push('/community-home')
        },
        (error) => {
          console.log(error)
        }
      )
  }, [selectedEvent, token])

  // API CALLS ---------------------------------------------------------------------------------------------

  useEffect(() => {
    axios
      .get(`/activities/${localStorage.getItem('community-id')}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
      })
      .then(
        (response) => {
          processEvents(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

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
          setMembers(members.concat(Array.from(response.data.people)))
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  // RENDERS ---------------------------------------------------------------------------------------------

  // Users will see this if they are selecting an event
  if (isSelectingEvent) {
    const isRideActivity = selectedEvent.activity_type === 'Giving Rides'
    const isMealActivity = selectedEvent.activity_type === 'Preparing Meals'
    return (
      <div>
        <CommunityNavbar />
        <Container style={eventContainerStyle}>
          <Columns>
            <Columns.Column size={6}>
              <Heading size={4}>{selectedEvent.title}</Heading>
            </Columns.Column>
            {localStorage.getItem('user-role') === 'Administrator' ? 
            ( <Columns>
                <Columns.Column>
                  <Button
                    style={{
                      boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                    }}
                    fullwidth={true}
                    color='primary'
                  >
                    Edit Activity
                  </Button>
                </Columns.Column>
                <Columns.Column>
                  <Button
                    style={{
                      boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                    }}
                    fullwidth={true}
                    color='danger'
                  >
                    Remove Activity
                  </Button>
                </Columns.Column>
              </Columns>
              ) 
              :
              (
              <Columns.Column>
                <Button
                  onClick={() => addVolunteer()}
                  style={{
                    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                  }}
                  color='primary'
                >
                  Sign up as a volunteer
                </Button>
              </Columns.Column>
              )
            }
          </Columns>
          <Heading size={6}>Details:</Heading>
          <i>Date:</i> {moment(selectedEvent.start_time).format('LL')}
          <br />
          <i>Time:</i> Between {moment(selectedEvent.start_time).format('LT')}{' '}
          and {moment(selectedEvent.end_time).format('LT')}
          <br />
          {isRideActivity ? (
            <div>
              <i>Pickup Location: </i>{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={
                  'https://maps.google.com/?q=' + selectedEvent.pickup_location
                }
              >
                {selectedEvent.pickup_location}
              </a>
              <br />
              <i>Destination: </i>{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={
                  'https://maps.google.com/?q=' +
                  selectedEvent.destination_location
                }
              >
                {selectedEvent.destination_location}
              </a>
            </div>
          ) : isMealActivity ? (
            <div>
              <i>Delivery Location: </i>{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={
                  'https://maps.google.com/?q=' +
                  selectedEvent.delivery_location
                }
              >
                {selectedEvent.delivery_location}
              </a>
            </div>
          ) : (
            <div>
              <i>Location: </i>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={'https://maps.google.com/?q=' + selectedEvent.location}
              >
                {selectedEvent.location}
              </a>{' '}
            </div>
          )}
          {isMealActivity ? (
            <div>
              <i>Dietary Restrictions: </i>{' '}
              <ul>
                {selectedEvent.dietary_restrictions.map((r) => (
                  <li>{r}</li>
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}
          <i>Volunteers Needed:</i> {selectedEvent.num_volunteers_needed}
          <br />
          <i>Notes:</i> {selectedEvent.description}
          <br />
          <Heading size={6} style={{ marginTop: '5%' }}>
            People:{' '}
          </Heading>
          <i>Volunteers:</i>{' '}
          {selectedEvent.volunteers.length === 0 ? (
            'No volunteers has signed up.'
          ) : (
            <ul>
              {selectedEvent.volunteers.map((person) => (
                <li>
                  {person.first_name} {person.last_name}: {person.email}
                </li>
              ))}
            </ul>
          )}
          <br />
          <i>Coordinators:</i>
          <ul>
            {selectedEvent.coordinators.map((person) => (
              <li>
                {person.first_name} {person.last_name}: {person.phone_number_1}
              </li>
            ))}
          </ul>
          <br />
          <Button
            className='is-primary is-inverted'
            onClick={() => goBackToCalendar()}
            style={{ display: 'block', marginTop: '3%' }}
          >
            Back
          </Button>
        </Container>
      </div>
    )
  }

  // Otherwise they will see the entire calendar
  return (
    <div>
      <CommunityNavbar />
      <Columns style={{ marginBottom: '5%' }}>
        <Columns.Column size={3}>
          <Container style={statusContainerStyle}>
            <CustomSections />
            <Heading size={6}>Status</Heading>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Checkbox
                style={{ marginRight: '10px' }}
                onClick={(e) =>
                  addSelectedStatus('Help needed', e.target.checked)
                }
              />
              <span className='dot-green'></span>Help needed
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Checkbox
                style={{ marginRight: '10px' }}
                onClick={(e) =>
                  addSelectedStatus('Needs met', e.target.checked)
                }
              />
              <span className='dot-blue'></span>Needs met
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Checkbox
                style={{ marginRight: '10px' }}
                onClick={(e) => addSelectedStatus('Occasion', e.target.checked)}
              />
              <span className='dot-orange'></span>Occasion
            </div>
            <Heading size={6} style={{ marginTop: '10%' }}>
              Member
            </Heading>
            <Field>
              <Control>
                <Select
                  name='member'
                  value={selectedMember}
                  fullwidth='true'
                  onChange={(e) => filterMember(e.target.value)}
                >
                  {members.map((m) => (
                    <option>
                      {m.first_name} {m.last_name}
                    </option>
                  ))}
                </Select>
              </Control>
            </Field>
            <Heading size={6} style={{ marginTop: '10%' }}>
              Activity Type
            </Heading>
            {categories.map((t) => (
              <CheckboxField
                text={t}
                onChange={(e) => addSelectedCategories(t, e.target.checked)}
              />
            ))}
          </Container>
        </Columns.Column>
        <Columns.Column size={9}>
          <Container style={containerStyle}>
            <Columns>
              <Columns.Column size={8} style={{ marginRight: '6%' }}>
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
              </Columns.Column>
              <Columns.Column>
                {localStorage.getItem('user-role') === 'Administrator' ?
                  <Link to='/create-new-activity' style={{ color: 'white' }}>
                    <Button color='primary' fullwidth={true}>
                      Create a New Activity
                    </Button>
                  </Link>
                  :
                  <></>
                }
               
                <Link to='/activity-report' style={{ color: 'white' }}>
                  <Button
                    className='is-primary is-inverted'
                    style={{
                      marginTop: '1rem',
                      boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                    }}
                    fullwidth={true}
                  >
                    View Activity Report
                  </Button>
                </Link>
              </Columns.Column>
            </Columns>
            <div className='rbc-calendar'>
              <Calendar
                localizer={localizer}
                style={{ height: 600 }}
                date={date}
                onNavigate={(date) => setDate(date)}
                events={events}
                startAccessor='start_time'
                endAccessor='end_time'
                allDayAccessor='all_day'
                popup={true}
                onSelectEvent={(event) => getEventInfo(event)}
                eventPropGetter={(event) => ({
                  style: {
                    backgroundColor: event.color,
                  },
                })}
              />
            </div>
          </Container>
        </Columns.Column>
      </Columns>
    </div>
  )
}
