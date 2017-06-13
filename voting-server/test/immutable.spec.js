/**
 * Created by larryjones on 6/13/17.
 */

import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', () => {
  describe('a number', () => {
   function increment(currentState) {
     return currentState + 1;
   }
   
   it('is immutable', () => {
     let state = 42;
     let nextState = increment(state);
     
     expect(nextState).to.equal(43);
     expect(state).to.equal(42);
   });
  });
  
  describe('a List', () => {
    function addMovie(currentState, toAdd) {
      return currentState.push(toAdd);
    }
    
    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');
      
      expect(nextState).to.equal(List.of('Trainspotting', '28 Days Later', 'Sunshine'));
      expect(state).to.equal(List.of('Trainspotting', '28 Days Later'));
    });
  });
  
  describe('a Map', () => {
    function addMovie(currentState, toAdd) {
      return currentState.update('movies', movies => movies.push(toAdd));
    }
    
    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');
      
      expect(nextState).to.equal(Map({
        movies: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      }));
      expect(state).to.equal(Map({
        movies: List.of('Trainspotting', '28 Days Later')
      }))
    });
  });
  
});