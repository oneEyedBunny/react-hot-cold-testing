import React from 'react';
import {shallow} from 'enzyme';

import GuessForm from '../components/guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });
});
