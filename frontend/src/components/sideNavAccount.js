import React from 'react'

import Box from 'react-bulma-components/lib/components/box'
import Menu from 'react-bulma-components/lib/components/menu';

import '../stylesheets/App.sass'

const SideNavAccount = (props) => {
  return (
    <div>
      <Box>
        <Menu color='white'>
            <Menu.List.Item>
                General Account Settings
            </Menu.List.Item>
            <Menu.List.Item>
                Email Settings
            </Menu.List.Item>
        </Menu>
      </Box>
    </div>
  )
}

export default SideNavAccount
