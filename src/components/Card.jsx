import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/es/CardActionArea/CardActionArea';
import CardMedia from '@material-ui/core/es/CardMedia/CardMedia';
import AreaChart from '../d3/AreaChart';

const StockCard = ({ data, ticker, perchange }) => (
  <Card
    style={{
      position: 'relative', padding: 1, margin: 16, float: 'left', width: 1600,
    }}
  >
    <CardContent>
      <Typography>
        <Typography variant="h5" component="h1" style={{ position: 'absolute', bottom: '30px', left: '60px' }}>
          {ticker}
        </Typography>

        <Typography variant="h5" component="h1" style={{ position: 'absolute', bottom: '50px', right: '50px' }}>
          {perchange}
%
        </Typography>
      </Typography>
    </CardContent>
    <CardMedia>
      <AreaChart data={data} />
    </CardMedia>
  </Card>
);

StockCard.propTypes = {
  data: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  perchange: PropTypes.number.isRequired,
};

export default StockCard;
