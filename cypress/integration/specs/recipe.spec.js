/// <reference types="cypress" />


context('Recipes', () => {
    beforeEach(() => {
        cy.intercept('GET', `http://localhost:8080/recipes`, { fixture: `recipes_list/recipes.json` })
        cy.visit('localhost:3000/recipes')
    });
    
    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge'))
    it('Looks for the nav bar', () => cy.get('#navbar'));
    it('Looks for the app bar', () => cy.title().get('#AppBar'))
    it('Checks the title', () => cy.get('.recipe__title').should('have.text', ' Liste des recettes '));

    it('Makes sure tabs are clickable and contains expected titles', () => {
        cy.get('.recipes__all__title').children().click({ multiple:true, force:true });
    
        cy.get('.recipes__all__title').contains('Toutes les Recettes');
        //cy.get('.recipes__favorite__title').children().should('have.text', 'Recettes Favorites  ');
    });

    it('Makes sure the recipe list is not empty', () => {
        cy.get('.recipe__container').children().should('have.attr', 'data-testid', 'recipe-card__accordion')
    });

    it('Makes sure the recipe cards are clickable and contains expected titles', () => {
        cy.get('.recipe__container').children().should('contains', 'name')
        cy.get('.accordion__details').children().should('contains', 'Etapes').and('contains', 'Ingredients');
    });
})