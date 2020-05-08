import React, { useState, useCallback } from 'react'
import { 
  Route, 
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'

import Header from './components/header'
import Register from './pages/Register'
import MyCommunities from './pages/MyCommunities'
import SelectCommunities from './pages/SelectCommunities'
import CreateCommunity from './pages/CreateCommunity'
import Login from './pages/Login'
import About from './pages/About'
import Welcome from './pages/Welcome'
import AccountSettings from './pages/AccountSettings'
import EmailSettings from './pages/EmailSettings'
import CommunityHome from './pages/CommunityHome'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false)

  const handleLogin = useCallback((email, password, rememberMe) => {
    fetch('/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token)
        localStorage.setItem('rememberMe', rememberMe)
        JSON.stringify(json.token) ? setLoggedIn(true) : setLoggedIn(false)
      },
        (error) => {
          console.log(error);
        })
  }, [])

  const handleSignup = useCallback((email, password, firstName, lastName, addressLine1, addressLine2,
                                    city, country, state, zipcode,
                                    phoneNumber1, phoneNumber1Type, phoneNumber2, phoneNumber2Type, 
                                    howLearn, howHelp, howKnow, skillsToOffer) => {
    fetch('/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        address_line_1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        country: country,
        state: state,
        zipcode: zipcode,
        phone_number_1: phoneNumber1,
        phone_number_1_type: phoneNumber1Type,
        phone_number_2: phoneNumber2,
        phone_number_2_type: phoneNumber2Type,
        how_learn: howLearn,
        how_help: howHelp,
        how_know: howKnow,
        skills_to_offer: skillsToOffer,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem('token', json.token)
        JSON.stringify(json.token) ? setLoggedIn(true) : setLoggedIn(false)
      })
  }, [])

  return (
    <div>
      <Router>
        <Header 
          logged_in = {loggedIn}
        />
        <Switch>
            <Route path="/my-communities" exact component={MyCommunities}/>
            <Route path="/register" render={
              () => <Register handle_signup={handleSignup} logged_in={loggedIn}/>}
            />
            <Route path="/select-communities" exact component={SelectCommunities}/>
            <Route path='/create-community' exact component={CreateCommunity} />
            <Route path='/login' render={
              () => <Login handle_login={handleLogin} logged_in={loggedIn}/>}
            />
            <Route path='/about' exact component={About} />
            <Route path='/' exact component={Welcome} />
            <Route path='/account-settings' exact component={AccountSettings} />
            <Route path='/email-settings' exact component={EmailSettings} />
            <Route path='/community-home' exact component={CommunityHome} />
        </Switch>
      </Router>
    </div>
  );
}

