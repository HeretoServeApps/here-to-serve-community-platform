import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import CommunityNavbar from '../components/communityNavbar'

export default function CommunityAbout() {
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '1050px',
    maxHeight: '1000px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }

  const community = localStorage.getItem('community-name')
  const [description, setDescription] = useState()

  useEffect(() => {
    axios
      .get('/one-community/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
        params: {
          pk: localStorage.getItem('community-id'),
        },
      })
      .then(
        (response) => {
          setDescription(response.data[0].description)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Heading size={4}>About {community}</Heading>
        <p>{description}</p>
        <Heading size={4} style={{ marginTop: '5%' }}>
          About Here to Serve
        </Heading>
        <strong>Our Mission</strong>
        <p style={{ marginBottom: '2%' }}>
          Here to Serve calls all members of the community to carry the burdens
          of individuals, families and their caregivers who face
          life-threatening health crises.
        </p>
        <strong>Our Vision</strong>
        <p>
          Here to Serve envisions people inspired and mobilized to carry each
          other’s burdens during times of crisis; where guidance and assistance
          is not sought after, but offered by people and organizations
          collaborating to compassionately respond to those navigating
          life-threatening health crises. We see the plethora of service
          organizations demystified and easily accessible, thereby easing the
          journey of those in medical crisis.
          <br />
          <br />
          Here to Serve believes in collaboration! We identify and help acquire
          highly-personalized care services from other organizations for
          individuals, families and their caregivers. Caregivers who manage
          tragic health events often find it difficult to predict impending
          needs. Here to Serve’s Care Coordinators help demystify assistance
          programs, as well as intercede, navigate, encourage and provide
          guidance with insurance, legal, government and other nonprofit
          services. We engage the community of volunteers to provide assistance
          with child care, meals, household chores, pet care and transportation.
          <br />
          <br />
          Visit the Here to Serve home page:{' '}
          <a href='https://www.heretoserve.org/' target='_blank' rel='noopener noreferrer'>
            heretoserve.org
          </a>
          .
        </p>
      </Container>
    </div>
  )
}
