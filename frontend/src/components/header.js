import React from "react"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Login from '../pages/Login'
import About from '../pages/About'
import Welcome from '../pages/Welcome'
import logo from '../images/logo.png'

import Navbar from 'react-bulma-components/lib/components/navbar'
import Box from 'react-bulma-components/lib/components/box'

import '../stylesheets/App.sass';

const Header = () => (
    // <Router>
    //     <Pane display="flex" padding={25} background="white" elevation={1}>
    //         <Pane flex={1} alignItems="center" display="flex" marginLeft={50}>
    //             <img src={require("../images/logo.png")} alt={""} width={150}/>
    //         </Pane>
    //         <Tab marginRight={25}>
    //             <Link style={{ textDecoration: 'none' }} to="/welcome"><Text>Welcome</Text></Link>
    //         </Tab>
    //         <Tab marginRight={25}>
    //             <Link style={{ textDecoration: 'none' }} to="/about"><Text>About</Text></Link>
    //         </Tab>
    //         <Tab marginRight={50}>
    //             <Link style={{ textDecoration: 'none' }} to="/login"><Text>Login</Text></Link>
    //         </Tab>
    //     </Pane>
    //     {/* Routes. */}
    //     <Route path="/login" exact component={Login}/>
    //     <Route path="/about" exact component={About}/>
    //     <Route path="/welcome" exact component={Welcome}/>
    // </Router>
    <Router>
        <Box>
            <Navbar color="white">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src={logo} alt="logo" height="100" width="130"/>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu >
                <Navbar.Container position="end">
                    <Navbar.Item>
                        <Navbar.Link arrowless={true}>
                            <Link style={{ textDecoration: 'none' }} to="/welcome">Welcome</Link>
                        </Navbar.Link>
                    </Navbar.Item>

                    <Navbar.Item>
                        <Navbar.Link arrowless={true}>
                            <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
                        </Navbar.Link>
                    </Navbar.Item>

                    <Navbar.Item>
                        <Navbar.Link arrowless={true}>
                            <Link style={{ textDecoration: 'none' }} to="/login">Login</Link>
                        </Navbar.Link>
                    </Navbar.Item>
                </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </Box>
        {/* Routes. */}
        <Route path="/login" exact component={Login}/>
        <Route path="/about" exact component={About}/>
        <Route path="/welcome" exact component={Welcome}/>
    </Router>
);

export default Header;