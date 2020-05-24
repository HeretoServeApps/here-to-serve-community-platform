import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import axios from 'axios'

export default function CustomSections() {
    const [sections, setSections] = useState([])
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '300px',
        padding: '1rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem'
    }

    useEffect(() => {
        axios
            .get('/community-custom-sections/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
                params: {
                    name: localStorage.getItem('community-name'),
                },
            })
            .then(
                (response) => {
                    setSections(response.data)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])


    return (
        <div style={{marginTop: '10%'}}>
            <strong>Custom Sections</strong>
            <Container style={containerStyle}>
                <ul>
                {sections.map((section) => (
                    <li><a href={section.link}>{section.name}</a></li>
                ))}
                </ul>
            </Container>
        </div>
    )
}
