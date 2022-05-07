///<reference types="cypress"/>

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto na lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade= 1

        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
        cy.get('.button-variable-item-S')
        .click()
        cy.get('.button-variable-item-Purple')
        .click()
        cy.get('.input-text')
        .clear()
        .type(quantidade)
        cy.get('.single_add_to_cart_button')
        .click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
        cy.get('.woocommerce-message').should('contain','“Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho')


    })
});