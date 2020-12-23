import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import SideBar from '../components/sidebar'
import { Edit, XCircle, Coffee } from 'react-feather'

export default function WaysToHelp(props) {
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
          pk: localStorage.getItem('community-id'),
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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Heading size={4}>Ways to Help</Heading>

                <XCircle onClick={() => setIsEditing(false)} color='#F83D34' />
              </div>
              <div>
                <input
                  id='my-file'
                  type='file'
                  name='my-file'
                  style={{ display: 'none' }}
                />
                <Editor
                  initialValue={newContent}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace wordcount visualblocks code fullscreen',
                      'insertdatetime media table contextmenu paste code',
                    ],
                    toolbar:
                      'insertfile undo redo | formatselect | bold italic underline backcolor | \
                              alignleft aligncenter alignright alignjustify | \
                              bullist numlist outdent indent | link image media | help',
                    file_browser_callback_types: 'image',
                    file_picker_callback: function (callback, value, meta) {
                      if (meta.filetype ==='image') {
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
                  onEditorChange={(content, editor) => setNewContent(content)}
                />
                <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button color='primary' onClick={() => editWaysToHelp()}>
                    Finish
                  </Button>
                </div>
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Heading size={4}>Ways to Help</Heading>
              <Edit onClick={() => setIsEditing(true)} />
            </div>
            <div>
              {content === '' ? (
                <p style={noteStyle}>
                  <Coffee size={100} color='#E5E5E5' />
                  <br />
                  <br />
                  Sit tight! Nothing has been posted yet.
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
