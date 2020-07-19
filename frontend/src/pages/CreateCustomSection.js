import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import {
  Select,
  Control,
  Label,
  Field,
  Input,
  Textarea,
  Checkbox,
  Radio,
} from 'react-bulma-components/lib/components/form'
import axios from 'axios'
import SideBar from '../components/sidebar'

export default function CreateCustomSection(props) {
  const token = localStorage.getItem('token')
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [validForm, setValidForm] = useState(false)
  let history = useHistory()

  var formContainerStyle = {
    padding: '5%',
    border: '1px solid hsl(0, 0%, 86%)',
    borderRadius: '10px',
  }

  var containerStyle = {
    margin: '5% 5%',
    maxWidth: '100%',
  }

  var noteStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
  }

  useEffect(() => {
    axios
      .get('/one-community/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
        params: {
          pk: localStorage.getItem('community-id')
        },
      })
      .then()
  }, [token])

  useEffect(() => {
    const formValues = [name, type]
    const notValidForm = formValues.some((formVal) => {
      return (
        formVal === '' ||
        (type === 'BUTTON' && link === '') ||
        (type !== 'BUTTON' && title === '')
      )
    })
    setValidForm(notValidForm)
  }, [name, title, type, link])

  useEffect(() => {
    if (type !== 'BUTTON') {
      setDescription('')
    }
  }, [type])

  const handleSubmit = useCallback(() => {
    const param = JSON.stringify({
      name: name,
      title: type === 'BUTTON' ? name : title,
      type: type,
      description: description,
      link: link,
      community: localStorage.getItem('community-name'),
      general_content: '',
    })

    axios
      .post('/add-custom-section/', param, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          history.push('/community-home')
        },
        (error) => {
          console.log(error)
        }
      )
  }, [name, title, type, description, link])

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}>
            <SideBar />
          </Columns.Column>
          <Columns.Column size={9}>
            <Heading size={4}>Create Custom Section</Heading>
            <div style={formContainerStyle}>
              <Field>
                <Label>
                  Name
                  <span style={{ color: '#F83D34' }}>*</span>
                </Label>
                <span style={noteStyle}>
                  This will be displayed in place of the URL.
                </span>
                <Control>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Control>
              </Field>
              {type !== 'BUTTON' && (
                <Field>
                  <Label>
                    Title
                    <span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <span style={noteStyle}>
                    This will be displayed as the title of the page.
                  </span>
                  <Control>
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Control>
                </Field>
              )}
              <Field>
                <Label>
                  Type<span style={{ color: '#F83D34' }}>*</span>
                </Label>
                <Control style={{ marginBottom: '10px' }}>
                  <Radio
                    onChange={(e) => setType(e.target.value)}
                    checked={type === 'DP'}
                    value='DP'
                  >
                    {' '}
                    Discussions and Pages
                  </Radio>
                  <br />
                  <Radio
                    onChange={(e) => setType(e.target.value)}
                    checked={type === 'GENERAL'}
                    value='GENERAL'
                  >
                    {' '}
                    General
                  </Radio>
                  <br />
                  <Radio
                    onChange={(e) => setType(e.target.value)}
                    checked={type === 'BUTTON'}
                    value='BUTTON'
                  >
                    {' '}
                    Button
                  </Radio>
                </Control>
              </Field>
              <Field>
                <Label>
                  {type !== 'BUTTON' ? 'Description' : 'Link'}
                  {type === 'BUTTON' && (
                    <span style={{ color: '#F83D34' }}>*</span>
                  )}
                </Label>
                <Control>
                  {type !== 'BUTTON' ? (
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  ) : (
                    <Input
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  )}
                </Control>
              </Field>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to='#'>
                <Button
                  color='primary'
                  className='is-fullwidth'
                  disabled={validForm}
                  onClick={() => handleSubmit()}
                >
                  Finish
                </Button>
              </Link>
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
