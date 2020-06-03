import React from 'react'
import Box from 'react-bulma-components/lib/components/box';
import { Link } from 'react-router-dom'

import Menu from 'react-bulma-components/lib/components/menu';

const SideBar = (props) => {
  return (
    <div>
        <Menu color='white' maxWidth='20%'>
            <Menu.List>
                <h1>
                   <strong>Manage Calendar</strong> 
                </h1>
                <br/>
                <Box>
                <Menu.List.Item className={'navbar-item'}>
                    <Link to='/create-new-activity'><p className="sidebar">Create New Activity</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Edit Existing Activity</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Manage Events</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Activity Report</p></Link>
                </Menu.List.Item>
                </Box>

                <h1>
                   <strong>Manage Members</strong> 
                </h1>
                <br/>
                <Box>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='/community-people'><p className="sidebar">View & Update Member Information</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Invite Added Members to Sign in</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Review Join Requests</p></Link>
                </Menu.List.Item>
                </Box>

                <h1>
                   <strong>Manage Community</strong> 
                </h1>
                <br/>
                <Box>
                <Menu.List.Item className={'navbar-item'}> 
                    <Link to='/announcements'><p className="sidebar">Manage Announcements & Emails</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='/create-announcement'><p className="sidebar">Add Announcement</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Email Members</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Edit Community Information</p></Link>
                </Menu.List.Item>
                </Box>

                <h1>
                   <strong>Custom Sections</strong> 
                </h1>
                <br/>
                <Box>
                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Family Updates</p></Link>
                </Menu.List.Item>

                <Menu.List.Item className={'navbar-item'}>
                    <Link to='#'><p className="sidebar">Best Recipes</p></Link>
                </Menu.List.Item>

                </Box>

            </Menu.List>
        </Menu>
    </div>
  )
}

export default SideBar
