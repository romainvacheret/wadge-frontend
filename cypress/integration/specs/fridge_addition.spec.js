/// <reference types="cypress" />


context('Fridge addition', () => {
    beforeEach(() =>{ 
        cy.intercept('GET', `http://localhost:8080/foods/`, { fixture: `food/food_list.json` })
        cy.visit('localhost:3000/fridge/addition')
});
    
    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge'));

    it('Looks for the nav bar', () => cy.get('#navbar'));

    it('Checks the search bar', () => cy.get('.form-control'))

    it('Checks the title', () => cy.contains('Liste des fruits et légumes à ajouter'));

    it('Makes sure all food is present', () => {
        cy.get('.fruits__container').children().should('have.length', 45);
        cy.get('.vegetables__container').children().should('have.length', 43);


        
    });

    it('Makes sure each food has its counter', () => {
        cy.intercept('GET', `http://localhost:8080/foods/`, { fixture: `food/food_list.json` })
        cy.get('.fruits-vegetables').should('have.length', 1);
    });


    it('Checks that sub titles are present', () => {
        cy.contains('Légumes');
        cy.contains('Fruits');
    });

    it('Checks the validation button', () => {
        cy.get('.fridge-addition__button').should('have.attr', 'href', '/fridge');
    });

    // TODO Check the buttons +/-
    it('Check the +/- buttons', () => {
        cy.get('.addition__counter__button').contains('have.attr', 'onClick');
    });

})