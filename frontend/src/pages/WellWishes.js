import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityHomeCard from '../components/communityHomeCard'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import CheckboxField from '../components/checkboxfield'
import AnnouncementCard from '../components/announcementCard'
import { Editor } from '@tinymce/tinymce-react'
import axios from 'axios'

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

export default function WellWishes(props) {
  const token = localStorage.getItem('token')
  const [showForm, setShowForm] = useState(false)

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [whenPost, setWhenPost] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [year, setYear] = useState('')
  const [time, setTime] = useState('')
  const [showHome, setShowHome] = useState(false)
  const [sendEmail, setSendEmail] = useState(false)
  const [validForm, setValidForm] = useState(false)

  var containerStyle = {
    margin: '5% auto',
    maxWidth: '80%',
  }

  var formContainerStyle = {
    padding: '5%',
    border: '1px solid hsl(0, 0%, 86%)',
    borderRadius: '10px',
    marginTop: '20px',
  }

  var noteStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'hsl(0, 0%, 96%)',
    borderRadius: '10px',
  }

  useEffect(() => {
    axios
      .get('/one-community/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
        params: {
          name: localStorage.getItem('community-name'),
          zipcode: localStorage.getItem('community-zipcode'),
          is_closed: localStorage.getItem('community-is-closed'),
        },
      })
      .then(
        (response) => {},
        (error) => {
          console.log(error)
        }
      )
  }, [token])

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}></Columns.Column>
          <Columns.Column size={9}>
            <Columns>
              <Columns.Column size={8}>
                <Heading size={4}>Well Wishes</Heading>
              </Columns.Column>
              <Columns.Column size={4}>
                <Button
                  onClick={() => setShowForm(!showForm)}
                  color='primary'
                  className='is-fullwidth'
                >
                  {showForm ? 'Hide Message Form' : 'Leave a Message'}
                </Button>
              </Columns.Column>
            </Columns>
            <div>
              <p>
                Well Wishes is the place to drop a line to say hello, post a
                prayer or let the family you are helping know that you’re
                thinking about them.
              </p>
            </div>

            {showForm && (
              <div>
                <div style={formContainerStyle}>
                  <Field>
                    <Label>
                      Subject<span style={{ color: '#F83D34' }}>*</span>
                    </Label>
                    <Control>
                      <Input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label>
                      Message<span style={{ color: '#F83D34' }}>*</span>
                    </Label>
                    <Control>
                      <Editor
                        initialValue={message}
                        init={{
                          height: 300,
                          menubar: false,
                          plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                          ],
                          toolbar:
                            'undo redo | formatselect | image | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help',
                        }}
                        onEditorChange={(content, editor) =>
                          setMessage(content)
                        }
                      />
                    </Control>
                  </Field>
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button color='primary'>Finish</Button>
                </div>
              </div>
            )}

            <br />
            <div>
              <p style={noteStyle}>No well wishes have been posted yet.</p>
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
