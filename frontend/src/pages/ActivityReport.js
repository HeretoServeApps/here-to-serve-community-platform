import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { PDFDownloadLink } from '@react-pdf/renderer'

import { Input, Select, Field, Label, Control } from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Table from 'react-bulma-components/lib/components/table'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'

import PDF from '../components/activityPDF'
import CommunityNavbar from '../components/communityNavbar'


export default function ActivityReport() {
    // Create styles
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '1050px',
        padding: '4rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem'
    }

    var noteStyle = {
        color: '#E5E5E5',
        fontStyle: 'italic',
        margin: '15px',
    }

    const activityTypes = [
        'Filter by Activity Type',
        'Giving Rides',
        'Preparing Meals',
        'Shopping',
        'Childcare',
        'Pet Care',
        'House Cleaning',
        'Laundry',
        'Visits',
        'Miscellaneous',
        'Occasion'
    ]

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

    // Date range
    const [startMonth, setStartMonth] = useState(months[new Date().getMonth()])
    const [startDay, setStartDay] = useState(new Date().getDate())
    const [startYear, setStartYear] = useState(new Date().getFullYear())
    const [endMonth, setEndMonth] = useState(months[new Date().getMonth()])
    const [endDay, setEndDay] = useState(new Date().getDate())
    const [endYear, setEndYear] = useState(new Date().getFullYear())

    const [activities, setActivities] = useState([])
    const [search, setSearch] = useState('')
    const [selectedActivityType, setSelectedActivityType] = useState('Filter by Activity Type')
    const moment = extendMoment(Moment);

    const monthMap = new Map()
    monthMap['January'] = 1
    monthMap['February'] = 2
    monthMap['March'] = 3
    monthMap['April'] = 4
    monthMap['May'] = 5
    monthMap['June'] = 6
    monthMap['July'] = 7
    monthMap['August'] = 8
    monthMap['September'] = 9
    monthMap['October'] = 10
    monthMap['November'] = 11
    monthMap['December'] = 12

    useEffect(() => {
        axios
          .get(`/activities/${localStorage.getItem('community-id')}`, {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`,
            },
          })
          .then(
            (response) => {
              setActivities(response.data)
            },
            (error) => {
              console.log(error)
            }
          )
    }, [])

    const isDateWithinRange = useCallback((date) => {
        // Might need to offset date from UTC to actual timezone
        var dateFormatted = moment(date.substr(0, 10), 'YYYY-MM-DD')
        var startDate = moment(startYear + '-' + monthMap[startMonth] + '-' + startDay, 'YYYY-MM-DD')
        var endDate = moment(endYear + '-' + monthMap[endMonth] + '-' + endDay, 'YYYY-MM-DD')
        var range = moment().range(startDate, endDate)
        return range.contains(dateFormatted)
    }, [startDay, startMonth, startYear, endDay, endMonth, endYear])

    return (
        <div>
            <CommunityNavbar />
            <Container style={containerStyle}>
                <Columns>
                    <Columns.Column size={8}>
                        <Heading size={4}>Activity Report</Heading>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <Columns>
                            <Columns.Column>
                                <PDFDownloadLink 
                                    document={
                                        <PDF
                                            activity_type = {selectedActivityType}
                                            start_day     = {startDay}
                                            start_month   = {startMonth}
                                            start_year    = {startYear}
                                            end_day       = {endDay}
                                            end_month     = {endMonth}
                                            end_year      = {endYear}
                                            search        = {search}
                                        />
                                    } 
                                    fileName="report.pdf"
                                >
                                    <Button
                                        className='is-primary is-inverted'
                                        style={{
                                        boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                        }}
                                        fullwidth={true}
                                    >
                                        Export Report
                                    </Button>
                                </PDFDownloadLink>
                            </Columns.Column>
                        </Columns>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={9}>
                        <Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search activities by name'
                            style={{ marginBottom: '3%' }}
                        />
                    </Columns.Column>
                    <Columns.Column size={3}>
                        <Field>
                            <Control>
                                <Select
                                    onChange={(e) => setSelectedActivityType(e.target.value)}
                                    name='selectedActivityType'
                                    value={selectedActivityType}
                                >
                                    {activityTypes.map((type) => (<option>{type}</option>))}
                                </Select>
                            </Control>
                        </Field>
                    </Columns.Column>
                </Columns>
                <Columns style={{marginTop: '-3%', marginBottom: '3%'}}>
                    <Columns.Column size={5}>
                        <Field>
                        <Label>Start Date</Label>
                        <Control>
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
                    <Columns.Column size={5}>
                        <Field>
                        <Label>End Date</Label>
                        <Control>
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

                <Table id='center-table'>
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Average Volunteer Time/Person <br />(Requested)</th>
                            <th>Average Volunteer Time/Person <br />(Actual)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.filter(
                            (a) =>
                                (search === '' || (a.title).toLowerCase().includes(search.toLowerCase())) 
                                && 
                                (selectedActivityType === 'Filter by Activity Type' || a.activity_type === selectedActivityType)
                                &&
                                isDateWithinRange(a.start_time)
                        ).length > 0 ? (
                                activities.filter(
                                    (a) =>
                                    (search === '' || (a.title).toLowerCase().includes(search.toLowerCase())) 
                                    && 
                                    (selectedActivityType === 'Filter by Activity Type' || a.activity_type === selectedActivityType)
                                    &&
                                    (isDateWithinRange(a.start_time))
                                )
                                    .map((a) => (
                                        <tr key={a.id}>
                                        <td>
                                            <strong>{a.title}</strong> <br/>{a.activity_type}
                                        </td>
                                        <td>
                                            {moment(a.start_time).format('LL')}<br />
                                            Between {moment(a.start_time).add(new Date(a.start_time).getTimezoneOffset(), 'm').format('LT')}{' '}
                                            and {moment(a.end_time).add(new Date(a.start_time).getTimezoneOffset(), 'm').format('LT')}
                                        </td>
                                        <td>
                                            {a.volunteers.length}/{a.num_volunteers_needed} volunteers
                                        </td>
                                        {a.activity_type !== 'Occasion' ? 
                                        (<td>{a.est_hours_per_volunteer} hours <br />{Math.round(a.est_minutes_per_volunteer)} minutes</td>) :
                                        (<td>N/A</td>) }                                       
                                        
                                        {a.activity_type !== 'Occasion' && a.actual_hours_per_volunteer !== 0 && a.actual_minutes_per_volunteer !== 0 ?
                                            <td>
                                                {a.actual_hours_per_volunteer} hours <br />{Math.round(a.actual_minutes_per_volunteer)} minutes
                                            </td>
                                            :
                                            a.activity_type !== 'Occasion' ?
                                            (<td>
                                                No volunteers have signed-up
                                            </td>)
                                            :
                                            (<td>
                                                Occasions do not have volunteers
                                            </td>)
                                        }
                                    </tr>
                                ))

                            ) : (
                                <p className='has-text-grey-light' style={noteStyle}>
                                    No activities match this search.
                                </p>
                            )}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
