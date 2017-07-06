/**
 * Created by larryjones on 6/25/17.
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import VotingContainer from './components/Voting';
// import Results from './components/Results';
// <Route path="/results" component={Results} />

const App = () => {
  console.log('In App');
  return (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={VotingContainer} />
      </Switch>
    </Router>
  </div>
)};

export default App;
