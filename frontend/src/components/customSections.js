import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bulma-components/lib/components/button'
import Box from 'react-bulma-components/lib/components/box'
import Menu from 'react-bulma-components/lib/components/menu'
import { Link as LinkIcon, MessageSquare, FileText } from 'react-feather'

import axios from 'axios'

export default function CustomSections() {
  const [sections, setSections] = useState([])

  var containerStyle = {
    margin: '5% auto',
    maxWidth: '300px',
    padding: '1rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '10px',
  }
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    axios
      .get('/community-custom-sections/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
        params: {
          name: localStorage.getItem('community-name'),
        },
      })
      .then(
        (response) => {
          setSections(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  useEffect(() => {
    setUserRole(localStorage.getItem('user-role'))
  }, [])

  return (
    <div>
      {sections.length !== 0 ? (
        <Menu>
          <Menu.List>
            {sections.map((section) =>
              section.type !== 'BUTTON' ? (
                <Link
                  to={{
                    pathname: '/custom/' + section.name,
                    state: {
                      section: section.id,
                    },
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {section.type === 'DP' ? (
                      <MessageSquare
                        size={12}
                        style={{ marginRight: '10px' }}
                      />
                    ) : (
                      <FileText size={12} style={{ marginRight: '10px' }} />
                    )}
                    <p className='sidebar'>{section.name}</p>
                  </div>
                </Link>
              ) : (
                <a href={section.link} target='_blank'>
                  <p className='sidebar'>
                    <LinkIcon size={12} style={{ marginRight: '10px' }} />
                    {section.name}
                  </p>
                </a>
              )
            )}
          </Menu.List>
          <hr />
        </Menu>
      ) : (
        <div />
      )}
    </div>
  )
}
