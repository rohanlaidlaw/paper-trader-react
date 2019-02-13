# Paper Trader
[![Build Status](https://travis-ci.org/volsci/paper-trader-react.svg?branch=develop)](https://travis-ci.org/volsci/paper-trader-react)
[![Coverage Status](https://coveralls.io/repos/github/volsci/paper-trader-react/badge.svg?branch=develop)](https://coveralls.io/github/volsci/paper-trader-react?branch=develop)

Paper trading is the act of simulated trading on the securities market. A paper trader will mark the buy and sell prices for their asset, then calculate their gain or loss from the difference. A particularly dedicated paper trader might then perform modifiers and fees over that figure. This allows participation in financial markets without the staking of real money -- whether for educational (think the ASX game) or academic purposes, practice and preparation, or merely personal interest. Traditionally this is done through the use of Microsoft Excel or paper and pencil.

While there are apps that exist to this end already, I remain unsatisfied. Afterthoughts on brokerage platforms, rail-roaded games allowing only longing shares perhaps even with imaginary numbers, or just facades to build a mailing list.

This is both an exercise to better myself as a full-stack developer, while building something I personally want to use.

*Paper Trader* is built with React+Redux. Data is retrieved through usage of the Alpha Vantage API. The data is visualized with d3 and React Stockcharts.

### Objectives
* Create a fully-realized web app that touches on all elements of full-stack development
* Get good at React
* Keep the code to a standard

### Current State
* Input any number of stocks and have their intraday trading graphed

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
Paper Trader uses a test stack comprised of Jest, Enzyme and Cypress, covering unit, integration and E2E testing. Continuous integration is handled through Travis CI.

```
npm test
```
```
npm run cypress
```

Backend
---
Paper Trader uses the GraphQL API query language. 
```
/graphql
```


Workflow
---
Paper Trader uses the Gitflow workflow.


Linter
---
Paper Trader uses ESlint for linting, which runs in the pretest phase as defined in the `package.json`. Airbnb's linting rules are in use, however there are some modifications when the rules interfere with React's best practices.
