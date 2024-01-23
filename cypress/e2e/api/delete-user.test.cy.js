/// <reference types="cypress" />

describe('delee user', () => {
    it('DELETE', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response => {
            expect(response.status).to.be.equal(204)
        }))
    });
});
