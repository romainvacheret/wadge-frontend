/// <reference types="cypress" />


context('Fridge', () => {
    beforeEach(() => cy.visit('localhost:3000/fridge'));
    
    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge App'));

    it('Looks for the nav bar', () => cy.get('#navbar'));

    it('Checks the update button', () => cy.get('#update-fridge'))
    it('Checks the clear button', () => cy.get('#clear-fridge'))
    it('Checks the clean button', () => cy.get('#clean-fridge'))

    it('Checks the title', () => cy.contains('Contenu de votre frigo'));
})