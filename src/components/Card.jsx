import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BarChart from '../d3/AreaChart';

const StockCard = ({ data, ticker }) => (
  <Card
    style={{
            float: 'left', padding: 8, margin: 16, width: 600,
        }}
  >
    <CardContent>

      <Typography component="h1">
        {ticker}
      </Typography>

      <BarChart data={data} />
    </CardContent>
  </Card>
);

StockCard.propTypes = {
  data: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,

};

export default StockCard;
