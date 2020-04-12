describe('Test for searching', () => {
    it('Search scenario', () => {
        cy.visit('http://demo-acm-2.bird.eu/')
        cy.get('input#search').click().type('Augusta Pullover Jacket').type('{enter}')
        cy.get('main#maincontent li:nth-child(1) > div > div > div.product-item-inner > div > div.actions-primary > form > button[type="submit"]')
        cy.get('main#maincontent li:nth-child(1) > div > div > div:nth-child(4) > div.swatch-attribute.color > div > div#option-label-color-93-item-50').click()
        cy.get('main#maincontent li:nth-child(1) > div > div > div:nth-child(4) > div.swatch-attribute.size > div > div#option-label-size-141-item-167').click()
        cy.get('main#maincontent li:nth-child(1) > div > div > div.product-item-inner > div > div.actions-primary > form > button[type="submit"] > span').click({force:true})
        cy.wait(6000)

    })

})