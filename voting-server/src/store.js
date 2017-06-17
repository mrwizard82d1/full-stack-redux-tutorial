/**
 * Created by larryjones on 6/17/17.
 */

import { createStore } from 'redux';
import reducer from './reducer';

export default function makeStore() {
  return createStore(reducer);
}