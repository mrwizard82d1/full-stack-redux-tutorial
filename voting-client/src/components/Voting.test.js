/**
 * Created by larryjones on 6/22/17.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Voting from './Voting';

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const props = {
      pair: ['Trainspotting', '28 Days Later']
    };
    const cut = shallow(<Voting {...props} />);
    
    expect(cut.find('div.voting > button').length).toBe(2);
  });
  
  it('each button has the correct label', () => {
    const props = {
      pair: ['Trainspotting', '28 Days Later']
    };
    const cut = shallow(<Voting {...props} />);
    
    expect(cut.find('div.voting > button')
              .map((b) => b.text())).toEqual(['Trainspotting', '28 Days Later']);
  });
});
