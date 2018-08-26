import React from 'react';
import {shallow} from 'enzyme';

import GuessList from '../components/guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]}/>);
    });

    it('Renders a list of guesses', () => {
      const testValues = [10, 20, 30];
      const wrapper= shallow(<GuessList guesses={testValues}/>);
      const items = wrapper.find('li');
        expect(items.length).toEqual(testValues.length);
        testValues.forEach((testValue, index) => {
        expect(items.at(index).text()).toEqual(testValue.toString());
      });
   });
});
