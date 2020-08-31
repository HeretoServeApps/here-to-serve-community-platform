import React from 'react'
import Box from 'react-bulma-components/lib/components/box'
import { Link } from 'react-router-dom'

import Menu from 'react-bulma-components/lib/components/menu'
import CustomSections from './customSections'
import {
  Layers,
  Calendar,
  AlertCircle,
  UserPlus,
  Users,
  Paperclip,
  Mail,
  Send,
  Inbox,
  Edit,
  Star,
} from 'react-feather'

const SideBar = (props) => {
  return (
    <div>
      <Menu color='white'>
        <Menu.List>
          <Box>
            <CustomSections />

            <Link to='/create-new-activity'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Calendar size={12} style={{ marginRight: '10px' }} />
                  <p>Create New Activity</p>
                </div>
              </p>
            </Link>

            <Link to='#'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Layers size={12} style={{ marginRight: '10px' }} />
                  <p>Manage Existing Activities</p>
                </div>
              </p>
            </Link>

            <Link to='/activity-report'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Paperclip size={12} style={{ marginRight: '10px' }} />
                  <p>Activity Report</p>
                </div>
              </p>
            </Link>
            <hr />

            <Link to='/community-people'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Users size={12} style={{ marginRight: '10px' }} />{' '}
                  <p>View & Update Member Information</p>
                </div>
              </p>
            </Link>

            <Link to='/add-people'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <UserPlus size={12} style={{ marginRight: '10px' }} />
                  <p>Invite New Members</p>
                </div>
              </p>
            </Link>

            <Link to='/join-requests'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <AlertCircle size={12} style={{ marginRight: '10px' }} />
                  <p>Review Join Requests</p>
                </div>
              </p>
            </Link>

            <hr />

            <Link to='/create-announcement'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Send size={12} style={{ marginRight: '10px' }} />{' '}
                  <p>Add Announcement</p>
                </div>
              </p>
            </Link>

            <Link to='/email-members'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Mail size={12} style={{ marginRight: '10px' }} />{' '}
                  <p>Email Members</p>
                </div>
              </p>
            </Link>

            <Link to='/edit-community'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Edit size={12} style={{ marginRight: '10px' }} />{' '}
                  <p>Edit Community Information</p>
                </div>
              </p>
            </Link>

            <hr />

            <Link to='/create-custom-section'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Star size={12} style={{ marginRight: '10px' }} />{' '}
                  <p>Create Custom Section</p>
                </div>
              </p>
            </Link>

            <Link to='/manage-custom-sections'>
              <p className='sidebar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Layers size={12} style={{ marginRight: '10px' }} />{' '}
                  <p>Manage Custom Sections</p>
                </div>
              </p>
            </Link>
          </Box>
        </Menu.List>
      </Menu>
    </div>
  )
}

export default SideBar
