let nextCardId = 0;

function addCard(data, ticker, percentChange) {
  return {
    type: 'ADD_CARD',
    id: nextCardId += 1,
    data,
    ticker,
    percentChange,
  };
}

export default addCard;
