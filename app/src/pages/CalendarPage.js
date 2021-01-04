import React, { useState, useEffect, useCallback } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../index.css'
import 'react-big-calendar/lib/sass/styles.scss'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import Button from 'react-bulma-components/lib/components/button'
import Box from 'react-bulma-components/lib/components/box'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import Menu from 'react-bulma-components/lib/components/menu'
import {
  Select,
  Control,
  Field,
  Checkbox,
} from 'react-bulma-components/lib/components/form'

import CheckboxField from '../components/checkboxfield'
import CommunityNavbar from '../components/communityNavbar'
import CustomSections from '../components/customSections'
import { RefreshCw, Clipboard, Layers, Star, Calendar as CalendarIcon } from 'react-feather'

export default function CalendarPage() {
  let history = useHistory()

  var containerStyle = {
    margin: '5% 5%',
    maxWidth: '100%',
  }

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

  // Events and event selection
  const [events, setEvents] = useState([])

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
    let tempData = [];
    data.forEach((activity) => {
      if (activity['is_active']) {
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
       }
      tempData.push(activity)
      }
    })
    setEvents(tempData)
    setOriginalEvents(tempData)
  }

  const goToActivity = useCallback((activity) => {
    history.push({
      pathname: '/view-one-activity/' + activity.id,
      state: {
        primary_key: activity.id
      }
    })
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

  // Otherwise they will see the entire calendar
  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}>
            <Box>
              <Menu>
                <Menu.List>
                  <Link to='/create-custom-section'>
                    <p className='sidebar'>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Star size={12} style={{ marginRight: '10px' }} />{' '}
                        <p color='black'>Create Custom Section</p>
                      </div>
                    </p>
                  </Link>
                  <Link to='/custom-sections'>
                    <p className='sidebar'>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Layers size={12} style={{ marginRight: '10px' }} />{' '}
                        <p color='black'>Manage Custom Sections</p>
                      </div>
                    </p>
                  </Link>
                </Menu.List>
              </Menu>
              <hr />

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
                  onClick={(e) =>
                    addSelectedStatus('Occasion', e.target.checked)
                  }
                />
                <span className='dot-orange'></span>Occasion
              </div>
              <hr />
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
              <hr />
              <Heading size={6} style={{ marginTop: '10%' }}>
                Activity Type
              </Heading>
              {categories.map((t) => (
                <CheckboxField
                  text={t}
                  onChange={(e) => addSelectedCategories(t, e.target.checked)}
                />
              ))}
            </Box>
          </Columns.Column>
          <Columns.Column size={9}>
            <Columns isMultiline={true}>
              <Columns.Column size={6}>
                <Heading size={4}>Community Calendar</Heading>
              </Columns.Column>
              <Columns.Column size={3}>
                {localStorage.getItem('user-role') === 'Administrator' && (
                  <Link to='/create-new-activity' style={{ color: 'white' }}>
                    <Button color='primary' fullwidth={true}>
                      <div>
                        <CalendarIcon
                          size={12}
                          style={{ marginRight: '5px' }}
                        />
                        Create Activity
                      </div>
                    </Button>
                  </Link>
                )}
              </Columns.Column>
              <Columns.Column size={3}>
                {localStorage.getItem('user-role') === 'Administrator' && (
                  <Link to='/manage-activities' style={{ color: 'white' }}>
                    <Button color='primary' fullwidth={true}>
                      <div>
                        <Layers
                          size={12}
                          style={{ marginRight: '5px' }}
                        />
                        Manage Activities
                      </div>
                    </Button>
                  </Link>
                )}
              </Columns.Column>
            </Columns>
            <hr style={{ marginTop: 0 }} />
            <Columns>
              <Columns.Column size={9}>
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
                <Button
                  onClick={updateDate}
                  style={{ color: 'white', backgroundColor: '#2C8595' }}
                >
                  <RefreshCw size={12} style={{ marginRight: '5px' }} /> Go
                </Button>
              </Columns.Column>
              <Columns.Column>
                <Link to='/activity-report' style={{ color: 'white' }}>
                  <Button
                    className='is-primary is-inverted'
                    style={{
                      boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                    }}
                    fullwidth={true}
                  >
                    <div>
                      <Clipboard
                        size={12}
                        style={{ marginRight: '5px' }}
                      />
                      View Activity Report
                    </div>
                  </Button>
                </Link>
              </Columns.Column>
            </Columns>
            <div className='rbc-calendar'>
              <Calendar
                events={events}
                localizer={localizer}
                style={{ height: 600 }}
                date={date}
                onNavigate={(date) => setDate(date)}
                startAccessor='start_time'
                endAccessor='end_time'
                allDayAccessor='all_day'
                popup={true}
                onSelectEvent={(e) => goToActivity(e)}
                eventPropGetter={(event) => ({
                  style: {
                    backgroundColor: event.color,
                  },
                })}
              />
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
