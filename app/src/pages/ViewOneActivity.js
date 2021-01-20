import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import '../index.css'
import 'react-big-calendar/lib/sass/styles.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'

import CommunityNavbar from '../components/communityNavbar'
import { UserPlus, Edit } from 'react-feather'

export default function ViewOneActivity(props) {
    var eventContainerStyle = {
        margin: '5% auto',
        maxWidth: '870px',
        maxHeight: '1000px',
        padding: '4rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem',
    }
    
    const [activity, setActivity] = useState({})
    const [activityVolunteers, setActivityVolunteers] = useState([])
    const [activityCoordinators, setActivityCoordinators] = useState([])

    useEffect(() => {
        axios
            .get(`/edit-activity/${props.location.state.primary_key}/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
            })
            .then(
                (response) => {
                    setActivity(response.data)
                    setActivityVolunteers(response.data.volunteers)
                    setActivityCoordinators(response.data.coordinators)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    const signUpToVolunteer = useCallback(() => {
        const param = JSON.stringify({
            activity: activity.id,
            user: localStorage.getItem('email'),
        })

        axios.post('/add-volunteer-to-activity/', param, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        })
        .then(
            (_) => {
                window.location.reload()
            },
            (error) => {
                console.log(error)
            }
        )
    }, [activity])

    return (
        <div>
            <CommunityNavbar />
            <Container style={eventContainerStyle}>
                <Columns>
                    <Columns.Column size={9}>
                        <Heading size={4}>{activity.activity_type}: {activity.title}</Heading>
                        <Link to={{ 
                            pathname: '/edit-activity/' + props.location.state.primary_key,
                            state: {
                                primary_key: props.location.state.primary_key
                            }
                        }}>
                            {activity.activity_type === 'Occasion' ? 
                                <div><Edit size={12} style={{ marginRight: '10px' }} />Edit this event</div> 
                                : 
                                <div><Edit size={12} style={{ marginRight: '10px' }} />Edit this activity</div>
                            }
                        </Link>
                    </Columns.Column>
                    <Columns.Column size={3}>
                        {localStorage.getItem('user-role') !== 'Administrator' ?
                            <Button
                                style={{
                                    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                }}
                                fullwidth={true}
                                color='primary'
                                onClick={() => signUpToVolunteer()}
                            >
                                <UserPlus size={12} style={{ marginRight: '10px' }} />
                                Sign-up
                            </Button>
                            :
                            <Link to='/assign-volunteers' style={{ color: 'white' }}>
                                <Button
                                    style={{
                                        boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                    }}
                                    fullwidth={true}
                                    color='primary'
                                >
                                    <UserPlus size={12} style={{ marginRight: '10px' }} />
                                    Assign
                                </Button>
                            </Link>
                        }
                    </Columns.Column>
                </Columns>
                <p>
                    <b>Date</b>: {moment(activity.start_time).format('LL')}
                    <br />
                    <b>Time</b>: 
                    Between {moment(activity.start_time).add(new Date(activity.start_time).getTimezoneOffset(), 'm').format('LT')}{' '}
                    and {moment(activity.end_time).add(new Date(activity.end_time).getTimezoneOffset(), 'm').format('LT')}

                    {/* Show location */}
                    {activity.activity_type === 'Giving Rides' ? (
                        <div>
                            <b>Pickup Location: </b>{' '}
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={
                                    'https://maps.google.com/?q=' + activity.pickup_location
                                }
                            >
                                {activity.pickup_location}
                            </a>
                            <br />
                            <b>Destination: </b>{' '}
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={
                                    'https://maps.google.com/?q=' +
                                    activity.destination_location
                                }
                            >
                                {activity.destination_location}
                            </a>
                        </div>
                    ) : activity.activity_type === 'Preparing Meals' ? (
                        <div>
                            <b>Delivery Location: </b>{' '}
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={
                                    'https://maps.google.com/?q=' +
                                    activity.delivery_location
                                }
                            >
                                {activity.delivery_location}
                            </a>
                        </div>
                    ) : (
                        <div>
                            <b>Location: </b>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={'https://maps.google.com/?q=' + activity.location}
                            >
                                {activity.location}
                            </a>{' '}
                        </div>
                    )}
                    {/* Show dietary restrictions for meal activities */}
                    {activity.activity_type === 'Preparing Meals' && (
                        <div>
                            <b>Dietary Restrictions: </b>{' '}
                            <ul>
                                {activity.dietary_restrictions.map((r) => (
                                    <li>- {r}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* Volunteer information */}
                    {activity.activity_type !== 'Occasion' && 
                        <div>
                            <b>Volunteers Needed:</b> {activity.num_volunteers_needed - activityVolunteers.length} out of {activity.num_volunteers_needed} 
                            <br />
                            <br />
                        </div>   
                    }
                    
                    <b>Notes:</b>
                    <br />
                    {activity.description}    
                    <br />
                    <br />
                    {activity.activity_type !== 'Occasion' && (
                        <div>
                            <b>Volunteers:</b>{' '}
                            {activityVolunteers.length === 0 ? (
                                'No volunteers has signed up.'
                            ) : (
                                <ul>
                                {activityVolunteers.map((person) => (
                                    <li>
                                    {person.first_name} {person.last_name}: {person.email}
                                    </li>
                                ))}
                                </ul>
                            )}
                            <br />
                            <b>Coordinators:</b>
                            <ul>
                                {activityCoordinators.map((person) => (
                                <li>
                                    {person.first_name} {person.last_name}: {person.phone_number_1}
                                </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </p>
                <br />
                <Link to={{ 
                    pathname: '/edit-task/' + activity.id,
                    state: {
                        primary_key: activity.id
                    }
                }}>
                    <Edit size={12} style={{ marginRight: '10px' }} />
                    Edit this task
                </Link>
            </Container>
        </div>
    )
}

ViewOneActivity.propTypes = {
    primary_key: PropTypes.number.isRequired,
}
  
