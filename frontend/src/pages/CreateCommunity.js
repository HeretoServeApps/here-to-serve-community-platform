import React, { useState, useCallback } from 'react'
import countryList from 'react-select-country-list'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import {
  Field,
  Control,
  Input,
  Select,
  Textarea,
  Checkbox
} from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Notification from 'react-bulma-components/lib/components/notification'

import CheckboxField from '../components/checkboxfield'
import CheckboxTermofUse from '../components/checkboxTermofUse'

export default function CreateCommunity() {
  // Non-bulma styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '700px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem'
  }
  var noteStyle = {
    color: '#E5E5E5',
    fontSize: '0.75rem',
    fontStyle: 'italic'
  }
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [country, setCountry] = useState('United States')
  const [isClosed, setIsClosed] = useState(false)
  const token = localStorage.getItem('token')
  let history = useHistory()

  const handleSubmit = useCallback(() => {
    const param = JSON.stringify({
      'name': name,
      'description': description,
      'zipcode': zipcode,
      'country': country,
      'is_closed': isClosed
    })
    axios.post('/community/', param, {
        headers: {
          'Authorization': `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      )
      history.push('/my-communities')
  }, [name, description, zipcode, country, isClosed, token])

  return (
    <Container style={containerStyle}>
      <Heading size={4}>Create New Community</Heading>
      <Heading size={6}>Basic Information</Heading>
      <Field>
        <Control>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Community Name'
          />
        </Control>
      </Field>
      <Field>
        <Textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='Community Description'
        />
      </Field>
      <Field>
        <Columns>
          <Columns.Column>
            <Field>
              <Input
                value={zipcode}
                onChange={e => setZipcode(e.target.value)}
                placeholder='Zip Code'
              />
            </Field>
          </Columns.Column>
          <Columns.Column>
            <Select
              name='country'
              value={country}
              onChange={e => setCountry(e.target.value)}
            >
              {countryList()
                .getLabels()
                .map(c => (
                  <option style={{ position: 'static' }} value={c}>
                    {c}
                  </option>
                ))}
            </Select>
            {/* <Field>
              <Input
                value={country}
                onChange={e => setCountry(e.target.value)}
                placeholder='Country'
              />
            </Field> */}
          </Columns.Column>
        </Columns>
      </Field>
      <p className='has-text-grey-light' style={noteStyle}>
        The zip code should be the location of the community, not necessarily
        where the caregiver lives.
      </p>
      <br />
      <Field className='has-text-grey'>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Checkbox style={{ marginRight: '10px' }} onChange={e => setIsClosed(e.target.value)}/>
          <p>Allow friends and family to find this community by name and/or postal code.</p>
        </div>
        <CheckboxField text={'Allow all members to send invitations.'} />
        <CheckboxTermofUse />
      </Field>
      <Button onClick={() => handleSubmit()} style={{ marginTop: '1rem', marginBottom: '1rem' }} color='primary' fullwidth={true}>
        CREATE COMMUNITY
      </Button>
      <Notification className='has-text-grey'>
        <a href='#'>Click here</a> to find and join existing communities.
      </Notification>
    </Container>
  )
}
