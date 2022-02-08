/// <reference types="cypress" />


context(' 404 error page ', () => {

    beforeEach(() => cy.visit('localhost:3000/404'));

    it('Checks the title of the page', () => cy.title().should('eq', '404 Error | Wadge'))
    it('Makes sure the logo is present', () => {
        cy.get('.logo_404').should('have.attr', 'src', '/logo2.png')
    })

    it('Checks the 404 text', () => cy.get('.404__error__text').children().contains("404"))
    it('Checks the PNF text', () => cy.get('.404__error__text').children().contains("Page not found."))
    it('Checks the suppression text', () => cy.get('.404__error__text').children().contains("La page que vous recherchez a peut-être été supprimée."))


    it('Checks the home return button & clickable', () => {
        cy.get('#error__to-home__button').children().should('have.attr','to', '/' )
        cy.get('#error__to-home__button').children().click({ multiple: true });

    })
})