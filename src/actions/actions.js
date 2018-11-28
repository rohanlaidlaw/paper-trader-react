let nextCardId = 0;

function addCard(data, ticker) {
    console.log(data);
  console.log(ticker);
  return {
      type: 'ADD_CARD',
      id: nextCardId += 1,
      data,
      ticker,
  };
}

// const addCard = data => ({
//   type: 'ADD_CARD',
//   id: nextCardId += 1,
//   data,
// });


export default addCard;
