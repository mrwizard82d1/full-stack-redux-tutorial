/**
 * Created by larryjones on 7/2/17.
 */

/**
 * immutable@4.x exports a new function, `isImmutable`. However, even though the docs
 * describe 4.x, the latest code available from npm is `immutable@3.8.1`. To work around
 * this known issue, posts, for example,
 * https://stackoverflow.com/questions/31907470/how-to-check-if-object-is-immutable,
 * suggest using `Iterable.isIterable`.
 */
import { Map, Iterable, fromJS } from 'immutable';

export default function reduce(beforeState, action) {
  switch(action.type) {
  case 'SET_STATE':
    return Iterable.isIterable(action.state) ? action.state : fromJS(action.state);
  default:
    return Map({});
  }
}