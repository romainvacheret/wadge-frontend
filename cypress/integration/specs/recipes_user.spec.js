/// <reference types="cypress" />


context(' RecipeUser ', () => {

    beforeEach(() => cy.visit('localhost:3000/recipes/user'));

    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge'))
    it('Looks for the nav bar', () => cy.title().get('#navbar'))
    it('Checks the recipe title ', () => cy.get('.recipe__title').should('have.text', 'Mes recettes '));
    it('Looks for the app bar', () => cy.title().get('#AppBar'))


  // it('Makes sure the app bar contains expected text element ', () => {
  //         cy.get('.recipe__container').children().should('contain', 'Recettes scorées').and('contain', 'Recettes Proposées');
  //   });

  // it('Makes sure FavIcon is here ', () => cy.get('.recipe__recipe-card__favorite'))
  // it('Checks if FavIcon is clickable ', () => cy.get('.recipe__recipe-card__favorite').click({ multiple: true }) ) ;


  it('Makes sure the recipe cards are clickable and contains expected titles', () => {
    cy.get('.recipe__container').children().click({ multiple: true });
    cy.get('.recipe__container').children().should('contain', 'Etapes').and('contain', 'Ingredients');
});

  it('Makes sure tabs are clickable and contains expected titles', () => {
    cy.get('#recipes__scored__title').children().click({ multiple: true });
    cy.get('#recipes__scored__title').children().should('contains', 'Recettes scorées');

    cy.get('#recipes__predicted__title').children().click({ multiple: true });
    cy.get('#recipes__predicted__title').children().should('contains', 'Recettes proposées');
  })

})