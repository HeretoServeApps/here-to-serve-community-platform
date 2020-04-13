import React, { useState, useEffect } from "react"
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';

import { Field, Input, Control } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading'
import Notification from 'react-bulma-components/lib/components/notification';

import CheckboxField from '../components/checkboxfield'


export default function Login(props) {    
    // Non-bulma styles
    var containerStyle = {
        margin: '5% auto',
        maxWidth: "400px",
        padding: "4rem",
        border: "0.1rem solid #E5E5E5",
        borderRadius: "1rem",
    }
    var notifStyle = {
        backgroundColor: "white",
        padding: ".25rem .5rem .25rem .5rem"
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()
    useEffect(() => {
        if(props.logged_in) {
            history.push('/my-communities')
        }
    
    })
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
            <Button style={{marginBottom: "1rem"}} color="primary" fullwidth={true} onClick={() => props.handle_login(email, password)}>LOGIN</Button>
            <Notification style={notifStyle}>
                <a href="#">Forgot Password?</a> or <Link to='/register'>Create Account</Link>
            </Notification>
        </Container>       
    )
}

Login.propTypes = {
    handle_login: PropTypes.func.isRequired,
    logged_in: PropTypes.bool.isRequired
};