import React, { useState, useEffect, useCallback } from 'react'
import { Trash2, Edit2 } from 'react-feather'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
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
import Modal from 'react-bulma-components/lib/components/modal'
import Heading from 'react-bulma-components/lib/components/heading'
import CommunityNavbar from '../components/communityNavbar'
import Button from 'react-bulma-components/lib/components/button'
import Table from 'react-bulma-components/lib/components/table'

var noteStyle = {
  fontSize: '0.75rem',
  fontStyle: 'italic',
}

const EditCustomSection = ({
  id,
  name,
  type,
  title,
  description,
  link,
  general_content,
}) => {
  const token = localStorage.getItem('token')
  const [showEdit, setShowEdit] = useState(false)
  const [newName, setNewName] = useState(name)
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const [newLink, setNewLink] = useState(link)
  const [validForm, setValidForm] = useState(false)
  let history = useHistory()

  useEffect(() => {
    const formValues = [name, type]
    const notValidForm = formValues.some((formVal) => {
      return (
        formVal === '' ||
        (type === 'BUTTON' && link === '') ||
        (type !== 'BUTTON' && title === '')
      )
    })
    setValidForm(notValidForm)
  }, [newName, newTitle, newLink])

  const handleSubmit = useCallback(() => {
    const param = JSON.stringify({
      section_id: id,
      name: newName,
      title: type === 'BUTTON' ? newName : newTitle,
      type: type,
      description: newDescription,
      link: newLink,
      community: localStorage.getItem('community-name'),
      general_content: general_content,
    })

    axios
      .post('/edit-custom-section/', param, {
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
  }, [newName, newTitle, type, newDescription, newLink])

  return (
    <span>
      <Button
        color='primary'
        style={{ marginRight: '10px' }}
        onClick={() => setShowEdit(true)}
      >
        <Edit2 size={12} style={{ marginRight: '10px' }} />
        Edit
      </Button>
      <Modal
        show={showEdit}
        onClose={() => setShowEdit(false)}
        closeOnBlur={true}
      >
        <Modal.Content>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '5px',
              padding: '5%',
            }}
          >
            <Heading size={5}>Edit Custom Section</Heading>
            <Field>
              <Label>
                Name
                <span style={{ color: '#F83D34' }}>*</span>
              </Label>
              <span style={noteStyle}>
                This will be displayed in the sidebar.
              </span>
              <Control>
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </Control>
            </Field>
            {type !== 'BUTTON' && (
              <Field>
                <Label>
                  Title
                  <span style={{ color: '#F83D34' }}>*</span>
                </Label>
                <span style={noteStyle}>
                  This will be displayed as the title of the page.
                </span>
                <Control>
                  <Input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </Control>
              </Field>
            )}
            <Field>
              <Label>
                {type !== 'BUTTON' ? 'Description' : 'Link'}
                {type === 'BUTTON' && (
                  <span style={{ color: '#F83D34' }}>*</span>
                )}
              </Label>
              <Control>
                {type !== 'BUTTON' ? (
                  <Textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                ) : (
                  <Input
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                  />
                )}
              </Control>
            </Field>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button className='is-light' onClick={() => setShowEdit(false)}>
                Cancel
              </Button>
              <Button
                color='primary'
                disabled={validForm}
                onClick={() => handleSubmit()}
              >
                <Edit2 size={12} style={{ marginRight: '10px' }} />
                Edit Section
              </Button>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </span>
  )
}

export default EditCustomSection
