import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Heading from 'react-bulma-components/lib/components/heading'
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button'
import Columns from 'react-bulma-components/lib/components/columns'

import CommunityNavbar from '../components/communityNavbar'

export default function CommunityOneMember(props) {
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '500px',
        maxHeight: '1000px',
        padding: '2rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem'
    }


    return (
        <div>
            <CommunityNavbar />
            <Card style={containerStyle}>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>{props.location.state.name}</Heading>
                            <Heading subtitle size={6}>{props.location.state.role}</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        <p>
                            Phone Number: {props.location.state.email}
                            <br />
                            Email: {props.location.state.phone}
                        </p>
                    </Content>
                </Card.Content>
                <Columns>
                    <Columns.Column size={6}>
                        <Button
                            style={{
                                marginBottom: '1rem',
                                boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                            }}
                            color='primary'
                            fullwidth={true}
                        >
                            Edit Profile
                        </Button>
                    </Columns.Column>
                    <Columns.Column size={6}>
                        <Button
                            style={{
                                marginBottom: '1rem',
                                boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                fullWidth: 'true'
                            }}
                            color='danger'
                            fullwidth={true}
                        >
                            Remove User
                        </Button>                       
                    </Columns.Column>
                </Columns>
            </Card>
        </div>
    )
}

CommunityOneMember.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

