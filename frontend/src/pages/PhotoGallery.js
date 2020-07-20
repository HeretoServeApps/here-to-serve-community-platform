import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import SideBar from '../components/sidebar'
import Image from 'react-bulma-components/lib/components/image'
import {
  Textarea,
  Label,
  Field,
  Control,
  InputFile,
  Input,
} from 'react-bulma-components/lib/components/form'
import Icon from 'react-bulma-components/lib/components/icon'

export default function PhotoGallery(props) {
  const token = localStorage.getItem('token')
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState('')
  const [newContent, setNewContent] = useState('')
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [fileURL, setFileURL] = useState('')
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState('')

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
    axios
      .get('/one-community/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
        params: {
          pk: localStorage.getItem("community-id")
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

  useEffect(() => {
    axios
      .get('/photos', {
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
          setPhotos(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [token])

  const addPhoto = useCallback(() => {
    var url = '/add-photo/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)

    var formdata = new FormData()
    formdata.append('community-id', localStorage.getItem('community-id'))
    formdata.append('title', title)
    formdata.append('description', description)
    formdata.append('photo', file)
    formdata.append('community', '')

    console.log(formdata)

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

  const showModal = (p) => {}

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

              <div style={formContainerStyle}>
                <Field>
                  <Label>
                    Title<span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Field>
                <Field>
                  <Label>
                    Description<span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Field>
                <Field>
                  <Label>
                    Select Photo<span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Control>
                    <InputFile
                      value={file}
                      icon={<Icon icon='upload' />}
                      fullwidth={true}
                      onChange={(e) => {
                        setFileURL(URL.createObjectURL(e.target.files[0]))
                        setFile(e.target.files[0])
                      }}
                    />
                  </Control>
                </Field>
                <Columns>
                  <Columns.Column size={3}>
                    <Image
                      src={
                        fileURL !== ''
                          ? fileURL
                          : 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original'
                      }
                    />
                  </Columns.Column>
                </Columns>
                <Button color='primary' onClick={() => addPhoto()}>
                  Finish
                </Button>
              </div>
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
            <Columns isMultiline={true}>
              {photos.length === 0 ? (
                <p style={noteStyle}>
                  No photos have been added to this gallery.
                </p>
              ) : (
                photos.map((p) => (
                  <Columns.Column size={3} key={p.uuid}>
                    <Image src={p.photo.split('?')[0]} onClick={() => showModal(p)} />
                  </Columns.Column>
                ))
              )}
            </Columns>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
