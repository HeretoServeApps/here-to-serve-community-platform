import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import { Link } from 'react-router-dom'
import axios from 'axios'

import {
  Textarea,
  Control,
  Label,
  Field,
  Input,
} from 'react-bulma-components/lib/components/form'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import MultiSelect from '@khanacademy/react-multi-select'

import CommunityNavbar from '../components/communityNavbar'

export default function EmailMembers() {
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '800px',
    maxHeight: '1000px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }

  const token = localStorage.getItem('token')
  const [inputEmail, setInputEmail] = useState('')
  const [firstName, setFirstName] = useState('') // User sending the email
  const [lastName, setLastName] = useState('') // User sending the email
  const [success, setSuccess] = useState(false)
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [members, setMembers] = useState([])
  const [selectedMembers, setSelectedMembers] = useState([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetch('/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setFirstName(json.first_name)
          setLastName(json.last_name)
        })
    }
  }, [])

  useEffect(() => {
    axios
      .get('/community-people/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        params: JSON.stringify({
          user: localStorage.getItem('email'),
          community: localStorage.getItem('community-name'),
        }),
      })
      .then(
        (response) => {
          const options = response.data.people.map((item) => ({
            label: `${item['first_name']} ${item['last_name']}`,
            value: item['email'],
          }))
          setMembers(options)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  let history = useHistory()
  const sendEmail = useCallback((fromEmail, toEmails, community, sender) => {
    setSuccess(true)
    fetch('/send-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        from_email: fromEmail,
        to_emails: toEmails,
        community: community,
        sender: sender,
        subject: subject,
        content: content,
      }),
    })
      .then((res) => res.json())
      .then(
        (json) => {
          setSuccess(true)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  if (success) {
    return (
      <div>
        <CommunityNavbar />
        <Container style={containerStyle}>
          An email has been sent to the addresses you provided.
          <br />
          <Button
            className='is-primary is-inverted'
            style={{
              marginTop: '3%',
              boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
            }}
            onClick={() => setSuccess(false)}
          >
            Back
          </Button>
        </Container>
      </div>
    )
  }

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Heading size={4}>Email Members</Heading>
        <strong>Send from:</strong> {localStorage.getItem('email')}
        <Field>
          <Label>Send to:</Label>
          <Control>
            <MultiSelect
              valueRenderer={(selectedMembers) => (
                <span width='100%'>
                  Selected {selectedMembers.length} users{' '}
                </span>
              )}
              options={members}
              selected={selectedMembers}
              onSelectedChanged={(selected) => setSelectedMembers(selected)}
            />
          </Control>
        </Field>
        <br />
        <strong>Subject:</strong>
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Enter subject of email message.'
        ></Input>
        <br />
        <br />
        <strong>Message:</strong>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Enter body of email message.'
        ></Textarea>
        <Columns style={{ marginTop: '5%' }}>
          <Columns.Column>
            <Link to='/community-people'>
              <Button
                className='is-primary is-inverted'
                style={{
                  marginBottom: '1rem',
                  boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                }}
                fullwidth={true}
              >
                Cancel
              </Button>
            </Link>
          </Columns.Column>
          <Columns.Column>
            <Button
              color='primary'
              style={{
                marginBottom: '1rem',
                boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
              }}
              fullwidth={true}
              onClick={() =>
                sendEmail(
                  localStorage.getItem('email'),
                  selectedMembers,
                  localStorage.getItem('community-name'),
                  firstName + ' ' + lastName
                )
              }
            >
              Send Email
            </Button>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
