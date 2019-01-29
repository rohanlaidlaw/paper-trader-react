/* eslint-disable */

import React from 'react';
import { shallow, render } from 'enzyme';
import configureStore from 'redux-mock-store';


import AddCard from '../src/containers/AddCard';

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
    const wrapper = render(<AddCard store={store} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct UI', () => {
    const wrapper = render(<AddCard store={store} />);

    expect(wrapper.text()).toContain('Paper Trader');
  });



});
