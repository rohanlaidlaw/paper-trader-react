/* eslint-disable */

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3300/');
  });

  it('shows correct app bar title', () => {
    cy.get('div').contains('Paper Trader');
  });

  it('shows buttons in app bar', () => {
    cy.get('button').should('have.length', 2);
  });
});

describe('Dialog Box', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3300/');
    cy.get('.jss40 > :nth-child(3)').click();
  });

  it('is spawned correctly', () => {
    cy.get('.jss100 > .jss13');
  });

  it('has correct buttons', () => {
    cy.get('.jss177 > :nth-child(1)');
    cy.get('.jss177 > :nth-child(2)');
  });

  it('typing and add button works', () => {
    cy.get('#name').type('TSLA');
    cy.get('.jss177 > :nth-child(2)').click();
    cy.get('.jss100 > .jss13').should('not.exist');
    cy.get('ul > :nth-child(1)').contains('TSLA');

    cy.get('.jss40 > :nth-child(3)').click();
    cy.get('#name').type('AAPL');
    cy.get('.jss266 > :nth-child(2)').click();
    cy.get('.jss100 > .jss13').should('not.exist');
    cy.get('ul > :nth-child(2)').contains('AAPL');
  });

  it('cancel button works', () => {
    cy.get('.jss177 > :nth-child(1)').click();
    cy.get('.jss100 > .jss13').should('not.exist');
  });
});
