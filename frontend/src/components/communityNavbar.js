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
  ['Home', '/community-home'],
  ['Calendar', '/calendar'],
  ['Announcements', '/announcements'],
  ['Ways to Help', '/ways-to-help'],
  ['Message Board','/message-board'],
  ['Photo Gallery', '/photo-gallery'],
  ['Well Wishes', '/well-wishes'],
  ['People', '/community-people']
]

const activeLink = 'Home'

const CommunityNavbar = (props) => {
  return (
    <Bar>
      <Columns isMultiline={true}>
        <Columns.Column isMultiline={true} size={11}>
          <Columns>
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
        </Columns.Column>
        <Columns.Column size={1}>
          <Button className='is-small is-primary is-inverted'>
            <b>+ Add Section</b>
          </Button>
        </Columns.Column>
      </Columns>
    </Bar>
  )
}

export default CommunityNavbar
