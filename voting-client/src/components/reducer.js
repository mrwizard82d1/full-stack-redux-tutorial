/**
 * Created by larryjones on 7/2/17.
 */

import { Map } from 'immutable';

function setState(beforeState, toSetState) {
  return beforeState.merge(toSetState);
}

export default function reduce(beforeState = Map(), action) {
  switch(action.type) {
  case 'SET_STATE':
    return setState(beforeState, action.state);
  default:
    return Map({});
  }
}