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
          percentChange: action.percentChange,
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
