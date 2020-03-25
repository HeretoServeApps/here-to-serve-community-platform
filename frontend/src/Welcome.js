import React from 'react'

import { Header } from './components/Header'
import { WelcomeText } from './components/WelcomeText'
import personOne from './images/welcome-person-1.png'
import personTwo from './images/welcome-person-2.png'


export class Welcome extends React.Component {
    render() {
        return(<div>
            <Header/>
            <WelcomeText/>
        </div>)
    }
}