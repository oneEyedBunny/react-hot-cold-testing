import React from 'react';
import {shallow} from 'enzyme';

import Feedback from '../components/feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });
});
