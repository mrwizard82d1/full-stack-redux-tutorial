/**
 * Created by larryjones on 6/17/17.
 */

import React from 'react';
import Vote from './Vote';
import Winner from './Winner';

export default function Voting(props) {
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
