import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import CommunityNavbar from '../components/communityNavbar'

export default function ActivityEdit(props) {
    var eventContainerStyle = {
        margin: '5% auto',
        maxWidth: '870px',
        maxHeight: '1000px',
        padding: '4rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem',
    }
    
    useEffect(() => {
        axios
            .get('/one-activity/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
                params: {
                    pk: props.location.state.pk
                },
            })
            .then(
                (response) => {
                    console.log(response.data)
                },
                (error) => {
                    console.log(error)
                }
            )
    })

    return (
        <div>
            <CommunityNavbar />
            <Container style={eventContainerStyle}>
                <Heading size={4}>Here</Heading>
            </Container>
        </div>
    )
}

ActivityEdit.propTypes = {
    pk: PropTypes.number
}