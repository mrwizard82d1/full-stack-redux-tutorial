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
  
  it('handles `NEXT`', () => {
    const initialState = Map({
      entries: List.of('Trainspotting', '28 Days Later')
    });
    const action = {
      type: 'NEXT'
    };
    
    const nextState = reducer(initialState, action);
    
    expect(nextState).to.equal(Map({
      entries: List(),
      vote: Map({
        pair: List.of('Trainspotting', '28 Days Later')
      })
    }));
  });
  
  it('handles `VOTE`', () => {
    const initialState = Map({
      entries: List.of(),
      vote: Map({
        pair: List.of('Trainspotting', '28 Days Later')
      })
    });
    const action = {
      type: 'VOTE',
      entry: '28 Days Later'
    };
    
    const nextState = reducer(initialState, action);
    
    expect(nextState).to.equal(Map({
      entries: List.of(),
      vote: Map({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
          '28 Days Later': 1
        })
      })
    }));
  });
  
  it('has an initial state', () => {
    const action = {
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    };
    
    const nextState = reducer(undefined, action);
    
    expect(nextState).to.equal(Map({
      entries: List.of('Trainspotting', '28 Days Later')
    }));
  });
});