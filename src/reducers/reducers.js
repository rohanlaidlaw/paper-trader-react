import { combineReducers } from 'redux';

const cards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        {
          id: action.id,
          data: action.data,
          ticker: action.ticker,
          perchange: action.perchange,
        },
      ];
    default:
      return state;
  }
};

const stockCards = combineReducers({
  cards,
});

export default stockCards;
