import React, { useState } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import logo from '../images/logo.png'

import Navbar from 'react-bulma-components/lib/components/navbar'
import Box from 'react-bulma-components/lib/components/box'
import CreateCommunity from '../pages/CreateCommunity'
import Heading from 'react-bulma-components/lib/components/heading'
import '../stylesheets/App.sass'

const HeaderLoggedIn = () => {
  const [active, setActive] = useState(false)
  return (
      <div>
        <Box>
          <Navbar color='white'>
            <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
              <a href='/'>
                <img src={logo} alt='logo' width='160' />
              </a>
              <Navbar.Burger
                role='button'
                ariaLabel='menu'
                ariaExpanded='false'
                dataTarget='navItems'
                onClick={e => setActive(!active)}
                className={active && 'is-active'}
              >
                <span ariaHidden='true'></span>
                <span ariaHidden='true'></span>
                <span ariaHidden='true'></span>
              </Navbar.Burger>
            </Navbar.Brand>
            <Navbar.Menu id='navItems' className={active && 'is-active'}>
              <Navbar.Container position='end'>
                <Link className={'navbar-item'} to='/my-communities'>
                  <Heading size={6}>My Communities</Heading>
                </Link>
                <Link className={'navbar-item'} to='/create-community'>
                  <Heading size={6}>Create Community</Heading>
                </Link>
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
        </Box>
        {/* Routes. */}
        <Route path='/create-community' exact component={CreateCommunity} />
      </div>
  )
}

export default HeaderLoggedIn
