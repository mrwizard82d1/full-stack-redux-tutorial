/**
 * Created by larryjones on 6/17/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import Vote from './Vote';
import Winner from './Winner';

export function Voting(props) {
  return (
    <div>
      {
        props.winner ?
        <Winner winner={props.winner} /> :
        <Vote {...props} />
      }
    </div>
  )
}

function mapStateToProps(state) {
  console.log('State to `Voting`: ', state);
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
  };
}

export default connect(mapStateToProps)(Voting);

