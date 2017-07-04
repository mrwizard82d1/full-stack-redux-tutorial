import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reduce from './components/reducer';

const store = createStore(reduce);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: { 'Sunshine': 2 },
    },
  },
});

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
