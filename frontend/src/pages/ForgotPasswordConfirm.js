import React from 'react'

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
        Please check your email for a password reset link. 
        If you did not receive this email, please try again <a href="/forgot-password">here</a>. 
      </p>
      <br />
    </Container>
  )
}