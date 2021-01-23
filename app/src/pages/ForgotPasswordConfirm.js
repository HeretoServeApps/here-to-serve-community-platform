import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'

export default function ForgotPasswordConfirm() {
  // Non-bulma styles
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '400px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }

  return (
    <Container style={containerStyle}>
      <p>
        An email has been sent to the email address you entered. 
        If you did not receive this email, please try again <Link href="/forgot-password">here</Link>. 
        Make sure the email you entered is associated with a valid account.  
      </p>
      <br />
    </Container>
  )
}