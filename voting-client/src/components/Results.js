/**
 * Created by larryjones on 6/25/17.
 */

import React from 'react';

export default class Results extends React.PureComponent {
  getPair() {
    return this.props.pair || [];
  }
  
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    
    return 0;
  }
  
  render() {
    return (
      <div className="results">
        <div className="tally">
        {
          this.getPair().map(entry => (
            <div key={entry} className={entry}>
              <h1>{ entry }</h1>
              <div className="voteCount" >
                {this.getVotes(entry)}
              </div>
            </div>
           ))
        }
        </div>
        <div className="management" >
          <button className="next" >
            Next
          </button>
        </div>
      </div>
    );
  }
}
