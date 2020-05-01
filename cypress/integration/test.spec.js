describe('it`s my really first test', () => {
    beforeEach(() => {
        cy.visit('http://demo-acm-2.bird.eu/')
    })
    it('SignUp is Correct', () => {
        //Search and click to "Sign In" button
        cy.contains('Sign In').click()

        // Assignment an entry field and type test information of email
        cy.get('input[name="login[username]"]').type('test5@mail.com')

        // Assignment an entry field and type test information of password
        cy.get('input[name="login[password]"]').type('1cvaoxhok1Q')

        // //Search and click to "Sign In" button
        cy.get('form#login-form fieldset > div.actions-toolbar > div.primary > button#send2 > span').click()

    })
//     it('Login is not Correct', () =>{
//         cy.contains('Sign In').click()
//         // Assignment an entry field and type test information of email
//         cy.get('input#email').type('test4@mail.com')
//             //.should('have.value','test5@mail.com') //it`s  for me to check, what i wasn`t wrong
//         // Assignment an entry field and type test information of password
//         cy.get(' input#pass').first().type('1cvaoxhok1Q')
//         //Search and click to "Sign In" button
//         cy.get("button#send2").first().click()
//     })
//     it('Password is not Correct', () =>{
//         cy.contains('Sign In').click()
//         // Assignment an entry field and type test information of email
//         cy.get('input#email').type('test5@mail.com')
//         // Assignment an entry field and type test information of password
//         cy.get(' input#pass').first().type('cvaoxhok1Q')
//         //Search and click to "Sign In" button
//         cy.get("button#send2").first().click()
//     })
//
//     it('Input correct data with CapsLock', () =>{
//         cy.contains('Sign In').click()
//
//         // Assignment an entry field and type test information of email
//         cy.get('input#email').type('TEST5@MAIL.COM')
//
//         // Assignment an entry field and type test information of password
//         cy.get(' input#pass').first().type('1cvaoxhok1Q')
//
//         //Search and click to "Sign In" button
//         cy.get("button#send2").first().click()
//     })
//     it('Password is not Correct', () =>{
//         cy.contains('Sign In').click()
//         // Assignment an entry field and type test information of email
//         cy.get('input#email').type('test5@mail.com')
//           .should('have.value','test4@mail.com') //it`s  for me to check, what i wasn`t wrong
//         // Assignment an entry field and type test information of password
//         cy.get(' input#pass').first().type('cvaoxhok1Q')
//             .should('have.value','1cvaoxhok1Q') //it`s  for me to check, what i wasn`t wrong
//         //Search and click to "Sign In" button
//         cy.get("button#send2").first().click()
//     })
//     it('.type() with key modif ', () =>{
//         cy.contains('Sign In').click()
//         cy.get('input#email')
//             .type('{alt}{option}') //these are equivalent
//             .type('{ctrl}{control}') //these are equivalent
//             .type('{meta}{command}{cmd}') //these are equivalent
//             .type('{shift}')
//     })
//     it('.clear() - clears an input or textarea element', () => {
//         cy.contains('Sign In').click()
//         cy.get('input#email').type('test message')
//            // .should('have.value', 'test message')
//             .clear()
//             .should('have.value', '')
// })
//     it('SignUp and LogOut', () => {
//         // cy.get('.panel.wrapper').contains('default store view').click()
//         //     //Search and click to "Sign In" button
//         // cy.contains('Sign In').click()
//         //  // Assignment an entry field and type test information of email
//         //  cy.get('input#email').type('test6@mail.com')
//         //  // Assignment an entry field and type test information of password
//         //  cy.get(' input#pass').first().type('1cvaoxhok1Q')
//         //  //Search and click to "Sign In" button
//         //  cy.get("button#send2").first().click()
//         //
//         //  cy.get('.customer-welcome').contains('costomer-welcome').click()
//
//    })

})