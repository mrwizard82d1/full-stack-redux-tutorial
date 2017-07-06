/**
 * Created by larryjones on 6/25/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';

export class Results extends React.PureComponent {
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
      this.props.winner ?
      <Winner { ...this.props } /> :
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
          <button className="next" onClick={this.props.nextPair} >
            Next
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner'),
  };
}

export default connect(mapStateToProps)(Results);
