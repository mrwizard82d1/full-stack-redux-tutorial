/**
 * Created by larryjones on 6/25/17.
 */

import { List } from 'immutable';
import React from 'react';
import { render } from 'enzyme';
import Voting from './Voting';

describe('Voting', () => {
  describe('Rendering mutable props and immutable props', () => {
    /**
     *
     * The demo uses the `render` method of `react-dom/test-utils`. I found installing this
     * package to be difficult because it requires a number of other items, like `jsdom`,
     * to be set up that were not straightforward. (Although it could just be me.)
     *
     * Consequently, I've commented out the test.
    it('renders as a pure component', () => {
      const pair = ['Trainspotting', '28 Days Later'];
      let cut = render(<Voting pair={pair} />);
  
      expect(cut.find('button').first().text()).toBe('Trainspotting');
    
      pair[0] = 'Sunshine';
      expect(pair[0]).toBe('Sunshine');
      
      cut = render(<Voting pair={pair} />);
      expect(cut.find('button').first().text()).toBe('Trainspotting');
    });
     */
  
    it('Updates the DOM when immutable prop changes', () => {
      const pair = List.of('Trainspotting', '28 Days Later');
      let cut = render(<Voting pair={pair} />);
      
      expect(cut.find('button').first().text()).toBe('Trainspotting');
      
      const newPair = pair.set(0, 'Sunshine');
      cut = render(<Voting pair={newPair} />);
      expect(cut.find('button').first().text()).toBe('Sunshine');
    });
  });
});

