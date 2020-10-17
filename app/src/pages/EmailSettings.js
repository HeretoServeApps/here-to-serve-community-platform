import React, { useCallback, useState } from "react"

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'

import CheckboxField from '../components/checkboxfield'
import SideNavAccount from '../components/sideNavAccount'

export default function AccountSettings() {
  var containerStyle = {
    margin: '3% auto',
    maxWidth: '80%',
    padding: '4rem',
  }

  const pk = localStorage.getItem('user-id')
  const [infoAboutH2S, setInfoAboutH2S] = useState(true)
  const [newsletter, setNewsLetter]     = useState(false)
  
  const handleOnCheckInformationAboutH2S = useCallback(() => {
    setInfoAboutH2S(!infoAboutH2S)
  })

  const handleOnCheckNewsLetter = useCallback(() => {
    setNewsLetter(!newsletter)
  })

  return (
    <Container style={containerStyle}>
      <Columns>
        <Columns.Column style={{ maxWidth: '30%' }}>
          <SideNavAccount />
        </Columns.Column>
        <Columns.Column>
        <Heading size={4} style={{ marginBottom: '3%', }}>Email Settings</Heading>
        <CheckboxField text={'Information about family and Here to Serve'} checked={infoAboutH2S} onChange={handleOnCheckInformationAboutH2S} />
        <CheckboxField text={'Receive Here to Serve newsletter'} onChange={handleOnCheckNewsLetter} />
        </Columns.Column>
      </Columns>
    </Container>
  );
}