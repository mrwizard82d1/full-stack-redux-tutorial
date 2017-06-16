/**
 * Created by larryjones on 6/16/17.
 */

import { Map, List } from 'immutable';
import { expect } from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles `SET_ENTRIES`', () => {
    const initialState = Map();
    const action = {
      type: 'SET_ENTRIES',
      entries: ['Trainspotting']
    };
    
    const nextState = reducer(initialState, action);
    
    expect(nextState).to.equal(Map({
      'entries': List.of('Trainspotting')
    }));
  });
  it('handles `NEXT`');
  it('handles `VOTE`');
});