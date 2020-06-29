import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button'
import Columns from 'react-bulma-components/lib/components/columns'
import Box from 'react-bulma-components/lib/components/box'
import Menu from 'react-bulma-components/lib/components/menu'

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

  return (
    <div style={{ marginBottom: '10%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <strong>Custom Sections</strong>
        <Link to='/create-custom-section'>
          <Button className='is-light is-small'>+</Button>
        </Link>
      </div>
      <br />
      <Menu>
        <Menu.List>
          <Box>
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
                  <p className='sidebar'>{section.name}</p>
                </Link>
              ) : (
                <a href={section.link} target='_blank'>
                  <p className='sidebar'>{section.name}</p>
                </a>
              )
            )}
          </Box>
        </Menu.List>
      </Menu>
    </div>
  )
}
