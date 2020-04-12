import React, { useState } from 'react'
import countryList from 'react-select-country-list'
import axios from 'axios'

import {
  Field,
  Control,
  Input,
  Select,
  Textarea
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
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('United States')

  axios({
  method: 'post',
  url: '/community',
  data: {
    name: name,
    description: description,
    zipcode: zipCode,
    country: country,
  }
});

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
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
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
          </Columns.Column>
        </Columns>
      </Field>
      <p className='has-text-grey-light' style={noteStyle}>
        The zip code should be the location of the community, not necessarily
        where the caregiver lives.
      </p>
      <br />
      <Field className='has-text-grey'>
        <CheckboxField
          text={
            'Allow friends and family to find this community by name and/or postal code.'
          }
        />
        <CheckboxField text={'Allow all members to send invitations.'} />
        <CheckboxTermofUse/>
      </Field>
      <Button style={{ marginTop: '1rem', marginBottom: '1rem' }} color='primary' fullwidth={true}>
        CREATE COMMUNITY
      </Button>
      <Notification className='has-text-grey'>
        <a href='#'>Click here</a> to find and join existing communities.
      </Notification>
    </Container>
  )
}
