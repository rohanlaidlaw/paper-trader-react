/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';
//import configureStore from 'redux-mock-store';
import StockCard from '../src/components/Card';

describe('StockCard', () => {
    const acmeStockCardProps = {
        data: '1, 2, 3',
        ticker: 'acme',
        percentChange: 5,
    };

    it('renders',() => {
        const wrapper = shallow(<StockCard {...acmeStockCardProps} />);

        expect(wrapper.exists()).toBe(true);
    });

    it('matches snapshot',() => {
        const wrapper = shallow(<StockCard {...acmeStockCardProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('displays the ticker',() => {
        const wrapper = shallow(<StockCard {...acmeStockCardProps} />);

        expect(wrapper.contains('acme')).toBe(true);
    });

    it('displays the percent change',() => {
        const wrapper = shallow(<StockCard {...acmeStockCardProps} />);

        expect(wrapper.contains(5)).toBe(true);
    });

    //TODO: test the d3 graph/data

});


