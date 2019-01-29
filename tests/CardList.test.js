/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CardList from '../src/components/CardList';
import StockCard from "../src/components/Card";

const mockStore = configureStore();
const store = mockStore();

describe('CardList', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('renders',() => {
        const wrapper = shallow(<CardList store={store} cards={null}/>);

        expect(wrapper.exists()).toBe(true);
    });

    it('matches snapshot',() => {
        const wrapper = shallow(<CardList store={store} cards={null}/>);

        expect(wrapper).toMatchSnapshot();
    });
});


