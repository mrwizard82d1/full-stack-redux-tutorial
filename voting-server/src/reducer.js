/**
 * Created by larryjones on 6/16/17.
 */

import { setEntries, next } from './core';

export default function reduce(beforeState, action) {
  if (action.type === 'SET_ENTRIES') {
    return setEntries(beforeState, action.entries);
  } else if (action.type === 'NEXT') {
    return next(beforeState, action);
  }
}
