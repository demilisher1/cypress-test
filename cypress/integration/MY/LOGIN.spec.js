describe('Test for LogOut', () => {
    it('LogIn scenario', () => {
        cy.visit('http://demo-acm-2.bird.eu/home')

        cy.contains('Sign In').click();
        const LoginForm = cy.get('#login-form');
        //cy.url(). should('include', 'customer/account/create/')
         LoginForm.get('#email').type('test1214@gmail.com');
         LoginForm.get('#pass').type('1cvaoxhok1Q');
        LoginForm.get('#send2').click().wait(3000);

    })

})