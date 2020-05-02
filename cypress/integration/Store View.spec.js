context('it`s my really first test', () => {
    it('Create  akk', () => {
        cy.visit('http://wot-noobs.ru/')
      cy.contains('Меню').click()
        cy.get('.main-nav').contains('Нубомеры').next('.sub-menu').then($e1=>{
            cy.wrap($e1).invoke('show')
            cy.wrap($e1).contains('НубоРейтинг игрока (НР)').next('.sub-menu').then($e1=>{
                cy.wrap($e1).invoke('show')
                cy.wrap($e1).contains('Ранги НР').click()
            })
        })

    })
})
