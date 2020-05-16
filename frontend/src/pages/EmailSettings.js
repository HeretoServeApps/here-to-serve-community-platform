import React from "react"

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'

import SideNavAccount from '../components/sideNavAccount'
import ToggleSwitch from '../components/switch'

import { Link } from 'react-router-dom'
import Button from 'react-bulma-components/lib/components/button'


export default function AccountSettings() {
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '80%',
        padding: '4rem',
    }

    return (
        <Container style={containerStyle}>
            <Heading size={4} style={{margin:'0% 0% 3% 30%',}}>Email Settings</Heading>
            <Columns>
                <Columns.Column style={{ maxWidth:'30%' }}>
                    <SideNavAccount />
                </Columns.Column>

                <Columns.Column>
                <div>
                   <ToggleSwitch/> <a style={{ marginLeft: '1.5rem' }}> </a>
                   Information about Service Upgrades 
                </div>
                <br/>
                <div>
                   <ToggleSwitch/> <a style={{ marginLeft: '1.5rem' }}> </a>
                   Lotsa Community Works Newsletter
                </div>
                 <br/>
                <div>
                   <ToggleSwitch/> <a style={{ marginLeft: '1.5rem' }}> </a>
                   Information about Here To Serve
                </div>
                <br/>
        
                <Link to='/'>
                <Button
                  style={{
                    marginBottom: '1rem',
                    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                    maxWidth:250,

                  }}
                  color='primary'
                  fullwidth={true}
                >
                  SAVE CHANGES
                </Button>
              </Link>
                <Link to='/'>
                  <Button
                    style={{
                      boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                    maxWidth:250,
                    }}
                    fullwidth={true}
                    outlined={true}
                    color='primary'
                  >
                    CANCEL
                  </Button>
                </Link>
                </Columns.Column>
            </Columns>

          
        </Container>
    );
}