import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import { Select, Control } from 'react-bulma-components/lib/components/form'
import Image from 'react-bulma-components/lib/components/image';
import Message from 'react-bulma-components/lib/components/message';

import CustomSections from '../components/customSections'

export default function CommunityHome(props) {
  const [description, setDescription] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const token = localStorage.getItem('token')
  const [coordinators, setCoordinators] = useState([])

  const [selectedMonth, setSelectedMonth] = useState(moment().format('MMMM'))
  const [selectedYear, setSelectedYear] = useState(moment().format('YYYY'))
  const [date, setDate] = useState()
  const localizer = momentLocalizer(moment)

  const [events, setEvents] = useState([])

  const [showWelcomeCard, setShowWelcomeCard] = useState(true)
  const [showLeaders, setShowLeaders] = useState(true)

  const [displayCalendar, setDisplayCalendar] = useState(true)
  const [displayFamilyUpdates, setDisplayFamilyUpdates] = useState(false)
  const [displayWaysToHelp, setDisplayWaystoHelp] = useState(false)
  const [messageBoard, setDisplayMessageBoard] = useState(false)
  const [photoGallery, setDisplayPhotoGallery] = useState(false)
  const [wellWishes, setDisplayWellWishes] = useState(false)

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
          pk: localStorage.getItem('community-id')
        },
      })
      .then(
        (response) => {
          setDescription(response.data[0].description)
          setShowLeaders(response.data[0].display_leaders_on_home_page)
          setProfilePhoto(response.data[0].photo_file)
          if (response.data[0].home_page_high_light === 'Calendar') {
            setDisplayCalendar(true)
          } else if (response.data[0].home_page_high_light === 'Family Updates') {
            setDisplayFamilyUpdates(true)
          } else if (response.data[0].home_page_high_light === 'Ways to Help') {
            setDisplayWaystoHelp(true)
          } else if (response.data[0].home_page_high_light === 'Message Board') {
            setDisplayMessageBoard(true)
          } else if (response.data[0].home_page_high_light === 'Photo Gallery') {
            setDisplayPhotoGallery(true)
          } else if (response.data[0].home_page_high_light === 'Well Wishes') {
            setDisplayWellWishes(true)
          }
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
      .get(`/activities/${localStorage.getItem('community-id')}`, {
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
          localStorage.setItem('user-role', response.data.user_role)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])


  const WelcomeCardStaff = (
    <Message color='primary'>
      <Message.Header>
        Welcome!
        <Button remove onClick={() => setShowWelcomeCard(false)} />
      </Message.Header>
      <Message.Body>
        Here are our top <b>3 tips</b> for getting started:<br />
        1. <Link to='/add-people'>Invite</Link> members to join this community<br />
        2. Create a <Link to='/create-new-activity'>Calendar Activity</Link> to let members volunteer<br />
        3. Add an <Link to='/create-announcement'>Update</Link> to keep friends and family in the loop
      </Message.Body>
    </Message>
  )

  const WelcomeCardMember = (
    <Message color='primary'>
      <Message.Header>
        Welcome!
        <Button remove onClick={() => setShowWelcomeCard(false)} />
      </Message.Header>
      <Message.Body>
        Here are our top <strong>3 tips</strong> for getting started:<br />
        1. <Link to='/add-people'>Tell your friends</Link> to join this community<br />
        2. View your <Link to='/calendar'>calendar</Link> activities<br />
        3. View <Link to='/announcements'>updates</Link> recently made to this care community
      </Message.Body>
    </Message>
  )

  const calendar = (
    <div>
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
      <div className='rbc-calendar' style={{ height: '50%', marginBottom: '3%' }}>
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
    </div>
  )


  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}>
            <Image
              src={profilePhoto}
              style={{ marginBottom: '7%' }}
            />
            <Heading size={6}>About</Heading>
            <p>{description}</p>
            <br />

            {showLeaders ?
              (<div><Heading size={6}>Community Leaders</Heading>
                {coordinators.map((c) => (
                  <div style={{ marginBottom: '1%' }}>
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
                ))}<br />
              </div>
              )
              :
              (<></>)
            }

            <Button color='primary'>
              <Link to='/edit-community' style={{ color: 'white' }}>
                Edit Community
              </Link>
            </Button>
          </Columns.Column>
          <Columns.Column size={7}>
            {showWelcomeCard ?
              (
                localStorage.getItem('is-staff') === 'true' ?
                  WelcomeCardStaff : WelcomeCardMember
              )
              :
              (<></>)
            }
            {/* What to show depends on what the user specified in edit community */}
            {displayCalendar ?
              (calendar)
              :
              (<></>)
            }

          </Columns.Column>
          <Columns.Column size={2}>
            <Link to='/create-new-activity' style={{ color: 'white' }}>
              <Button color='primary' className='is-fullwidth'>
                Create Activity
              </Button>
            </Link>
            <a href='https://www.heretoserve.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                className='is-primary is-inverted'
                style={{
                  marginTop: '1rem',
                  boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                }}
                fullwidth={true}
              >
                Here to Serve Website
              </Button>
            </a>
            <a href='https://heretoserve.salsalabs.org/secureonlinedonationform/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                className='is-primary is-inverted'
                style={{
                  marginTop: '1rem',
                  boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                }}
                fullwidth={true}
              >
                Donate Now!
              </Button>
            </a>
            <br />
            <CustomSections />
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
