import React, { useState, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Heading from 'react-bulma-components/lib/components/heading'
import Icon from 'react-bulma-components/lib/components/icon'
import Button from 'react-bulma-components/lib/components/button'
import Dropdown from 'react-bulma-components/lib/components/dropdown'
import Modal from 'react-bulma-components/lib/components/modal'
import Section from 'react-bulma-components/lib/components/section'
import {
  Field,
  Control,
  Input,
  Select,
  Textarea,
  Label,
} from 'react-bulma-components/lib/components/form'
import Media from 'react-bulma-components/lib/components/media'
import Image from 'react-bulma-components/lib/components/image'
import Content from 'react-bulma-components/lib/components/content'
import Box from 'react-bulma-components/lib/components/box'
import { Editor } from '@tinymce/tinymce-react'

export default function PostCard({
  id,
  subject,
  message,
  dateTime,
  user,
  type,
}) {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [pk, setPk] = useState('')
  const [newSubject, setNewSubject] = useState(subject ? subject : '')
  const [newMessage, setNewMessage] = useState(message ? message : '')
  let history = useHistory()

  const deletePost = useCallback(() => {
    var url = '/delete-' + type + '/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
    myHeaders.append('id', id)

    var formdata = new FormData()
    formdata.append('id', id)

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => window.location.reload())
      .catch((error) => console.log('error', error))
  })

  const editPost = useCallback(() => {
    var url = '/edit-' + type + '/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
    myHeaders.append('id', id)

    var formdata = new FormData()
    formdata.append('id', id)
    formdata.append('subject', newSubject)
    formdata.append('message', newMessage)

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

  var cardStyle = {
    border: '1px solid hsl(0, 0%, 86%)',
    borderRadius: '5px',
    padding: '2.5%',
    marginBottom: '20px',
    width: '100%',
  }

  var userStyle = {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    marginBottom: '0',
  }

  var dateStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
  }

  var contentStyle = {
    padding: '10px',
  }

  if (isEditing) {
    return (
      <div style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p style={userStyle}>{user}</p>
            <p style={dateStyle}>{dateTime}</p>
          </div>
        </div>
        <div style={contentStyle}>
          <Field>
            <Label>
              Subject<span style={{ color: '#F83D34' }}>*</span>
            </Label>
            <Control>
              <Input
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
              ></Input>
            </Control>
          </Field>
          <Field>
            <Label>
              Message<span style={{ color: '#F83D34' }}>*</span>
            </Label>
            <Control>
              <Editor
                initialValue={newMessage}
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
                onEditorChange={(content, editor) => setNewMessage(content)}
              />
            </Control>
          </Field>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button color='primary' onClick={() => editPost()}>
              Finish
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Box>
      <Media renderAs='article'>
        <Media.Item position='center'>
          <Content>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={userStyle}>{user}</p>
                <p style={dateStyle}>{dateTime}</p>
              </div>
              <div>
                <Button color='light' onClick={() => setShowMenu(!showMenu)}>
                  <Icon icon='angle-down' />
                </Button>
                {showMenu && (
                  <div
                    style={{
                      zIndex: 1,
                      position: 'absolute',
                      backgroundColor: 'white',
                      border: '1px solid hsl(0, 0%, 86%)',
                      borderRadius: '5px',
                    }}
                  >
                    <Dropdown.Item
                      value='edit'
                      onClick={() => setIsEditing(true)}
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      value='delete'
                      style={{ color: 'hsl(348, 100%, 61%)' }}
                      onClick={() => setShowModal(true)}
                    >
                      Delete
                    </Dropdown.Item>
                    <Modal
                      show={showModal}
                      onClose={() => setShowModal(false)}
                      closeOnBlur={true}
                    >
                      <Modal.Card>
                        <Modal.Card.Head onClose={() => setShowModal(false)}>
                          <Modal.Card.Title>
                            Delete Announcement
                          </Modal.Card.Title>
                        </Modal.Card.Head>
                        <Section style={{ backgroundColor: 'white' }}>
                          Are you sure you want to delete this post? You can't
                          undo this action.
                        </Section>
                        <Modal.Card.Foot
                          style={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Button onClick={() => setShowModal(false)}>
                            Cancel
                          </Button>
                          <Button color='primary' onClick={() => deletePost()}>
                            Delete Post
                          </Button>
                        </Modal.Card.Foot>
                      </Modal.Card>
                    </Modal>
                  </div>
                )}
              </div>
            </div>
            <Section>
              <Heading size={4}>{subject}</Heading>
              <div dangerouslySetInnerHTML={{ __html: message }}></div>
            </Section>
          </Content>
        </Media.Item>
      </Media>
    </Box>
  )
}
