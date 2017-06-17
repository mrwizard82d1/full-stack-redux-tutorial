/**
 * Created by larryjones on 6/16/17.
 */

import { setEntries, next, vote, INITIAL_STATE } from './core';

export default function reduce(beforeState = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_ENTRIES':
      return setEntries(beforeState, action.entries);
      break;
    case 'NEXT':
      return next(beforeState, action);
      break;
    case 'VOTE':
      // Previous implementations of `vote` expected that function to handle the
      // *entire* application state. The current implementation only handles the
      // the `vote` (sub)state. Consequently, I changed this code to only handle
      // the (sub)state.
      return beforeState.update('vote',
        currentVote => vote(currentVote, action.entry));
      break;
    default:
      return beforeState;
  }
}
