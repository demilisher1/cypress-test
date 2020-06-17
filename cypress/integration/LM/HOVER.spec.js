describe('Test for LogOut', () => {
    it('Lexample Hover scenario', () => {
        cy.visit('http://demo-acm-2.bird.eu/home')
        cy.get('#ui-id-2 > li > span').contains('Women').parent().find('ul.level0').invoke('show');
        cy.get('#ui-id-9').parent().find('ul.level1').invoke('show');
        cy.get('#ui-id-15').click()
//
    })

})