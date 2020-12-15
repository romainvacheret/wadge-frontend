/// <reference types="cypress" />


context('Month filter', () => {
    beforeEach(() => cy.visit('localhost:3000/fridge/addition'));
    
    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge App'));

    it('Looks for the nav bar', () => cy.get('#navbar'));
    it('Looks for the search bar', () => cy.get('.search-bar'));

    it('Checks the title', () => cy.contains('Liste des fruits et légumes à ajouter'));

    it('Makes sure all the foods are present', () => {
        cy.get('.fridge-addition__food-card').should('have.length', 88);
    });

    it('Checks that sub titles are present', () => {
        cy.contains('Légumes');
        cy.contains('Fruits');
    });

    it('Checks the validation button', () => {
        cy.get('.fridge-addition__button').should('have.attr', 'href', '/fridge');
    });

    // TODO Check the buttons +/-

})