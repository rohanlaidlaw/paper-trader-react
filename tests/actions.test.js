/* eslint-disable */

import addCard from '../src/actions/addCard';
import { calculatePercentChange } from '../src/actions/getData';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('calculates percent decrease correctly', () => {
    const percent = calculatePercentChange(300, 150);
    expect(percent).toEqual(-50);
  });

  it('calculates percent increase correctly', () => {
    const percent = calculatePercentChange(150, 300);
    expect(percent).toEqual(100);
  });

  it('creates add card action', () => {
    const nextCardId = 0;
    const data = '1, 2, 3';
    const ticker = 'acme';
    const percentChange = 5;

    const expectedAction = {
      type: 'ADD_CARD',
      id: nextCardId + 1,
      data,
      ticker,
      percentChange,
    };
    expect(addCard(data, ticker, percentChange)).toEqual(expectedAction);
  });

  it('dispatches addCard', () => {
    const nextCardId = 0;
    const data = '1, 2, 3';
    const ticker = 'acme';
    const percentChange = 5;

    store.dispatch(addCard(data, ticker, percentChange));

    expect(store.getActions().length).toBe(1);

    expect(store.getActions()).toContainEqual({
      type: 'ADD_CARD',
      id: nextCardId + 2,
      data,
      ticker,
      percentChange,
    });
  });
});
