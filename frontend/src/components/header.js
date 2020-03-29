import React from "react"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Login from '../pages/Login'
import About from '../pages/About'
import Welcome from '../pages/Welcome'
import logo from '../images/logo.png'

import Navbar from 'react-bulma-components/lib/components/navbar'
import Box from 'react-bulma-components/lib/components/box'
import Heading from 'react-bulma-components/lib/components/heading'
import '../stylesheets/App.sass';

const Header = () => (
    <Router>
        <Box>
            <Navbar color="white">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src={logo} alt="logo" height="100" width="130"/>
                    </Navbar.Item>
                    <Navbar.Burger role="button" ariaLabel="menu" ariaExpanded="false" dataTarget="navbarBasicExample">
                        <span ariaHidden="true"></span>
                        <span ariaHidden="true"></span>
                        <span ariaHidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>
                <Navbar.Menu id="navbarBasicExample">
                <Navbar.Container position="end">
                    <Navbar.Item>
                        <Navbar.Link arrowless={true}>
                            <Link style={{ textDecoration: 'none' }} to="/home"><Heading size={6}>Home</Heading></Link>
                        </Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Navbar.Link arrowless={true}>
                            <Link style={{ textDecoration: 'none' }} to="/about"><Heading size={6}>About</Heading></Link>
                        </Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Navbar.Link arrowless={true}>
                            <Link style={{ textDecoration: 'none' }} to="/login"><Heading size={6}>Login</Heading></Link>
                        </Navbar.Link>
                    </Navbar.Item>
                </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </Box>
        {/* Routes. */}
        <Route path="/login" exact component={Login}/>
        <Route path="/about" exact component={About}/>
        <Route path="/home" exact component={Welcome}/>
    </Router>
);

export default Header;