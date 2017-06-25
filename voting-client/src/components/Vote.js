/**
 * Created by larryjones on 6/23/17.
 */

import React from 'react';

export default class Vote extends React.PureComponent {
  getPair() {
    return this.props.pair || [];
  }
  
  makeVoteFor(entry) {
    return () => (this.props.voteFor(entry));
  }
  
  isVotingDisabled() {
    return !!this.props.hasVoted;
  }
  
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
  
  render() {
    return (
      <div className="voting">
        {
          this.getPair().map(entry =>
            <button key={ entry }
                    disabled={ this.isVotingDisabled() }
                    onClick={ this.makeVoteFor(entry) }>
              <h1>{ entry }</h1>
              { this.hasVotedFor(entry) ? <div>Voted</div> : null }
            </button>)
        }
      </div>
    );
  }
}
