/// <reference types="cypress" />

describe('Create New User', () => {
    it('Successfully create new user', () => {
        var user = {
            "name": "wisnu",
            "job": "SQA"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.body.name).equal(user.name)
        })
    });
});
