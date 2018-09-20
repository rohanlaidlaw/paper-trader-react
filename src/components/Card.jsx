import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

const StockCard = ({ text }) => (
  <Card
    style={{
            float: 'left', padding: 8, margin: 16, width: 600,
        }}
  >
    <h2>{text}</h2>
  </Card>
);

StockCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default StockCard;
