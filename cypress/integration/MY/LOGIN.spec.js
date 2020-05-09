describe('Test for LogOut', () => {
    it('LogOut scenario', () => {
        cy.visit('http://demo-acm-2.bird.eu/home')

        cy.contains('Sign In').click();
        const LoginForm = cy.get('#login-form');
        //cy.url(). should('include', 'customer/account/create/')
         LoginForm.get('#email').type('test1214@gmail.com');
         LoginForm.get('#pass').type('1cvaoxhok1Q');
        LoginForm.get('#send2').click().wait(3000);

    })
    it('LogOut scenario', () => {
        cy.get('header .panel header > .header links > .authorization-link').click()
        //cy.get('#ui-id-2 > li > span').contains('Women').parent().find('ul.level0').invoke('show');
    })
})