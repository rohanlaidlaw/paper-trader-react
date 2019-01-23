/* eslint-disable */
import configureStore from 'redux-mock-store';

import addCard from '../src/actions/addCard'

const mockStore = configureStore();
const store = mockStore();


describe('actions', () => {
    beforeEach(() => {
            store.clearActions();
        });

    it('creates add card action', () => {

        let nextCardId = 0;
        const data = '1, 2, 3';
        const ticker = 'acme';
        const percentChange = 5;

        const expectedAction = {
            type: 'ADD_CARD',
            id: nextCardId+1,
            data,
            ticker,
            percentChange,
        };
        expect(addCard(data, ticker, percentChange)).toEqual(expectedAction)
    });

    it('dispatches addCard', () => {
        let nextCardId = 0;
        const data = '1, 2, 3';
        const ticker = 'acme';
        const percentChange = 5;

        store.dispatch(addCard(data, ticker, percentChange));

        expect(store.getActions().length).toBe(1);

        expect(store.getActions()).toContainEqual({
            type: 'ADD_CARD',
            id: nextCardId+2,
            data,
            ticker,
            percentChange,
        });
    });
});