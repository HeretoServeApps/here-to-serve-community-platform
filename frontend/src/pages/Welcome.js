import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button'
import Media from 'react-bulma-components/lib/components/media'
import Content from 'react-bulma-components/lib/components/content'
import Card from 'react-bulma-components/lib/components/card'
import Columns from 'react-bulma-components/lib/components/columns'
import styled from 'styled-components'

import personOne from '../images/welcome-person-1.png'
import personTwo from '../images/welcome-person-2.png'
import img from '../images/welcome-background.svg'

const Background = styled.div`
  background-image: url(${img});
  background-color: white;
  height: 100%;
  width: 100%;
  position: absolute;
`
const BackgroundWrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: -1;
`

const HighLight = styled.h1`
  color: #2c8595;
  font-weight: 600;
`

const ButtonBg = styled.div`
  background-color: white;
  border-radius: 5px;
`

export default function Welcome() {
  const aboutCard = {
    backgroundColor: 'white',
    borderRadius: '10px',
    margin: '5%',
    padding: '1%',
    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.25)'
  }

  return (
    <div style={{ backgroundColor: '#2C8595', paddingBottom: '80px' }}>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <Container style={{ marginBottom: '50px' }}>
        <Columns>
          <Columns.Column>
            <Container style={{ padding: '5% 30% 0 5%' }}>
              <Heading size={2}>
                Start your <HighLight>care community</HighLight> today.
              </Heading>
              <Button
                style={{
                  marginBottom: '1rem',
                  boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)'
                }}
                color='primary'
                fullwidth={true}
              >
                REGISTER TODAY
              </Button>
              <ButtonBg>
                <Link to='/login'>
                  <Button
                    style={{
                      boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)'
                    }}
                    fullwidth={true}
                    outlined={true}
                    color='primary'
                  >
                    LOGIN
                  </Button>
                </Link>
              </ButtonBg>
            </Container>
          </Columns.Column>
          <Columns.Column>
            <Container style={{ width: '80%' }}>
              <img
                src={personOne}
                style={{ width: '45%' }}
                alt='person one'
              ></img>
              <img
                src={personTwo}
                style={{ width: '55%' }}
                alt='person two'
              ></img>
            </Container>
          </Columns.Column>
        </Columns>
      </Container>
      <Container>
        <Columns>
          <Columns.Column>
            <Container style={aboutCard}>
              <Card.Content>
                <Media>
                  <Media.Item style={{ marginBottom: '5px' }}>
                    <Heading size={4}>Our Mission</Heading>
                  </Media.Item>
                </Media>
                <Content>
                  We believe families with a critically-ill child should not
                  have to lose their job, health, home or enter into bankruptcy
                  to care for their child during a medical crisis. To help
                  mitigate this, we mobilize people and resources to meet daily
                  living requirements of families who do not qualify for
                  government assistance.
                </Content>
              </Card.Content>
            </Container>
            <Container style={aboutCard}>
              <Card.Content>
                <Media>
                  <Media.Item style={{ marginBottom: '5px' }}>
                    <Heading size={4}>What We Do</Heading>
                  </Media.Item>
                </Media>
                <Content>
                  Here to Serve provides assistance to families caring for a
                  child in a life-or-death health crisis such as childhood
                  cancer, transplants, critical conditions at birth, accidents,
                  etc. We do this by: Mobilizing people and resources to meet
                  daily living requirements of families who do not qualify for
                  government assistance. Building online communities of support,
                  called Care Communities, that provide a network of services
                  and financial assistance for families with a critically-ill
                  child.
                </Content>
              </Card.Content>
            </Container>
          </Columns.Column>
          <Columns.Column>
            <Container style={aboutCard}>
              <Card.Content>
                <Media>
                  <Media.Item style={{ marginBottom: '5px' }}>
                    <Heading size={4}>Our Vision</Heading>
                  </Media.Item>
                </Media>
                <Content>
                  Here to Serve envisions people inspired and mobilized to carry
                  each other’s burdens during times of crisis, where guidance
                  and assistance is offered freely as people and organizations
                  collaborate to compassionately respond to those navigating
                  life-threatening health crises. We seek to demystify the
                  plethora of service organizations and to make them easily
                  accessible, thereby easing the journey of those in medical
                  crisis.
                </Content>
              </Card.Content>
            </Container>
            <Container style={aboutCard}>
              <Card.Content>
                <Media>
                  <Media.Item style={{ marginBottom: '5px' }}>
                    <Heading size={4}>Our Inspiration</Heading>
                  </Media.Item>
                </Media>
                <Content>
                  Here to Serve is dedicated to Silvio Quintas, Bryan Quintas,
                  Phil Carlson and Paul Alindog who exhibited unimaginable
                  courage, faith and dignity in their battles with cancer and
                  are the inspiration for starting Here to Serve. Bryan Quintas
                  won his battle with cancer. Silvio, Phil and Paul are home
                  with the Lord. Because of these valiant warriors, Here to
                  Serve strives to make a difference in the lives of
                  individuals, families and their caregivers in medical crises.
                </Content>
              </Card.Content>
            </Container>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  )
}
