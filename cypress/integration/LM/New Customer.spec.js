describe('Create a new customer)',() => {
    beforeEach(() => {
        cy.visit('http://demo-acm-2.bird.eu/customer/account/login/referer/aHR0cDovL2RlbW8tYWNtLTIuYmlyZC5ldS8%2C/')
    })
    it('search and click to "Create a new custoner" ', () => {
        //
        cy.get('a[class="action create primary"]').click()
        cy.get('#firstname').type('Alexey')
        //cy.get('input[name="lastname"]').type('Shulyakov')
        cy.get('#lastname').type('Shulyakov')
        cy.get('#is_subscribed').not('[disabled]')
            //cy.get('input[name="is_subscribed"]').not('[disabled]') // work`s too
            .check().should('be.checked')
        cy.get('#email_address').type('test1214@gmail.com')
        cy.get('#password').type('1cvaoxhok1Q')
        cy.get('#password-confirmation').type('1cvaoxhok1Q')
        cy.get('button.action.submit.primary').click()

    })
    // it('wrong email ', () => {
    //     cy.get('a.action.create.primary').click()
    //     cy.get('#firstname').type('Alexey')
    //     //cy.get('input[name="lastname"]').type('Shulyakov')
    //     cy.get('#lastname').type('Shulyakov')
    //     cy.get('#is_subscribed').not('[disabled]')
    //         //cy.get('input[name="is_subscribed"]').not('[disabled]') // work`s too
    //         .check().should('be.checked')
    //     cy.get('#email_address').type('demilishergmail.com') //forgot type a "@"
    //         // .should('have.value', 'demilisher1@gmail.com')
    //     cy.get('#password').type('1cvaoxhok1Q')
    //     cy.get('#password-confirmation').type('1cvaoxhok1Q')
    //     cy.get('button.action.submit.primary').click()
    //
    // })
    // it('wrong password ', () => {
    //     cy.get('a.action.create.primary').click()
    //     cy.get('#firstname').type('Alexey')
    //     cy.get('#lastname').type('Shulyakov')
    //     cy.get('#is_subscribed').not('[disabled]')
    //         .check().should('be.checked')
    //     cy.get('#email_address').type('demilisher@gmail.com') //forgot type a "@"
    //     cy.get('#password').type('1cvaoxhok1QQ')
    //     cy.get('#password-confirmation').type('1cvaoxhok1Q')
    //     cy.get('button.action.submit.primary').click()
    //
    // })
    // it('wrong confirm password ', () => {
    //     cy.get('a.action.create.primary').click()
    //     cy.get('#firstname').type('Alexey')
    //     cy.get('#lastname').type('Shulyakov')
    //     cy.get('#is_subscribed').not('[disabled]')
    //         .check().should('be.checked')
    //     cy.get('#email_address').type('demilisher@gmail.com') //forgot type a "@"
    //     cy.get('#password').type('1cvaoxhok1Q')
    //     cy.get('#password-confirmation').type('1cvaoxhok1QQ')
    //     cy.get('button.action.submit.primary').click()
    //
    // })
    // it('uncheck box "SIGN UP FOR NEWSLETTER"  after confirm the create of the akk ', () => {
    //     cy.get('a.action.create.primary').click()
    //     cy.get('#firstname').type('Alexey')
    //     cy.get('#lastname').type('Shulyakov')
    //     cy.get('#is_subscribed').not('[disabled]')
    //         .check().should('be.checked')
    //     cy.get('#email_address').type('demilisher2@gmail.com') //forgot type a "@"
    //     cy.get('#password').type('1cvaoxhok1Q')
    //     cy.get('#password-confirmation').type('1cvaoxhok1Q')
    //     cy.get('#is_subscribed').not('[disabled]')
    //         .uncheck().should('not.be.checked')
    //     cy.get('button.action.submit.primary').click()
    //
    // })

})