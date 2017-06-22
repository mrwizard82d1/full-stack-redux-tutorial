/**
 * Created by larryjones on 6/17/17.
 */

import React from 'react';

export default class Voting extends React.Component {
  getPair() {
    return this.props.pair || [];
  }
  
  makeVoteFor(entry) {
    return () => (this.props.voteFor(entry));
  };
  
  render() {
    return (
      <div className="voting">
        {
          this.getPair().map(entry =>
            <button key={ entry } onClick={this.makeVoteFor(entry)}>
              <h1>{ entry }</h1>
            </button>
          )
        }
      </div>
    );
  }
}
