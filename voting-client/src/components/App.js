/**
 * Created by larryjones on 6/25/17.
 */

import React from 'react';
import { List } from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

// This component expects to be rendered as part of a `Route`. The `react-router` package
// then has the responsibility to supply the component of the current route in `props`.
export default function App(props){
  React.cloneElement(props.children, { pair });
}
