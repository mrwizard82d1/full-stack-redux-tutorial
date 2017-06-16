/**
 * Created by larryjones on 6/16/17.
 */

import { setEntries } from './core';

export default function reduce(beforeState, action) {
  return setEntries(beforeState, action.entries);
}
