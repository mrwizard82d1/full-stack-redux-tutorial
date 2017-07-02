/**
 * Created by larryjones on 7/2/17.
 */

import { Map, List } from 'immutable';

export default function reduce(beforeState, action) {
    return Map({
      vote: Map({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
          'Trainspotting': 5,
          '28 Days Later': 4,
        }),
      }),
    });
}