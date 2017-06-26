/**
 * Created by larryjones on 6/25/17.
 */

import { List, Map } from 'immutable';
import React from 'react';
import { Route } from 'react-router-dom';
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

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

const renderVoting = props => <Voting {...props} pair={pair} />;
const renderResults = props => <Results {...props} pair={pair} tally={tally} />;

const App = () => (
  <div>
    <Route exact path="/" render={ renderVoting } />
    <Route path="/results" render={ renderResults } />
  </div>
);

export default App;
