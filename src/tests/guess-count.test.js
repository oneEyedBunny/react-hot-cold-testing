import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from '../components/guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Returns the correct props', () => {
      const wrapper = shallow(<GuessCount guessCount="5" />);
      expect(wrapper.text()).toEqual(`Youve made 5 guesses!`);
    });
});
