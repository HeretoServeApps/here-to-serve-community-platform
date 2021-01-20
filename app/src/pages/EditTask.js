import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import 'react-day-picker/lib/style.css'
import axios from 'axios'
import moment from 'moment'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import {
    Select,
    Control,
    Label,
    Field,
    Checkbox,
} from 'react-bulma-components/lib/components/form'
import SideBar from '../components/sidebar'

export default function EditTask(props) {
    //Styles
    var containerStyle = {
        margin: '5% 5%',
        maxWidth: '100%',
    }
    var formContainerStyle = {
        padding: '5%',
        border: '1px solid hsl(0, 0%, 86%)',
        borderRadius: '10px',
    }
    var checkboxStyle = {
        fontSize: '0.75rem',
        fontStyle: 'italic',
        margin: '5px 0',
        display: 'flex',
        justifyContent: 'flex-start',
    }

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

    const [category, setCategory] = useState('')
    const [activityName, setActivityName] = useState('')
    const [notes, setNotes] = useState('')

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
   
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const [numVolunteers, setNumVolunteers] = useState(1)

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

    // API call to prepopulate fields relevant to activity
    useEffect(() => {
        axios
            .get(`/edit-task/${props.location.state.primary_key}/`, {
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
                    setStartDate(response.data.start_time)
                    setEndDate(response.data.end_time)
                    
                    setNumVolunteers(response.data.num_volunteers_needed)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])


    const handleSubmit = useCallback(() => {
        var url = '/edit-task/' + props.location.state.primary_key + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
        myHeaders.append('activity_id', props.location.state.primary_key )

        var formdata = new FormData()
        var startMonthNumeral =  months.indexOf(startMonth) + 1
        var startTimeString = startYear + '-' + startMonthNumeral + '-' + startDay + 'T' + startTime.split(' ')[0] + ':00Z'
        var endMonthNumeral =  months.indexOf(endMonth) + 1
        var endTimeString = endYear + '-' + endMonthNumeral + '-' + endDay + 'T' + endTime.split(' ')[0] + ':00Z'

        formdata.append('num_volunteers_needed', numVolunteers)
        formdata.append('start_time', startTimeString)
        formdata.append('end_time', endTimeString)
        formdata.append('all_day', allDay)
        formdata.append('no_end_time', noEndTime)

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        }

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(_ =>
                window.location.reload()
            )
            .catch(error => console.log('error', error))
    }, [numVolunteers, startTime, endTime, allDay, noEndTime])


    return (
        <div>
            <CommunityNavbar />
            <Container style={containerStyle}>
                <Columns isMultiline={true}>
                    <Columns.Column size={3}>
                        <SideBar />
                    </Columns.Column>
                    <Columns.Column size={9}>
                        <Heading size={4}>
                            Edit Task
                        </Heading>
                        <Container style={formContainerStyle}>
                            <div style={{ marginBottom: '2%' }}>
                                <Label>Category: </Label>{category}
                            </div>
                            <div style={{ marginBottom: '2%' }}>
                                <Label>Task Name: </Label>{activityName}
                            </div>
                            <div style={{ marginBottom: '2%' }}>
                                <Label>Task date and time: </Label>
                                {moment(startDate).format('LL')}{' '}
                                Between {moment(startDate).add(new Date(startDate).getTimezoneOffset(), 'm').format('LT')}{' '}
                                and {moment(endDate).add(new Date(endDate).getTimezoneOffset(), 'm').format('LT')}
                            </div>
                            <div style={{ marginBottom: '2%' }}>
                                <Label>Notes: </Label>{notes}
                            </div>
                            {category !== 'Ocassion' &&
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
                            }
                            <Columns>
                                <Columns.Column size={6}>
                                    <Field style={{ marginRight: '10px' }}>
                                        {category === 'Giving Rides' ? 
                                            (<Label>Pick-up Time<span style={{ color: '#F83D34' }}>*</span></Label>) 
                                            : 
                                            (<Label>Start Time<span style={{ color: '#F83D34' }}>*</span></Label>)
                                        }
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
                                                    checked={allDay}
                                                    onChange={() => { setAllDay(!allDay) }}
                                                />
                                                <p>All Day</p>
                                            </div>
                                        </Control>
                                    </Field>
                                </Columns.Column>
                                <Columns.Column size={6}>
                                    <Field>
                                        {category === 'Giving Rides' ? 
                                            (<Label>Drop-off Time {'(optional)'}<span style={{ color: '#F83D34' }}>*</span></Label>) 
                                            : 
                                            (<Label>End Time {'(optional)'}<span style={{ color: '#F83D34' }}>*</span></Label>)
                                        }
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
                                                    checked={noEndTime}
                                                    onChange={() => { setNoEndTime(!noEndTime) }}
                                                />
                                                <p>None</p>
                                            </div>
                                        </Control>
                                    </Field>
                                </Columns.Column>
                            </Columns>
                        </Container>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                color='primary'
                                onClick={() => handleSubmit()}
                            >
                                Finish
                            </Button>
                        </div>
                    </Columns.Column>
                </Columns>
            </Container>
        </div>
    )
}

EditTask.propTypes = {
    primary_key: PropTypes.number.isRequired,
}
  
