import React, { useState, useEffect } from "react"
import countryList from 'react-select-country-list'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import Table from 'react-bulma-components/lib/components/table';
import {
    Field,
    Control,
    Input,
    Select,
    Textarea
} from 'react-bulma-components/lib/components/form'

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
        maxHeight: '1400px',
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
        fetch('http://localhost:8000/community/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
    }, [])
    
    

    
    // return(
    //     <Container style={containerStyle}>
    //         <Heading size={4}>Join Communities</Heading>
    //         <Table>
    //             <thead>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>Join</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {createCommunityEntries(communities)}
    //             </tbody>
    //         </Table>
    //         <Button style={{ marginTop: '1rem', marginBottom: '1rem' }} color='primary' fullwidth={true}>
    //             DONE
    //         </Button>
    //     </Container>
            
    // )
    return (
        <div>
          <h1>Here to Serve</h1>
{/*     
          <p>List of Communities:</p>
          {communities.map(c => (
            <li>{c.name}</li>
          ))} */}
        </div>
      )
}