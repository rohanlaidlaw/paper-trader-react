/* eslint-disable */

describe('Main Page', () => {
    beforeEach(function () {
        cy.visit('http://localhost:3300/')
    });

    it('shows correct app bar title', () => {
        cy.get('div').contains('Paper Trader')
    });

    it('shows buttons in app bar', () => {
        cy.get('button').should('have.length', 2)
    });
});