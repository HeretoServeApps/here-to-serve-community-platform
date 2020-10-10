import React from 'react'
import { Link } from 'react-router-dom'

import Menu from 'react-bulma-components/lib/components/menu';

const SideNavCommunity = (props) => {
  return (
    <div>
        <Menu color='white' maxWidth='50%'>
            <Menu.List>
                <Menu.List.Item>
                    <Link to='/community-home'>Home</Link>
                </Menu.List.Item>
                <Menu.List.Item>
                    <Link to='#'>About</Link>
                </Menu.List.Item>
                <Menu.List.Item>
                    <Link to='#'>Members</Link>
                </Menu.List.Item>
                <Menu.List.Item>
                    <Link to='#'>Calendar</Link>
                </Menu.List.Item>
                <Menu.List.Item>
                    <Link to='#'>Announcements</Link>
                </Menu.List.Item>
                <Menu.List.Item>
                    <Link to='#'>Community Settings</Link>
                </Menu.List.Item>
            </Menu.List>
        </Menu>
    </div>
  )
}

export default SideNavCommunity
