import React, { useState } from "react"

import { Field, Input, Checkbox, Control } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns';
import Notification from 'react-bulma-components/lib/components/notification';

import CheckboxField from '../components/checkboxfield'

export default function Login() {
    // Non-bulma styles
    var containerStyle = {
        margin: '5% auto',
        maxWidth: "400px",
        padding: "4rem",
        border: "0.1rem solid #E5E5E5",
        borderRadius: "1rem",
    };
    var notifStyle = {
        backgroundColor: "white",
        padding: ".25rem .5rem .25rem .5rem"
    };
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Container style={containerStyle}>
                <Heading size={4}>Log in to Here to Serve</Heading>
                <Field>
                    <Control>
                        <Input value={email} type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)}/>
                    </Control>                
                </Field>

                <Field>
                    <Input value ={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Field>
                <Field>
                    <CheckboxField text={"Remember me"}/>
                </Field>
                <Button style={{marginBottom: "1rem"}} color="primary" fullwidth={true}>LOGIN</Button>
                <Notification style={notifStyle}>
                    <a href="#">Forgot Password?</a> or <a href="#">Create Account</a>
                </Notification>
        </Container>        
    )
}