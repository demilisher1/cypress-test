describe('Test for Trash', () => {
    beforeEach('Trash check', () => {
        cy.visit('http://demo-acm-2.bird.eu/lookbook')

    })
    it('You have no items in your shopping cart = Close dialog', () =>{
        cy.get('#newsletter-validate-detail').then(form$ => {
            form$.on('submit', e => {
                e.preventDefault()
            })
        })
        // cy.get('.minicart-wrapper a').then(item$ => {
        //         item$.on('click', e => {
        //             e.preventDefault()
        //             return false

            //     })
            // })
        //cy.get('.minicart-wrapper a').click()

        //   cy.get('header .header.content > .minicart-wrapper .ui-dialog ').invoke('show')
        //   const trash = cy.get('header .header.content > .minicart-wrapper .ui-dialog')
        //   trash.invoke('show')
        //   trash.find('.block').find('#minicart-content-wrapper').find('.block-content').find('button').click()
    // })
    // it('You have no items in your shopping cart = Close dialog', () =>{
    //      cy.get('header .header.content > .minicart-wrapper').click()
    // })
    // it('You have no items in your shopping cart = Close dialog', () =>{
    //     cy.get('header .header.content > .minicart-wrapper').click()
    })
})

