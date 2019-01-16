/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';
//import configureStore from 'redux-mock-store';
import StockCard from '../src/components/Card';

describe('StockCard', () => {
    const acmeProps = {
        data: '1, 2, 3',
        ticker: 'acme',
        percentChange: 5,
    };

    it('renders',() => {
        const wrapper = shallow(<StockCard {...acmeProps} />);

        expect(wrapper.exists()).toBe(true);
    });

    it('displays the ticker',() => {
        const wrapper = shallow(<StockCard {...acmeProps} />);

        expect(wrapper.contains('acme')).toBe(true);
    });

    it('displays the percent change',() => {
        const wrapper = shallow(<StockCard {...acmeProps} />);

        expect(wrapper.contains(5)).toBe(true);
    });

});


