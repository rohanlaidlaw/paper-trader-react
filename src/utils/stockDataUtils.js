import { csvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';

// Test this
function parseData(parse, stockTimeOfPurchase) {
  return function dParse(d) {
    const parsedData = d;
    parsedData.timestamp = parse(d.timestamp);
    if (parsedData.timestamp > stockTimeOfPurchase) {
      parsedData.open = +d.open;
      parsedData.high = +d.high;
      parsedData.low = +d.low;
      parsedData.close = +d.close;
    }

    return parsedData;
  };
}

const parseDate = timeParse('%Y-%m-%d %H:%M:%S');


// Test this
export default function getData(key, ticker, stockTimeOfPurchase) {
  const fetchStock = fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=full&apikey=${key}&datatype=csv`)
    .then(response => response.text())
    .then(data => csvParse(data, parseData(parseDate, stockTimeOfPurchase)));
  return fetchStock;
}
