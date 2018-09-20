import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Stocks from 'stocks.js';

import addCard from '../actions/actions';

const key = process.env.ALVA_API_KEY;
const stocks = new Stocks(key);

const AddCard = ({ dispatch }) => {
  async function stockRequest() {
    const result = await stocks.timeSeries({
      symbol: 'TSLA',
      interval: '1min',
      amount: 10,
    });
    dispatch(addCard(JSON.stringify(result)));
  }

  function handleClick() {
    stockRequest();
  }

  return (
    <AppBar
      title="Paper Trader"
      onRightIconButtonClick={handleClick}
      iconElementRight={<IconButton><ContentAdd /></IconButton>}
    />
  );
};

AddCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddCard);
