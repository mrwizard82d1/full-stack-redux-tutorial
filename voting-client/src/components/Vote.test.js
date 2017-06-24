/**
 * Created by larryjones on 6/24/17.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Vote from './Vote';

/**
 * Make the `props` needed for a specific test.
 *
 * The default simply consists of the two entries to vote upon.
 *
 * @param addPropsFunction A function to add props to the default result. The
 * default value of this function is the identity function; that is, it simply
 * returns the default props.
 */
function makeProps(addPropsFunction = r => r) {
  return addPropsFunction({pair: ['Trainspotting', '28 Days Later']});
}

function makeCutWithDefaultProps() {
  const props = makeProps();
  const cut = shallow(<Vote {...props} />);
  return cut;
}

describe('Vote', () => {
  describe('render', () => {
    describe('when no entries to vote upon', () => {
      it('should render an empty div', () => {
        const cut = shallow(<Vote />);
        
        expect(cut.find('div.voting').children().length).toBe(0);
      });
    });
    
    describe('when not yet voted', () => {
      it('should correctly identify the voting buttons', () => {
        const cut = makeCutWithDefaultProps();
    
        expect(cut.find('button').map(c => c.key()))
          .toEqual(['Trainspotting', '28 Days Later']);
      });
  
      it('should correctly label the voting buttons', () => {
        const cut = makeCutWithDefaultProps();
    
        expect(cut.find('button > h1').map(c => c.text()))
          .toEqual(['Trainspotting', '28 Days Later']);
      });
  
      it('should enable the buttons if no winner', () => {
        const cut = makeCutWithDefaultProps();
    
        expect(cut.filter('button[disabled]').length).toBe(0);
      });
    });
    
    describe('when already voted', () => {
      const makeAddVotedFor = entry => (props) => {
        props.hasVoted = entry;
        return props;
      };
      
      it('should disable each button', () => {
        const props = makeProps(makeAddVotedFor('Trainspotting'));
        const cut = shallow(<Vote {...props} />);
        
        expect(cut.find('button[disabled]').length).toBe(2);
      });
      
      it('should mark the entry voted for', () => {
        const props = makeProps(makeAddVotedFor('Trainspotting'));
        const cut = shallow(<Vote {...props} />);
    
        // I expect the 'Trainspotting' button to be marked as 'Voted'
        const elementsOfInterest =
          cut.findWhere(c => c.name() === 'button' && c.key() === 'Trainspotting').children();
        expect(elementsOfInterest.find('h1').text()).toBe('Trainspotting');
        expect(elementsOfInterest.find('div').text()).toBe('Voted');
      });
    });
  });
  
  describe('event callbacks', () => {
    it('should respond to clicks on each button', () => {
      const addVoteFor = (props) => {
        props.voteFor = jest.fn();
        return props;
      };
      const props = makeProps(addVoteFor);
      const cut = shallow(<Vote {...props} />);
  
      ['Trainspotting', '28 Days Later'].forEach(l => {
        props.voteFor.mockClear();
        const button = cut.findWhere(c => c.name() === 'button' && c.key() === l);
        button.simulate('click');
        expect(props.voteFor).toHaveBeenCalledWith(l);
      });
    });
  });
});