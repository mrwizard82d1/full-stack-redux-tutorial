/**
 * Created by larryjones on 6/22/17.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
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
  
  it('adds a label to the voted entry', () => {
    const props = {
      pair: ['Trainspotting', '28 Days Later'],
      hasVoted: 'Trainspotting'
    };
    const cut = mount(<Voting {...props} />);
    
    expect(cut.findWhere(c => c.name() === 'div' && c.text() === 'Voted').length).toBe(1);
  });
  
  it('only renders the winner when one is selected', () => {
    const props = { winner: 'Trainspotting'};
    const cut = shallow(<Voting {...props} />);
    
    expect(cut.find('Winner').length).toBe(1);
  });
  
  it('reports the winner when one is selected', () => {
    const props = { winner: 'Trainspotting'};
    const cut = mount(<Voting {...props} />);
    
    expect(cut.find('div.winner').text()).toContain('Trainspotting');
  });
  
  it('does not render the Vote component when winner is selected', () => {
    const props = { winner: 'Trainspotting'};
    const cut = shallow(<Voting {...props} />);
    
    expect(cut.find('Vote').length).toBe(0);
  });
  
  it('renders as a pure component', () => {
    const pair = ['Trainspotting', '28 Days Later'];
    const props = { pair };
    const cut = mount(<Voting {...props} />);
    
    expect(cut.find('button').first().text()).toBe('Trainspotting');
    
    pair[0] = 'Sunshine';
    expect(pair[0]).toBe('Sunshine');
    expect(cut.find('button').first().text()).toBe('Trainspotting');
  });
  
});
