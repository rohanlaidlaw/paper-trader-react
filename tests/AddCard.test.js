/* eslint-disable */

import React from 'react';
import { shallow, render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';


import AddCard from '../src/containers/AddCard';
import Add from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';

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
    const wrapper = mount(<AddCard store={store} />);

    expect(wrapper.text()).toEqual('Paper Trader');
    expect(wrapper.containsMatchingElement(<MenuIcon />));
    expect(wrapper.containsMatchingElement(<Add />));

  });

  it('does not load dialog box before click', () => {
    const wrapper = mount(<AddCard store={store}/>);

    const dialog = wrapper.find(Dialog);

    expect(dialog.props().open).toEqual(false);
  });
});
