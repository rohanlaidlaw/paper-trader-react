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

    it('displays the ticker',() => {
        const wrapper = shallow(<StockCard {...acmeProps} />);

        expect(wrapper.contains('acme')).toBe(true);
    });

});


