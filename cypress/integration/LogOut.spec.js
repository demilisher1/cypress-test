describe('Test for LogOut', () => {
    it('LogOut scenario', () => {
         cy.visit('http://demo-acm-2.bird.eu/home')
        cy.contains('Sign In').click()
        //cy.url(). should('include', 'customer/account/create/')
         cy.get('#email').type('test12@gmail.com');
         cy.get('#pass').type('1cvaoxhok1Q');
         cy.get('button#send2.action.login.primary').click()
             .wait(4000)
        cy.get('button.action.switch').first().click()
        cy.contains('Sign Out').click()

        // извини пишу на русском слишком много печатать. смысл что есть 2 активные кноgки для выхода из акка,
        //но одна находится вне поля зрения, ее не вынес программист (считаю косяком).


        // cy.get('#email').type('demilisher2@gmail.com')
        // cy.get('#pass').type('1cvaoxhok1Q')
        // cy.get('button#send2.action.login.primary').click()
        //You did not sign in correctly or your account is temporarily disabled???????.
        // email and password - is correct!!!!

















        // cy.get('.horizontal').contains('Зарегистрироваться').click()
        // cy.get('input[name="login"]').type('Demilisher')
        // cy.get('input[name="cust_password1"]').type('1cvaoxhok1Q')
        // cy.get('input[name="cust_password2"]').type('1cvaoxhok1Q')
        // cy.get('table#reg_fields_tbl input[name="email"]').type('demilisher1@gmail.com')
        // cy.get('input[name="last_name"]').type('Пуляков')
        // cy.get('input[name="first_name"]').type('Алексей')
        // cy.get('input[name="midle_name"]').type('Страус')
        // cy.get('input[name="additional_field_1"]').type('+79999999999')
        // cy.get('input[type="checkbox"]').not('[disabled]')
        //     .uncheck().should('not.be.checked')
        // cy.get('select[name="address[countryID]"]').select('Япония')
        // cy.get('input[name="address\\5b zip\\5d"]').type('90210')




    })

})