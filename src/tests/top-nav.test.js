import React from 'react';
import {shallow} from 'enzyme';

import TopNav from '../components/top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
});
