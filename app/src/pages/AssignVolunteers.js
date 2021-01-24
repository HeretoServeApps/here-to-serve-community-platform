import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'

import CommunityNavbar from '../components/communityNavbar'
import SideBar from '../components/sidebar'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button'
import {
    Field,
    Control,
    Input,
    Select,
    Label
} from 'react-bulma-components/lib/components/form'
import Notification from 'react-bulma-components/lib/components/notification';

export default function AssignVolunteers(props) {
    var containerStyle = {
        margin: '5% 5%',
        maxWidth: '100%'
    }

    var formContainerStyle = {
        padding: '5%',
        border: '1px solid hsl(0, 0%, 86%)',
        borderRadius: '10px',
    }

    const [fromEmail, _] = useState(localStorage.getItem('email'))
    const [toEmail, setToEmail] = useState('')
    const [taskSubject, setTaskSubject] = useState(`[Here to Serve Community Platform] Helping with ${props.location.state.activity_title} - ${props.location.state.activity_start_date}`)
    const [message, setMessage] = useState(
        `I’m assigning you to help with ${props.location.state.activity_title} on ${props.location.state.activity_start_date}
        from ${props.location.state.activity_start_time} to ${props.location.state.activity_end_time} for ${localStorage.getItem('community-name')} Care Community.`
    )
    const [communityMembers, setCommunityMembers] = useState([])
    const [isAssigning, setIsAssigning] = useState(true)

    useEffect(() => {
        axios
            .get('/community-people/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                params: JSON.stringify({
                    user: localStorage.getItem('email'),
                    community: localStorage.getItem('community-name'),
                }),
            })
            .then(
                (response) => {
                    setCommunityMembers(Array.from(response.data.people))
                    let firstPerson = Array.from(response.data.people)[0]
                    setToEmail(`${firstPerson.first_name} ${firstPerson.last_name} - ${firstPerson.email}`)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    const assignVolunteer = useCallback(() => {
        const param = JSON.stringify({
            activity: props.location.state.activity_id,
            user: toEmail.substring(toEmail.lastIndexOf('-')+1),
            is_email: true,
            message: message,
            subject: taskSubject,
            community_id: localStorage.getItem('community-id'),
            sender_email: fromEmail
        })
        axios.post('/add-volunteer-to-activity/', param, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        })
            .then(
                (_) => {
                    setIsAssigning(false)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [toEmail, fromEmail, message, taskSubject])

    return (
        <div>
            <CommunityNavbar />
            <Container style={containerStyle}>
                <Columns isMultiline={true}>
                    <Columns.Column size={3}>
                        <SideBar />
                    </Columns.Column>
                    <Columns.Column size={9}>
                        <Heading size={4}>Task Assignment</Heading>
                        <Container style={formContainerStyle}> 
                        {!isAssigning &&    
                            <Notification color="primary">
                                An email has been sent to {toEmail} to notify them of this task assignment.
                                <Button remove onClick={() => setIsAssigning(true)}/>
                            </Notification>                
                        }   
                            <Field>
                                <Control>
                                    <Label>
                                        From
                                </Label>
                                    <p>{fromEmail}</p>
                                </Control>
                            </Field>

                            <Field>
                                <Label>To</Label>
                                <Control>
                                    <Select name='to'
                                        value={toEmail}
                                        onChange={(e) => setToEmail(e.target.value)}
                                    >
                                        {communityMembers
                                            .map((person) => (
                                                <option style={{ position: 'static' }} value={person.email}>
                                                    {person.first_name} {person.last_name} - {person.email}
                                                </option>
                                            ))}
                                    </Select>
                                </Control>
                            </Field>

                            <Field>
                                <Control>
                                    <Label>
                                        Subject
                                    </Label>
                                    <Input name='Subject'
                                        value={taskSubject}
                                        onChange={
                                            (e) => setTaskSubject(e.target.value)
                                        }
                                        placeholder={taskSubject} />
                                </Control>
                            </Field>

                            <Field>
                                <Control>
                                    <Label>
                                        Message
                                    </Label>
                                    <input
                                        id='my-file'
                                        type='file'
                                        name='my-file'
                                        style={{ display: 'none' }}
                                    />
                                    <Editor
                                        initialValue={message}
                                        init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace wordcount visualblocks code fullscreen',
                                            'insertdatetime media table contextmenu paste code',
                                        ],
                                        toolbar:
                                            'insertfile undo redo | formatselect | bold italic underline backcolor | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist outdent indent | link | help',
                                        file_browser_callback_types: 'image',
                                        file_picker_callback: function (
                                            callback,
                                            _,
                                            meta
                                        ) {
                                            if (meta.filetype == 'image') {
                                            var input = document.getElementById('my-file')
                                            input.click()
                                            input.onchange = function () {
                                                var file = input.files[0]
                                                var reader = new FileReader()
                                                reader.onload = function (e) {
                                                callback(e.target.result, {
                                                    alt: file.name,
                                                })
                                                }
                                                reader.readAsDataURL(file)
                                            }
                                            }
                                        },
                                            paste_data_images: true,
                                        }}
                                        onEditorChange={(content, _) =>
                                            setMessage(content)
                                        }
                                    />
                                </Control>
                            </Field>
                            <p style={{ fontSize: '80%' }} className='has-text-grey'>
                            Clicking "Send email" will officially assign the person in the "To" section for this task, confirming a commitment to help.
                            </p>
                        </Container>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2%'}}>
                            <Button
                                color='primary'
                                onClick={() => assignVolunteer()}
                            >
                                Send email
                            </Button>
                        </div>
                    </Columns.Column>
                </Columns>
            </Container>
        </div>
    );
    
}

AssignVolunteers.propTypes = {
    activity_id: PropTypes.number.isRequired,
    activity_title: PropTypes.string.isRequired,
    activity_start_date: PropTypes.string.isRequired,
    activity_start_time: PropTypes.string.isRequired,
    activity_end_time: PropTypes.string.isRequired
}
  