import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

it('renders correctly', () => {
    const rend = renderer.create(<App />).toJSON();
    expect(rend).toMatchSnapshot();
})