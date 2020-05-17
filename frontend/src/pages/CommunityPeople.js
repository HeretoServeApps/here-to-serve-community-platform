import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Table from 'react-bulma-components/lib/components/table'

import CommunityNavbar from '../components/communityNavbar'


export default function CommunityPeople() {
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '800px',
        maxHeight: '1000px',
        padding: '4rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem'
    }

    const [people, setPeople] = useState([])
    const [userRole, setUserRole] = useState('')

    useEffect(() => {
        axios
            .get('/community-people/', {
                headers: {
                    'Authorization': `JWT ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                params: JSON.stringify({
                    user: localStorage.getItem('email'),
                    community: localStorage.getItem('community-name')
                })
            })
            .then(
                (response) => {
                    setPeople(response.data.people)
                    setUserRole(response.data.user_role)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    // useEffect(() => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", `JWT ${localStorage.getItem('token')}`);

    //     var formdata = new FormData();
    //     formdata.append("user", localStorage.getItem('email'));
    //     formdata.append("community", localStorage.getItem('community-name'));

    //     var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         body: formdata,
    //         redirect: 'follow'
    //     };

    //     fetch("/community-people/", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    // }, [])

    return (
        <div>
        <CommunityNavbar />
        <Container style={containerStyle}>
            <Heading size={4}>Community Members</Heading>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((p) => (
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>{p.phone_number}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
        </div>
    )
}
