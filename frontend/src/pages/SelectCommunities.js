import React, { useState, useEffect } from "react"
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import CheckboxField from '../components/checkboxfield'
import Button from 'react-bulma-components/lib/components/button'
import Table from 'react-bulma-components/lib/components/table'

import CheckboxTermofUse from '../components/checkboxTermofUse'


const createCommunityEntries = (communities) => {
    communities.map(c => {
        return <tr>
            <td>{c.name}</td>
            <td>Checkbox</td>
        </tr>
    });
}

export default function SelectCommunities() {
    // Non-bulma styles
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '800px',
        maxHeight: '1000px',
        padding: '4rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem'
    }    

    const [communities, setCommunities] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:8000/community/', {
    //         headers: {
    //             headers: {
    //                 Authorization: 'Bearer' + localStorage.getItem('token')
    //             }
    //         }
    //     })
    //     .then((response) => {
    //         console.log(response.data)
    //     }, (error) => {
    //         console.log(error)
    //     });
    // }, [])

    useEffect(() => {
        fetch('/community/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
    }, [])

    // useEffect(() => {
    //     console.log(localStorage.getItem('token'))
    //     axios.get('/community', {
    //         headers: {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`,
    //             }
    //         }
    //     })
    //     .then((response) => {
    //         console.log(response.data)
    //         setCommunities(response.data)
    //     }, (error) => {
    //         console.log(error)
    //     })
    // }, [])
    
    // return(
    //     <div>
    //     <h1>Here to Serve</h1>
    //     <p>List of Communities:</p>
    //     {communities.map(c => (
    //       <li>{c.name}</li>
    //     ))}
    //   </div>
    // )
    
    
    return(
        <Container style={containerStyle}>
            <Heading size={4}>Join Communities</Heading>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Join</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fake Community 1</td>
                        <td><CheckboxField text={''}/></td>
                    </tr>
                    <tr>
                        <td>Fake Community 2</td>
                        <td><CheckboxField text={''}/></td>
                    </tr>
                    <tr>
                        <td>Fake Community 3</td>
                        <td><CheckboxField text={''}/></td>
                    </tr>
                    <tr>
                        <td>Fake Community 4</td>
                        <td><CheckboxField text={''}/></td>
                    </tr>
                    <tr>
                        <td>Fake Community 5</td>
                        <td><CheckboxField text={''}/></td>
                    </tr>
                    <tr>
                        <td>Fake Community 6</td>
                        <td><CheckboxField text={''}/></td>
                    </tr>
                    <tr>
                        <td>Fake Community 7</td>
                        <td><CheckboxField text={''}/></td>
                    </tr>
                    <tr>
                        <td>Fake Community 8</td>
                        <td><CheckboxField text={''}/></td>
                    </tr>
                </tbody>
            </Table>
            <Link to='/my-communities'>
                <Button style={{ marginTop: '1rem', marginBottom: '1rem' }} color='primary' fullwidth={true}>
                    DONE
                </Button>
            </Link>
        </Container>
            
    )
}