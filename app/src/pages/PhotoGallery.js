import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import SideBar from '../components/sidebar'
import Image from 'react-bulma-components/lib/components/image'
import Box from 'react-bulma-components/lib/components/box'
import Modal from 'react-bulma-components/lib/components/modal'
import Section from 'react-bulma-components/lib/components/section'
import {
  Textarea,
  Label,
  Field,
  Control,
  InputFile,
  Input,
  Select
} from 'react-bulma-components/lib/components/form'
import Icon from 'react-bulma-components/lib/components/icon'
import ImageGallery from 'react-image-gallery'
import { Image as ImageIcon, X, Edit, Trash2 } from 'react-feather'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const years = Array.from(Array(5).keys()).map((y) => (y + (new Date().getFullYear())))
const count = Array.from(Array(51).keys()).slice(1, 51)

const times = [
  '12:00 AM',
  '12:15 AM',
  '12:30 AM',
  '12:45 AM',
  '1:00 AM',
  '1:15 AM',
  '1:30 AM',
  '1:45 AM',
  '2:00 AM',
  '2:15 AM',
  '2:30 AM',
  '2:45 AM',
  '3:00 AM',
  '3:15 AM',
  '3:30 AM',
  '3:45 AM',
  '4:00 AM',
  '4:15 AM',
  '4:30 AM',
  '4:45 AM',
  '5:00 AM',
  '5:15 AM',
  '5:30 AM',
  '5:45 AM',
  '5:00 AM',
  '5:15 AM',
  '5:30 AM',
  '5:45 AM',
  '5:00 AM',
  '5:15 AM',
  '5:30 AM',
  '5:45 AM',
  '6:00 AM',
  '6:15 AM',
  '6:30 AM',
  '6:45 AM',
  '7:00 AM',
  '7:15 AM',
  '7:30 AM',
  '7:45 AM',
  '8:00 AM',
  '8:15 AM',
  '8:30 AM',
  '8:45 AM',
  '9:00 AM',
  '9:15 AM',
  '9:30 AM',
  '9:45 AM',
  '10:00 AM',
  '10:15 AM',
  '10:30 AM',
  '10:45 AM',
  '11:00 AM',
  '11:15 AM',
  '11:30 AM',
  '11:45 AM',
  '12:00 PM',
  '12:15 PM',
  '12:30 PM',
  '12:45 PM',
  '1:00 PM',
  '1:15 PM',
  '1:30 PM',
  '1:45 PM',
  '2:00 PM',
  '2:15 PM',
  '2:30 PM',
  '2:45 PM',
  '3:00 PM',
  '3:15 PM',
  '3:30 PM',
  '3:45 PM',
  '4:00 PM',
  '4:15 PM',
  '4:30 PM',
  '4:45 PM',
  '5:00 PM',
  '5:15 PM',
  '5:30 PM',
  '5:45 PM',
  '6:00 PM',
  '6:15 PM',
  '6:30 PM',
  '6:45 PM',
  '7:00 PM',
  '7:15 PM',
  '7:30 PM',
  '7:45 PM',
  '8:00 PM',
  '8:15 PM',
  '8:30 PM',
  '8:45 PM',
  '9:00 PM',
  '9:15 PM',
  '9:30 PM',
  '9:45 PM',
  '10:00 PM',
  '10:15 PM',
  '10:30 PM',
  '10:45 PM',
  '11:00 PM',
  '11:15 PM',
  '11:30 PM',
  '11:45 PM',
]

