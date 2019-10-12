import React from 'react' // Import Lazy and Suspense import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//Change this to dynamic imports using lazy const Name = lazy(()=> import(''))
import Home from './routes/Home'
import Gallery from './routes/Gallery'
import RandomCollage from './routes/RandomCollage'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav className="App-nav">
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
        {/* Suspense routes */}
        <Switch>
          <Route path="/collage">
            <RandomCollage />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>)
}

export default App
