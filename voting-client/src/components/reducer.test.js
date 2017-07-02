/**
 * Created by larryjones on 7/2/17.
 */

import { Map, List } from 'immutable';
import reduce from './reducer';

describe('reduce', () => {
  describe('initial empty state', () => {
    it('should set the state if current state empty', () => {
      const beforeState = Map({});
      const action = {
        type: 'SET_STATE',
        state: Map({
          vote: Map({
            pair: List.of('Trainspotting', '28 Days Later'),
            tally: Map({
              'Trainspotting': 5,
              '28 Days Later': 4,
            }),
          }),
        }),
      };
      
      const afterState = reduce(beforeState, action);
      
      expect(afterState).toEqual(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 5,
            '28 Days Later': 4,
          }),
        }),
      }));
      
    });
    it('reduces the state if the action has a Javascript payload')
  });
});
