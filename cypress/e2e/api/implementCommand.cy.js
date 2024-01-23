/// <reference types="cypress" />

describe('implement command', () => {
    it('testing api', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.loginViaAPI('admin', 'admin')
    });
});
