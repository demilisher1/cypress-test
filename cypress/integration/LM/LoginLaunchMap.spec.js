describe('Test for LogOut', () => {
    it('LogIn scenario', () => {
        cy.visit('localhost:3000')
        cy.contains('Sign in').click()

        cy.get('form div:nth-child(7) > a').click()
        cy.get('form div:nth-child(5) > a').click()
        cy.get('form input[name="email"]').type('Test10@gmail.com')
        cy.get('form input[name="password"]').type('Qwe1234');
        cy.get('form button[type="submit"]').click();
        // cy.get('nav > div > button').click(); // alternative way to click the Sign in Button
        //cy.get('form >  button').click(); // alternative way to click the Submit
        // cy.get('form input[name="email"]').type('Test10@gmail.com')
        // cy.get('form input[name="password"]').type('Qwe1234');

    })

})