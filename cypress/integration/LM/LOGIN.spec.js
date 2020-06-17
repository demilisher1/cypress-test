describe('Test for LogOut', () => {
    it('LogIn scenario', () => {
        cy.visit('https://dev2-ext.hivecompany.ru/management/')

        const LoginForm = cy.get('form input[name="username"]').type('Demilisher')
        cy.get('form input[name="password"]').type('1cvaoxhok1');
        cy.get('form > input[type="submit"]').click();
        cy.get('.buttons-page a:nth-child(1)').click()
        cy.get('div#Employees div.text-item').click()
        cy.get('#lastname').type('Шуляков')
        cy.get('#firstname').type('Алексей')
        cy.get('div#Employees div.row.mt-24 > div > div > div:nth-child(1) > div > input').type('21051986')

    })

})