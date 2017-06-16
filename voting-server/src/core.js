/**
 * Created by larryjones on 6/13/17.
 */

import { List, Map } from 'immutable';

export function setEntries(state, toInclude) {
  return state.set('entries', List(toInclude));
}

function getWinners(vote) {
  if (! vote) {
    return [];
  }
  
  const [candidateA, candidateB] = vote.get('pair');
  if (vote.getIn(['tally', candidateA]) === vote.getIn(['tally', candidateB])) {
    return vote.get('pair');
  } else if (vote.getIn(['tally', candidateA]) > vote.getIn(['tally', candidateB])) {
    return List.of(candidateA);
  } else {
    return List.of(candidateB);
  }
}

export function next(state) {
  const entries = state.get('entries');
  const winner = getWinners(state.get('vote'));
  const result = state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2).concat(winner)
  });
  return result;
}

export function vote(state, voteFor) {
  return state.updateIn(['vote', 'tally', voteFor], 0, tally => tally + 1);
}