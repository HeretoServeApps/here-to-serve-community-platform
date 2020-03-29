import React from "react"

import { Pane, Checkbox, TextInput, Heading, Button, Text } from "evergreen-ui";

import styled, { css } from "styled-components"

const LoginButton = styled.button`
background: #2C8595;
border-radius: 5px;
margin: 1em 1em;
padding: 0.50em 1em;
width: 95%;

${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};
`

export default function Login() {
    // Non-evergreen styles
    var style = {
        position: "absolute",
        left: "35%",
        top: "25%"
    };
    return (
        <Pane 
            style={style}
            borderRadius={10}
            padding={50} 
            height={350} 
            width={400} 
            border="default" 
            display="flex"
            flexDirection= "column"
            alignItems="center"
            justifyContent="center">
                <Heading size={700} marginBottom={20} fontWeight={700}>Log in to Here to Serve</Heading>
                <TextInput
                    placeholder="Email address" marginBottom={20}
                />
                <TextInput
                    placeholder="Password"
                />
                <Checkbox marginRight={180} label="Remember me" />
                <LoginButton><Text color={"white"}>LOGIN</Text></LoginButton>
                <Text> Forgot password? or Create Account</Text>
        </Pane>
    )
}