/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

// Component to be tested
import StockCard from '../src/components/Card';

describe('<StockCard />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<StockCard />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        });
    });
});
