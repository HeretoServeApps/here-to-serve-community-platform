import React from "react"
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import SideNavCommunity from '../components/sideNavCommunity'
import CommunityHomeCard from '../components/communityHomeCard'
import Button from 'react-bulma-components/lib/components/button';

export default function CommunityHome() {
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '80%',
        padding: '4rem',
    }

    return (
        <Container style={containerStyle}>
            <Columns style={{width: '70%', margin: '0% 0% 1% 14%'}}> 
                <Columns.Column size={11}>
                    <Heading size={4} style={{margin:'0% 0% 3% 30%'}}>Community Name</Heading>
                </Columns.Column>
                <Columns.Column size={1}>
                    <div style={{ display: 'flex' }}>
                        <Button color='primary' style={{ marginRight: '10px' }}>
                            <Link to='#' style={{ color: 'white' }}>
                                Edit
                            </Link>
                        </Button>
                        <Button color='primary' style={{ marginRight: '10px' }}>
                            <Link to='#' style={{ color: 'white' }}>
                                Add
                            </Link>
                        </Button>
                    </div>
                </Columns.Column>
            </Columns>
            <Columns isMultiline={true}>
                <Columns.Column size={4}>
                    <SideNavCommunity />
                </Columns.Column>
                <Columns.Column size={7}>
                    <Columns isMultiline={true}>
                        <Columns.Column size={6}>
                            <CommunityHomeCard title="Donate" link='#'/>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <CommunityHomeCard title="Custom Link 1" link='#'/>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <CommunityHomeCard title="Custom Link 2" link='#'/>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <CommunityHomeCard title="Custom Link 3" link='#'/>
                        </Columns.Column>
                    </Columns>
                </Columns.Column>
            </Columns>
        </Container>
    );
}