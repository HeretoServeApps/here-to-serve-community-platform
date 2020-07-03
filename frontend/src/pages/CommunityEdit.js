import React from 'react'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'

import SideBar from '../components/sidebar'
import CommunityNavbar from '../components/communityNavbar'

export default function CommunityEdit() {
    var containerStyle = {
        margin: '5% 5%',
        maxWidth: '100%',
    }

    return (
        <div>
            <CommunityNavbar />
            <Container style={containerStyle}>
                <Columns isMultiline={true}>
                    <Columns.Column size={3}>
                        <SideBar />
                    </Columns.Column>
                    <Columns.Column size={9}>
                    </Columns.Column>
                </Columns>
            </Container>
        </div>

    )
}