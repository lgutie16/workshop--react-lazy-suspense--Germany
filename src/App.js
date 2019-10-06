import React, { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//import { Home, About, Members } from './routes'
import './App.css';

// https://web.dev/code-splitting-suspense
// Show Basic Component lazy loading (done)
// Show route lazy loading
// Show a list of post (from api call) by demand
// Show how to test a component with lazy loading


const Gallery = lazy(() => import('./routes/Gallery'))
const RandomCollage = lazy(() => import('./routes/RandomCollage'))


const App = () => {
  return <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collage">Collage</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>

    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/collage">
          <RandomCollage />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <div>We have three examples</div>
        </Route>
      </Switch>
    </Suspense>
  </Router>

}

export default App
