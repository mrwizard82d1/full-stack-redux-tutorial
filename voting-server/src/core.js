/**
 * Created by larryjones on 6/13/17.
 */

import { List, Map } from 'immutable';

export function setEntries(state, toInclude) {
  return state.set('entries', List(toInclude));
}

export function next(state) {
  const entries = state.get('entries');
  const result = state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  });
  return result;
}

export function vote(state, voteFor) {
  return state.updateIn(['vote', 'tally', voteFor], 0, tally => tally + 1);
}