/**
 * Created by larryjones on 6/17/17.
 */

import React from 'react';
import Vote from './Vote';
import Winner from './Winner';
import { List } from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default function Voting(props) {
  console.log("In `Voting.render()`");
  const propsWithPair = Object.assign({}, props, { pair });
  return (
    <div>
      {
        propsWithPair.winner ?
        <Winner winner={propsWithPair.winner} /> :
        <Vote {...propsWithPair} />
      }
    </div>
  )
}
