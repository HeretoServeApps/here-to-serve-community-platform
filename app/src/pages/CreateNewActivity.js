import React, { useState, useEffect, useCallback } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import Tabs from 'react-bulma-components/lib/components/tabs'
import {
  Select,
  Control,
  Label,
  Field,
  Input,
  Textarea,
  Checkbox,
} from 'react-bulma-components/lib/components/form'
import MultiSelect from 'react-multi-select-component'

import SideBar from '../components/sidebar'

export default function CreateNewActivity() {
  //Styles
  var containerStyle = {
    margin: '5% 5%',
    maxWidth: '100%',
  }
  var formContainerStyle = {
    padding: '5%',
    border: '1px solid hsl(0, 0%, 86%)',
    borderTop: 'none',
    borderRadius: '0px 0px 10px 10px',
  }
  var noteStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    marginBottom: '5px',
  }
  var checkboxStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    margin: '5px 0',
    display: 'flex',
    justifyContent: 'flex-start',
  }

  let history = useHistory()
  const years = Array.from(Array(5).keys()).map(
    (y) => y + new Date().getFullYear()
  )
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
  const count = Array.from(Array(51).keys()).slice(1, 51)

  const token = localStorage.getItem('token')

  const [activeTab, setActiveTab] = useState('What')
  const [validForm, setValidForm] = useState(false)

  //What
  const [category, setCategory] = useState('Giving Rides')
  const [activityName, setActivityName] = useState('')
  const [notes, setNotes] = useState('')

  //When
  const [startTime, setStartTime] = useState('12:00 PM')
  const [endTime, setEndTime] = useState('12:00 PM')
  const [noEndTime, setNoEndTime] = useState(false)
  const [allDay, setAllDay] = useState(false)
  const [startMonth, setStartMonth] = useState(months[new Date().getMonth()])
  const [startDay, setStartDay] = useState(new Date().getDate())
  const [startYear, setStartYear] = useState(new Date().getFullYear())
  const [endMonth, setEndMonth] = useState(months[new Date().getMonth()])
  const [endDay, setEndDay] = useState(new Date().getDate())
  const [endYear, setEndYear] = useState(new Date().getFullYear())
  const [selectedDays, setSelectedDays] = useState([])

  //Where
  const [pickupLocation, setPickupLocation] = useState('')
  const [destination, setDestination] = useState('')
  const [location, setLocation] = useState('')

  //Who
  const [estimatedHours, setEstimatedHours] = useState('')
  const [estimatedMinutes, setEstimatedMinutes] = useState('')
  const [numVolunteers, setNumVolunteers] = useState(1)
  const [coordinators, setCoordinators] = useState([])
  const [selectedCoordinators, setSelectedCoordinators] = useState([])

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

  //Dietary Restrictions (kept in case checkbox implementation is needed)
  const initDietaryRestrictions = [
    { name: 'Vegetarian', isChecked: false },
    { name: 'Kosher', isChecked: false },
    { name: 'Nut-free', isChecked: false },
    { name: 'Lactose-free', isChecked: false },
    { name: 'Wheat-free', isChecked: false },
    { name: 'Gluten-free', isChecked: false },
    { name: 'Soy-free', isChecked: false },
    { name: 'Sugar-free', isChecked: false },
    { name: 'Low-fat', isChecked: false },
    { name: 'Low-carb', isChecked: false },
    { name: 'Low-salt', isChecked: false },
  ]
  const [dietaryRestrictions, setDietaryRestrictions] = useState(
    initDietaryRestrictions
  )

  const initDaysOfWeek = [
    { name: 'Sunday', isChecked: false },
    { name: 'Monday', isChecked: false },
    { name: 'Tuesday', isChecked: false },
    { name: 'Wednesday', isChecked: false },
    { name: 'Thursday', isChecked: false },
    { name: 'Friday', isChecked: false },
    { name: 'Saturday', isChecked: false },
  ]
  const [daysOfWeek, setDaysOfWeek] = useState(initDaysOfWeek)

  const monthDiff = (d1, d2) => {
    var months
    months = (d2.getFullYear() - d1.getFullYear()) * 12
    months -= d1.getMonth()
    months += d2.getMonth()
    return months <= 0 ? 0 : months
  }

  const getDaysBetweenDates = (start, end, dayName) => {
    var result = []
    var days = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 }
    var day = days[dayName.toLowerCase().substr(0, 3)]
    var current = new Date(start)

    while (current <= end) {
      if (current.getDay() === day) {
        result.push(new Date(current))
      }
      current.setDate(current.getDate() + 1)
    }
    return result
  }

  const containsDay = (array = [], day) => {
    return array.some((d) => DateUtils.isSameDay(d, day))
  }

  const handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) {
      return
    }
    const newSelectedDays = selectedDays
    if (modifiers.selected) {
      setSelectedDays(
        newSelectedDays.filter(
          (selectedDay) => !DateUtils.isSameDay(selectedDay, day)
        )
      )
    } else {
      setSelectedDays(newSelectedDays.concat([day]))
    }
  }

  const handleWeekdayToggle = (dayName, addDays) => {
    const newSelectedDays = selectedDays
    if (addDays) {
      setSelectedDays(
        newSelectedDays
          .filter(
            (d) =>
              !containsDay(
                getDaysBetweenDates(
                  new Date(startYear, months.indexOf(startMonth), startDay),
                  new Date(endYear, months.indexOf(endMonth), endDay),
                  dayName
                ),
                d
              )
          )
          .concat(
            getDaysBetweenDates(
              new Date(startYear, months.indexOf(startMonth), startDay),
              new Date(endYear, months.indexOf(endMonth), endDay),
              dayName
            )
          )
      )
    } else {
      setSelectedDays(
        newSelectedDays.filter(
          (d) =>
            !containsDay(
              getDaysBetweenDates(
                new Date(startYear, months.indexOf(startMonth), startDay),
                new Date(endYear, months.indexOf(endMonth), endDay),
                dayName
              ),
              d
            )
        )
      )
    }
  }

  useEffect(() => {
    const formValues = [
      activityName,
      startDay,
      startMonth,
      startYear,
      selectedDays,
      estimatedHours,
      estimatedMinutes,
      numVolunteers,
    ]
    const notValidForm =
      formValues.some((formVal) => {
        return formVal === ''
      }) ||
      selectedDays.length === 0 ||
      isNaN(estimatedHours) ||
      isNaN(estimatedMinutes)

    if (notValidForm) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [
    activityName,
    startDay,
    startMonth,
    startYear,
    selectedDays,
    estimatedHours,
    estimatedMinutes,
    numVolunteers,
  ])

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
          }))
          setCoordinators(options)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token])

  useEffect(() => {
    if(category === 'Preparing Meals')
      setNotes('Number of people:')
  }, [category])

  const handleSubmit = useCallback(() => {
    let dietaryRestrictionStatus = {}
    dietaryRestrictions.forEach(
      (restriction) =>
        (dietaryRestrictionStatus[restriction.name] = restriction.isChecked)
    )

    let coordinatorIds = []
    selectedCoordinators.forEach((coordinator) => coordinatorIds.push(coordinator['value']))

    const param = JSON.stringify({
      title: activityName,
      description: notes,
      activity_type: category,
      community: localStorage.getItem('community-id'),
      dates: selectedDays,
      est_hours: estimatedHours,
      est_minutes: estimatedMinutes,
      num_volunteers_needed: numVolunteers,
      pickup_location: pickupLocation,
      destination_location: destination,
      location: location,
      dietary_restrictions: dietaryRestrictionStatus,
      start_time: startTime,
      end_time: endTime,
      all_day: allDay,
      no_end_time: noEndTime,
      coordinators: coordinatorIds,
      volunteers: [],
    })
    axios
      .post('/activity/', param, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((_, err) => {
        console.log(err)
        history.push('/calendar')
      })
  }, [
    selectedCoordinators,
    activityName,
    notes,
    category,
    selectedDays,
    estimatedHours,
    estimatedMinutes,
    numVolunteers,
    pickupLocation,
    destination,
    location,
    startTime,
    endTime,
    token,
    allDay,
    noEndTime,
    dietaryRestrictions,
  ])

  return (
    <div>
      <CommunityNavbar />

      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}>
            <SideBar />
          </Columns.Column>

          <Columns.Column size={9}>
            <Heading size={4}>Create a New Activity</Heading>

            {activeTab === 'What' ? (
              <Tabs type='boxed' size='small' style={{ marginBottom: '0' }}>
                <Tabs.Tab active onClick={() => setActiveTab('What')}>
                  What
                </Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('When')}>When</Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('Where')}>Where</Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('Who')}>Who</Tabs.Tab>
              </Tabs>
            ) : activeTab === 'When' ? (
              <Tabs type='boxed' size='small' style={{ marginBottom: '0' }}>
                <Tabs.Tab onClick={() => setActiveTab('What')}>What</Tabs.Tab>
                <Tabs.Tab active onClick={() => setActiveTab('When')}>
                  When
                </Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('Where')}>Where</Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('Who')}>Who</Tabs.Tab>
              </Tabs>
            ) : activeTab === 'Where' ? (
              <Tabs type='boxed' size='small' style={{ marginBottom: '0' }}>
                <Tabs.Tab onClick={() => setActiveTab('What')}>What</Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('When')}>When</Tabs.Tab>
                <Tabs.Tab active onClick={() => setActiveTab('Where')}>
                  Where
                </Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('Who')}>Who</Tabs.Tab>
              </Tabs>
            ) : (
              <Tabs type='boxed' size='small' style={{ marginBottom: '0' }}>
                <Tabs.Tab onClick={() => setActiveTab('What')}>What</Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('When')}>When</Tabs.Tab>
                <Tabs.Tab onClick={() => setActiveTab('Where')}>Where</Tabs.Tab>
                <Tabs.Tab active onClick={() => setActiveTab('Who')}>
                  Who
                </Tabs.Tab>
              </Tabs>
            )}

            {activeTab === 'What' ? (
              <div className='what' style={formContainerStyle}>
                <Field>
                  <Label>Select Category</Label>
                  <Control>
                    <Select
                      onChange={(e) => setCategory(e.target.value)}
                      name='category'
                      value={category}
                    >
                      {categories.map((cat) => (
                        <option>{cat}</option>
                      ))}
                    </Select>
                  </Control>
                </Field>
                <Field>
                  <Label>
                    Activity Name<span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Control>
                    <Input
                      maxLength={120}
                      value={activityName}
                      onChange={(e) => setActivityName(e.target.value)}
                    />
                  </Control>
                  {category === 'Giving Rides' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: "Rides to medical appointment, Social Event,
                      Soccer practice, Carpool."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Preparing Meals' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: "Weekday Dinners, Sunday Brunch."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Shopping' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: "Grocery shopping, Pharmacy pick-up."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Childcare' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: "Weekday a.m. childcare, Weekend eve
                      babysitting."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Pet Care' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: "Weekday a.m. pet care, Weekend eve pet care."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Laundry' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: "Weekly laundry load."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'House Cleaning' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: "Bathroom cleaning, Tidying bed."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Visits' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: "Afternoon reading, Weekend visits."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Miscellaneous' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      examples: "House cleaning, Lawn care, or other general
                      errands."
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Occasion' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      Need to keep track of important dates or milestones? Add
                      important occasions such as birthdays, anniversaries, and
                      more.
                    </p>
                  ) : (
                    <></>
                  )}
                </Field>
                {category === 'Preparing Meals' && (
                  <Field>
                    <Label>Dietary Restrictions</Label>
                    <Columns>
                      <Columns.Column>
                        <Control>
                          {dietaryRestrictions.map((restriction, i) => (
                            <div style={checkboxStyle}>
                              <Checkbox
                                style={{ marginRight: '10px' }}
                                onChange={() => {
                                  setDietaryRestrictions(
                                    (dietaryRestrictions) => {
                                      dietaryRestrictions[
                                        i
                                      ].isChecked = !dietaryRestrictions[i]
                                        .isChecked
                                      return dietaryRestrictions
                                    }
                                  )
                                }}
                              />
                              <p>{restriction.name}</p>
                            </div>
                          ))}
                        </Control>
                      </Columns.Column>
                    </Columns>
                  </Field>
                )}
                <Field>
                  <Label>Notes</Label>
                  <Control>
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </Control>
                  {category === 'Giving Rides' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      examples: <br />- travel time <br />- other stops
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Preparing Meals' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      examples: <br />- allergies <br />- no. people <br />-
                      delivery instr.
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Shopping' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: <br />- items needed
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Childcare' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: <br />- feeding instructions
                      <br />- kids favorites
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Pet Care' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: <br />- feeding instructions
                      <br />- favorite pet toys
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Laundry' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: <br />- washing machine settings
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'House Cleaning' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      example: <br />- rooms to clean
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Visits' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      examples: <br />- additional instructions <br />-
                      favorites <br />- activity ideas
                    </p>
                  ) : (
                    <></>
                  )}
                  {category === 'Occasion' ? (
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      Share important information with members of your Community
                      about this occasion.
                    </p>
                  ) : (
                    <></>
                  )}
                </Field>
              </div>
            ) : activeTab === 'When' ? (
              <div className='when' style={formContainerStyle}>
                <Label>
                  Select Time<span style={{ color: '#F83D34' }}>*</span>
                </Label>
                <Columns>
                  <Columns.Column>
                    <Field style={{ marginRight: '10px' }}>
                      {category === 'Giving Rides' ? (
                        <p>Pick-up Time</p>
                      ) : (
                        <p>Start Time</p>
                      )}
                      <Control>
                        <Select
                          onChange={(e) => setStartTime(e.target.value)}
                          name='startTime'
                          value={startTime}
                          disabled={allDay}
                        >
                          {times.map((t) => (
                            <option>{t}</option>
                          ))}
                        </Select>
                        <div style={checkboxStyle}>
                          <Checkbox
                            style={{ marginRight: '10px' }}
                            onChange={() => {
                              setAllDay(!allDay)
                            }}
                          />
                          <p>All Day</p>
                        </div>
                      </Control>
                    </Field>
                  </Columns.Column>
                  <Columns.Column>
                    <Field>
                      {category === 'Giving Rides' ? (
                        <p>Drop-off Time {'(optional)'}</p>
                      ) : (
                        <p>End Time {'(optional)'}</p>
                      )}
                      <Control>
                        <Select
                          onChange={(e) => setEndTime(e.target.value)}
                          name='endTime'
                          value={endTime}
                          disabled={noEndTime}
                        >
                          {times.map((t) => (
                            <option>{t}</option>
                          ))}
                        </Select>
                        <div style={checkboxStyle}>
                          <Checkbox
                            style={{ marginRight: '10px' }}
                            onChange={() => {
                              setNoEndTime(!noEndTime)
                            }}
                          />
                          <p>None</p>
                        </div>
                      </Control>
                    </Field>
                  </Columns.Column>
                </Columns>
                <Label>
                  Select Dates<span style={{ color: '#F83D34' }}>*</span>
                </Label>
                Date Range
                <br />
                <Columns>
                  <Columns.Column>
                    <Field>
                      <Control>
                        <p style={noteStyle}>Start Date</p>
                        <Select
                          onChange={(e) => setStartMonth(e.target.value)}
                          name='startMonth'
                          value={startMonth}
                          style={{ marginRight: '10px' }}
                        >
                          {months.map((m) => (
                            <option>{m}</option>
                          ))}
                        </Select>
                        <Select
                          onChange={(e) => setStartDay(e.target.value)}
                          name='startDay'
                          value={startDay}
                          style={{ marginRight: '10px' }}
                        >
                          {count.slice(0, 31).map((d) => (
                            <option>{d}</option>
                          ))}
                        </Select>
                        <Select
                          onChange={(e) => setStartYear(e.target.value)}
                          name='startYear'
                          value={startYear}
                        >
                          {years.map((y) => (
                            <option>{y}</option>
                          ))}
                        </Select>
                      </Control>
                    </Field>
                  </Columns.Column>
                  <Columns.Column>
                    <Field>
                      <Control>
                        <p style={noteStyle}>End Date</p>
                        <Select
                          onChange={(e) => setEndMonth(e.target.value)}
                          name='endMonth'
                          value={endMonth}
                          style={{ marginRight: '10px' }}
                        >
                          {months.map((m) => (
                            <option>{m}</option>
                          ))}
                        </Select>
                        <Select
                          onChange={(e) => setEndDay(e.target.value)}
                          name='endDay'
                          value={endDay}
                          style={{ marginRight: '10px' }}
                        >
                          {count.slice(0, 31).map((d) => (
                            <option>{d}</option>
                          ))}
                        </Select>
                        <Select
                          onChange={(e) => setEndYear(e.target.value)}
                          name='endYear'
                          value={endYear}
                        >
                          {years.map((y) => (
                            <option>{y}</option>
                          ))}
                        </Select>
                      </Control>
                    </Field>
                  </Columns.Column>
                </Columns>
                <Field>
                  <Control>
                    <p style={noteStyle}>Repeats</p>
                    {daysOfWeek.map((day, i) => (
                      <div style={checkboxStyle}>
                        <Checkbox
                          style={{ marginRight: '10px' }}
                          onChange={() => {
                            handleWeekdayToggle(day.name, !day.isChecked)
                            setDaysOfWeek((daysOfWeek) => {
                              day.isChecked = !day.isChecked
                              return daysOfWeek
                            })
                          }}
                        />
                        <p>{day.name}</p>
                      </div>
                    ))}
                  </Control>
                </Field>
                <p style={noteStyle}>
                  <b>Select all applicable dates on the calendar below.</b>
                </p>
                <DayPicker
                  selectedDays={selectedDays}
                  onDayClick={handleDayClick}
                  month={new Date(startYear, months.indexOf(startMonth))}
                  numberOfMonths={
                    monthDiff(
                      new Date(startYear, months.indexOf(startMonth), startDay),
                      new Date(endYear, months.indexOf(endMonth), endDay)
                    ) + 1
                  }
                  disabledDays={[
                    {
                      after: new Date(
                        endYear,
                        months.indexOf(endMonth),
                        endDay
                      ),
                      before: new Date(
                        startYear,
                        months.indexOf(startMonth),
                        startDay
                      ),
                    },
                  ]}
                />
              </div>
            ) : activeTab === 'Where' ? (
              <div className='where' style={formContainerStyle}>
                <Label>Location</Label>
                {category === 'Giving Rides' ? (
                  <div style={{ marginBottom: '10px' }}>
                    <Field>
                      Pick-up Location
                      <Control>
                        <Textarea
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          placeholder='Example: 123 Main Street, New York, NY'
                        />
                      </Control>
                    </Field>
                    <Field>
                      Destination
                      <Control>
                        <Textarea
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder='Example: 456 Walnut Ave, New York, NY'
                        />
                      </Control>
                      <p style={{ fontSize: '80%' }} className='has-text-grey'>
                        The system will try to automatically display directions
                        to the specified address(es) specified. For best
                        results, please use this format: Address, City, State
                        all on one line.
                      </p>
                    </Field>
                  </div>
                ) : (
                  <Field>
                    <Control>
                      <Textarea
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder={
                          category === 'Preparing Meals' && 'Delivery Location'
                        }
                      />
                    </Control>
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      The system will try to automatically display directions to
                      the specified address(es) specified. For best results,
                      please use this format: Address, City, State all on one
                      line.
                    </p>
                  </Field>
                )}
              </div>
            ) : (
              <div className='who' style={formContainerStyle}>
                <Field>
                    <Label>
                        Activity Coordinator(s)
                        <span style={{ color: '#F83D34' }}>*</span>
                    </Label>
                    <MultiSelect
                        options={coordinators}
                        value={selectedCoordinators}
                        onChange={setSelectedCoordinators}
                        labelledBy={'Select'}
                    />
                </Field>
                <Label>
                  Estimated Average Task Time
                  <span style={{ color: '#F83D34' }}>*</span>
                </Label>
                <Columns>
                  <Columns.Column>
                    <Field>
                      <Control>
                        <Input
                          value={estimatedHours}
                          onChange={(e) => setEstimatedHours(e.target.value)}
                          placeholder='Hours'
                        />
                      </Control>
                    </Field>
                    <Field>
                      <Control>
                        <Input
                          value={estimatedMinutes}
                          onChange={(e) => setEstimatedMinutes(e.target.value)}
                          placeholder='Minutes'
                        />
                      </Control>
                    </Field>
                    <p style={{ fontSize: '80%' }} className='has-text-grey'>
                      Optional. The estimated time for a Volunteer to complete
                      this task. This information is used for Activity Status
                      Reports.
                    </p>
                  </Columns.Column>
                  <Columns.Column></Columns.Column>
                </Columns>

                <Field>
                  <Label>
                    Volunteers
                    <span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Control>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Select
                        onChange={(e) => setNumVolunteers(e.target.value)}
                        name='numVolunteers'
                        value={numVolunteers}
                        style={{ marginRight: '10px' }}
                      >
                        {count.map((c) => (
                          <option>{c}</option>
                        ))}
                      </Select>
                      Volunteers per task/time
                    </div>
                  </Control>
                </Field>
              </div>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
              }}
            >
              <Link to='#'>
                <Button
                  className='is-primary is-inverted'
                  onClick={() =>
                    setActiveTab(
                      activeTab === 'When'
                        ? 'What'
                        : activeTab === 'Where'
                        ? 'When'
                        : 'Where'
                    )
                  }
                  style={{ display: activeTab === 'What' ? 'none' : 'block' }}
                >
                  Back
                </Button>
              </Link>
              <Link to='#' style={{ color: 'white' }}>
                <Button
                  color='primary'
                  onClick={() =>
                    activeTab === 'Who'
                      ? handleSubmit()
                      : setActiveTab(
                          activeTab === 'What'
                            ? 'When'
                            : activeTab === 'When'
                            ? 'Where'
                            : 'Who'
                        )
                  }
                  disabled={activeTab === 'Who' ? !validForm : false}
                >
                  {activeTab !== 'Who' ? 'Continue' : 'Finish'}
                </Button>
              </Link>
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
