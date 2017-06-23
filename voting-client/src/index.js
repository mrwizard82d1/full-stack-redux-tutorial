import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import './index.css';

const pair = ['Trainspotting', '28 Days Later'];
const voteFor = (entry) => {
  console.log(`Voted for ${entry}`);
};
const props = {
  pair,
  voteFor
};

ReactDOM.render(
  <Voting {...props} />,
  document.getElementById('root')
);
