/**
 * Created by larryjones on 6/26/17.
 */

import React from 'react';
import { List, Map } from 'immutable';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Results', () => {
  describe('Typically renders', () => {
    it('renders top-level element', () => {
      const cut = shallow(<Results />);
    
      expect(cut.find('div.results')).toBePresent();
    });
  
    it('renders entry `div`s with correct classes', () => {
      const props = {
        pair: List.of('Trainspotting', '28 Days Later'),
      };
    
      const cut = shallow(<Results {...props} />);
    
      expect(cut.find('div.Trainspotting')).toBePresent();
      expect(cut.find('div.28.Days.Later')).toBePresent();
    });
  
    it('renders entry `h1`s with correct text', () => {
      const props = {
        pair: List.of('Trainspotting', '28 Days Later'),
      };
    
      const cut = shallow(<Results {...props} />);
    
      props.pair.forEach(expectedEntry => {
        expect(cut.findWhere(e => e.name() === 'h1' && e.text() === expectedEntry)).toBePresent();
      });
    });
  
    it('renders tallies for two items correctly ', () => {
      const props = {
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({'Trainspotting': 5, '28 Days Later': 4}),
      };
    
      const cut = shallow(<Results {...props} />);
      props.pair.forEach(expectedEntry => {
        const tallyDiv = cut.findWhere(c => c.name() === 'div' && c.hasClass(expectedEntry));
        const actualTally = tallyDiv.findWhere(c => c.name() === 'div' && c.hasClass('voteCount'));
        expect(actualTally.text()).toBe(props.tally.get(expectedEntry).toString());
      });
    });
  
    it('renders a vote count of 0 if no tally', () =>{
      const props = {
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({'Trainspotting': 4}),
      };
    
      const cut = shallow(<Results {...props} />);
      const findTallyPredicate = c => c.name() === 'div' && c.hasClass('28 Days Later');
      const tallyDiv = cut.findWhere(findTallyPredicate);
      const findVoteCountPredicate = c => c.name() === 'div' && c.hasClass('voteCount');
      const voteCountDiv = tallyDiv.findWhere(findVoteCountPredicate);
      expect(voteCountDiv.text()).toBe('0');
    });
  });
  
  describe("Next button", () => {
    it('has a "Next" button', () => {
      const props = {
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({'Trainspotting': 5, '28 Days Later': 4}),
      };
  
      const cut = shallow(<Results {...props} />);
      expect(cut.find('div.management > button.next').text()).toBe('Next');
    });
    
    it('invokes the nextPair callback when clicked', () => {
      const nextCallback = jest.fn();
      const props = {
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({'Trainspotting': 5, '28 Days Later': 4}),
        nextPair: nextCallback,
      };
  
      const cut = shallow(<Results {...props} />);
      var nextButton = cut.find('div.management > button.next');
      nextButton.simulate('click');
      
      expect(nextCallback).toHaveBeenCalled();
    });
  });
  
  describe('Renders a winner when available', () => {
    it('Renders `Winner` if a winner available', () => {
      const props = { winner: 'Trainspotting' };
      
      const cut = shallow(<Results {...props} />);
      
      expect(cut.find('Winner')).toBePresent();
    });
  });
});
