describe('it`s my really first test', () => {
    it('Create  akk', () => {
        cy.visit('http://demo-acm-2.bird.eu/')

        cy.contains('Create an Account').click()

        cy.get('input#firstname').type('fuck')
            .should('have.value', 'fuck') //просто для проверки будет ли принимать другие значения
        cy.get('input#lastname').type('you')
            .should('have.value','you')
        cy.get('input#email_address').type('test4@gmail.com')
            .should('have.value','test4@gmail.com')
        cy.get('input#password').type('1cvaoxhokQ')
        cy.get('input#password-confirmation').type('1cvaoxhokQ')
        cy.get('form#form-validate button[type="submit"] > span').click()


})