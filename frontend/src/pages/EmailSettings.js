import React from "react"

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'

import SideNavAccount from '../components/sideNavAccount'

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
                    Ivan is making this thanks Ivan.
                </Columns.Column>
            </Columns>
        </Container>
    );
}