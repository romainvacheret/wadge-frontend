// <reference types="cypress" />
context(' RecipeUser ', () => {



    beforeEach(() => cy.visit('localhost:3000/User'));
    it('Looks for the nav bar', () => cy.title().get('#navbar'))
    it('Checks the recipe title ', () => cy.get('.recipe__title').should('have.text', ' Liste de mes recettes '));
    it('Looks for the app bar', () => cy.title().get('#AppBar'))


  it('Makes sure the app bar contains expected text element ', () => {
          cy.get('.recipe__container').children().should('contain', 'Recettes scorées').and('contain', 'Recettes Proposées');
    });

  it('Checks  si le button coeur est la ', () => cy.get('#recipe__recipe-card__favorite'))
  it('Checks  si le button coeur est clickable ', () => cy.get('.recipe__recipe-card__favorite').click({ multiple: true }) ) ;


  it('Makes sure the recipe cards are clickable and contains expected titles', () => {
    cy.get('.recipe__container').children().click({ multiple: true });
    cy.get('.recipe__container').children().should('contain', 'Etapes').and('contain', 'Ingredients');
});

})