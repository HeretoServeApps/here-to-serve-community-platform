import React, { useCallback, useState } from "react"

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'

import CheckboxField from '../components/checkboxfield'
import SideNavAccount from '../components/sideNavAccount'

export default function AccountSettings() {
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '80%',
    padding: '4rem',
  }

  var checkboxStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    margin: '5px 0',
    display: 'flex',
    justifyContent: 'flex-start',
  }

  const [infoAboutH2S, setInfoAboutH2S] = useState(false)
  const [newsletter, setNewsLetter]     = useState(false)
  
  const handleOnCheckInformationAboutH2S = useCallback(() => {
    setInfoAboutH2S(!infoAboutH2S)
  })

  const handleOnCheckNewsLetter = useCallback(() => {
    setInfoAboutH2S(!newsletter)
  })

  return (
    <Container style={containerStyle}>
      <Heading size={4} style={{ margin: '0% 0% 3% 30%', }}>Email Settings</Heading>
      <Columns>
        <Columns.Column style={{ maxWidth: '30%' }}>
          <SideNavAccount />
        </Columns.Column>
        <Columns.Column>
        <CheckboxField text={'Information about family and Here to Serve'} onChange={handleOnCheckInformationAboutH2S} />
        <CheckboxField text={'Receive Here to Serve newsletter'} onChange={handleOnCheckNewsLetter} />
        </Columns.Column>
      </Columns>


    </Container>
  );
}