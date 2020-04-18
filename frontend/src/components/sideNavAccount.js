import React from 'react'
import { Link } from 'react-router-dom'

import Menu from 'react-bulma-components/lib/components/menu';

const SideNavAccount = (props) => {
  return (
    <div>
        <Menu color='white' maxWidth='50%'>
            <Menu.List>
                <Menu.List.Item>
                    <Link to='/account-settings'>General Account Settings</Link>
                </Menu.List.Item>
                <Menu.List.Item>
                  <Link to='/email-settings'>Email Settings</Link>
                </Menu.List.Item>
            </Menu.List>
        </Menu>
    </div>
  )
}

export default SideNavAccount
