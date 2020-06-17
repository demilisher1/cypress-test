describe('Login', () => {
    it('New user? Sign up today!', () => {
        cy.visit('localhost:3000')
        cy.get('form#search-form div > input').type('90210').type('{enter}')
        //cy.get('form#search-form div > svg.search-icon').click()


    })

})