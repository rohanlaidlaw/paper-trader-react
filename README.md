# Paper Trader
[![Build Status](https://travis-ci.org/volsci/paper-trader-react.svg?branch=master)](https://travis-ci.org/volsci/paper-trader-react)

Paper trading is the act of simulated trading on the share market. A paper trader will mark entry and exit point values for their selected share, and calculate their gains or losses from the difference. A particularly dedicated one might then perform Capital Gains % tax on that figure too. This allows them to participate in the share market without actually having to stake real money. Traditionally, this is done over an Excel document or with plain pen and paper. 

While there are apps that exist to this end already, I've found them to be generally unsatisfying: an afterthought app on real brokerage platforms, rail-roaded games that rarely allow you to invest in any other form than long (if they even follow the real pricepoint of real shares at all), a facade to get email addresses on a mailing list. 

Paper Trader is developed with React, using [OpenCPU](https://www.opencpu.org/) to fetch and pass over real time stock data with the R library [quantmod](https://github.com/joshuaulrich/quantmod). 

Setup
---

```
npm install
```

Run
---

```
npm start
```

Test
---
Paper Trader uses Jest for running unit tests. Continuous integration is handled by Travis CI.

```
npm test
```

Linting
---
Paper Trader uses ESlint for linting, which runs in the pretest phase as defined in the `package.json`. Airbnb's linting rules are in use.
