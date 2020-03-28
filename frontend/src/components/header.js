import React from "react"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Login from '../pages/Login'
import About from '../pages/About'
import Welcome from '../pages/Welcome'
import { Pane, Text, Tab } from "evergreen-ui"

const Header = () => (
    <Router>
        <Pane display="flex" padding={25} background="white" elevation={1}>
        {/* <Pane flex={1} alignItems="center" display="flex" marginLeft={50}>
            <Heading size={600}>Here to Serve</Heading>
        </Pane> */}
        <Pane flex={1} alignItems="center" display="flex" marginLeft={50}>
            <img src={require("../images/logo.png")} alt={""} width={150}/>
        </Pane>
        
        <Tab marginRight={25}>
            <Link style={{ textDecoration: 'none' }} to="/home"><Text>Home</Text></Link>
        </Tab>
        <Tab marginRight={25}>
            <Link style={{ textDecoration: 'none' }} to="/about"><Text>About</Text></Link>
        </Tab>
        <Tab marginRight={50}>
            <Link style={{ textDecoration: 'none' }} to="/login"><Text>Login</Text></Link>
        </Tab>
        </Pane>
        {/* Routes. */}
        <Route path="/login" exact component={Login}/>
        <Route path="/about" exact component={About}/>
        <Route path="/home" exact component={Welcome}/>
    </Router>
);

export default Header;