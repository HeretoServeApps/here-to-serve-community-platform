import React from 'react'

import { Header } from './components/Header'
import { WelcomeHeader } from './components/Welcome/WelcomeHeader'
import personOne from './images/welcome-person-1.png'
import personTwo from './images/welcome-person-2.png'
import WelcomeText from './components/Welcome/WelcomeText'


export class Welcome extends React.Component {
    render() {
        return(<div>
            <Header/>
            <WelcomeHeader/>
            <img src={personOne} width={280}></img>
            <img src={personTwo} width={310}></img>
            <WelcomeText></WelcomeText>
        </div>)
    }
}