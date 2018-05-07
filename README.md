# Paper Trader
[![Build Status](https://travis-ci.org/volsci/paper-trader-react.svg?branch=master)](https://travis-ci.org/volsci/paper-trader-react)

Paper trading is the act of simulated trading on the share market. A paper trader marks entry and exit point values for their share, then calculates gain or loss from the difference. A particularly dedicated paper trader might then perform brokerage fees or even capital gains % tax on that figure. This allows them to participate in the share market without having to stake real money. Traditionally this is done over an Excel document or with plain pen and paper. 

While there are apps that exist to this end already, I've found them to be generally unsatisfying: an afterthought app on real brokerage platforms, rail-roaded games that rarely allow you to invest in any other form than long (if they even follow the real pricepoint of real shares at all), a facade to get email addresses on a mailing list, or restrictive in what markets they involve (US only). 

This is both an exercise to better my React & R skills, as well as build something I personally want to use, all the while adhering to modern web design principles and linting rules for code hygiene.

*Paper Trader* is developed with React & Node, using [OpenCPU](https://www.opencpu.org/) to fetch and pass over real time stock data with the R library [quantmod](https://github.com/joshuaulrich/quantmod). 

## Objectives
* Create a self-contained app that touches on all elements of full-stack development
* Get good at React
* Adhere to linting rules however annoying rather than bypass them

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
