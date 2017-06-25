/**
 * Created by larryjones on 6/25/17.
 */

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Voting from './components/Voting';
import Results from './components/Results';

/*
 const pair = ['Trainspotting', '28 Days Later'];
 const voteFor = (entry) => {
 console.log(`Voted for ${entry}`);
 };
 const props = {
 pair,
 voteFor
 };
 */
/*
 const props = {
 winner: 'Trainspotting'
 };
 */

const App = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Voting} />
      <Route path="/results" component={Results} />
    </div>
  </HashRouter>
);

export default App;
