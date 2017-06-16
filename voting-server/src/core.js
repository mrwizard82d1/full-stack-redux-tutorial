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
  // Create our candidate entries for the new state
  const candidateEntries = state.get('entries').concat(getWinners(state.get('vote')));
  
  // If we only have one candidate entry, we have a winner!
  if (candidateEntries.size === 1) {
    // We remove the items no longer needed rather than returning a completely new
    // state. This choice is more robust against adding new keys to the state in the
    // future.
    //
    // In general, it is a good idea to *not* replace existing state but to always
    // *transform* the existing state into the future state.
    return state.remove('vote')
      .remove('entries')
      .set('winner', candidateEntries.first());
  } else {
    return state.merge({
      vote: Map({pair: candidateEntries.take(2)}),
      entries: candidateEntries.skip(2)
    });
  }
}

export function vote(state, voteFor) {
  return state.updateIn(['vote', 'tally', voteFor], 0, tally => tally + 1);
}