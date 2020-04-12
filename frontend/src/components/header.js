import React, { useState, useEffect } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Login from '../pages/Login'
import About from '../pages/About'
import Welcome from '../pages/Welcome'
import logo from '../images/logo.png'
import CreateCommunity from '../pages/CreateCommunity'

import Navbar from 'react-bulma-components/lib/components/navbar'
import Box from 'react-bulma-components/lib/components/box'
import Heading from 'react-bulma-components/lib/components/heading'
import '../stylesheets/App.sass'

const Header = () => {
  const [active, setActive] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  let navLinks;

  if (localStorage.getItem('token')) {
    setLoggedIn(true);
  } else {
     setLoggedIn(false);
  }

 /* useEffect(() => {
        if(loggedIn) {
            navLinks = <Navbar.Container position='end'>
                <Link className={'navbar-item'} to='/my-communities'>
                  <Heading size={6}>My Communities</Heading>
                </Link>
                <Link className={'navbar-item'} to='/create-community'>
                  <Heading size={6}>Create Community</Heading>
                </Link>
              </Navbar.Container>
        } else {
            navLinks = <Navbar.Container position='end'>
                <Link className={'navbar-item'} to='/'>
                  <Heading size={6}>Home</Heading>
                </Link>
                <Link className={'navbar-item'} to='/login'>
                  <Heading size={6}>Login</Heading>
                </Link>
              </Navbar.Container>
        }
    }, [loggedIn])*/

    navLinks = <Navbar.Container position='end'>
                <Link className={'navbar-item'} to='/'>
                  <Heading size={6}>Home</Heading>
                </Link>
                <Link className={'navbar-item'} to='/login'>
                  <Heading size={6}>Login</Heading>
                </Link>
              </Navbar.Container>

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
              {navLinks}
            </Navbar.Menu>
          </Navbar>
        </Box>
        {/* Routes. */}
        <Route path='/create-community' exact component={CreateCommunity} />
        <Route path='/login' exact component={Login} />
        <Route path='/about' exact component={About} />
        <Route path='/' exact component={Welcome} />
      </div>
  )
}

export default Header
