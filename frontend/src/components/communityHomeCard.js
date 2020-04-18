import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Heading from 'react-bulma-components/lib/components/heading'

const Card = styled.div`
  border-radius: 10px;
  height: 100%;
  background-color: #light-gray;
  overflow: hidden;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2);
`
const CommunityHomeCard = ({ title, link }) => {
    return(
        <Card style={{padding: '3%'}}>
            <Link to={link}>
                <Heading size={6}>{title}</Heading>
            </Link>
        </Card>
    )
}

export default CommunityHomeCard
