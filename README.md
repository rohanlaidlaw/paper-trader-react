# Paper Trader
[![Build Status](https://travis-ci.org/volsci/paper-trader-react.svg?branch=develop)](https://travis-ci.org/volsci/paper-trader-react)
[![Coverage Status](https://coveralls.io/repos/github/volsci/paper-trader-react/badge.svg?branch=master)](https://coveralls.io/github/volsci/paper-trader-react?branch=master)

Paper trading is the act of simulated trading on the securities market. A paper trader marks the buy and sell prices for their asset, calculating their gain or loss from the difference. A particularly dedicated paper trader might then perform modifiers and fees over that figure. This allows participating without real money at stake -- whether for education (think the ASX game), practice or academia. Traditionally this is done through Excel formulas or on paper with pen.

While there are apps that exist to this end already, I remain unsatisfied. Afterthoughts on brokerage platforms, rail-roaded games allowing only longing shares perhaps even with imaginary numbers, or just facades to build a mailing list.

This is both an exercise to better myself as a full-stack developer, while building something I personally want to use.

*Paper Trader* is developed with React+Redux using the stocks.js library (which in turn accesses the Alpha Vantage API).

### Objectives
* Create a fully-realized web app that touches on all elements of full-stack development
* Get good at React
* Keep the code to a standard

State
---
Paper Trader manages its state with Redux. The middleware Thunk is used for dispatching asynchronous actions.

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

Workflow
---
Paper Trader uses the Gitflow workflow.

Linter
---
Paper Trader uses ESlint for linting, which runs in the pretest phase as defined in the `package.json`. Airbnb's linting rules are in use, however there are some modifications when the rules interfere with React's best practices.
