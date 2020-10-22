import React, { useCallback, useState } from "react"

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button';
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
  const [emailTaskReminders, setEmailTaskReminders] = useState(true)
  
  const handleOnCheckInformationAboutH2S = useCallback(() => {
    setInfoAboutH2S(!infoAboutH2S)
  })

  const handleOnCheckNewsLetter = useCallback(() => {
    setNewsLetter(!newsletter)
  })

  const handleOnCheckEmailTaskReminders = useCallback(() => {
    setEmailTaskReminders(!emailTaskReminders)
  })

  const editEmailSettings = useCallback(() => {
   
          var url = '/edit-user/' + pk + '/'
          var myHeaders = new Headers()
          
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
          myHeaders.append('id', pk)
  
          var formdata = new FormData();
   
    formdata.append('email_task_reminders', emailTaskReminders)
    
  
          var requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: formdata,
              redirect: 'follow'
          }
  
          fetch(url, requestOptions)
          .then(response => response.text())
          .then(result => {
              window.location.reload()
          })
          .catch(error => console.log('error', error))
      }, 
      [pk, emailTaskReminders]) 

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
        <CheckboxField text={'Reminders for tasks you signed up for'}checked={emailTaskReminders} onChange={handleOnCheckEmailTaskReminders} />
        <Button 
                        color="primary" 
                        fullwidth={true} 
                        style={{maxWidth: '40%', marginTop: '8%'}} 
                        onClick={() => editEmailSettings()}
                    >
                        SAVE CHANGES
                    </Button>
        </Columns.Column>
      </Columns>
    </Container>
  );
}