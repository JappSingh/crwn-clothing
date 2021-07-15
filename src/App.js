import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

/*
function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
*/

// exact === exact={true}; path must be exactly '/' for HomePage component to render.
// If exact not specified, even if url = '/hats', the HomePage will render (coz '/' is there), along with HatsPage...
// With Routes enclosed within 'Switch': only the first matching route component will be rendered.. So, w/o exact, only HomePage will be displayed..
// param in path passed as: '/topics/:topicId'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>    
  );
}

export default App;
