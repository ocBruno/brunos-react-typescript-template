import React from 'react'

import { Router, Route } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import { BrunosPortfolio } from './pages'

import { BrunosPortfolioRoute } from './routing'


function App() {

  let history = createBrowserHistory()

  return (
    <Router history={history}>

      <Route path={BrunosPortfolioRoute}>

        <BrunosPortfolio />

      </Route>

    </Router>
  )
}


export default App
