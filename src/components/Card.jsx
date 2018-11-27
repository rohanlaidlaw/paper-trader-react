import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import BarChart from '../d3/AreaChart';

const StockCard = ({ text }) => (
  <Card
    style={{
            float: 'left', padding: 8, margin: 16, width: 600,
        }}
  >
    <BarChart data={text} />
  </Card>
);

StockCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default StockCard;
