// import React from "react"
import React, {useState} from 'react'
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

export default function AssignVolunteers() {
    var containerStyle = {
        margin: '5% 5%',
        maxWidth: '100%'
    }

    const [taskFrom, setTaskFrom] = useState('')
    const [taskTo, setTaskTo] = useState('')
    const [taskSubject, setTaskSubject] = useState('')
    const [taskMessage, setTaskMessage] = useState('')
    return (
        <div>
            <CommunityNavbar/>
            <Container style={containerStyle}>
                <Columns isMultiline={true}>
                    <Columns.Column size={3}>
                        <SideBar/>
                    </Columns.Column>
                    <Columns.Column size={9}>
                        <Columns>
                            <Columns.Column size={9}>
                                <Heading size={4}>Task Assignment</Heading>
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <Button className='is-fullwidth' color='primary'>
                                    Assign
                                </Button>
                            </Columns.Column>
                        </Columns>
                        <Field>
                            <Control>
                                <Label>
                                    From
                                </Label>
                                <p>test@gmail.com</p>
                            </Control>
                        </Field>

                        <Field>
                            <Label>To</Label>
                            <Control>
                                <Select name='To'
                                    value={taskTo}
                                    onChange={
                                        (e) => setTaskTo(e.target.value)
                                    }
                                    placeholder={taskTo}></Select>
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
                                    placeholder={taskSubject}/>
                            </Control>
                        </Field>

                        <Field>
                            <Control>
                                <Label>
                                    Message
                                </Label>
                                <Input name='Message'
                                    value={taskMessage}
                                    onChange={
                                        (e) => setTaskMessage(e.target.value)
                                    }
                                    placeholder={taskMessage}/>
                            </Control>
                        </Field>
                        <Columns>
                            <Columns.Column size={1}>
                                <Button className='is-primary is-inverted'
                                    // onClick={() => goBackToCalendar()}
                                    style={
                                        {
                                            display: 'block',
                                            marginTop: '0%'
                                        }
                                }>
                                    Cancel
                                </Button>
                            </Columns.Column>
                            <Columns.Column size={2}>
                                <Button color='primary'>
                                    Send Email
                                </Button>
                            </Columns.Column>
                        </Columns>
                    </Columns.Column>
                </Columns>
            </Container>
        </div>
    );
}
