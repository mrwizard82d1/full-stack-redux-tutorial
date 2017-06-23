/**
 * Created by larryjones on 6/23/17.
 */

import React from 'react';

export default function Winner (props) {
  return (
    <div className="winner">
      And the winner is .... (Drumroll. Please): {props.winner}!
    </div>
  );
}