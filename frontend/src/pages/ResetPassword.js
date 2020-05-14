import React, { useState, useEffect } from 'react'
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

  let history = useHistory()
  useEffect(() => {
    if (props.logged_in) {
      history.push('/my-communities')
    }
  })
  return (
    <Container style={containerStyle}>
      <Heading size={4}>Reset Password</Heading>
      <p className='has-text-grey-light'>Enter new password to reset.</p>
      <br />
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
      <Button style={{ marginBottom: '1rem' }} color='primary' fullwidth={true}>
        RESET
      </Button>
    </Container>
  )
}

ResetPassword.propTypes = {
  handle_login: PropTypes.func.isRequired,
  logged_in: PropTypes.bool.isRequired,
}
