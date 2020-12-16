import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'react-bulma-components/lib/components/button'
import Columns from 'react-bulma-components/lib/components/columns'

const Bar = styled.div`
  background-color: #2c8595;
  z-index: -1;
  padding: 0 5%;
`

const adminLinks = [
  ['About', '/about'],
  ['Administration', '/administration'],
  ['Calendar', '/calendar'],
  ['Family Updates', '/announcements'],
  ['Ways to Help', '/ways-to-help'],
  ['Message Board', '/message-board'],
  ['Photo Gallery', '/photo-gallery'],
  ['Well Wishes', '/well-wishes'],
  ['People', '/community-people'],
  ['Custom Sections', '/custom-sections']
]

const nonAdminLinks = [
  ['About', '/about'],
  ['Calendar', '/calendar'],
  ['Family Updates', '/announcements'],
  ['Ways to Help', '/ways-to-help'],
  ['Message Board', '/message-board'],
  ['Photo Gallery', '/photo-gallery'],
  ['Well Wishes', '/well-wishes'],
  ['People', '/community-people'],
  ['Custom Sections', '/custom-sections']
]


const CommunityNavbar = () => {
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <Bar>
      <Columns isMultiline={true}>
        <Columns.Column
          size={2}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            overflow: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          <Link to='/community-home'>
            <Button className='is-small is-primary'>
              <strong style={{ fontSize: '1.6em' }}>
                {localStorage.getItem('community-name')}
              </strong>
            </Button>
          </Link>
        </Columns.Column>

        {localStorage.getItem('user-role') === 'Administrator' ?
          <Columns.Column style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
            {adminLinks.map((title) => (
              <Link to={title[1]}>
                <Button
                  className={
                    title === activeLink
                      ? 'is-small is-primary is-active'
                      : 'is-small is-primary'
                  }
                  onClick={() => setActiveLink(title)}
                >
                  <strong style={{ fontSize: '1.3em' }}>{title[0]}</strong>
                </Button>
              </Link>
            ))}
          </Columns.Column>
          :
          <Columns.Column style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
            {nonAdminLinks.map((title) => (
              <Link to={title[1]}>
                <Button
                  className={
                    title === activeLink
                      ? 'is-small is-primary is-active'
                      : 'is-small is-primary'
                  }
                  onClick={() => setActiveLink(title)}
                >
                  <strong style={{ fontSize: '1.3em' }}>{title[0]}</strong>
                </Button>
              </Link>
            ))}
          </Columns.Column>
        }

      </Columns>
    </Bar>
  )
}

export default CommunityNavbar
