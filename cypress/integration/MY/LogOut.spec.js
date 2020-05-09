describe('Test for LogOut', () => {
    it('LogOut scenario', () => {
        cy.visit('http://demo-acm-2.bird.eu/customer/account/login/referer/aHR0cDovL2RlbW8tYWNtLTIuYmlyZC5ldS8%2C/')

        cy.get('.header .panel header. customer-welcome .header links a').contains('Sign Out').click()
    })

})