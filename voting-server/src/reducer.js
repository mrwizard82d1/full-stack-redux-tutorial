/**
 * Created by larryjones on 6/16/17.
 */

import { setEntries, next, vote } from './core';

export default function reduce(beforeState, action) {
  switch(action.type) {
    case 'SET_ENTRIES':
      return setEntries(beforeState, action.entries);
      break;
    case 'NEXT':
      return next(beforeState, action);
      break;
    case 'VOTE':
      return vote(beforeState, action.entry);
      break;
    default:
      return beforeState;
  }
}
