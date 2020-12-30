import React, { useState, useEffect, useCallback } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'
import 'react-day-picker/lib/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

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

export default function ActivityEdit(props) {
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

    const years = Array.from(Array(5).keys()).map((y) => (y + (new Date().getFullYear())))
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

    const [activeTab, setActiveTab] = useState('What')
    const [validForm, setValidForm] = useState(false)

    //What
    const [category, setCategory] = useState('')
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
    const [estimatedHours, setEstimatedHours] = useState(0)
    const [estimatedMinutes, setEstimatedMinutes] = useState(0)
    const [numVolunteers, setNumVolunteers] = useState(1)
    const [coordinators, setCoordinators] = useState([])
    const [selectedCoordinators, setSelectedCoordinators] = useState([])
    const [volunteers, setVolunteers] = useState([])

    //Dietary Restrictions (kept in case checkbox implementation is needed)
    const [dietaryRestrictions, setDietaryRestrictions] = useState([])

    const monthDiff = (d1, d2) => {
        var months
        months = (d2.getFullYear() - d1.getFullYear()) * 12
        months -= d1.getMonth()
        months += d2.getMonth()
        return months <= 0 ? 0 : months
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

    useEffect(() => {
        const formValues = [
            activityName,
            startDay,
            startMonth,
            startYear,
            estimatedHours,
            estimatedMinutes,
            numVolunteers,
        ]
        const notValidForm =
            formValues.some((formVal) => {
                return formVal === ''
            }) ||
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
        estimatedHours,
        estimatedMinutes,
        numVolunteers,
    ])

    const parseDate = (date, isStartDate) => {
        var splitDate = date.split('-')
        var YYYY = splitDate[0]
        var MM = splitDate[1]
        var DDTHMSZ = splitDate[2]
        var splitDDTHMSZ = DDTHMSZ.split('T')
        var DD = splitDDTHMSZ[0]
        var Time = moment(splitDDTHMSZ[1].substr(0, splitDDTHMSZ[1].length - 1), 'HH:mm:ss').format('h:mm A')
        isStartDate ? setStartDay(DD) : setEndDay(DD)
        isStartDate ? setStartMonth(months[parseInt(MM) - 1]) : setEndMonth(months[parseInt(MM) - 1])
        isStartDate ? setStartYear(YYYY) : setEndYear(YYYY)
        isStartDate ? setStartTime(Time) : setEndTime(Time)
    }

    useEffect(() => {
        axios
            .get(`/community-coordinators/${localStorage.getItem('community-id')}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
            })
            .then(
                (response) => {
                    const options = response.data.map((item) => ({ label: `${item['first_name']} ${item['last_name']}`, value: item['id'] }))
                    setCoordinators(options)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])


    // API call to prepopulate fields relevant to activity
    useEffect(() => {
        axios
            .get(`/edit-activity/${props.location.state.primary_key}/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
            })
            .then(
                (response) => {
                    // What tab items
                    setCategory(response.data.activity_type)
                    setActivityName(response.data.title)
                    setNotes(response.data.description)

                    // When tab items
                    parseDate(response.data.start_time, true)
                    parseDate(response.data.end_time, false)
                    setAllDay(response.data.all_day)
                    
                        
                    var tempSelectedDays = []
                    for(var i = 0; i < response.data.selected_days.length; i++){
                        var day = response.data.selected_days[i][0].split('-')
                        var year = parseInt(day[0])
                        var month = parseInt(day[1])-1
                        var date = parseInt(day[2].split('T')[0])
                        tempSelectedDays.push(new Date(year, month, date))
                    }
                    setSelectedDays(tempSelectedDays)

                    // Where tab items
                    if (response.data.activity_type === 'Giving Rides') {
                        setPickupLocation(response.data.pickup_location)
                        setDestination(response.data.destination_location)
                    }
                    else if (response.data.activity_type === 'Preparing Meals') {
                        setLocation(response.data.delivery_location)
                        let initDietaryRestrictions = [
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
                        for (var j = 0; j < initDietaryRestrictions.length; j++) {
                            if (response.data.dietary_restrictions.includes(initDietaryRestrictions[j].name))
                                initDietaryRestrictions[j].isChecked = true
                        }
                        setDietaryRestrictions(initDietaryRestrictions)
                    }
                    else {
                        setLocation(response.data.location)
                    }

                    // Who tab items
                    const options = response.data.coordinators.map((item) => ({ label: `${item['first_name']} ${item['last_name']}`, value: item['id'] }))
                    setSelectedCoordinators(options)
                    setEstimatedHours(response.data.est_hours)
                    setEstimatedMinutes(response.data.est_minutes)
                    setNumVolunteers(response.data.num_volunteers_needed)
                    setVolunteers(response.data.volunteers)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    function removeActivity(pk) {
        var url = '/edit-activity/' + pk + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        }

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => window.location.reload())
            .catch(error => console.log('error', error));
    }

    const handleSubmit = useCallback(() => {
        removeActivity(props.location.state.primary_key)

        let dietaryRestrictionStatus = {}
        dietaryRestrictions.forEach((restriction) => dietaryRestrictionStatus[restriction.name] = restriction.isChecked)

        let coordinatorIds = []
        selectedCoordinators.forEach((coordinator) => coordinatorIds.push(coordinator['value']))

        let volunteerIds = []
        volunteers.forEach((volunteer) => volunteerIds.push(volunteer['id']))

        const param = JSON.stringify({
            'title': activityName,
            'description': notes,
            'activity_type': category,
            'community': localStorage.getItem('community-id'),
            "dates": selectedDays,
            'est_hours': estimatedHours,
            'est_minutes': estimatedMinutes,
            'num_volunteers_needed': numVolunteers,
            'pickup_location': pickupLocation,
            'destination_location': destination,
            'location': location,
            'dietary_restrictions': dietaryRestrictionStatus,
            'start_time': startTime,
            'end_time': endTime,
            'all_day': allDay,
            'no_end_time': noEndTime,
            'coordinators': coordinatorIds,
            'volunteers': volunteerIds,
        })
        axios.post('/activity/', param, {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        })
            .then(
                (response, err) => {
                    console.log(err)
                })

    }, [category, activityName, notes, estimatedHours, estimatedMinutes, startYear, endYear, startMonth, endMonth, startDay, endDay, startTime, endTime, selectedDays, numVolunteers, selectedCoordinators, dietaryRestrictions, pickupLocation, destination, location, dietaryRestrictions])

    return (
        <div>
            <CommunityNavbar />
            <Container style={containerStyle}>
                <Columns isMultiline={true}>
                    <Columns.Column size={3}>
                        <SideBar />
                    </Columns.Column>
                    <Columns.Column size={9}>
                        {category === 'Occasion' ? 
                            <Heading size={4}>Edit Event</Heading> 
                            :
                            <Heading size={4}>Edit Activity</Heading> 
                        }
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
                                <div style={{ marginBottom: '2%' }}>
                                    <Label>Category: <span style={{ color: '#F83D34' }}>*</span></Label>{category}
                                </div>
                                <Field>
                                    <Label>
                                        Activity Name<span style={{ color: '#F83D34' }}>*</span>
                                    </Label>
                                    <Control>
                                        <Input maxLength={120}
                                            value={activityName}
                                            onChange={(e) => setActivityName(e.target.value)}
                                        />
                                    </Control>
                                    {category === 'Giving Rides' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: "Rides to medical appointment, Social Event, Soccer practice, Carpool."</p>) : (<></>)}
                                    {category === 'Preparing Meals' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: "Weekday Dinners, Sunday Brunch."</p>) : (<></>)}
                                    {category === 'Shopping' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: "Grocery shopping, Pharmacy pick-up."</p>) : (<></>)}
                                    {category === 'Childcare' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: "Weekday a.m. childcare, Weekend eve babysitting."</p>) : (<></>)}
                                    {category === 'Pet Care' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: "Weekday a.m. pet care, Weekend eve pet care."</p>) : (<></>)}
                                    {category === 'Laundry' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: "Weekly laundry load."</p>) : (<></>)}
                                    {category === 'House Cleaning' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: "Bathroom cleaning, Tidying bed."</p>) : (<></>)}
                                    {category === 'Visits' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: "Afternoon reading, Weekend visits."</p>) : (<></>)}
                                    {category === 'Miscellaneous' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>examples: "House cleaning, Lawn care, or other general errands."</p>) : (<></>)}
                                    {category === 'Occasion' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>Need to keep track of important dates or milestones? Add important occasions such as birthdays, anniversaries, and more.</p>) : (<></>)}
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
                                                                    setDietaryRestrictions((dietaryRestrictions) => {
                                                                        dietaryRestrictions[i].isChecked = !dietaryRestrictions[i].isChecked
                                                                        return dietaryRestrictions
                                                                    })
                                                                }}
                                                                checked={dietaryRestrictions[i].isChecked}
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
                                    {category === 'Giving Rides' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>examples: <br />- travel time <br />- other stops</p>) : (<></>)}
                                    {category === 'Preparing Meals' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>examples: <br />- allergies <br />- no. people <br />- delivery instr.</p>) : (<></>)}
                                    {category === 'Shopping' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: <br />- items needed</p>) : (<></>)}
                                    {category === 'Childcare' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: <br />- feeding instructions<br />- kids favorites</p>) : (<></>)}
                                    {category === 'Pet Care' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: <br />- feeding insrtuctions<br />- favorite pet toys</p>) : (<></>)}
                                    {category === 'Laundry' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: <br />- washing machine settings</p>) : (<></>)}
                                    {category === 'House Cleaning' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>example: <br />- rooms to clean</p>) : (<></>)}
                                    {category === 'Visits' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>examples: <br />- additional instructions <br />- favorites <br />- activity ideas</p>) : (<></>)}
                                    {category === 'Occasion' ? (<p style={{ fontSize: '80%' }} className='has-text-grey'>Share important information with members of your Community about this occasion.</p>) : (<></>)}
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
                                            {category === 'Giving Rides' ? (<p>Pick-up Time</p>) : (<p>Start Time</p>)}
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
                                                        onChange={() => { setAllDay(!allDay) }}
                                                    />
                                                    <p>All Day</p>
                                                </div>
                                            </Control>
                                        </Field>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Field>
                                            {category === 'Giving Rides' ? (<p>Drop-off Time {'(optional)'}</p>) : (<p>End Time {'(optional)'}</p>)}
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
                                                        onChange={() => { setNoEndTime(!noEndTime) }}
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
                                                The system will try to automatically display directions to the specified address(es) specified.
                                                For best results, please use this format: Address, City, State all on one line.
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
                                                The system will try to automatically display directions to the specified address(es) specified.
                                                For best results, please use this format: Address, City, State all on one line.
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
                                                Optional. The estimated time for a Volunteer to complete this task. This information is used for Activity Status Reports.
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
                            <Link to={activeTab === 'Who' ? '/calendar' : '#'} style={{ color: 'white' }}>
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

ActivityEdit.propTypes = {
    primary_key: PropTypes.number.isRequired,
}
  
