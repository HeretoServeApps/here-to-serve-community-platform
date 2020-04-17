import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import logo from '../images/logo.png'

import Navbar from 'react-bulma-components/lib/components/navbar'
import Box from 'react-bulma-components/lib/components/box'
import Heading from 'react-bulma-components/lib/components/heading'
import '../stylesheets/App.sass'

const Header = (props) => {
  const [active, setActive] = useState(false)

  const logged_out_header = (
    <Navbar.Container position='end'>
      <Link className={'navbar-item'} to='/'>
        <Heading size={6}>Home</Heading>
      </Link>
      <Link className={'navbar-item'} to='/login'>
        <Heading size={6}>Login</Heading>
      </Link>
    </Navbar.Container>
  )

  const logged_in_header = (
    <Navbar.Container position='end'>
      <Link className={'navbar-item'} to='/my-communities'>
        <Heading size={6}>My Communities</Heading>
      </Link>
      <Link className={'navbar-item'} to='/create-community'>
        <Heading size={6}>Create Community</Heading>
      </Link>
      <Link className={'navbar-item'} to='/account-settings'>
        <Heading size={6}>My Account</Heading>
      </Link>
    </Navbar.Container>
  )

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
            {props.logged_in ? logged_in_header : logged_out_header}
          </Navbar.Menu>
        </Navbar>
      </Box>
    </div>
  )
}

export default Header

Header.propTypes = {
  logged_in: PropTypes.bool.isRequired,
};