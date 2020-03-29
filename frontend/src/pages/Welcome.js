import React from 'react'

import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button';
import styled from "styled-components"

import personOne from '../images/welcome-person-1.png'
import personTwo from '../images/welcome-person-2.png'
import img from '../images/welcome-background.png'

const Background = styled.div`
    background-image: url(${img});
    height: 768px;
    width: 1366px;
    position: absolute;
    z-index: -1;
`;

const HighLight = styled.h1`
    color: #2C8595;
    font-weight: 600;
`;

export default function Welcome() {
    var outterContainerStyle = {
        marginRight: "1%",
        marginTop: "-2%"
    };
    var innerContainerStyle = {
        position: "absolute",
        marginLeft: "45%",
        marginTop: "5%"
    };
    var headerContainerStyle = {
        position: "absolute",
        marginLeft: "17%",
        marginTop: "10%"
    }
    return(
        <Container style={outterContainerStyle}>
            <Background/>
            <Container style={headerContainerStyle}>
                <Heading size={2}>Start your <HighLight>care community</HighLight> today.</Heading>
                <Button style={{marginBottom: "1rem"}} color="primary" fullwidth={true}>REGISTER TODAY</Button>
                <Button fullwidth={true} outlined={true} color="primary">LOGIN</Button>
            </Container>
            <Container style={innerContainerStyle}>
                <img src={personOne} width={280} alt="person one"></img>
                <img src={personTwo} width={310} alt="person two"></img>
            </Container>
        </Container>
    );
}