import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import SideBar from '../components/sidebar'
import { Edit2, XCircle, X, Coffee, CheckCircle } from 'react-feather'
import {
  Control,
  Label,
  Field,
  Input,
} from 'react-bulma-components/lib/components/form'
import PostCard from '../components/postCard'

export default function MessageBoard(props) {
  const token = localStorage.getItem('token')
  const [showForm, setShowForm] = useState(false)
  const [messages, setMessages] = useState([])

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [validForm, setValidForm] = useState(false)

  var containerStyle = {
    margin: '5% 5%',
    maxWidth: '100%',
  }

  var noteStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'hsl(0, 0%, 96%)',
    borderRadius: '10px',
  }

  var formContainerStyle = {
    padding: '5%',
    border: '1px solid hsl(0, 0%, 86%)',
    borderRadius: '10px',
    marginTop: '20px',
  }

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
      .post('/add-message/', param, {
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
      .get('/messages/', {
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
          setMessages(response.data)
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
          <Columns.Column size={3}>
            <SideBar />
          </Columns.Column>
          <Columns.Column size={9}>
            <Columns>
              <Columns.Column size={9}>
                <Heading size={4}>Message Board</Heading>
              </Columns.Column>
              <Columns.Column size={3}>
                <Button
                  onClick={() => setShowForm(!showForm)}
                  color='primary'
                  className='is-fullwidth'
                >
                  {showForm ? (
                    <div>
                      <X size={12} style={{ marginRight: '5px' }} />
                      Hide Message Form
                    </div>
                  ) : (
                    <div>
                      <Edit2 size={12} style={{ marginRight: '5px' }} />
                      Leave a Message
                    </div>
                  )}
                </Button>
              </Columns.Column>
            </Columns>
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
                    <input
                      id='my-file'
                      type='file'
                      name='my-file'
                      style={{ display: 'none' }}
                    />
                    <Editor
                      initialValue={message}
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          'advlist autolink lists link image charmap print preview anchor',
                          'searchreplace wordcount visualblocks code fullscreen',
                          'insertdatetime media table contextmenu paste code',
                        ],
                        toolbar:
                          'insertfile undo redo | formatselect | bold italic backcolor | \
                                  alignleft aligncenter alignright alignjustify | \
                                  bullist numlist outdent indent | link image media | help',
                        file_browser_callback_types: 'image',
                        file_picker_callback: function (callback, value, meta) {
                          if (meta.filetype == 'image') {
                            var input = document.getElementById('my-file')
                            input.click()
                            input.onchange = function () {
                              var file = input.files[0]
                              var reader = new FileReader()
                              reader.onload = function (e) {
                                callback(e.target.result, {
                                  alt: file.name,
                                })
                              }
                              reader.readAsDataURL(file)
                            }
                          }
                        },
                        paste_data_images: true,
                      }}
                      onEditorChange={(content, editor) => setMessage(content)}
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
                    <CheckCircle size={12} style={{ marginRight: '5px' }} />
                    Finish
                  </Button>
                </div>
                <br />
              </div>
            )}
            <div>
              {messages.length > 0 ? (
                messages
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
                        type='message'
                      />
                    )
                  })
              ) : (
                <p style={noteStyle}>
                  <Coffee size={100} color='#E5E5E5' />
                  <br />
                  <br />
                  Sit tight! Nothing has been posted yet.
                </p>
              )}
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
