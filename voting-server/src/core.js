/**
 * Created by larryjones on 6/13/17.
 */

import { List, Map } from 'immutable';

export function setEntries(state, toInclude) {
  return state.set('entries', List(toInclude));
}

function pickWinner(tally) {
  if (! tally) {
    return null;
  }
  
  return tally.toKeyedSeq()
    .entrySeq()
    .reduce(([soFarKey, soFarValue], [candidateKey, candidateValue]) =>
      soFarValue > candidateValue ?
        [soFarKey, soFarValue] :
        [candidateKey, candidateValue])[0];
}

export function next(state) {
  const entries = state.get('entries');
  const winner = pickWinner(state.getIn(['vote', 'tally']));
  const result = state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: (winner ? entries.skip(2).push(winner) : entries.skip(2))
  });
  return result;
}

export function vote(state, voteFor) {
  return state.updateIn(['vote', 'tally', voteFor], 0, tally => tally + 1);
}