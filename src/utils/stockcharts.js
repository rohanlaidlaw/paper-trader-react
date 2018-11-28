import { csvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';

function parseData(parse, stockTimeOfPurchase) {
  return function (d) {
    d.timestamp = parse(d.timestamp);
    if (d.timestamp > stockTimeOfPurchase) {
      d.open = +d.open;
      d.high = +d.high;
      d.low = +d.low;
      d.close = +d.close;
    }

    return d;
  };
}

const parseDate = timeParse('%Y-%m-%d %H:%M:%S');

export default function getData(key, ticker, stockTimeOfPurchase) {
  const fetchStock = fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=full&apikey=${key}&datatype=csv`)
    .then(response => response.text())
    .then(data => csvParse(data, parseData(parseDate, stockTimeOfPurchase)));
  return fetchStock;
}

