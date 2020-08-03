import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'react-bulma-components/lib/components/button'
import Columns from 'react-bulma-components/lib/components/columns'

const Bar = styled.div`
  background-color: #2c8595;
  z-index: -1;
  padding: 0 10%;
`

const links = [
  ['About', '/about'],
  ['Calendar', '/calendar'],
  ['Family Updates', '/announcements'],
  ['Ways to Help', '/ways-to-help'],
  ['Message Board', '/message-board'],
  ['Photo Gallery', '/photo-gallery'],
  ['Well Wishes', '/well-wishes'],
  ['People', '/community-people'],
]

const activeLink = 'Home'

const CommunityNavbar = (props) => {
  return (
    <Bar>
      <Columns isMultiline={true}>
        <Columns.Column>
          <Link to='/community-home'>
            <Button className='is-small is-primary'>
              <strong style={{ fontSize: '1.2em' }}>
                {localStorage.getItem('community-name')}
              </strong>
            </Button>
          </Link>
        </Columns.Column>
        {links.map((title) => (
          <Columns.Column>
            <Link to={title[1]}>
              <Button
                className={
                  title === activeLink
                    ? 'is-small is-primary is-active'
                    : 'is-small is-primary'
                }
              >
                {title[0]}
              </Button>
            </Link>
          </Columns.Column>
        ))}
      </Columns>
    </Bar>
  )
}

export default CommunityNavbar
