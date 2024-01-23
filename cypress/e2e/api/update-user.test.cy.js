/// <reference types="cypress" />

describe('update user', () => {
    it('successfull update user', () => {
        var newUser = {
            "name": "wisnu",
            "job": "SQA"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', newUser).then((response => {
            expect(response.status).equal(200)
            expect(response.body.name).to.equal(newUser.name)
        }))
    });
});
