import React, { useState, useEffect, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import PostCard from '../components/postCard'
import { Editor } from '@tinymce/tinymce-react'
import SideBar from '../components/sidebar'

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
  const [wellwishes, setWellWishes] = useState([])

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [validForm, setValidForm] = useState(false)
  let history = useHistory()

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

  useEffect(() => {
    const formValues = [subject, message]
    const notValidForm = formValues.some((formVal) => {
      return formVal === ''
    })
    setValidForm(notValidForm)
  }, [subject, message])

  const handleSubmit = useCallback(() => {
    let dateTime =
      new Date().toLocaleDateString() +
      ' at ' +
      new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })

    const param = JSON.stringify({
      subject: subject,
      message: message,
      date_time: dateTime,
      user: localStorage.getItem('email'),
      community: localStorage.getItem('community-name'),
      author_name: '',
    })

    axios
      .post('/add-well-wish/', param, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          window.location.reload()
        },
        (error) => {
          console.log(error)
        }
      )
  }, [subject, message])

  useEffect(() => {
    axios
      .get('/well-wishes', {
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
        (response) => {
          console.log(response.data)
          setWellWishes(response.data)
        },
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
          <Columns.Column size={4}>
            <SideBar />
          </Columns.Column>
          <Columns.Column size={8}>
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
                  <Button
                    color='primary'
                    disabled={validForm}
                    onClick={() => handleSubmit()}
                  >
                    Finish
                  </Button>
                </div>
              </div>
            )}

            <br />
            <div>
              {wellwishes.length > 0 ? (
                wellwishes
                  .slice()
                  .reverse()
                  .map((a, index) => {
                    return (
                      <PostCard
                        key={index}
                        subject={a.subject}
                        message={a.message}
                        dateTime={a.date_time}
                        user={a.author_name}
                        id={a.id}
                        type='well-wish'
                      />
                    )
                  })
              ) : (
                <p style={noteStyle}>No well wishes have been posted yet.</p>
              )}
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
