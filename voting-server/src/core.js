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
  const candidateResult = state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2).concat(winner)
  });
  
  // If a single entry and no more pairs to test
  if (candidateResult.get('entries').count() === 1 &&
    candidateResult.getIn(['vote', 'pair']).count() == 0) {
    // We have a winner
    console.log(candidateResult.get('entries'));
    return Map({winner: candidateResult.get('entries').get(0)});
  } else {
    return candidateResult;
  }
}

export function vote(state, voteFor) {
  return state.updateIn(['vote', 'tally', voteFor], 0, tally => tally + 1);
}