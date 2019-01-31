/* eslint-disable */

describe('Main Page', () => {
    beforeEach(function () {
        cy.visit('http://localhost:3300/')
    });

    it('shows correct app bar title', () => {
        cy.get('div').contains('Paper Trader')
    });
});