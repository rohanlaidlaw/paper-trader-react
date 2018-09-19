let nextCardId = 0;
const addCard = text => ({
  type: 'ADD_CARD',
  id: nextCardId += 1,
  text,
});


export default addCard;
