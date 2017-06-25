import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Voting from './components/Voting';
import './index.css';

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

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={Voting} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
