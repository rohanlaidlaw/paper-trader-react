let nextCardId = 0;

function addCard(data, ticker, perchange) {
  return {
    type: 'ADD_CARD',
    id: nextCardId += 1,
    data,
    ticker,
    perchange,
  };
}

export default addCard;
