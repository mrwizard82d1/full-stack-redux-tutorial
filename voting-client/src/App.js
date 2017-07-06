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
import ResultsContainer from './components/Results';

const App = () => {
  console.log('In App');
  return (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={VotingContainer} />
        <Route path="/results" component={ResultsContainer} />
      </Switch>
    </Router>
  </div>
)};

export default App;
