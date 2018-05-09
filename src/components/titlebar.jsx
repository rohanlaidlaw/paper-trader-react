import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const key = process.env.ALVA_API_KEY;
const stocks = new Stocks(key);

async function request () {
    const result = await stocks.timeSeries({
        symbol: 'TSLA',
        interval: '1min',
        amount: 10
    });

    document.body.innerHTML = JSON.stringify(result);
}



function handleClick() {
    request()
}



const TitleBar = () => (
  <AppBar
    title="Paper Trader"
    onRightIconButtonClick={handleClick}
    iconElementRight={<IconButton><ContentAdd /></IconButton>}
  />
);

export default TitleBar;