export default function PhotoGallery() {
  const token = localStorage.getItem('token')
  const [isAdding, setIsAdding] = useState(false)
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [fileURL, setFileURL] = useState('')
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState([])
  const [day, setDay] = useState(new Date().getDate())
  const [month, setMonth] = useState(months[new Date().getMonth()])
  const [year, setYear] = useState(new Date().getFullYear())
  const [time, setTime] = useState('12:00 PM')

  // For editing photo
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(-1)
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDay, setNewDay] = useState('01')
  const [newTime, setNewTime] = useState('12:00 PM')
  const [newYear, setNewYear] = useState('2021')
  const [newMonth, setNewMonth] = useState('January')
  const [newFileURL, setNewFileURL] = useState('')
  const [newFile, setNewFile] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [showRemoveModal, setShowRemoveModel] = useState(false)

  // Styles ---------------------------------------------------
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
  }

  // Hooks -----------------------------------------------------
  useEffect(() => {
    axios
      .get('/photos/', {
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
          var gallery = []

          response.data.forEach((p) => {
            gallery.push({
              original: p.photo.split('?')[0],
              thumbnail: p.photo.split('?')[0],
              originalTitle: p.title,
              thumbnailTitle: p.title,
              description: 'Posted at ' + p.time + ' on ' + p.month + ' ' + p.day + ', ' + p.year + ': \n' + p.description,
              day: p.day,
              time: p.time,
              year: p.year,
              month: p.month,
              id: p.id,
              fullURL: p.photo
            })
          })
          setPhotos(gallery)

          if(gallery.length > 0) {
            var currentPhoto = gallery[0]
            setNewDay(currentPhoto.day)
            setNewTitle(currentPhoto.originalTitle)
            setNewTime(currentPhoto.time)
            setNewYear(currentPhoto.year)
            setNewMonth(currentPhoto.month)
            setNewFileURL(currentPhoto.original)
            setNewFile(currentPhoto.fullURL)
            setNewDescription(currentPhoto.description.substring(currentPhoto.description.indexOf('\n') + 1))
            setCurrentPhotoIndex(0)
          }
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
    formdata.append('day', day)
    formdata.append('time', time)
    formdata.append('month', month)
    formdata.append('year', year)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((_) => window.location.reload())
      .catch((error) => console.log('error', error))
  })

  const setCurrentPhoto = useCallback((currentIndex) => {
    var currentPhoto = photos[currentIndex]
    setNewDay(currentPhoto.day)
    setNewTitle(currentPhoto.originalTitle)
    setNewTime(currentPhoto.time)
    setNewYear(currentPhoto.year)
    setNewMonth(currentPhoto.month)
    setNewFileURL(currentPhoto.original)
    setNewDescription(currentPhoto.description.substring(currentPhoto.description.indexOf('\n') + 1))
    setCurrentPhotoIndex(currentIndex)
  })

  const deletePhoto = useCallback(() => {
    var currentPhotoId = photos[currentPhotoIndex].id

    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
    }

    fetch('/edit-photo/' + currentPhotoId, requestOptions)
    .then(_ => window.location.reload())
    .catch(error => console.log('error', error))
  })

  const editPhoto = useCallback(() => {
    var currentPhotoId = photos[currentPhotoIndex].id
    var url = '/edit-photo/' + currentPhotoId + '/'
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
    myHeaders.append('id', currentPhotoId)

    var formdata = new FormData();
    formdata.append('title', newTitle)
    formdata.append('description', newDescription)
    formdata.append('day', newDay)
    formdata.append('time', newTime)
    formdata.append('month', newMonth)
    formdata.append('year', newYear)

    if(newFile != '') {
      formdata.append('photo', newFile)
    }

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    }

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(_ =>
            window.location.reload()
        )
        .catch(error => console.log('error', error))
  })

  // Render views ------------------------------------------------------

  if (isAdding) {
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
                  <Heading size={4}>Photo Gallery</Heading>
                </Columns.Column>
                <Columns.Column size={3}>
                  <Button
                    className='is-fullwidth'
                    onClick={() => setIsAdding(false)}
                  >
                    <div>
                      <X size={12} style={{ marginRight: '5px' }} />
                      Cancel
                    </div>
                  </Button>
                </Columns.Column>
              </Columns>

              <div style={formContainerStyle}>
                <Field>
                  <Label>Title</Label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Field>
                <Field>
                  <Label>Description</Label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Field>

                <Field>
                  <Label>Date</Label>
                  <Control>
                    <Select
                      onChange={(e) => setMonth(e.target.value)}
                      name='month'
                      value={month}
                      style={{ marginRight: '10px' }}
                    >
                      {months.map((m) => (
                        <option>{m}</option>
                      ))}
                    </Select>
                    <Select
                      onChange={(e) => setDay(e.target.value)}
                      name='day'
                      value={day}
                      style={{ marginRight: '10px' }}
                    >
                      {count.slice(0, 31).map((d) => (
                        <option>{d}</option>
                      ))}
                    </Select>
                    <Select
                      onChange={(e) => setYear(e.target.value)}
                      name='year'
                      value={year}
                      style={{ marginRight: '10px' }}
                    >
                      {years.map((y) => (
                        <option>{y}</option>
                      ))}
                    </Select>
                    <Select
                      onChange={(e) => setTime(e.target.value)}
                      name='time'
                      value={time}
                    >
                      {times.map((t) => (
                        <option>{t}</option>
                      ))}
                    </Select>
                  </Control>
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
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2%' }}>
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

  if(isEditing && photos.length > 0) {
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
                  <Heading size={4}>Photo Gallery</Heading>
                </Columns.Column>
                <Columns.Column size={3}>
                  <Button
                    className='is-fullwidth'
                    onClick={() => setIsEditing(false)}
                  >
                    <div>
                      <X size={12} style={{ marginRight: '5px' }} />
                      Cancel
                    </div>
                  </Button>
                </Columns.Column>
              </Columns>

              <div style={formContainerStyle}>
                <Field>
                  <Label>Title</Label>
                  <Input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </Field>
                <Field>
                  <Label>Description</Label>
                  <Textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                </Field>

                <Field>
                  <Label>Date</Label>
                  <Control>
                    <Select
                      onChange={(e) => setNewMonth(e.target.value)}
                      name='month'
                      value={newMonth}
                      style={{ marginRight: '10px' }}
                    >
                      {months.map((m) => (
                        <option key={months.indexOf(m)}>{m}</option>
                      ))}
                    </Select>
                    <Select
                      onChange={(e) => setNewDay(e.target.value)}
                      name='day'
                      value={newDay}
                      style={{ marginRight: '10px' }}
                    >
                      {count.slice(0, 31).map((d) => (
                        <option>{d}</option>
                      ))}
                    </Select>
                    <Select
                      onChange={(e) => setNewYear(e.target.value)}
                      name='year'
                      value={newYear}
                      style={{ marginRight: '10px' }}
                    >
                      {years.map((y) => (
                        <option>{y}</option>
                      ))}
                    </Select>
                    <Select
                      onChange={(e) => setNewTime(e.target.value)}
                      name='time'
                      value={newTime}
                    >
                      {times.map((t) => (
                        <option>{t}</option>
                      ))}
                    </Select>
                  </Control>
                </Field>

                <Field>
                  <Label>
                    Select Photo<span style={{ color: '#F83D34' }}>*</span>
                  </Label>
                  <Control>
                    <InputFile
                      value={newFileURL}
                      icon={<Icon icon='upload' />}
                      fullwidth={true}
                      onChange={(e) => {
                        setNewFileURL(URL.createObjectURL(e.target.files[0]))
                        setNewFile(e.target.files[0])
                      }}
                    />
                  </Control>
                </Field>
                <Columns>
                  <Columns.Column size={3}>
                    <Image
                      src={
                        newFileURL !== ''
                          ? newFileURL
                          : 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original'
                      }
                    />
                  </Columns.Column>
                </Columns>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2%' }}>
                  <Button color='primary' style={{marginRight: '1%'}} onClick={() => editPhoto()}>
                    Finish
                  </Button>
                  <Button
                    style={{
                      boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                    }}
                    color='danger'
                    onClick={() => setShowRemoveModel(true)}
                  >
                    <Trash2 size={12} style={{ marginRight: '10px' }} />
                    Delete Photo
                  </Button>
              </div>
            </Columns.Column>
          </Columns>
        </Container>
        <Modal
            show={showRemoveModal}
            onClose={() => setShowRemoveModel(false)}
            closeOnBlur={true}
        >
            <Modal.Card>
                <Modal.Card.Head onClose={() => setShowRemoveModel(false)}>
                    <Modal.Card.Title>Delete Photo</Modal.Card.Title>
                </Modal.Card.Head>
                    <Section style={{ backgroundColor: 'white' }}>
                        Are you sure you want to delete this photo? You can't undo this action.
                    </Section>
                <Modal.Card.Foot
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    >
                    <Button onClick={() => setShowRemoveModel(false)}>
                        Cancel
                    </Button>
                    <Button color='primary' onClick={() => deletePhoto()}>
                        Delete Photo
                    </Button>
                </Modal.Card.Foot>
            </Modal.Card>
        </Modal>
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
            <Columns isMultiline={true}>
              <Columns.Column size={6}>
                <Heading size={4}>Photo Gallery</Heading>
              </Columns.Column>
              <Columns.Column size={3}>
                <Button
                  color='primary'
                  className='is-fullwidth'
                  onClick={() => setIsAdding(true)}
                >
                  <div>
                    <ImageIcon size={12} style={{ marginRight: '5px' }} />
                    Add New Photo
                  </div>
                </Button>
              </Columns.Column>
              <Columns.Column size={3}>
                <Button
                  color='primary'
                  className='is-fullwidth'
                  onClick={() => setIsEditing(true)}
                >
                  <div>
                    <Edit size={12} style={{ marginRight: '5px' }} />
                    Edit Current Photo
                  </div>
                </Button>
              </Columns.Column>
            </Columns>
            {photos.length === 0 ? (
              <p style={noteStyle}>
                No photos have been added to this gallery.
              </p>
            ) : (
                <Box>
                  <ImageGallery
                    items={photos}
                    startIndex={currentPhotoIndex}
                    thumbnailPosition='bottom'
                    showBullets={true}
                    showIndex={true}
                    showPlayButton={false}
                    onSlide={(currentIndex) => setCurrentPhoto(currentIndex)}
                  />
                </Box>
              )}
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
