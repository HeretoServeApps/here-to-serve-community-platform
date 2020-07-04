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
  Label,
  Field,
  Control,
  InputFile,
} from 'react-bulma-components/lib/components/form'
import Icon from 'react-bulma-components/lib/components/icon'

export default function PhotoGallery(props) {
  const token = localStorage.getItem('token')
  const [isEditing, setIsEditing] = useState(false)
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
        (response) => {
          setContent(response.data[0].ways_to_help)
          setNewContent(response.data[0].ways_to_help)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token])

  const editWaysToHelp = useCallback(() => {
    var url = '/edit-ways-to-help/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)

    var formdata = new FormData()
    formdata.append('name', localStorage.getItem('community-name'))
    formdata.append('zipcode', localStorage.getItem('community-zipcode'))
    formdata.append('is_closed', localStorage.getItem('community-is-closed'))
    formdata.append('ways_to_help', newContent)

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

  if (isEditing) {
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
                <Columns.Column size={10}>
                  <Heading size={4}>Photo Gallery</Heading>
                </Columns.Column>
                <Columns.Column size={2}>
                  <Button
                    className='is-fullwidth'
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </Columns.Column>
              </Columns>
              <Label>Select Photo</Label>
              <Columns>
                <Columns.Column size={10}>
                  <Field>
                    <Control>
                      <InputFile
                        icon={<Icon icon='upload' />}
                        fullwidth={true}
                      />
                    </Control>
                  </Field>
                </Columns.Column>
                <Columns.Column size={2}>
                  <Button
                    color='primary'
                    onClick={() => editWaysToHelp()}
                    fullwidth={true}
                  >
                    Finish
                  </Button>
                </Columns.Column>
              </Columns>
            </Columns.Column>
          </Columns>
        </Container>
      </div>
    )
  }

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
              <Columns.Column size={10}>
                <Heading size={4}>Photo Gallery</Heading>
              </Columns.Column>
              <Columns.Column size={2}>
                <Button
                  color='primary'
                  className='is-fullwidth'
                  onClick={() => setIsEditing(true)}
                >
                  Add Photo
                </Button>
              </Columns.Column>
            </Columns>
            <div>
              {content === '' ? (
                <p style={noteStyle}>
                  No content has been posted for this page.
                </p>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              )}
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
