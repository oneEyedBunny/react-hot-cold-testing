import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from '../components/aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Gives an aural update', () => {
      let testMessage = 'You are listening to a game!';
      const wrapper = shallow(<AuralStatus auralStatus={testMessage} />);
      expect(wrapper.contains(testMessage)).toEqual(true);
    });
});
