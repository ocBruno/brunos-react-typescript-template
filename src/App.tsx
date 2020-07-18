import React from 'react'

import { Router, Route } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import './index.css'
import './assets/tailwind.pcss'

import { HomePage } from './pages'

import { HomeRoute } from './routing'


function App() {

  let history = createBrowserHistory()

  return (
    <Router history={history}>

      <Route path={HomeRoute}>

        <HomePage title="Home" />

      </Route>

    </Router>
  )
}


export default App
