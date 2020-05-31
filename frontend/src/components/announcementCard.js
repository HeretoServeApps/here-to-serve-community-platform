import React, { useState } from 'react'
import Heading from 'react-bulma-components/lib/components/heading'
import Icon from 'react-bulma-components/lib/components/icon'
import Button from 'react-bulma-components/lib/components/button'
import Dropdown from 'react-bulma-components/lib/components/dropdown'
import Modal from 'react-bulma-components/lib/components/modal'
import Section from 'react-bulma-components/lib/components/section'

export default function Announcement({ subject, message, dateTime, user }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

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
  }

  var dateStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
  }

  var contentStyle = {
    padding: '10px',
  }

  return (
    <div style={cardStyle}>
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
              <Dropdown.Item value='edit'>Edit</Dropdown.Item>
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
                closeOnBlur='true'
              >
                <Modal.Card>
                  <Modal.Card.Head onClose={() => setShowModal(false)}>
                    <Modal.Card.Title>Delete Announcement</Modal.Card.Title>
                  </Modal.Card.Head>
                  <Section style={{ backgroundColor: 'white' }}>
                    Are you sure you want to delete this post?
                  </Section>
                  <Modal.Card.Foot
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button color='primary'>Delete Post</Button>
                  </Modal.Card.Foot>
                </Modal.Card>
              </Modal>
            </div>
          )}
        </div>
      </div>
      <div style={contentStyle}>
        <Heading size={4}>{subject}</Heading>
        <div dangerouslySetInnerHTML={{ __html: message }}></div>
      </div>
    </div>
  )
}
