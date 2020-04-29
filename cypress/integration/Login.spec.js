describe('Test for Login', () => {
    it('Login scenario', () => {
        cy.visit('http://www.recomb-omsk.ru/')
        cy.get('.horizontal').contains('Зарегистрироваться').click()
        cy.get('input[name="login"]').type('Demilisher')
        cy.get('input[name="cust_password1"]').type('1cvaoxhok1Q')
        cy.get('input[name="cust_password2"]').type('1cvaoxhok1Q')
        cy.get('table#reg_fields_tbl input[name="email"]').type('demilisher1@gmail.com')
        cy.get('input[name="last_name"]').type('Пуляков')
        cy.get('input[name="first_name"]').type('Алексей')
        cy.get('input[name="midle_name"]').type('Страус')
        cy.get('input[name="additional_field_1"]').type('+79999999999')
        cy.get('input[type="checkbox"]').not('[disabled]')
            .uncheck().should('not.be.checked')
        cy.get('select[name="address[countryID]"]').select('Япония')
        cy.get('input[name="address\\5b zip\\5d"]').type('90210')




    })

})