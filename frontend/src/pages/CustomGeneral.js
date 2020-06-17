import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import SideBar from '../components/sidebar'

import {
  Textarea,
  Input,
  Label,
} from 'react-bulma-components/lib/components/form'

export default function CustomGeneral(props) {
  const token = localStorage.getItem('token')
  const [isEditing, setIsEditing] = useState(false)

  const [title, setTitle] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [content, setContent] = useState('')
  const [newContent, setNewContent] = useState('')

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
          setDescription(response.data[0].description)
          setNewDescription(response.data[0].description)
          setContent(response.data[0].general_content)
          setNewContent(response.data[0].general_content)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token])

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
                  <Button
                    color='primary'
                    className='is-fullwidth'
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </Button>
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
                <p>{description}</p>
                <br />
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
              </div>
            )}
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
