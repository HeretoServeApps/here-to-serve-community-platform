import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Field,
  Input,
  Control,
} from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import axios from 'axios'

export default function ResetPassword(props) {
  // Non-bulma styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '400px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [validForm, setValidForm] = useState(false)

  let history = useHistory()
  useEffect(() => {
    if (props.logged_in) {
      history.push('/my-communities')
    }
  })

  const handleChangePassword = useCallback((password) => {
    axios.put('/reset-password/', JSON.stringify({'new_password': password, 'email': email}), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(
      (response) => {
        history.push('/login')
      },
      (error) => {
        console.log(error)
      }
    )
  }, [history])

  useEffect(() => {
    const formValues = [
      email,
      password,
      passwordConfirm
    ]
    const notValidForm =
      formValues.some((formVal) => {
        return formVal === ''
      }) ||
      password !== passwordConfirm
    setValidForm(notValidForm)
  }, [password, passwordConfirm])

  return (
    <Container style={containerStyle}>
      <Heading size={4}>Reset Password</Heading>
      <p className='has-text-grey-light'>Enter new password to reset.</p>
      <br />
      <Field>
        <Control>
          <Input
            value={email}
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input
            value={password}
            type='password'
            placeholder='New Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input
            value={passwordConfirm}
            type='password'
            placeholder='Confirm New Password'
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </Control>
      </Field>
      <Button 
       style={{ marginBottom: '1rem' }} 
       color='primary' 
       fullwidth={true} 
       disabled={validForm}
       onClick={() => handleChangePassword(password)}
      >
        RESET
      </Button>
    </Container>
  )
}

ResetPassword.propTypes = {
  logged_in: PropTypes.bool.isRequired,
}
