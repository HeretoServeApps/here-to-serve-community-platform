import React, { useState, useEffect, useCallback } from 'react'
import 'react-day-picker/lib/style.css'
import { Link, useHistory } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import SideBar from '../components/sidebar'
import Button from 'react-bulma-components/lib/components/button'
import {
  Select,
  Control,
  Label,
  Field,
  Input,
  Checkbox,
  Radio,
} from 'react-bulma-components/lib/components/form'
import axios from 'axios'

export default function CreateAnnouncement(props) {
  const token = localStorage.getItem('token')

  var formContainerStyle = {
    padding: '5%',
    border: '1px solid hsl(0, 0%, 86%)',
    borderRadius: '10px',
  }

  var containerStyle = {
    margin: '5% auto',
    maxWidth: '80%',
  }

  var checkboxStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    margin: '5px 0',
    display: 'flex',
    justifyContent: 'flex-start',
  }

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [whenPost, setWhenPost] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [year, setYear] = useState('')
  const [time, setTime] = useState('')
  const [showHome, setShowHome] = useState(false)
  const [sendEmail, setSendEmail] = useState(false)
  const [validForm, setValidForm] = useState(false)
  let history = useHistory()

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
      .then()
  }, [token])

  useEffect(() => {
    setMonth(months[new Date().getMonth()])
    setDay(new Date().getDate())
    setYear(new Date().getFullYear())
    setTime('12:00 AM')
  }, [])

  useEffect(() => {
    const formValues = [subject, message, whenPost, showHome, sendEmail]
    const notValidForm = formValues.some((formVal) => {
      return formVal === ''
    })
    setValidForm(notValidForm)
  }, [subject, message, whenPost, showHome, sendEmail])

  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023]
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
  const times = [
    '12:00 AM',
    '12:15 AM',
    '12:30 AM',
    '12:45 AM',
    '1:00 AM',
    '1:15 AM',
    '1:30 AM',
    '1:45 AM',
    '2:00 AM',
    '2:15 AM',
    '2:30 AM',
    '2:45 AM',
    '3:00 AM',
    '3:15 AM',
    '3:30 AM',
    '3:45 AM',
    '4:00 AM',
    '4:15 AM',
    '4:30 AM',
    '4:45 AM',
    '5:00 AM',
    '5:15 AM',
    '5:30 AM',
    '5:45 AM',
    '5:00 AM',
    '5:15 AM',
    '5:30 AM',
    '5:45 AM',
    '5:00 AM',
    '5:15 AM',
    '5:30 AM',
    '5:45 AM',
    '6:00 AM',
    '6:15 AM',
    '6:30 AM',
    '6:45 AM',
    '7:00 AM',
    '7:15 AM',
    '7:30 AM',
    '7:45 AM',
    '8:00 AM',
    '8:15 AM',
    '8:30 AM',
    '8:45 AM',
    '9:00 AM',
    '9:15 AM',
    '9:30 AM',
    '9:45 AM',
    '10:00 AM',
    '10:15 AM',
    '10:30 AM',
    '10:45 AM',
    '11:00 AM',
    '11:15 AM',
    '11:30 AM',
    '11:45 AM',
    '12:00 PM',
    '12:15 PM',
    '12:30 PM',
    '12:45 PM',
    '1:00 PM',
    '1:15 PM',
    '1:30 PM',
    '1:45 PM',
    '2:00 PM',
    '2:15 PM',
    '2:30 PM',
    '2:45 PM',
    '3:00 PM',
    '3:15 PM',
    '3:30 PM',
    '3:45 PM',
    '4:00 PM',
    '4:15 PM',
    '4:30 PM',
    '4:45 PM',
    '5:00 PM',
    '5:15 PM',
    '5:30 PM',
    '5:45 PM',
    '6:00 PM',
    '6:15 PM',
    '6:30 PM',
    '6:45 PM',
    '7:00 PM',
    '7:15 PM',
    '7:30 PM',
    '7:45 PM',
    '8:00 PM',
    '8:15 PM',
    '8:30 PM',
    '8:45 PM',
    '9:00 PM',
    '9:15 PM',
    '9:30 PM',
    '9:45 PM',
    '10:00 PM',
    '10:15 PM',
    '10:30 PM',
    '10:45 PM',
    '11:00 PM',
    '11:15 PM',
    '11:30 PM',
    '11:45 PM',
  ]
  const count = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
  ]

  const handleSubmit = useCallback(() => {
    let dateTime =
      new Date().toLocaleDateString() +
      ' at ' +
      new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })

    if (whenPost === 'Schedule for Later') {
      dateTime =
        new Date(year, months.indexOf(month), day).toLocaleDateString() +
        ' at ' +
        time
    }

    const param = JSON.stringify({
      subject: subject,
      message: message,
      date_time: dateTime,
      show_on_page: showHome.toString(),
      user: localStorage.getItem('email'),
      community: localStorage.getItem('community-name'),
      author_name: '',
    })

    axios
      .post('/add-announcement/', param, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          history.push('/announcements')
        },
        (error) => {
          console.log(error)
        }
      )
  }, [subject, message, month, day, year, time, showHome])

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={4}>
            <SideBar />
          </Columns.Column>
          <Columns.Column size={8}>
            <Heading size={4}>Create Announcement</Heading>
            <div style={formContainerStyle}>
              <Field>
                <Label>
                  Subject<span style={{ color: '#F83D34' }}>*</span>
                </Label>
                <Control>
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Control>
              </Field>
              <Field>
                <Label>
                  When to Post<span style={{ color: '#F83D34' }}>*</span>
                </Label>
                <Control style={{ marginBottom: '10px' }}>
                  <Radio
                    onChange={(e) => setWhenPost(e.target.value)}
                    checked={whenPost === 'Now'}
                    value='Now'
                  >
                    {' '}
                    Now
                  </Radio>
                  <Radio
                    onChange={(e) => setWhenPost(e.target.value)}
                    checked={whenPost === 'Schedule for Later'}
                    value='Schedule for Later'
                  >
                    {' '}
                    Schedule for Later
                  </Radio>
                </Control>
                <Control>
                  <Select
                    onChange={(e) => setMonth(e.target.value)}
                    name='month'
                    value={month}
                    style={{ marginRight: '10px' }}
                    disabled={whenPost !== 'Schedule for Later'}
                  >
                    {months.map((m) => (
                      <option>{m}</option>
                    ))}
                  </Select>
                  <Select
                    onChange={(e) => setDay(e.target.value)}
                    name='day'
                    value={day}
                    style={{ marginRight: '10px' }}
                    disabled={whenPost !== 'Schedule for Later'}
                  >
                    {count.slice(0, 31).map((d) => (
                      <option>{d}</option>
                    ))}
                  </Select>
                  <Select
                    onChange={(e) => setYear(e.target.value)}
                    name='year'
                    value={year}
                    style={{ marginRight: '10px' }}
                    disabled={whenPost !== 'Schedule for Later'}
                  >
                    {years.map((y) => (
                      <option>{y}</option>
                    ))}
                  </Select>
                  <Select
                    onChange={(e) => setTime(e.target.value)}
                    name='time'
                    value={time}
                    disabled={whenPost !== 'Schedule for Later'}
                  >
                    {times.map((t) => (
                      <option>{t}</option>
                    ))}
                  </Select>
                </Control>
              </Field>
              <Field>
                <Label>
                  Message<span style={{ color: '#F83D34' }}>*</span>
                </Label>
                <Control>
                  <Editor
                    initialValue={message}
                    init={{
                      height: 300,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                      ],
                      toolbar:
                        'undo redo | formatselect | image | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help',
                    }}
                    onEditorChange={(content, editor) => setMessage(content)}
                  />
                </Control>
              </Field>
              <Field></Field>
              <div className='thursday' style={checkboxStyle}>
                <Checkbox
                  style={{ marginRight: '10px' }}
                  onClick={() => setShowHome(!showHome)}
                  checked={showHome}
                />
                <p> Show this announcement on the home page</p>
              </div>
              <div className='thursday' style={checkboxStyle}>
                <Checkbox
                  style={{ marginRight: '10px' }}
                  onClick={() => setSendEmail(!sendEmail)}
                  checked={sendEmail}
                />
                <p> Send announcement to all community members via email</p>
              </div>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to='#'>
                <Button
                  onClick={() => handleSubmit()}
                  color='primary'
                  className='is-fullwidth'
                  disabled={validForm}
                >
                  Finish
                </Button>
              </Link>
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
