/* eslint-disable */
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
    })

});