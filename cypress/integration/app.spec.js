/* eslint-disable */

describe('Main Page', () => {
    beforeEach(function () {
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
    beforeEach(function () {
        cy.visit('http://localhost:3300/');
        cy.get('.jss40 > :nth-child(3)').click();
    });

    it('is spawned correctly', () => {
        cy.get('.jss100 > .jss13');
    });

    it('is spawned correctly', () => {
        cy.get('.jss177 > :nth-child(1)');
        cy.get('.jss177 > :nth-child(2)');
    });

});