import { combineReducers } from 'redux';

const cards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
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
