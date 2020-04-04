import React, { useState, useEffect } from 'react'
import { 
  Route, 
  Switch,
  BrowserRouter as Router 
} from 'react-router-dom'

import Header from './components/header'
import MyCommunities from './pages/MyCommunities'

export default function App() {
  return (
    <div>
      <Header/ >
      <Router>
        <Switch>
            <Route path="/my-communities" component={MyCommunities}/>
          </Switch>
      </Router>
    </div>
  );
}

