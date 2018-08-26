import React from 'react';
import {shallow} from 'enzyme';

import TopNav from '../components/top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Start a new game when clicked', () => {
       const callback = jest.fn();
       const wrapper = shallow(<TopNav onRestartGame={callback} />);
       const link = wrapper.find('.new');
        link.simulate('click', {
          preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it('call aural update when clicked', () => {
       const callback = jest.fn();
       const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
       const link = wrapper.find('.status-link');
       link.simulate('click', {
        preventDefault() {}
       });
       expect(callback).toHaveBeenCalled();
     });   
});
