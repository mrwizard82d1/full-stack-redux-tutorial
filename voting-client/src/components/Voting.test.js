/**
 * Created by larryjones on 6/22/17.
 */

import React from 'react';
import { mount } from 'enzyme';
import Voting from './Voting';

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const props = {
      pair: ['Trainspotting', '28 Days Later'],
      voteFor: jest.fn()
    };
    const cut = mount(<Voting {...props} />);
    
    expect(cut.find('div.voting > button').length).toBe(2);
  });
  
  it('each button has the correct label', () => {
    const props = {
      pair: ['Trainspotting', '28 Days Later'],
      voteFor: jest.fn()
    };
    const cut = mount(<Voting {...props} />);
    
    expect(cut.find('div.voting > button')
              .map((b) => b.text())).toEqual(['Trainspotting', '28 Days Later']);
  });
  
  it('each button has a callback function', () => {
    const props = {
      pair: ['Trainspotting', '28 Days Later'],
      voteFor: jest.fn()
    };
    const cut = mount(<Voting {...props} />);
    
    cut.find('div.voting > button').at(0).simulate('click');
    
    expect(props.voteFor).toHaveBeenCalledWith('Trainspotting');
  });
  
  it('disables buttons when user has voted', () => {
    const props = {
      pair: ['Trainspotting', '28 Days Later'],
      hasVoted: 'Trainspotting'
    };
    const cut = mount(<Voting {...props} />);
    
    expect(cut.find('div.voting > button[disabled]').length).toBe(2);
  });
});
