/**
 * Created by larryjones on 6/13/17.
 */

import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setEntries, next, vote } from '../src/core';

describe('application state', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later');
      const nextState = setEntries(state, entries);
      
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
    
    it('converts entries to immutable', () => {
      const state = Map();
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(state, entries);
      
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
  });
  
  describe('next', () => {
    it('puts the next two entries to a vote', () => {
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      });
      const nextState = next(state);
      
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List.of('Sunshine')
      }));
    });
    
    it('puts the winner of the current round back to the end of `entries`', () => {
      const state = Map({
        entries: List.of('Sunshine', 'Millions', '127 Hours'),
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 4,
            '28 Days Later': 2
          })
        })
      });
      
      const nextState = next(state);
      
      expect(nextState).to.equal(Map({
        entries: List.of('127 Hours', 'Trainspotting'),
        vote: Map({
          pair: List.of('Sunshine', 'Millions')
        })
      }));
    });
  });
  
  describe('vote', () => {
    it('adds a tally if none are present', () => {
      const state = Map({
        entries: List(),
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        })
      });
      const newState = vote(state, '28 Days Later');
      
      expect(newState).to.equal(Map({
        entries: List(),
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            '28 Days Later': 1
          })
        })
      }));
    });
    
    it('increments a tally if it already exists', () => {
      const state = Map({
        entries: List(),
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            '28 Days Later': 3,
            'Trainspotting': 1
          })
        })
      });
      const newState = vote(state, 'Trainspotting');
      
      expect(newState).to.equal(Map({
        entries: List(),
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            '28 Days Later': 3,
            'Trainspotting': 2
          })
        })
      }));
    });
  });
  
});
