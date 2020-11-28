import React, { useState, useCallback } from 'react'
import countryList from 'react-select-country-list'
import { useHistory } from 'react-router-dom'

import {
  Field,
  Control,
  Input,
  Select,
  Textarea,
  Checkbox,
  Label,
  InputFile
} from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Image from 'react-bulma-components/lib/components/image';
import Icon from 'react-bulma-components/lib/components/icon';

import CheckboxField from '../components/checkboxfield'
import CheckboxTermofUse from '../components/checkboxTermofUse'

export default function CreateCommunity() {
  // Non-bulma styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '700px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }
  var noteStyle = {
    color: '#E5E5E5',
    fontSize: '0.75rem',
    fontStyle: 'italic',
  }
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [country, setCountry] = useState('United States')
  const [isClosed, setIsClosed] = useState(false)
  const [photoFile, setPhotoFile] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  let history = useHistory()


  const handleSubmit = useCallback((name, description, zipcode, country, isClosed, photoFile) => {
    // First add the community to database
    var url = '/community/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)

    var formdata = new FormData()
    formdata.append('name', name)
    formdata.append('description', description)
    formdata.append('zipcode', zipcode)
    formdata.append('country', country)
    formdata.append('photo_file', photoFile)
    formdata.append('is_closed', isClosed.toString())

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch(url, requestOptions)
      .then((response) => 
    {
      //After user creates the community, they are added as the admin (only admins can create new communities)
      var formdata = new FormData()
      var myHeaders = new Headers()
      myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)

      formdata.append('community', name)
      formdata.append('user', localStorage.getItem('email'))
      formdata.append('role', 'ADMIN')
      formdata.append('is_approved', true)

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      }

      fetch('/community-role-register/', requestOptions)
        .then((response) => response.text())
        .then((result) => history.push('/my-communities'))
        .catch((error) => console.log('error', error))})
      .then((result) => {
        history.push('/my-communities')
      })
      .catch((error) => console.log('error', error))

  }, [name, description, zipcode, country, isClosed, photoFile])

  return (
    <Container style={containerStyle}>
      <Heading size={4}>Create New Community</Heading>
      <Heading size={6}>Basic Information</Heading>
      <Field>
        <Control>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Community Name'
          />
        </Control>
      </Field>
      <Field>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Community Description'
        />
      </Field>
      <Field>
        <Columns>
          <Columns.Column>
            <Field>
              <Input
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder='Zip Code'
              />
            </Field>
          </Columns.Column>
          <Columns.Column>
            <Select
              name='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countryList()
                .getLabels()
                .map((c) => (
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

      <Label>
        Homepage Photo
      </Label>
      <div style={{ width: 320, marginBottom: '3%' }}>
        <Field>
          <Control>
            <InputFile
              value={photoFile}
              icon={<Icon icon='upload' />}
              onChange={(e) => {
                setPhotoURL(URL.createObjectURL(e.target.files[0]))
                setPhotoFile(e.target.files[0])
              }}
            />
          </Control>
        </Field>
        {photoURL === '' ? 
          <></> 
          : 
          <Image
            src={photoURL}
          />
        }
      </div>

      <br />
      <Field className='has-text-grey'>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Checkbox
            style={{ marginRight: '10px' }}
            onChange={(e) => setIsClosed(e.target.checked)}
          />
          <p>
            Allow friends and family to find this community by name and/or
            postal code.
          </p>
        </div>
        <CheckboxField text={'Allow all members to send invitations.'} />
        <CheckboxTermofUse />
      </Field>
      <Button
        onClick={() => handleSubmit(name, description, zipcode, country, isClosed, photoFile)}
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
        color='primary'
        fullwidth={true}
      >
        CREATE COMMUNITY
      </Button>
    </Container>
  )
}
