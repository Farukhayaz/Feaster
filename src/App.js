import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import React from 'react'
import Home from './Pages/Home';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
