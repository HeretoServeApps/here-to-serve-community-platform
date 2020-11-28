import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import { Link } from 'react-router-dom'

import {
    Control,
    Label,
    Field,
    Input,
} from 'react-bulma-components/lib/components/form'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'

import CommunityNavbar from '../components/communityNavbar'


export default function CommunityAddMembers() {
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '800px',
        maxHeight: '1000px',
        padding: '4rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem'
    }

    const [inputEmail, setInputEmail] = useState('')
    const [allEmails, setAllEmails] = useState([])
    const [firstName, setFirstName] = useState('') // User sending the email
    const [lastName, setLastName] = useState('') // User sending the email
    const [success, setSuccess] = useState(false)

    const addEmail = useCallback((email) => {
        setAllEmails(allEmails.concat(email))
        setInputEmail('')
    })

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetch('/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    setFirstName(json.first_name)
                    setLastName(json.last_name)
                })
        }
    }, [])

    let history = useHistory()
    const sendEmail = useCallback((fromEmail, toEmails, community, sender) => {
        setSuccess(true)
        fetch('/invite-members/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ 
                from_email: fromEmail,
                to_emails: toEmails,
                community: community,
                sender: sender
            }),
        })
            .then((res) => res.json())
            .then((_) => { setSuccess(true) },
            (error) => {
                console.log(error)
            }) 
    }, [])

    if(success) {
        return (
            <div>
                <CommunityNavbar />
                <Container style={containerStyle}>
                    An email has been sent to the addresses you provided. 
                    <br />
                    <Button
                        className='is-primary is-inverted'
                        style={{
                            marginTop: '3%',
                            boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                        }}
                        onClick={() => setSuccess(false)}
                    >
                        Back
                    </Button> 
                </Container>
            </div>
        )
    }

    return (
        <div>
            <CommunityNavbar />
            <Container style={containerStyle}>
                <Heading size={4}>Invite Members</Heading>
                <strong>Send from:</strong> {localStorage.getItem('email')}

                <Field>
                    <Label>Send to:</Label>
                    <Control>
                        <Columns>
                            <Columns.Column size={10}>
                                <Input
                                    value={inputEmail}
                                    onChange={e => setInputEmail(e.target.value)}
                                    placeholder='Enter email address to send invites to your community.'
                                />
                            </Columns.Column>
                            <Columns.Column>
                                <Button
                                    style={{ marginBottom: '1rem' }}
                                    color='primary'
                                    onClick={() => addEmail(inputEmail)}
                                >
                                    Add
                            </Button>
                            </Columns.Column>
                        </Columns>
                    </Control>
                </Field>

                <ul>
                    {allEmails.map(e => (
                        <li key={e}>{e}</li>
                    ))}
                </ul>

                <br />
                <strong>Subject:</strong> [Here to Serve] Join {localStorage.getItem('community-name')}'s Care Community
                <br />
                <br />
                <strong>Message:</strong> You have been invited to join {localStorage.getItem('community-name')}'s online care community. Please click  
                <Link to='/register'> here</Link> to join, receive updates, as well as support the family.

                <Columns style={{marginTop: '5%'}}>
                    <Columns.Column>
                        <Link to='/community-people'>
                            <Button
                                className='is-primary is-inverted'
                                style={{
                                    marginBottom: '1rem',
                                    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                }}
                                fullwidth={true}
                            >
                                Cancel
                            </Button>
                        </Link>
                    </Columns.Column>
                    <Columns.Column>
                        <Button
                            color='primary'
                            style={{
                                marginBottom: '1rem',
                                boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                            }}
                            fullwidth={true}
                            onClick={() => 
                                sendEmail(
                                    localStorage.getItem('email'),
                                    allEmails,
                                    localStorage.getItem('community-name'),
                                    firstName + ' ' + lastName,
                                )
                            }
                        >
                            Send Invite
                        </Button>
                    </Columns.Column>
                </Columns>


            </Container>
        </div >
    )
}