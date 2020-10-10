import React from 'react'

import Container from 'react-bulma-components/lib/components/container'

export default function ResetPasswordConfirm() {
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
        Your password has been reset. You can now log in with your new password. 
      </p>
      <br />
    </Container>
  )
}