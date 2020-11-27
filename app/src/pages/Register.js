import React, { useState, useEffect } from 'react'
import countryList from 'react-select-country-list'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import Notification from 'react-bulma-components/lib/components/notification'
import {
  Field,
  Control,
  Input,
  Select,
  Label,
} from 'react-bulma-components/lib/components/form'
import Autocomplete from '../components/autocomplete'

import CheckboxTermofUse from '../components/checkboxTermofUse'

export default function Register(props) {
  // Non-bulma styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '700px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }
  var notifStyle = {
    backgroundColor: 'white',
    padding: '.25rem .5rem .25rem .5rem',
    marginTop: '10px',
    textAlign: 'center',
  }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('United States')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phoneNumber1, setPhoneNumber1] = useState('')
  const [phoneNumber1Type, setPhoneNumber1Type] = useState('Mobile')
  const [phoneNumber2, setPhoneNumber2] = useState('')
  const [phoneNumber2Type, setPhoneNumber2Type] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [who, setWho] = useState('') // Automatically join this person's community when user logs in
  const [howLearn, setHowLearn] = useState('')
  const [howHelp, setHowHelp] = useState('')
  const [howKnow, setHowKnow] = useState('')
  const [skillsToOffer, setSkillsToOffer] = useState('')
  const [validForm, setValidForm] = useState(false)
  const [communities, setCommunities] = useState([])
  const [communityToIsClosedMap, setCommunityToIsClosedMap] = useState({}) // Map the community to its is_closed status

  let history = useHistory()

  useEffect(() => {
    const formValues = [
      firstName,
      lastName,
      addressLine1,
      city,
      country,
      state,
      zipcode,
      phoneNumber1,
      phoneNumber1Type,
      who,
      howKnow,
      email,
      password,
      confirmEmail,
      confirmPassword,
      howLearn,
    ]
    const notValidForm =
      formValues.some((formVal) => {
        return formVal === ''
      }) ||
      formValues.some((formVal) => {
        return formVal === 'Please select an option'
      }) ||
      email !== confirmEmail ||
      password !== confirmPassword
    setValidForm(notValidForm)
  }, [
    firstName,
    lastName,
    addressLine1,
    city,
    country,
    state,
    zipcode,
    phoneNumber1,
    phoneNumber1Type,
    who,
    howKnow,
    email,
    password,
    confirmEmail,
    confirmPassword,
    howLearn,
  ])

  // If token is verified, logs the user in and add them to the community they chose to join
  useEffect(() => {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== 'undefined' &&
      localStorage.getItem('token') !== undefined
    ) {
      var formdata = new FormData()
      formdata.append('community', who)
      formdata.append('user', email)
      formdata.append('role', 'COMM_MEMBER')
      if (communityToIsClosedMap[who] == "true") {
        formdata.append('is_approved', true)
      }

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      }

      fetch(
        '/community-role-register/',
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => history.push('/my-communities'))
        .catch((error) => console.log('error', error))
    }
  })

  // Get communities without token for the "who would you like to help?" field
  useEffect(() => {
    axios.get('/communities/').then((response) => {
      let suggestedCommunities = []
      let isClosedMap = {}
      for(var i = 0; i < response.data.length; i++) {
        suggestedCommunities.push(response.data[i].name)
        isClosedMap[response.data[i].name] = response.data[i].is_closed
      }
      setCommunities(suggestedCommunities)
      setCommunityToIsClosedMap(isClosedMap)
    })
  }, [])

  return (
    <Container style={containerStyle}>
      <Heading size={4}>Join a Care Community</Heading>
      <Heading size={6}>Basic Information</Heading>
      <Columns>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First Name*'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last Name*'
              />
            </Control>
          </Field>
        </Columns.Column>
      </Columns>
      <Field>
        <Control>
          <Input
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            placeholder='Address Line 1*'
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder='Address Line 2'
          />
        </Control>
      </Field>
      <Columns>
        <Columns.Column>
          <Field>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='City*'
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
      <Columns>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder='State*'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder='Zip Code*'
              />
            </Control>
          </Field>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={phoneNumber1}
                onChange={(e) => setPhoneNumber1(e.target.value)}
                placeholder='Primary Phone Number*'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Select
                onChange={(e) => setPhoneNumber1Type(e.target.value)}
                name='phoneNumber1Type'
                value={phoneNumber1Type}
              >
                <option>Mobile</option>
                <option>Home</option>
                <option>Work</option>
              </Select>
            </Control>
          </Field>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={phoneNumber2}
                onChange={(e) => setPhoneNumber2(e.target.value)}
                placeholder='Secondary Phone Number'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Select
                onChange={(e) => setPhoneNumber2Type(e.target.value)}
                name='phoneNumber2Type'
                value={phoneNumber2Type}
              >
                <option></option>
                <option>Mobile</option>
                <option>Home</option>
                <option>Work</option>
              </Select>
            </Control>
          </Field>
        </Columns.Column>
      </Columns>

      <Heading size={6} style={{ marginTop: '5%' }}>
        Community Information
      </Heading>
      <Field>
        <p>
          <strong>
            Who would you like to help?
            <span style={{ color: '#F83D34' }}>*</span>
          </strong>
        </p>
        <Autocomplete suggestions={communities} set_who={setWho} />
      </Field>
      <Field>
        <Label>
          How did you know this person?
          <span style={{ color: '#F83D34' }}>*</span>
        </Label>
        <Control>
          <Select
            onChange={(e) => setHowKnow(e.target.value)}
            name='howKnow'
            value={howKnow}
          >
            <option>Please select an option</option>
            <option>Family</option>
            <option>Friend</option>
            <option>Friend of a friend</option>
            <option>Coworker</option>
            <option>Attend the same school</option>
            <option>Neighbor</option>
            <option>Social Media</option>
            <option>Worship together</option>
            <option>Do not personally know</option>
          </Select>
        </Control>
      </Field>
      <Field>
        <Label>How would you like to help?</Label>
        <Control>
          <Select
            onChange={(e) => setHowHelp(e.target.value)}
            name='howHelp'
            value={howHelp}
          >
            <option></option>
            <option>As an individual volunteer</option>
            <option>Through my house of worship</option>
            <option>
              Through a volunteer organization that I am a member of
            </option>
          </Select>
        </Control>
      </Field>
      <Field>
        <Label>What skill can you offer?</Label>
        <Control>
          <Select
            onChange={(e) => setSkillsToOffer(e.target.value)}
            name='skillsToOffer'
            value={skillsToOffer}
          >
            <option></option>
            <option>
              Cared for someone with a life-threatening health crisis
            </option>
            <option>I have had a life-threatening health crisis</option>
            <option>Healthcare provider</option>
            <option>Computer, technology, and social media</option>
            <option>Accounting, financial services</option>
            <option>Provide licensed child care</option>
            <option>Legal, attorney</option>
            <option>Counseling</option>
            <option>Skilled in complex health insurance issues</option>
            <option>Other</option>
          </Select>
        </Control>
      </Field>
      <Heading size={6} style={{ marginTop: '5%' }}>
        Login Information
      </Heading>
      <Field>
        <Control>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email*'
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            placeholder='Confirm Email*'
          />
        </Control>
      </Field>
      <Columns>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password*'
                type='password'
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column>
          <Field>
            <Control>
              <Input
                value={confirmPassword}
                type='password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm Password*'
                type='password'
              />
            </Control>
          </Field>
        </Columns.Column>
      </Columns>
      <Field>
        <Label>
          How did you learn about us?<span style={{ color: '#F83D34' }}>*</span>
        </Label>
        <Select
          name='How Learn'
          value={howLearn}
          onChange={(e) => setHowLearn(e.target.value)}
        >
          <option>Please select an option</option>
          <option>Social Media</option>
          <option>Friend or Family</option>
          <option>Here to Serve Website</option>
          <option>Employer</option>
          <option>Google Search</option>
          <option>Other</option>
        </Select>
      </Field>
      <CheckboxTermofUse />
      <Button
        style={{ marginTop: '1rem' }}
        color='primary'
        fullwidth={true}
        disabled={validForm}
        onClick={() =>
          props.handle_signup(
            email,
            password,
            firstName,
            lastName,
            addressLine1,
            addressLine2,
            city,
            country,
            state,
            zipcode,
            phoneNumber1,
            phoneNumber1Type,
            phoneNumber2,
            phoneNumber2Type,
            howLearn,
            who,
            howHelp,
            howKnow,
            skillsToOffer
          )
        }
      >
        CREATE ACCOUNT
      </Button>
      <Notification style={notifStyle}>
        Already have an account? <a href='/login'>Log in here.</a>
      </Notification>
    </Container>
  )
}

Register.propTypes = {
  handle_signup: PropTypes.func.isRequired,
  logged_in: PropTypes.bool.isRequired,
}
