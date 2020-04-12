import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border-radius: 10px;
  height: 200px;
  background-color: #2c8595;
  overflow: hidden;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2);
`

const CommunityLabel = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  text-align: center;
  background-color: white;
`

const CommunityCard = ({ text }) => (
  <Card>
    <div style={{ maxWidth: '20%', height: '80%' }}></div>
    <CommunityLabel>
      <p style={{ margin: 'auto' }}>{text}</p>
    </CommunityLabel>
  </Card>
)

export default CommunityCard
