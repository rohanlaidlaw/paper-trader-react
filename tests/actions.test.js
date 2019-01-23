/* eslint-disable */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import addCard from '../src/actions/addCard'

describe('actions', () => {
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
        const dispatch = jest.fn();
        let nextCardId = 0;
        const data = '1, 2, 3';
        const ticker = 'acme';
        const percentChange = 5;


        dispatch(addCard(data, ticker, percentChange));

        expect(dispatch.mock.calls.length).toBe(1);

        expect(dispatch.mock.calls[0]).toContainEqual({
            type: 'ADD_CARD',
            id: nextCardId+2,
            data,
            ticker,
            percentChange,
        });
    });
});