describe('Test for searching', () => {
    it('Search scenario', () => {
        cy.visit('http://demo-acm-2.bird.eu/')
        cy.get('input#search').click().type('be cool{enter}')  //good
        // cy.get('input#search').click().type('be cool').type('{enter}')  //not good

            })

})