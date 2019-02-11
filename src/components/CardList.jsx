import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StockCard from './Card';

/*
 * An array containing the stock card objects, which are passed in as props.
 */
const CardList = ({ cards }) => (
  <ul>
    {cards.map(card => (
      <StockCard
        key={card.id}
        {...card}
      />
    ))}
  </ul>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

const getCards = cards => cards;

const mapStateToProps = state => ({
  cards: getCards(state.cards),
});

export default connect(mapStateToProps)(CardList);
