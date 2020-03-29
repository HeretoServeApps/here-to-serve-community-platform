import React from 'react'

import {Pane} from 'evergreen-ui'

import { WelcomeHeader } from '../components/Welcome/WelcomeHeader'
import personOne from '../images/welcome-person-1.png'
import personTwo from '../images/welcome-person-2.png'
import img from '../images/welcome-background.png'
import styled, { css } from "styled-components"

const Content = styled.div`
    background-image: url(${img});
    height: 768px;
    width: 1366px;
    position: absolute;
    z-index: -1;
`;

export default function Welcome() {
    var style = {
        position: "absolute",
        right: "19.2%",
        top: "10%"
    };

    var stylePane = {
        position: "absolute",
        top: "50%"
    };

    return(
        <Pane
            style={style}
        >
            <Content/>
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <WelcomeHeader/>
                <img src={personOne} width={280}></img>
                <img src={personTwo} width={310}></img>
            </Pane>
        </Pane>
    );
    
}