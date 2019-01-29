/* eslint-disable */

import reducer from '../src/reducers/reducers';

describe('reducer', () => {
  it('processes ADD_TODO', () => {
    expect(
      reducer({}, {
        type: 'ADD_CARD',
        id: 1,
        data: '1, 2, 3',
        ticker: 'acme',
        percentChange: 5,
      }),
    ).toEqual(
      {
        cards:
                    [
                      {
                        id: 1,
                        data: '1, 2, 3',
                        ticker: 'acme',
                        percentChange: 5,
                      },
                    ],
      },
    );
  });
});
