/// <reference types="cypress" />

describe('testing api', () => {
    it('verify the list of users', () => {
        cy.request({
            methode: "GET",
            url: "https://reqres.in/api/users"
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
});
