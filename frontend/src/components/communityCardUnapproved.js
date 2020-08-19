import React from 'react'
import styled from 'styled-components'
import Image from 'react-bulma-components/lib/components/image'

const Card = styled.div`
  border-radius: 10px;
  height: 300px;
  background-color: #2c8595;
  overflow: hidden;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    transition-duration: 0.5s;
  }
`

const CommunityLabel = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  text-align: center;
  background-color: white;
`

const CommunityCardUnapproved = ({ text, photo }) => (
  <Card
    style={{
      backgroundImage: 'url(' + photo + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div style={{ width: '100%', height: '80%' }}></div>
    <CommunityLabel>
      <p style={{ margin: 'auto' }}>{text}</p>
    </CommunityLabel>
  </Card>
)

export default CommunityCardUnapproved
