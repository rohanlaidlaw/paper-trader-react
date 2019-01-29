/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';


import AddCard from '../src/containers/AddCard';
import StockCard from "../src/components/Card";

const mockStore = configureStore();
const store = mockStore();

describe('AddCard', () => {
  beforeEach(() => {
      store.clearActions();
  });

  it('renders', () => {
    const wrapper = shallow(<AddCard store={store} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<AddCard store={store} />);

    expect(wrapper).toMatchSnapshot();
  });
});
