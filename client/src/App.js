import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

import './App.css';

import { Provider } from './context';

const App = () => (
  <Provider>
    <Router>
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/lyrics/track/:id' component={Lyrics} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
