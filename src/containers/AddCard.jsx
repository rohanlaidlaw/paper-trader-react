import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import addCard from '../actions/actions';

// //const key = process.env.ALVA_API_KEY;
// // const stocks = new Stocks(key);

const AddCard = ({ dispatch }) => {
  // let text

  // async function request () {
  //     const result = await stocks.timeSeries({
  //         symbol: 'TSLA',
  //         interval: '1min',
  //         amount: 10
  //     });
  //
  //     text = JSON.stringify(request)
  //     dispatch(addCard(text))
  // }

  function handleClick() {
    dispatch(addCard('working!'));
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
