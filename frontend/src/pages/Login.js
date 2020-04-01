import React from "react"

import { Field, Input, Checkbox, Control } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns';
import Notification from 'react-bulma-components/lib/components/notification';

export default function Login() {
    // Non-bulma styles
    var containerStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%",
        maxWidth: "400px",
        padding: "4rem",
        border: "0.1rem solid #E5E5E5",
        borderRadius: "1rem",
    };
    var checkBoxStyle= {
        marginRight: "1rem",
    };
    var notifStyle = {
        backgroundColor: "white",
        padding: ".25rem .5rem .25rem .5rem"
    };
    return (
        <Container style={containerStyle}>
                <Heading size={4}>Log in to Here to Serve</Heading>
                <Field>
                    <Control>
                        <Input name="email" type="email" placeholder="Email Address" />
                    </Control>                
                </Field>

                <Field>
                    <Input type="password" placeholder="Password"/>
                </Field>

                <Field>
                    <Columns>
                        <Columns.Column size={1}>
                            <Checkbox/>
                        </Columns.Column>
                        <Columns.Column>
                            Remember me
                        </Columns.Column>
                    </Columns>
                </Field>
                <Button style={{marginBottom: "1rem"}} color="primary" fullwidth={true}>LOGIN</Button>
                <Notification style={notifStyle}>
                    <a href="#">Forgot Password?</a> or <a href="#">Create Account</a>
                </Notification>
        </Container>        
    )
}