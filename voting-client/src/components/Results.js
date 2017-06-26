/**
 * Created by larryjones on 6/25/17.
 */

import { List } from 'immutable';
import React from 'react';

const pair = List.of('Trainspotting', '28 Days Later');

export default class Results extends React.PureComponent {
  getPair() {
    return this.props.pair || pair;
  }
  
  render() {
    return (
      <div className="results">
        {
          this.getPair().map(entry => (
            <div key={entry} className={entry}>
              <h1>{ entry }</h1>
            </div>
           ))
        }
      </div>
    );
  }
}
