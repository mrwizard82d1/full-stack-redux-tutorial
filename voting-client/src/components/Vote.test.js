/**
 * Created by larryjones on 6/24/17.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Vote from './Vote';

describe('Vote', () => {
  describe('render', () => {
    describe('when not yet voted', () => {
      it('should correctly identify the voting buttons', () => {
        const props = { pair: ['Trainspotting', '28 Days Later'] };
        const cut = shallow(<Vote {...props} />);
    
        expect(cut.find('button').map(c => c.key()))
          .toEqual(['Trainspotting', '28 Days Later']);
      });
  
      it('should correctly label the voting buttons', () => {
        const props = { pair: ['Trainspotting', '28 Days Later'] };
        const cut = shallow(<Vote {...props} />);
    
        expect(cut.find('button > h1').map(c => c.text()))
          .toEqual(['Trainspotting', '28 Days Later']);
      });
  
      it('should enable the buttons if no winner', () => {
        const props = { pair: ['Trainspotting', '28 Days Later'] };
        const cut = shallow(<Vote {...props} />);
    
        expect(cut.filter('button[disabled]').length).toBe(0);
      });
    });
    
    describe('when already voted', () => {
    
    });
  });
  
  describe('event callbacks', () => {
    it('should respond to clicks on each button', () => {
      const props = {
        pair: ['Trainspotting', '28 Days Later'],
        voteFor: jest.fn()
      };
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