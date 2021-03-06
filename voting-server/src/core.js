/**
 * Created by larryjones on 6/13/17.
 */

import { List, Map } from 'immutable';

export const INITIAL_STATE = Map({});

export function setEntries(state, toInclude) {
  return state.set('entries', List(toInclude));
}

function getTally(vote, candidate) {
  return vote.getIn(['tally', candidate], 0);
}

function getWinners(vote) {
  if (! vote) {
    return [];
  }
  
  const [candidateA, candidateB] = vote.get('pair');
  if (getTally(vote, candidateA) == getTally(vote, candidateB)) {
    return vote.get('pair');
  } else if (getTally(vote, candidateA) > getTally(vote, candidateB)) {
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

// Previous implementations expected each function to handle the *entire* application
// state. This implementation of `vote` now only handles the value of `vote` (sub)state.
export function vote(voteState, voteFor) {
  return voteState.updateIn(['tally', voteFor], 0, tally => tally + 1);
}