import React, { useState, useEffect, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Field,
  Input,
  Control,
} from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Notification from 'react-bulma-components/lib/components/notification'

export default function ForgotPassword(props) {
  // Non-bulma styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '400px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }
  var notifStyle = {
    backgroundColor: 'white',
    padding: '.25rem .5rem .25rem .5rem',
    textAlign: 'center',
  }

  const [email, setEmail] = useState('')

  let history = useHistory()

  useEffect(() => {
    if (props.logged_in) {
      history.push('/my-communities')
    }
  })
  
  return (
    <Container style={containerStyle}>
      <Heading size={4}>Forgot Password?</Heading>
      <p className='has-text-grey-light'>
        Enter your email address to be sent a password reset link.
      </p>
      <br />
      <Field>
        <Control>
          <Input
            value={email}
            type='email'
            placeholder='Email Address'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Control>
      </Field>
      <Button
        style={{ marginBottom: '1rem' }}
        color='primary'
        fullwidth={true}
        onClick={() => {
          props.handle_forgot_password(email);
          history.push('/reset-password-confirmation');
        }}>
        SEND
      </Button>
      <Notification style={notifStyle}>
        <Link to='/login'>Back to Login</Link>
      </Notification>
    </Container>
  )
}

ForgotPassword.propTypes = {
  logged_in: PropTypes.bool.isRequired,
}
