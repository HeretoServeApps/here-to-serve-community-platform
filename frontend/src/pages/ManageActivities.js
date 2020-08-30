import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Moment from 'moment'
import { Link } from 'react-router-dom'
import { Edit2, Trash2, CheckCircle, PauseCircle } from 'react-feather'
import { extendMoment } from 'moment-range'

import { Input, Select, Field, Label, Control } from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Table from 'react-bulma-components/lib/components/table'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import Modal from 'react-bulma-components/lib/components/modal'
import Section from 'react-bulma-components/lib/components/section'

import CommunityNavbar from '../components/communityNavbar'
import SideBar from '../components/sidebar'

export default function ManageActivities() {
    // Create styles
    var containerStyle = {
        margin: '5% 5%',
        maxWidth: '100%',
    }

    var formContainerStyle = {
        padding: '5%',
        border: '1px solid hsl(0, 0%, 86%)',
        borderRadius: '10px',
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

    const count = Array.from(Array(51).keys()).slice(1, 51)

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

    const nextMonthMap = {
        'January': 'February',
        'February': 'March',
        'March': 'April',
        'April': 'May',
        'May': 'June',
        'June': 'July',
        'July': 'August',
        'August': 'September',
        'September': 'October',
        'October': 'November',
        'November': 'December',
        'December': 'Janurary',
    }

    // Date range
    const [startMonth, setStartMonth] = useState(months[new Date().getMonth()])
    const [startDay, setStartDay] = useState(new Date().getDate())
    const [startYear, setStartYear] = useState(new Date().getFullYear())
    const [endMonth, setEndMonth] = useState(nextMonthMap[months[new Date().getMonth()]])
    const [endDay, setEndDay] = useState(new Date().getDate())
    const [endYear, setEndYear] = useState(new Date().getFullYear())

    const [activities, setActivities] = useState([])
    const [search, setSearch] = useState('')
    const [selectedActivityType, setSelectedActivityType] = useState('Filter by Activity Type')
    const moment = extendMoment(Moment);

    const [showRemoveModal, setShowRemoveModel] = useState(false)
    const [isDeactivate, setIsDeactivate] = useState(false)

    const [selectedActivityId, setSelectedActivityId] = useState(0)
    const [selectedActivityTitle, setSelectedActivityTitle] = useState('')

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

    const deactivateActivity = useCallback((pk) => {
        setIsDeactivate(false)
        setShowRemoveModel(false)
        var url = '/edit-activity/' + pk + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
    
        const param = JSON.stringify({
          'is_active' : false
        })
    
        axios
            .patch(url, param, {
              headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
              },
            })
              .then(
                (response, err) => {
                  console.log(err)
                })
              .then(result => window.location.reload())
    })

    //toggles popup view for delete and deactivate
    function deactivate(deactivate, id, title) {
        setSelectedActivityId(id)
        setSelectedActivityTitle(title)
        setIsDeactivate(deactivate);
        setShowRemoveModel(true);
    }

    const removeActivity = useCallback((pk) => {
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
    })
    

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
                <Columns isMultiline={true}>
                    <Columns.Column size={3}>
                        <SideBar />
                    </Columns.Column>
                    <Columns.Column size={9}>
                        <Heading size={4}>Manage Activities</Heading>
                        <Container style={formContainerStyle}>
                            <Columns>
                                <Columns.Column size={8}>
                                    <Input
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder='Search activities by name'
                                        style={{ marginBottom: '3%' }}
                                    />
                                </Columns.Column>
                                <Columns.Column size={4}>
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
                            <Columns style={{ marginTop: '-3%', marginBottom: '3%' }}>
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

                            <Table>
                                <thead>
                                    <tr>
                                        <th>Activity</th>
                                        <th>Time</th>
                                        <th>Options</th>
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
                                                    <div>
                                                    <tr key={a.id}>
                                                        <td style={{width: '15%'}}>
                                                            <strong>{a.title}</strong>
                                                            <br />
                                                            {a.activity_type}
                                                        </td>
                                                        <td style={{width: '15%'}}>
                                                            {moment(a.start_time).format('LL')}<br />
                                                            Between {moment(a.start_time).add(new Date(a.start_time).getTimezoneOffset(), 'm').format('LT')}{' '}
                                                            and {moment(a.end_time).add(new Date(a.start_time).getTimezoneOffset(), 'm').format('LT')}
                                                        </td>
                                                        <td style={{width: '20%'}}>
                                                            <Columns>
                                                                <Columns.Column size={3}>
                                                                    <Link to={'/edit-activity/' + a.title}>
                                                                        <Button
                                                                            style={{
                                                                            boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                                                            }}
                                                                            color='primary'
                                                                            onClick={() => localStorage.setItem('activity-id', a.id)}
                                                                        >
                                                                            <Edit2 size={12} style={{ marginRight: '10px' }} />
                                                                            Edit
                                                                        </Button>
                                                                    </Link>
                                                                </Columns.Column>
                                                                
                                                                <Columns.Column size={4}>
                                                                    <Button
                                                                        style={{
                                                                            boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                                                        }}
                                                                        color='danger'
                                                                        onClick={() => deactivate(false, a.id, a.title)}
                                                                    >
                                                                        <Trash2 size={12} style={{ marginRight: '10px' }} />
                                                                        Delete
                                                                    </Button>
                                                                </Columns.Column>
                                                                <Columns.Column size={5}>
                                                                    {a.is_active ? 
                                                                        <Button
                                                                            className='is-primary is-inverted'
                                                                            style={{
                                                                                boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                                                            }}
                                                                            onClick={() => deactivate(true, a.id, a.title)}
                                                                        >
                                                                            <div>
                                                                            <PauseCircle
                                                                                size={12}
                                                                                style={{ marginRight: '5px' }}
                                                                            />
                                                                            Deactivate
                                                                            </div>
                                                                        </Button>
                                                                        :
                                                                        <Button
                                                                            className='is-primary is-inverted'
                                                                            style={{
                                                                            boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                                                            }}
                                                                        >
                                                                            <CheckCircle size={12} style={{ marginRight: '10px' }} />
                                                                            Activate
                                                                        </Button>
                                                                    }
                                                                </Columns.Column>
                                                            </Columns>
                                                        </td>
                                                    </tr>
                                                    <Modal
                                                        show={showRemoveModal}
                                                        onClose={() => setShowRemoveModel(false)}
                                                        closeOnBlur={true}
                                                    >
                                                        <Modal.Card>
                                                            <Modal.Card.Head onClose={() => setShowRemoveModel(false)}>
                                                            {isDeactivate ? (
                                                                <Modal.Card.Title>Deactivate "{selectedActivityTitle}"</Modal.Card.Title>
                                                            ) : (
                                                                <Modal.Card.Title>Delete "{selectedActivityTitle}"</Modal.Card.Title>
                                                            )}

                                                            </Modal.Card.Head>
                                                            {isDeactivate ? (
                                                                <Section style={{ backgroundColor: 'white' }}>
                                                                    Are you sure you want to deactivate this activity?
                                                                </Section>
                                                            ) : (
                                                                <Section style={{ backgroundColor: 'white' }}>
                                                                    Are you sure you want to delete this activity? You can't undo this action.
                                                                </Section>
                                                            )}

                                                            <Modal.Card.Foot
                                                            style={{
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                            }}
                                                            >
                                                            <Button onClick={() => setShowRemoveModel(false)}>Cancel</Button>
                                                            {isDeactivate ? (
                                                                <Button color='primary' onClick={() => deactivateActivity(selectedActivityId)}>
                                                                    Deactivate Activity
                                                                </Button>
                                                            ) : (
                                                                <Button color='primary' onClick={() => removeActivity(selectedActivityId)}>
                                                                    Delete Activity
                                                                </Button>
                                                            )}
                                                            </Modal.Card.Foot>
                                                        </Modal.Card>
                                                    </Modal>
                                                    
                                                </div>
                                            ))
                                        ) : (
                                            <p className='has-text-grey-light' style={noteStyle}>
                                                No activities match this search.
                                            </p>
                                        )}
                                </tbody>
                            </Table>
                        </Container>
                    </Columns.Column>
                </Columns>
            </Container>
        </div>
    )
}
