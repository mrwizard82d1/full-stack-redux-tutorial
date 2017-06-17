/**
 * Created by larryjones on 6/17/17.
 */

import { Map, List } from 'immutable';
import { expect } from 'chai'
import makeStore from '../src/store';

describe('store', () => {
  it('should have the correct current state', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map({}));
  });
  
  it('should have the correct state after `SET_ENTRIES`', () => {
    const store = makeStore();
    const action = {
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    };
    store.dispatch(action);
    
    const nextState = store.getState();
    
    expect(nextState).to.equal(Map({
      entries: List.of('Trainspotting', '28 Days Later')
    }));
  });
});