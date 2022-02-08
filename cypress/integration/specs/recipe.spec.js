/// <reference types="cypress" />


context('Recipes', () => {
    beforeEach(() => cy.visit('localhost:3000/recipes'));
    
    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge'))

    it('Looks for the nav bar', () => cy.get('#navbar'));

    it('Checks the title', () => cy.get('.recipe__title').should('have.text', ' Liste des recettes '));

    it('Makes sure the recipe list is not empty', () => 
        cy.get('.recipe__container').children().should('have.attr', 'data-testid', 'recipe-card__accordion')
    );

    it('Makes sure the recipe cards are clickable and contains expected titles', () => {
        cy.get('.recipe__container').children().click({ multiple: true });
        cy.get('.recipe__container').children().should('contain', 'Etapes').and('contain', 'Ingredients');
    });
})