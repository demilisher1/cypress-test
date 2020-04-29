context('Navigation', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
        cy.get('.navbar-nav').contains('Commands').click()
        cy.get('.dropdown-menu').contains('Actions').click()
    })

    it('cy.reload() - reload the page', () => {
        // https://on.cypress.io/reload
        cy.reload()

        // reload the page without using the cache
        cy.reload(true)
    })
})