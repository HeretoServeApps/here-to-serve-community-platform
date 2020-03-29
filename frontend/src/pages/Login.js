import React from "react"

import { Field, Input, Checkbox } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading'

export default function Login() {
    // Non-bulma styles
    var style = {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%",
        maxWidth: "400px",
        padding: "4rem",
        border: "0.1rem solid #E5E5E5",
        borderRadius: "1rem",
    };
    return (
        <Container style={style}>
                <Heading size={4}>Log in to Here to Serve</Heading>
                <Field>
                    <Input name="email" type="email" placeholder="Email Address"/>
                </Field>

                <Field>
                    <Input type="password" placeholder="Password"/>
                </Field>

                <Field>
                    <Checkbox>
                        Remember me
                    </Checkbox>
                </Field>
                <Button style={{marginBottom: "1rem"}} color="primary" fullwidth={true}>LOGIN</Button>
                <p><a href="#">Forgot Password?</a> or <a href="#">Create Account</a></p>
        </Container>
        // <Pane 
        //     style={style}
        //     borderRadius={10}
        //     padding={50} 
        //     height={350} 
        //     width={400} 
        //     border="default" 
        //     display="flex"
        //     flexDirection= "column"
        //     alignItems="center"
        //     justifyContent="center">
        //         <Heading size={700} marginBottom={20} fontWeight={700}>Log in to Here to Serve</Heading>
        //         <TextInput
        //             placeholder="Email address" marginBottom={20}
        //         />
        //         <TextInput
        //             placeholder="Password"
        //         />
        //         <Checkbox marginRight={180} label="Remember me" />
        //         <LoginButton><Text color={"white"}>LOGIN</Text></LoginButton>
        //         <Text> Forgot password? or Create Account</Text>
        // </Pane>
        
    )
}