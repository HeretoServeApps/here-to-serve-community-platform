import React, { useState, useEffect, useCallback } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import CheckboxField from '../components/checkboxfield'
import Button from 'react-bulma-components/lib/components/button'
import Table from 'react-bulma-components/lib/components/table'
import { Radio, Control, Field } from 'react-bulma-components/lib/components/form'



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
    const [newCommunities, setNewCommunities] = useState([])
    const token = localStorage.getItem('token')
    const [communityId, setCommunityId] = useState(0)
    let history = useHistory()

    //adds volunteer to community
  const addVolunteer = useCallback(() => {
    const param = JSON.stringify({
      community: communityId,
      user: localStorage.getItem('email'),
    })

    axios
      .post('/add-volunteer-to-community/', param, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          history.push('/my-communities')
        },
        (error) => {
          console.log(error)
        }
      )
  }, [communityId, token])

    useEffect(() => {
        axios.get('/communities/')
          .then((response) => {
            setNewCommunities(Array.from(response.data))
          })
      }, [])

   class RadioGroup extends React.Component {

       state = {
            selected: undefined,
         }

        onChange = (evt) => {
            this.setState({
             selected: evt.target.value,
             });

         }
          render() {
            return (
              <Control>
                   {newCommunities.map((c) => (
                       <tr>
                           <td>{c.name}</td>
                           <td><Radio onChange={this.onChange} checked={this.state.selected === String(c.id)}
                           value={String(c.id)} name="community"
                           onClick = {this.state.selected === String(c.id) ? setCommunityId(c.id) : ""} /></td>
                       </tr>
                   ))}
              </Control>
            );
          }
      }

    return(
        <Container style={containerStyle}>
            <Heading size={4}>Join Communities</Heading>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <RadioGroup/>
                </tbody>
            </Table>
            <Link to='/my-communities'>
                <Button onClick={() => addVolunteer()} style={{ marginTop: '1rem', marginBottom: '1rem' }}
                color='primary' fullwidth={true}>
                    JOIN SELECTED COMMUNITIES
                </Button>
            </Link>
        </Container>
    )
}