import { csvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';
import addCard from './addCard';

const parseDate = timeParse('%Y-%m-%d %H:%M:%S');

/*
 * Only relevant data within the time frame of the timestamp (three days prior) are kept.
 */
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

/*
 * Performs percent change arithmetic, taking the earliest and latest figures to determine
 * performance.
 */
export function calculatePercentChange(oldFigure, newFigure) {
  const diff = newFigure - oldFigure;
  return parseInt(((diff / oldFigure) * 100), 10);
}

/*
 * Performs an API call to Alpha Vantage using the key, ticker and timestamp from Add Card,
 * via the Redux store. The data returned from the API is parsed and then dispatched to addCard.
 */
export function getData(key, ticker, stockTimeOfPurchase) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=full&apikey=${key}&datatype=csv`;
  return dispatch => fetch(url, {
    method: 'GET',
  })
    .then(response => response.text())
    .then(
      (data) => {
        const parsedData = csvParse(data, parseData(parseDate, stockTimeOfPurchase));

        const oldFigure = parseFloat(parsedData[0].close);
        const newFigure = parseFloat(parsedData[parsedData.length - 1].close);
        const percentChange = calculatePercentChange(oldFigure, newFigure);

        dispatch(addCard(parsedData, ticker, percentChange));
      },
    )
    .catch((error) => {
      // TODO Create an Error/Failure Action
      console.log(error);
    });
}

export default getData;
