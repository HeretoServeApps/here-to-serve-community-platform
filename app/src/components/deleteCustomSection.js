import React, { useState, useCallback } from 'react'
import { Trash2 } from 'react-feather'

import Modal from 'react-bulma-components/lib/components/modal'
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button'

const DeleteCustomSection = ({ id }) => {
  const [showDelete, setShowDelete] = useState(false)

  // Delete custom section
  const deleteSection = useCallback(() => {
    var url = '/delete-custom-section/'
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
  }, [])

  return (
    <span>
      <Button
        style={{
          boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
        }}
        color='danger'
        onClick={() => setShowDelete(true)}
      >
        <Trash2 size={12} style={{ marginRight: '10px' }} />
        Delete
      </Button>
      <Modal
        show={showDelete}
        onClose={() => setShowDelete(false)}
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
            <Heading size={5}>Delete Custom Section</Heading>
            <p>
              Are you sure you want to delete this custom section? You can't
              undo this action.
            </p>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button className='is-light' onClick={() => setShowDelete(false)}>
                Cancel
              </Button>
              <Button color='danger' onClick={() => deleteSection()}>
                <Trash2 size={12} style={{ marginRight: '10px' }} />
                Delete Section
              </Button>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </span>
  )
}

export default DeleteCustomSection
