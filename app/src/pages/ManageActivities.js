import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Moment from 'moment'
import { Link } from 'react-router-dom'
import { Edit2, Trash2, PlayCircle, PauseCircle } from 'react-feather'
import { extendMoment } from 'moment-range'
import Collapsible from 'react-collapsible'

import { Input, Select, Field, Label, Control } from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
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

    // Date range
    const [startMonth, setStartMonth] = useState(months[new Date().getMonth()])
    const [startDay, setStartDay] = useState(new Date().getDate())
    const [startYear, setStartYear] = useState(new Date().getFullYear() - 1)
    const [endMonth, setEndMonth] = useState(months[new Date().getMonth()])
    const [endDay, setEndDay] = useState(new Date().getDate())
    const [endYear, setEndYear] = useState(new Date().getFullYear() + 1)

    const [activities, setActivities] = useState([])
    const [search, setSearch] = useState('')
    const [selectedActivityType, setSelectedActivityType] = useState('Filter by Activity Type')
    const moment = extendMoment(Moment);

    const [showRemoveModalActivity, setShowRemoveModalActivity] = useState(false)
    const [isDeactivate, setIsDeactivate] = useState(false)
    const [showActivateModal, setShowActivateModal] = useState(false)

    const [selectedActivityId, setSelectedActivityId] = useState(0)
    const [selectedActivityTitle, setSelectedActivityTitle] = useState('')

    const [showRemoveModalTask, setShowremoveModalTask] = useState(false)

    useEffect(() => {
        axios
            .get(`/unique-activities/${localStorage.getItem('community-id')}`, {
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
        setShowRemoveModalActivity(false)
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
                (_, err) => {
                  console.log(err)
                })
              .then(_ => window.location.reload())
    }, [])

    const activateActivity = useCallback((pk) => {
        var url = '/edit-activity/' + pk + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
    
        const param = JSON.stringify({
          'is_active' : true
        })
    
        axios
            .patch(url, param, {
              headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
              },
            })
              .then(
                (_, err) => {
                  console.log(err)
                })
              .then(_ => window.location.reload())
    }, [])

    //toggles popup view for delete and deactivate
    function triggerDeactivateOrDeleteModalActivity(deactivate, id, title) {
        setSelectedActivityId(id)
        setSelectedActivityTitle(title)
        setIsDeactivate(deactivate);
        setShowRemoveModalActivity(true);
    }

    function triggerActivateModal(id, title) {
        setSelectedActivityId(id)
        setSelectedActivityTitle(title)
        setShowActivateModal(true)
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
        .then(_ => window.location.reload())
        .catch(error => console.log('error', error));
    }, [])


    function triggerDeleteModalTask(id, title, time) {
        setSelectedActivityId(id)
        setSelectedActivityTitle(title + ' on ' + time)
        setShowremoveModalTask(true)
    }

    const removeTask = useCallback((pk) => {
        var url = '/edit-task/' + pk + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
    
        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        }
    
        fetch(url, requestOptions)
        .then(response => response.text())
        .then(_ => window.location.reload())
        .catch(error => console.log('error', error));
    }, [])


    const isDateWithinRange = useCallback((date) => {
        // Might need to offset date from UTC to actual timezone
        var dateFormatted = moment(date.substr(0, 10), 'YYYY-MM-DD')
        var startDate = moment(startYear + '-' + monthMap[startMonth] + '-' + startDay, 'YYYY-MM-DD')
        var endDate = moment(endYear + '-' + monthMap[endMonth] + '-' + endDay, 'YYYY-MM-DD')
        var range = moment().range(startDate, endDate)
        return range.contains(dateFormatted)
    }, [startDay, startMonth, startYear, endDay, endMonth, endYear, moment, monthMap])


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
                            <p style={{ fontSize: '80%' }} className='has-text-grey'>
                                Click on the square on the right to view tasks under each activity. Light-colored rows are inactive activities.
                            </p>
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
                                            <Collapsible 
                                                triggerStyle={{ background: a.is_active && '#2c8595' }} 
                                                transitionTime={300} 
                                                trigger={
                                                    <Columns>
                                                        <Columns.Column size={6}>
                                                            {a.title + ' (' + a.activity_type + ') — ' + moment(a.start_time).format('LL') + ' to ' + moment(a.end_time).format('LL')}
                                                        </Columns.Column>
                                                        <Columns.Column size={2}>
                                                            <Link style={{color: 'white'}} to={{ 
                                                                pathname: '/edit-activity/' + a.id,
                                                                state: {
                                                                    primary_key: a.id
                                                                }
                                                            }}>                                                                
                                                                <Edit2 size={12} style={{ marginRight: '10px' }} />
                                                                Edit
                                                            </Link>
                                                        </Columns.Column>
                                                        <Columns.Column size={2}>
                                                            <Link style={{color: 'white'}} onClick={() => triggerDeactivateOrDeleteModalActivity(false, a.id, a.title)}>
                                                                <Trash2 size={12} style={{ marginRight: '10px' }} />
                                                                Delete
                                                            </Link>
                                                        </Columns.Column>
                                                        <Columns.Column size={2}>
                                                            {a.is_active ?
                                                                <Link style={{color: 'white'}} onClick={() => triggerDeactivateOrDeleteModalActivity(true, a.id, a.title)}>
                                                                    <PauseCircle size={12} style={{ marginRight: '10px' }} />
                                                                    Deactivate
                                                                </Link>
                                                                :
                                                                <Link style={{color: 'white'}} onClick={() => triggerActivateModal(a.id, a.title)}>
                                                                    <PlayCircle size={12} style={{ marginRight: '10px' }} />
                                                                    Activate
                                                                </Link>
                                                            }
                                                        </Columns.Column>
                                                    </Columns>
                                                }
                                            >
                                                {a.tasks.map((task) => (
                                                    <div>
                                                        <Columns>
                                                            <Columns.Column size={6}>
                                                                {task.title}
                                                                <p>
                                                                    {moment(task.start_time).format('LL')}{' '}
                                                                    Between {moment(task.start_time).add(new Date(task.start_time).getTimezoneOffset(), 'm').format('LT')}{' '}
                                                                    and {moment(task.end_time).add(new Date(task.start_time).getTimezoneOffset(), 'm').format('LT')}
                                                                </p>
                                                            </Columns.Column>
                                                            <Columns.Column size={2}>
                                                                <Link to={{ 
                                                                    pathname: '/edit-task/' + task.id,
                                                                    state: {
                                                                        primary_key: task.id
                                                                    }
                                                                }}>    
                                                                    <Edit2 size={12} style={{ marginRight: '10px' }} />
                                                                    Edit
                                                                </Link>
                                                            </Columns.Column>
                                                            <Columns.Column size={2}>
                                                                <Link onClick={() => triggerDeleteModalTask(task.id, task.title, moment(task.start_time).format('LL'))}>
                                                                    <Trash2 size={12} style={{ marginRight: '10px' }} />
                                                                    Delete
                                                                </Link>
                                                            </Columns.Column>
                                                        </Columns>
                                                        <hr />
                                                    </div>
                                                ))}
                                            </Collapsible>
                                        )
                                    )
                                ) : (
                                    <p className='has-text-grey-light' style={noteStyle}>
                                        No activities match this search.
                                    </p>
                                )
                            }
                        </Container>
                    </Columns.Column>
                </Columns>
            </Container>
            <Modal
                show={showRemoveModalActivity}
                onClose={() => setShowRemoveModalActivity(false)}
                closeOnBlur={true}
            >
                <Modal.Card>
                    <Modal.Card.Head onClose={() => setShowRemoveModalActivity(false)}>
                    {isDeactivate ? (
                        <Modal.Card.Title>Deactivate "{selectedActivityTitle}"</Modal.Card.Title>
                    ) : (
                        <Modal.Card.Title>Delete "{selectedActivityTitle}"</Modal.Card.Title>
                    )}

                    </Modal.Card.Head>
                    {isDeactivate ? (
                        <Section style={{ backgroundColor: 'white' }}>
                            Are you sure you want to deactivate this activity? This will remove the activity and all associated tasks from the calendar.
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
                    <Button onClick={() => setShowRemoveModalActivity(false)}>Cancel</Button>
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
            <Modal
                show={showActivateModal}
                onClose={() => setShowActivateModal(false)}
                closeOnBlur={true}
            >
                <Modal.Card>
                    <Modal.Card.Head onClose={() => setShowActivateModal(false)}>
                        <Modal.Card.Title>Activate "{selectedActivityTitle}"</Modal.Card.Title>
                    </Modal.Card.Head>
                    <Section style={{ backgroundColor: 'white' }}>
                        Are you sure you want to activate this activity? This will add the activity and all associated tasks back to the calendar.
                    </Section>
                    <Modal.Card.Foot
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    >
                    <Button onClick={() => setShowActivateModal(false)}>Cancel</Button>
                        <Button color='primary' onClick={() => activateActivity(selectedActivityId)}>
                            Activate Activity
                        </Button>
                    </Modal.Card.Foot>
                </Modal.Card>
            </Modal>
            <Modal
                show={showRemoveModalTask}
                onClose={() => setShowremoveModalTask(false)}
                closeOnBlur={true}
            >
                <Modal.Card>
                    <Modal.Card.Head onClose={() => setShowremoveModalTask(false)}>
                        <Modal.Card.Title>Delete "{selectedActivityTitle}"</Modal.Card.Title>
                    </Modal.Card.Head>
                    <Section style={{ backgroundColor: 'white' }}>
                        Are you sure you want to delete this task? You can't undo this action.
                    </Section>
                    <Modal.Card.Foot
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    >
                    <Button onClick={() => setShowremoveModalTask(false)}>Cancel</Button>
                        <Button color='primary' onClick={() => removeTask(selectedActivityId)}>
                            Delete Task
                        </Button>
                    </Modal.Card.Foot>
                </Modal.Card>
            </Modal>
        </div>
    )
}
