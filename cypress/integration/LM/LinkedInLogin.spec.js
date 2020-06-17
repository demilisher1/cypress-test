describe('Login', () => {
    it('New user? Sign up today!', () => {
        cy.visit('localhost:3000')
        cy.contains('Sign in').click()
        cy.get('form div:nth-child(5) > a').click()



    })

})