/// <reference types="cypress" />


context(' Shopping List ', () => {

    beforeEach(() => cy.visit('localhost:3000/shopping_list'));

    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge'))
    it('Looks for the nav bar', () => cy.title().get('#navbar'))

    it('Checks Shopping title', () => cy.get('.shopping-list__title').contains('Liste des courses'))

    
})