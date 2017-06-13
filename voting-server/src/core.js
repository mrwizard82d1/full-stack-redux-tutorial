/**
 * Created by larryjones on 6/13/17.
 */

import { List } from 'immutable';

export function setEntries(state, toInclude) {
  return state.set('entries', List(toInclude));
}