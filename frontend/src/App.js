import React, { useState, useEffect } from 'react'
import { 
  Route, 
  Switch,
  BrowserRouter as Router 
} from 'react-router-dom'

import Header from './components/header'
import Register from './pages/Register'
import MyCommunities from './pages/MyCommunities'
import SelectCommunities from './pages/SelectCommunities'

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
            <Route path="/my-communities" component={MyCommunities}/>
            <Route path="/register" component={Register}/>
            <Route path="/select-communities" component={SelectCommunities}/>
        </Switch>
      </Router>
    </div>
  );
}

