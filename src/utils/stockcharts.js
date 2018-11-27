import { csvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';

function parseData(parse) {
  return function (d) {
    d.timestamp = parse(d.timestamp);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;

    return d;
  };
}

const parseDate = timeParse('%Y-%m-%d %H:%M:%S');

export default function getData(key, symbol) {
  const fetchStock = fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${key}&datatype=csv`)
    .then(response => response.text())
    .then(data => csvParse(data, parseData(parseDate)));
  return fetchStock;
}

