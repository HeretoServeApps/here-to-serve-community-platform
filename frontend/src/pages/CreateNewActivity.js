import React, { useState, useEffect } from 'react'
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
} from 'react-bulma-components/lib/components/form'
import axios from 'axios'

export default function CreateNewActivity(props) {
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

  const [activeTab, setActiveTab] = useState('What')

  //What
  const [category, setCategory] = useState('Giving Rides')
  const [activityName, setActivityName] = useState('')
  const [calendarLabel, setCalendarLabel] = useState('')
  const [notes, setNotes] = useState('')
  const [diet, setDiet] = useState([])

  //Dietary Restrictions
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
  const [other, setOther] = useState(false)

  //When
  const [startTime, setStartTime] = useState('12:00 PM')
  const [endTime, setEndTime] = useState('12:00 PM')
  const [startMonth, setStartMonth] = useState('')
  const [startDay, setStartDay] = useState('')
  const [startYear, setStartYear] = useState('')
  const [endMonth, setEndMonth] = useState('')
  const [endDay, setEndDay] = useState('')
  const [endYear, setEndYear] = useState('')
  const [repeats, setRepeats] = useState('Never')

  //Where
  const [pickupLocation, setPickupLocation] = useState('')
  const [destination, setDestination] = useState('')
  const [location, setLocation] = useState('')

  //Who
  const [activityCoordinator, setActivityCoordinator] = useState('')
  const [estimatedHours, setEstimatedHours] = useState('')
  const [estimatedMinutes, setEstimatedMinutes] = useState('')
  const [numVolunteers, setNumVolunteers] = useState('')

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
    'Other (see Notes)',
  ]
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
  const repeatsOptions = ['Never', 'Custom', 'Weekly']
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

  useEffect(() => {
    setStartMonth(months[new Date().getMonth()])
    setStartDay(new Date().getDate())
    setStartYear(new Date().getFullYear())
    setEndMonth(months[new Date().getMonth()])
    setEndDay(new Date().getDate())
    setEndYear(new Date().getFullYear())
  }, [])

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
                    <Control>
                      {dietaryRestrictions.map((d) => (
                        <CheckboxField text={d} />
                      ))}
                      {diet.map((d) => (
                        <p>{d}</p>
                      ))}
                    </Control>
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
                        <Select
                          onChange={(e) => setStartTime(e.target.value)}
                          name='startTime'
                          value={startTime}
                        >
                          {times.map((t) => (
                            <option>{t}</option>
                          ))}
                        </Select>
                      </Control>
                    </Field>
                  </Columns.Column>
                  <Columns.Column>
                    <Field>
                      End Time {'(optional)'}
                      <Control>
                        <Select
                          onChange={(e) => setEndTime(e.target.value)}
                          name='endTime'
                          value={endTime}
                        >
                          {times.map((t) => (
                            <option>{t}</option>
                          ))}
                        </Select>
                      </Control>
                    </Field>
                  </Columns.Column>
                </Columns>

                <Label>
                  Select Dates<span style={{ color: '#F83D34' }}>*</span>
                </Label>

                <Columns>
                  <Columns.Column>
                    <Field>
                      <Control>
                        Start Date <br />
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
                        End Date <br />
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
                    Repeats <br />
                    <Select
                      onChange={(e) => setRepeats(e.target.value)}
                      name='repeats'
                      value={repeats}
                    >
                      {repeatsOptions.map((r) => (
                        <option>{r}</option>
                      ))}
                    </Select>
                  </Control>
                </Field>
                {repeats === 'Weekly' && (
                  <Field>
                    <Control>
                      Days <br />
                      {daysOfWeek.map((d) => (
                        <CheckboxField text={d} />
                      ))}
                    </Control>
                  </Field>
                )}
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
                      <option>Christina Lu</option>
                      <option>Dzung Nguyen</option>
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
                  onClick={() =>
                    setActiveTab(
                      activeTab === 'What'
                        ? 'When'
                        : activeTab === 'When'
                        ? 'Where'
                        : 'Who'
                    )
                  }
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
