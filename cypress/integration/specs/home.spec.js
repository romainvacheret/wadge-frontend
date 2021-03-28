/// <reference types="cypress" />


context('Home page', () => {
    beforeEach(() => cy.visit('localhost:3000/'))
    
    it('Checks the title', () => cy.title().should('eq', 'Wadge App'))

    it('Makes sure the logo is present and clickable', () => {
        cy.get('.home__image').should('have.attr', 'src', 'logo.png')
        cy.get('.home__image').parent().should('have.attr', 'href', '/fridge')
    })

    it('Looks for the nav bar', () => cy.title().get('#navbar'))

    it('Checks the nav bar logo', () => {
        cy.get('#nav-logo').should('have.attr', 'href', '/')
        cy.get('#nav-logo').children('img#logo-nav').should('have.attr', 'src', '/logo.png')
    })

    it('Checks the link to the filter ', () => {
        cy.get('#nav-filter').should('have.attr', 'href', '/filter')
    })

    it('Checks the link to the fridge', () => {
        cy.get('#nav-fridge').should('have.attr', 'href', '/fridge')
    })

    it('Checks the link to the fridge addition', () => {
        cy.get('#nav-fridge-addition').should('have.attr', 'href', '/fridge/addition')
    })

    it('Checks the link to the shopping list', () => {
        cy.get('#nav-shopping').should('have.attr', 'href', '/shopping_list')
    })

    it('Checks the link to the recipies', () => {
        cy.get('#nav-recipes').should('have.attr', 'href', '/recipes')
    })

    it('Checks the scale', () => {
        cy.get('#icon-scale').should('have.attr', 'src', '/scale.png')
    })
})