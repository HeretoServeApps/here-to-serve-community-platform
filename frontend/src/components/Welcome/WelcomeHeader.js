import React from 'react'
import { Button } from 'evergreen-ui'
import logo from './../../images/logo-h2s.svg'

const welcomeText = {
    marginTop: '200px',
    marginLeft: '100px',
    width: '400px'
}

// rn everything is styled individually, need to abstract it later
const button = {
    width: '242px',
    height: '45px',
    textAlign: 'center',
    marginBottom: '16px'
}


export class WelcomeHeader extends React.Component {
    render() {
        return(<div style={welcomeText}>
            <h1 style={{fontSize: '40px'}}>Start your <span style={{color: '#2C8595'}}>care community</span> today.</h1>
            <Button justifyContent='center' width={242} height={45} marginBottom={16} marginTop={30}>Register Today</Button><br></br>
            <Button justifyContent='center' width={242} height={45}>Login</Button> 
        </div>
        )
    }
}

export default WelcomeHeader