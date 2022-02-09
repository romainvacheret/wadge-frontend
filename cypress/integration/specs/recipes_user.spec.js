/// <reference types="cypress" />


context(' RecipeUser ', () => {

  beforeEach(() => cy.visit('localhost:3000/recipes/user'));

  it('Checks the title of the page', () => cy.title().should('eq', 'Wadge'))
  it('Looks for the nav bar', () => cy.title().get('#navbar'))
  it('Looks for the app bar', () => cy.title().get('#AppBar'))
  it('Checks the title', () => cy.get('.recipe__title').should('have.text', ' Mes recettes '));


  it('Makes sure tabs are clickable and contains expected titles', () => {
    cy.get('.recipes__scored__title').children().click({ multiple:true, force:true });

    cy.get('.recipes__scored__title').children().should('have.text', 'Recettes scorées  ');
    //cy.get('.recipes__predict__title').children().should('have.text', 'Recettes Proposées  ');
  })

// TODO -> recipes_scored for RecipesUser page tests
  // it('Makes sure the recipe cards are clickable and contains expected titles', () => {
    
  //   cy.intercept('GET', `http://localhost:8080/users/1`, { fixture: `recipes_list/recipes_scored.json` })
  //   cy.get('.recipe__container').children().click({ multiple: true });
  //   cy.get('.accordion__details').children().should('contain', 'Etapes').and('contain', 'Ingredients');
  // });
})