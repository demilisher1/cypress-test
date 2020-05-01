describe('Subscribe)',() => {
    beforeEach(() => {
        cy.visit('http://demo-acm-2.bird.eu/')
    })
    it('search and click to "Create a new customer" ', () => {
       // cy.get('#newsletter').
        cy.get('button.action.subscribe.primary').click()
    })

})