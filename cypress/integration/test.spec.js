describe('it`s my really first test', () => {
    it('Login scenario', () => {
        cy.visit('http://demo-acm-2.bird.eu/')

        //Search and click to "Sign In" button
        cy.contains('Sign In').click()

        // Assignment an entry field and type test information of email
        cy.get('input#email').type('test3@gmail.com')

        // Assignment an entry field and type test information of password
        cy.get('form#login-form fieldset > div.field.password.required > div > input#pass').type('1cvaoxhokQ')

        //Search and click to "Sign In" button
        cy.get("form#login-form fieldset > div.actions-toolbar > div.primary > button#send2 > span").click()

    })

})