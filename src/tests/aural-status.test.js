import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from '../components/aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });
});
