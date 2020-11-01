import React, { useState, useCallback } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import Header from './components/header'
import AppFooter from './components/footer'
import PrivateRoute from './components/privateroute'

import Register from './pages/Register'
import MyCommunities from './pages/MyCommunities'
import SelectCommunities from './pages/JoinCommunities'
import CreateCommunity from './pages/CreateCommunity'
import Login from './pages/Login'
import CommunityAbout from './pages/CommunityAbout'
import Welcome from './pages/Welcome'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import AccountSettings from './pages/AccountSettings'
import EmailSettings from './pages/EmailSettings'
import CalendarPage from './pages/CalendarPage'
import ForgotPasswordConfirm from './pages/ForgotPasswordConfirm.js'
import ResetPasswordConfirm from './pages/ResetPasswordConfirm.js'
import CreateNewActivity from './pages/CreateNewActivity'
import Announcements from './pages/Announcements'
import CreateAnnouncement from './pages/CreateAnnouncement'
import OneCommunityMember from './pages/CommunityOneMember'
import CommunityAddMembers from './pages/CommunityAddMember'
import CommunityEdit from './pages/CommunityEdit'
import CommunityPeople from './pages/CommunityPeople'
import CommunityHome from './pages/CommunityHome'
import WaysToHelp from './pages/WaysToHelp'
import WellWishes from './pages/WellWishes'
import CreateCustomSection from './pages/CreateCustomSection'
import ActivityReport from './pages/ActivityReport'
import CustomGeneral from './pages/CustomGeneral'
import PhotoGallery from './pages/PhotoGallery'
import MessageBoard from './pages/MessageBoard'
import PasswordSettings from './pages/PasswordSettings'
import ActivityEdit from './pages/ActivityEdit'
import ManageCustomSections from './pages/ManageCustomSections'
import JoinRequests from './pages/JoinRequests'
import EmailMembers from './pages/EmailMembers'
import ManageActivities from './pages/ManageActivities'
import AssignVolunteers from 'pages/AssignVolunteers'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') &&
      localStorage.getItem('token') !== 'undefined' &&
      localStorage.getItem('token') !== undefined
      ? true
      : false
  )

  const handleLogin = useCallback((email, password, rememberMe) => {
    fetch('/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(
        (json) => {
          localStorage.setItem('is-staff', json.user.is_staff)
          localStorage.setItem('token', json.token)
          localStorage.setItem('rememberMe', rememberMe)
          localStorage.setItem('email', email)
          localStorage.getItem('token') &&
          localStorage.getItem('token') !== 'undefined' &&
          localStorage.getItem('token') !== undefined
            ? setLoggedIn(true)
            : setLoggedIn(false)
        },
        (error) => {
          console.log(error)
        }
      )
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
      })
  }, [])

  const handleSignup = useCallback(
    (
      email,
      password,
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      city,
      country,
      state,
      zipcode,
      phoneNumber1,
      phoneNumber1Type,
      phoneNumber2,
      phoneNumber2Type,
      howLearn,
      who,
      howHelp,
      howKnow,
      skillsToOffer
    ) => {
      var FormData = require('form-data')
      var data = new FormData()
      data.append('email', email)
      data.append('password', password)
      data.append('first_name', firstName)
      data.append('last_name', lastName)
      data.append('address_line_1', addressLine1)
      data.append('address_line_2', addressLine2)
      data.append('city', city)
      data.append('country', country)
      data.append('state', state)
      data.append('zipcode', zipcode)
      data.append('phone_number_1', phoneNumber1)
      data.append('phone_number_1_type', phoneNumber1Type)
      data.append('phone_number_2', phoneNumber2)
      data.append('phone_number_2_type', phoneNumber2Type)
      data.append('how_learn', howLearn)
      data.append('how_help', howHelp)
      data.append('how_know', howKnow)
      data.append('skills_to_offer', skillsToOffer)
      data.append('who', who)

      var config = {
        method: 'post',
        url: process.env.REACT_APP_API_URL + '/users/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios(config)
        .then(function (response) {
          localStorage.setItem('is-staff', response.data.is_staff)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('email', email)
          localStorage.getItem('token') &&
          localStorage.getItem('token') !== 'undefined' &&
          localStorage.getItem('token') !== undefined
            ? setLoggedIn(true)
            : setLoggedIn(false)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    []
  )

  const handleLogout = useCallback(() => {
    localStorage.clear()
    setLoggedIn(false)
  }, [])

  const handleForgotPassword = useCallback((email) => {
    fetch('/reset-password/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then(
        (json) => {},
        (error) => {
          console.log(error)
        }
      )
  }, [])

  const baseName = ''

  return (
    <div>
      <Router basename='/app'>
        <Header logged_in={loggedIn} handle_logout={handleLogout} />
        <Switch>
          {/* Routes that are available without authentication */}
          <Route
            path={baseName + '/register'}
            render={() => (
              <Register handle_signup={handleSignup} logged_in={loggedIn} />
            )}
          />
          <Route
            path={baseName + '/login'}
            render={() => (
              <Login handle_login={handleLogin} logged_in={loggedIn} />
            )}
          />
          <Route path={baseName + '/home'} exact component={Welcome} />
          <Route
            path={baseName + '/forgot-password'}
            render={() => (
              <ForgotPassword handle_forgot_password={handleForgotPassword} />
            )}
          />
          <Route path={baseName + '/reset-password'} exact component={ResetPassword} />
          <Route
            path={baseName + '/forgot-password-confirmation'}
            exact
            component={ForgotPasswordConfirm}
          />
          <Route
            path={baseName + '/reset-password-confirmation'}
            exact
            component={ResetPasswordConfirm}
          />

          {/* Routes that are available only if user logs in */}
          <PrivateRoute
            path={baseName + '/my-communities'}
            exact
            component={MyCommunities}
          />
          <PrivateRoute
            path={baseName + '/select-communities'}
            exact
            component={SelectCommunities}
          />
          <PrivateRoute
            path={baseName + '/create-community'}
            exact
            component={CreateCommunity}
          />
          <PrivateRoute
            path={baseName + '/account-settings'}
            exact
            component={AccountSettings}
          />
          <PrivateRoute
            path={baseName + '/email-settings'}
            exact
            component={EmailSettings}
          />
          <PrivateRoute
            path={baseName + '/community-home'}
            exact
            component={CommunityHome}
          />
          <PrivateRoute path={baseName + '/calendar'} exact component={CalendarPage} />
          <PrivateRoute
            path={baseName + '/create-new-activity'}
            exact
            component={CreateNewActivity}
          />
          <PrivateRoute path={baseName + '/announcements'} exact component={Announcements} />
          <PrivateRoute
            path={baseName + '/create-announcement'}
            exact
            component={CreateAnnouncement}
          />
          <PrivateRoute
            path={baseName + '/community-people'}
            exact
            component={CommunityPeople}
          />
          <PrivateRoute
            path={baseName + '/community/:member'}
            exact
            component={OneCommunityMember}
          />
          <PrivateRoute
            path={baseName + '/add-people'}
            exact
            component={CommunityAddMembers}
          />
          <PrivateRoute path={baseName + '/ways-to-help'} exact component={WaysToHelp} />
          <PrivateRoute path={baseName + '/well-wishes'} exact component={WellWishes} />
          <PrivateRoute
            path={baseName + '/create-custom-section'}
            exact
            component={CreateCustomSection}
          />
          <PrivateRoute path={baseName + '/about'} exact component={CommunityAbout} />
          <PrivateRoute
            path={baseName + '/activity-report'}
            exact
            component={ActivityReport}
          />
          <PrivateRoute
            path={baseName + '/custom/:section'}
            exact
            component={CustomGeneral}
          />
          <PrivateRoute path={baseName + '/photo-gallery'} exact component={PhotoGallery} />
          <PrivateRoute
            path={baseName + '/edit-community'}
            exact
            component={CommunityEdit}
          />
          <PrivateRoute path={baseName + '/message-board'} exact component={MessageBoard} />
          <PrivateRoute
            path={baseName + '/password-settings'}
            exact
            component={PasswordSettings}
          />
          <PrivateRoute
            path={baseName + '/edit-activity/:activity'}
            exact
            component={ActivityEdit}
          />
          <PrivateRoute
            path={baseName + '/manage-custom-sections'}
            exact
            component={ManageCustomSections}
          />
          <PrivateRoute path={baseName + '/join-requests'} exact component={JoinRequests} />
          <PrivateRoute path={baseName + '/email-members'} exact component={EmailMembers} />
          <PrivateRoute path={baseName + '/assign-volunteers'} exact component={AssignVolunteers} />
          <PrivateRoute
            path={baseName + '/manage-activities'}
            exact
            component={ManageActivities}
          />
        </Switch>
        <AppFooter />
      </Router>
    </div>
  )
}
