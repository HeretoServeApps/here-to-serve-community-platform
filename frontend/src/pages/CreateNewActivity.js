import React, { useState, useEffect, useCallback } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import CheckboxField from '../components/checkboxfield'
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
import axios from 'axios'

export default function CreateNewActivity(props) {
  //Styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '80%',
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

  const token = localStorage.getItem('token')


  const [activeTab, setActiveTab] = useState('What')
  const [validForm, setValidForm] = useState(false)

  //What
  const [category, setCategory] = useState('Giving Rides')
  const [activityName, setActivityName] = useState('')
  const [calendarLabel, setCalendarLabel] = useState('')
  const [notes, setNotes] = useState('')
  const [diet, setDiet] = useState('')

  //When
  const [startTime, setStartTime] = useState('12:00 PM')
  const [endTime, setEndTime] = useState('12:00 PM')
  const [noEndTime, setNoEndTime] = useState(false)
  const [allDay, setAllDay] = useState(false)
  const [startMonth, setStartMonth] = useState('')
  const [startDay, setStartDay] = useState('')
  const [startYear, setStartYear] = useState('')
  const [endMonth, setEndMonth] = useState('')
  const [endDay, setEndDay] = useState('')
  const [endYear, setEndYear] = useState('')
  const [selectedDays, setSelectedDays] = useState([])
  const [sunday, setSunday] = useState(true)
  const [monday, setMonday] = useState(true)
  const [tuesday, setTuesday] = useState(true)
  const [wednesday, setWednesday] = useState(true)
  const [thursday, setThursday] = useState(true)
  const [friday, setFriday] = useState(true)
  const [saturday, setSaturday] = useState(true)

  //Where
  const [pickupLocation, setPickupLocation] = useState('')
  const [destination, setDestination] = useState('')
  const [location, setLocation] = useState('')

  //Who
  const [activityCoordinator, setActivityCoordinator] = useState('')
  const [estimatedHours, setEstimatedHours] = useState('')
  const [estimatedMinutes, setEstimatedMinutes] = useState('')
  const [numVolunteers, setNumVolunteers] = useState('')
  const coordinators = ['Coordinator 1', 'Coordinator 2']

  const years = Array.from(Array(5).keys()).map((y) => (y+(new Date().getFullYear())))

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
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
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
  const count = Array.from(Array(51).keys()).slice(1,51)

  //Dietary Restrictions (kept in case checkbox implementation is needed)
  const [vegetarian, setVegetarian] = useState(false)
  const [kosher, setKosher] = useState(false)
  const [nutFree, setNutFree] = useState(false)
  const [lactoseFree, setLactoseFree] = useState(false)
  const [wheatFree, setWheatFree] = useState(false)
  const [glutenFree, setGlutenFree] = useState(false)
  const [soyFree, setSoyFree] = useState(false)
  const [sugarFree, setSugarFree] = useState(false)
  const [lowFat, setLowFat] = useState(false)
  const [lowCarb, setLowCarb] = useState(false)
  const [lowSalt, setLowSalt] = useState(false)
  const dietaryRestrictions = [
    'Vegetarian',
    'Kosher',
    'Nut-free',
    'Lactose-free',
    'Wheat-free',
    'Gluten-free',
    'Soy-free',
    'Sugar-free',
    'Low-fat',
    'Low-carb',
    'Low-salt',
  ]

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
      if (current.getDay() == day) {
        result.push(new Date(current))
      }
      current.setDate(current.getDate()+1)
    }
    console.log(result)
    return result
  }

  const containsDay = (array = [], day) => {
    return array.some((d) => (DateUtils.isSameDay(d, day)))
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
      console.log('Adding Days')

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
      console.log('Removing Days')
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
    setStartMonth(months[new Date().getMonth()])
    setStartDay(new Date().getDate())
    setStartYear(new Date().getFullYear())
    setEndMonth(months[new Date().getMonth()])
    setEndDay(new Date().getDate())
    setEndYear(new Date().getFullYear())
    setNumVolunteers(1)
    setActivityCoordinator('Coordinator 1')
  }, [])

  useEffect(() => {
    var newSelectedDays = selectedDays
    var startDate = new Date(startYear, months.indexOf(startMonth), startDay)
    var endDate = new Date(endYear, months.indexOf(endMonth), endDay)
    setSelectedDays(
      newSelectedDays.filter((d) =>
        DateUtils.isDayInRange(d, { from: startDate, to: endDate })
      )
    )
  }, [startDay, startMonth, startYear, endDay, endMonth, endYear])

  useEffect(() => {
    const formValues = [
      activityName,
      calendarLabel,
      startDay,
      startMonth,
      startYear,
      selectedDays,
      activityCoordinator,
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
    calendarLabel,
    startDay,
    startMonth,
    startYear,
    selectedDays,
    activityCoordinator,
    estimatedHours,
    estimatedMinutes,
    numVolunteers,
  ])




  const handleSubmit = useCallback(() => {
    const param = JSON.stringify({
      'name': activityName,
      'calendar_label': calendarLabel,
      'description': notes,
      'activity_type': category,
      'community': localStorage.getItem('community-id'),
      "dates" : selectedDays,
      'est_hours': estimatedHours,
      'est_minutes': estimatedMinutes,
      'volunteers_needed': numVolunteers,
      'pickup_location': pickupLocation,
      'destination_location': destination,
      'location': location,
      'dietary_restrictions': {vegetarian: vegetarian, kosher: kosher, nutfree: nutFree, lactoseFree: lactoseFree, wheatfree: wheatFree, glutenfree: glutenFree, wheatfree: wheatFree, glutenfree: glutenFree, soyfree: soyFree, sugarfree: sugarFree, lowfat: lowFat, lowcarb: lowCarb, lowsalt: lowSalt},
      'start_time': startTime,
      'end_time': endTime,
      'all_day': allDay,
      'no_end_time': noEndTime,
    })
    axios.post('/activity/', param, {
        headers: {
          'Authorization': `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response, err) => {
          console.log(response)
          console.log(err)
      })
  }, [activityName, calendarLabel, notes, category, selectedDays, estimatedHours, estimatedMinutes, numVolunteers, pickupLocation, destination, location, startTime, endTime, token, vegetarian, kosher, nutFree, lactoseFree, wheatFree, glutenFree, wheatFree, glutenFree, soyFree, sugarFree, lowFat, lowCarb, lowSalt])


  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}></Columns.Column>
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
                      <option>Giving Rides</option>
                      <option>Preparing Meals</option>
                      <option>Shopping</option>
                      <option>Childcare</option>
                      <option>Visits</option>
                      <option>Coverage</option>
                      <option>Miscellaneous</option>
                      <option>Event</option>
                    </Select>
                  </Control>
                </Field>
                <Field>
                  <Label>
                    Activity Name<span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Control>
                    <Input
                      value={activityName}
                      onChange={(e) => setActivityName(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label>
                    Calendar Label<span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Control>
                    <Input
                      value={calendarLabel}
                      onChange={(e) => setCalendarLabel(e.target.value)}
                    />
                  </Control>
                </Field>
                {category === 'Preparing Meals' && (
                  <Field>
                    <Label>Dietary Restrictions</Label>
                    <Columns>
                      <Columns.Column>
                        <Control>
                          <div className='vegetarian' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setVegetarian(!vegetarian)
                              }}
                              checked={vegetarian}
                            />
                            <p>Vegetarian</p>
                          </div>
                          <div className='kosher' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setKosher(!kosher)
                              }}
                              checked={kosher}
                            />
                            <p>Kosher</p>
                          </div>
                          <div className='nutfree' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setNutFree(!nutFree)
                              }}
                              checked={nutFree}
                            />
                            <p>Nut-Free</p>
                          </div>
                          <div className='lactosefree' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setLactoseFree(!lactoseFree)
                              }}
                              checked={lactoseFree}
                            />
                            <p>Lactose-Free</p>
                          </div>
                          <div className='wheatfree' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setWheatFree(!wheatFree)
                              }}
                              checked={wheatFree}
                            />
                            <p>Wheat-Free</p>
                          </div>
                          <div className='glutenfree' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setGlutenFree(!glutenFree)
                              }}
                              checked={glutenFree}
                            />
                            <p>Gluten-Free</p>
                          </div>
                        </Control>
                      </Columns.Column>
                      <Columns.Column>
                        <Control>
                          <div className='soyfree' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setSoyFree(!soyFree)
                              }}
                              checked={soyFree}
                            />
                            <p>Soy-Free</p>
                          </div>
                          <div className='sugarfree' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setSugarFree(!sugarFree)
                              }}
                              checked={sugarFree}
                            />
                            <p>Sugar-Free</p>
                          </div>
                          <div className='lowfat' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setLowFat(!lowFat)
                              }}
                              checked={lowFat}
                            />
                            <p>Low Fat</p>
                          </div>
                          <div className='lowcarb' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setLowCarb(!lowCarb)
                              }}
                              checked={lowCarb}
                            />
                            <p>Low Carb</p>
                          </div>
                          <div className='lowsalt' style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={(e) => {
                                setLowSalt(!lowSalt)
                              }}
                              checked={lowSalt}
                            />
                            <p>Low Salt</p>
                          </div>
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
                      Start Time
                      <Control>
                        {allDay ? (
                          <Select
                            onChange={(e) => setStartTime(e.target.value)}
                            name='startTime'
                            value={startTime}
                            disabled
                          >
                            {times.map((t) => (
                              <option>{t}</option>
                            ))}
                          </Select>
                        ) : (
                          <Select
                            onChange={(e) => setStartTime(e.target.value)}
                            name='startTime'
                            value={startTime}
                          >
                            {times.map((t) => (
                              <option>{t}</option>
                            ))}
                          </Select>
                        )}
                        <div style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={() => {
                                setAllDay(!allDay)
                              }}
                              checked={allDay}
                            />
                          <p>All Day</p>
                        </div>
                      </Control>
                    </Field>
                  </Columns.Column>
                  <Columns.Column>
                    <Field>
                      End Time {'(optional)'}
                      <Control>
                        {noEndTime ? (
                          <Select
                            onChange={(e) => setEndTime(e.target.value)}
                            name='endTime'
                            value={endTime}
                            disabled
                          >
                            {times.map((t) => (
                              <option>{t}</option>
                            ))}
                          </Select>
                        ) : (
                          <Select
                            onChange={(e) => setEndTime(e.target.value)}
                            name='endTime'
                            value={endTime}
                          >
                            {times.map((t) => (
                              <option>{t}</option>
                            ))}
                          </Select>
                        )}
                        <div style={checkboxStyle}>
                            <Checkbox
                              style={{ marginRight: '10px' }}
                              onClick={() => {
                                setNoEndTime(!noEndTime)
                              }}
                              checked={noEndTime}
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
                    <div className='sunday' style={checkboxStyle}>
                      <Checkbox
                        style={{ marginRight: '10px' }}
                        onClick={(e) => {
                          handleWeekdayToggle('Sunday', sunday)
                          setSunday(!sunday)
                        }}
                        checked={!sunday}
                      />
                      <p>Sunday</p>
                    </div>
                    <div className='monday' style={checkboxStyle}>
                      <Checkbox
                        style={{ marginRight: '10px' }}
                        onClick={(e) => {
                          handleWeekdayToggle('Monday', monday)
                          setMonday(!monday)
                        }}
                        checked={!monday}
                      />
                      <p>Monday</p>
                    </div>
                    <div className='tuesday' style={checkboxStyle}>
                      <Checkbox
                        style={{ marginRight: '10px' }}
                        onClick={(e) => {
                          handleWeekdayToggle('Tuesday', tuesday)
                          setTuesday(!tuesday)
                        }}
                        checked={!tuesday}
                      />
                      <p>Tuesday</p>
                    </div>
                    <div className='wednesday' style={checkboxStyle}>
                      <Checkbox
                        style={{ marginRight: '10px' }}
                        onClick={(e) => {
                          handleWeekdayToggle('Wednesday', wednesday)
                          setWednesday(!wednesday)
                        }}
                        checked={!wednesday}
                      />
                      <p>Wednesday</p>
                    </div>
                    <div className='thursday' style={checkboxStyle}>
                      <Checkbox
                        style={{ marginRight: '10px' }}
                        onClick={(e) => {
                          handleWeekdayToggle('Thursday', thursday)
                          setThursday(!thursday)
                        }}
                        checked={!thursday}
                      />
                      <p>Thursday</p>
                    </div>
                    <div className='friday' style={checkboxStyle}>
                      <Checkbox
                        style={{ marginRight: '10px' }}
                        onClick={(e) => {
                          handleWeekdayToggle('Friday', friday)
                          setFriday(!friday)
                        }}
                        checked={!friday}
                      />
                      <p>Friday</p>
                    </div>
                    <div className='saturday' style={checkboxStyle}>
                      <Checkbox
                        style={{ marginRight: '10px' }}
                        onClick={(e) => {
                          handleWeekdayToggle('Saturday', saturday)
                          setSaturday(!saturday)
                        }}
                        checked={!saturday}
                      />
                      <p>Saturday</p>
                    </div>
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
                      <Control>
                        <Textarea
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          placeholder='Pick-up Location'
                        />
                      </Control>
                    </Field>
                    <Field>
                      <Control>
                        <Textarea
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder='Destination'
                        />
                      </Control>
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
                  </Field>
                )}
              </div>
            ) : (
              <div className='who' style={formContainerStyle}>
                <Field>
                  <Label>
                    Activity Coordinator
                    <span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Control>
                    <Select
                      onChange={(e) => setActivityCoordinator(e.target.value)}
                      name='activityCoordinator'
                      value={activityCoordinator}
                    >
                      {coordinators.map((c) => (
                        <option>{c}</option>
                      ))}
                    </Select>
                  </Control>
                </Field>
                <Field>
                  <CheckboxField text='Select Other Coordinators' />
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
                  onClick={() => activeTab === 'Who' ? handleSubmit() :
                    setActiveTab(
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