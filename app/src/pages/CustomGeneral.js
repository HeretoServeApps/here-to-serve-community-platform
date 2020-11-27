import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'
import { useHistory } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import SideBar from '../components/sidebar'
import PostCard from '../components/postCard'

import {
  Textarea,
  Input,
  Label,
  Field,
  Control,
} from 'react-bulma-components/lib/components/form'

export default function CustomGeneral(props) {
  const token = localStorage.getItem('token')
  const [isEditing, setIsEditing] = useState(false)
  const [showDPForm, setShowDPForm] = useState(false)

  const [title, setTitle] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [content, setContent] = useState('')
  const [newContent, setNewContent] = useState('')
  const [discussionPosts, setDiscussionPosts] = useState([])

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [validForm, setValidForm] = useState(false)
  const [userRole, _ ] = useState(localStorage.getItem('user-role'))

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

  useEffect(() => {
    axios
      .get('/one-custom-section/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
        params: {
          section_id: props.location.state.section,
        },
      })
      .then(
        (response) => {
          setTitle(response.data[0].title)
          setNewTitle(response.data[0].title)
          setType(response.data[0].type)
          setDescription(response.data[0].description)
          setNewDescription(response.data[0].description)
          setContent(response.data[0].general_content)
          setNewContent(response.data[0].general_content)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token, props.location.state.section])

  const editCustomSection = useCallback(() => {
    var url = '/edit-custom-section/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)

    var formdata = new FormData()

    formdata.append('section_id', props.location.state.section)
    formdata.append('title', newTitle)
    formdata.append('description', newDescription)
    formdata.append('general_content', newContent)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => window.location.reload())
      .catch((error) => console.log('error', error))
  })

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
      section: props.location.state.section,
      subject: subject,
      message: message,
      date_time: dateTime,
      user: localStorage.getItem('email'),
      community: localStorage.getItem('community-name'),
      author_name: '',
    })

    axios
      .post('/add-discussion-post/', param, {
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
      .get('/discussion-posts', {
        headers: {
          Authorization: `JWT ${token}`,
        },
        params: {
          section_id: props.location.state.section,
        },
      })
      .then(
        (response) => {
          console.log(response.data)
          setDiscussionPosts(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token, props.location.state.section])

  useEffect(() => {
    setIsEditing(false)
  }, [props.location.state.section])

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Columns isMultiline={true}>
          <Columns.Column size={3}>
            <SideBar />
          </Columns.Column>
          <Columns.Column size={9}>
            {isEditing ? (
              <Columns>
                <Columns.Column size={8}>
                  <Input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </Columns.Column>
                <Columns.Column size={2}>
                  <Button
                    className='is-fullwidth'
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </Columns.Column>
                <Columns.Column size={2}>
                  <Button
                    color='primary'
                    className='is-fullwidth'
                    onClick={() => editCustomSection()}
                  >
                    Finish
                  </Button>
                </Columns.Column>
              </Columns>
            ) : (
              <Columns>
                <Columns.Column size={10}>
                  <Heading size={4}>{title}</Heading>
                </Columns.Column>
                <Columns.Column size={2}>
                  {userRole === 'Administrator' && 
                    <Button
                      color='primary'
                      className='is-fullwidth'
                      onClick={() => setIsEditing(true)}
                    >
                      Edit
                    </Button>
                }
                </Columns.Column>
              </Columns>
            )}
            {isEditing ? (
              <div>
                <Label>Description</Label>
                <Textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />

                <br />
                {type === 'GENERAL' && (
                  <div>
                    <Label>Content</Label>
                    <Editor
                      initialValue={newContent}
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          'advlist autolink lists link image charmap print preview anchor',
                          'searchreplace visualblocks code fullscreen',
                          'insertdatetime media table paste code help wordcount',
                        ],
                        toolbar:
                          'undo redo | formatselect | link image | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help',
                      }}
                      onEditorChange={(content, editor) =>
                        setNewContent(content)
                      }
                    />
                  </div>
                )}
              </div>
            ) : (
              <div>
                {type === 'DP' ? (
                  <Columns>
                    <Columns.Column size={10}>
                      <p>{description}</p>
                      {description !== '' && <br />}
                    </Columns.Column>
                    <Columns.Column size={2}>
                      <Button
                        onClick={() => setShowDPForm(!showDPForm)}
                        color='primary'
                        className='is-fullwidth'
                      >
                        {showDPForm ? 'Hide Form' : 'New Post'}
                      </Button>
                    </Columns.Column>
                  </Columns>
                ) : (
                  <div>
                    <p>{description}</p>
                    {description !== '' && <br />}
                  </div>
                )}
                {type === 'GENERAL' && (
                  <div>
                    {content === '' ? (
                      <p style={noteStyle}>
                        No content has been posted for this page.
                      </p>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    )}
                  </div>
                )}
                {type === 'DP' && (
                  <div>
                    {showDPForm && (
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
                                    'undo redo | formatselect | link image | bold italic backcolor | \
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
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }}
                        >
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
                    {discussionPosts.length == 0 ? (
                      <p style={noteStyle}>
                        No posts have been made for this page.
                      </p>
                    ) : (
                      <div>
                        {discussionPosts
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
                                type='discussion-post'
                              />
                            )
                          })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
