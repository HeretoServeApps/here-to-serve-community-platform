import React from 'react'
import Box from 'react-bulma-components/lib/components/box'
import { Link } from 'react-router-dom'

import Menu from 'react-bulma-components/lib/components/menu'
import CustomSections from './customSections'

const SideBar = (props) => {
  return (
    <div>
      <CustomSections />
      <Menu color='white' maxWidth='20%'>
        <Menu.List>
          <h1>
            <strong>Manage Calendar</strong>
          </h1>
          <br />
          <Box>
            <Link to='/create-new-activity'>
              <p className='sidebar'>Create New Activity</p>
            </Link>

            <Link to='#'>
              <p className='sidebar'>Manage Existing Activities</p>
            </Link>

            <Link to='/activity-report'>
              <p className='sidebar'>Activity Report</p>
            </Link>
          </Box>

          <h1>
            <strong>Manage Members</strong>
          </h1>
          <br />
          <Box>
            <Link to='/community-people'>
              <p className='sidebar'>View & Update Member Information</p>
            </Link>

            <Link to='#'>
              <p className='sidebar'>Invite Added Members to Sign in</p>
            </Link>

            <Link to='#'>
              <p className='sidebar'>Review Join Requests</p>
            </Link>
          </Box>

          <h1>
            <strong>Manage Community</strong>
          </h1>
          <br />
          <Box>
            <Link to='/announcements'>
              <p className='sidebar'>Manage Announcements & Emails</p>
            </Link>

            <Link to='/create-announcement'>
              <p className='sidebar'>Add Announcement</p>
            </Link>

            <Link to='#'>
              <p className='sidebar'>Email Members</p>
            </Link>

            <Link to='#'>
              <p className='sidebar'>Edit Community Information</p>
            </Link>
          </Box>
        </Menu.List>
      </Menu>
    </div>
  )
}

export default SideBar
