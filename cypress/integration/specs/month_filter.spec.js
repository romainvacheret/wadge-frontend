/// <reference types="cypress" />

const monthMap = {
    
    'Février': 33,
    'Mars': 25,
    'Avril': 24,
    'Mai': 23,
    'Juin': 38,
    'Juillet': 41,
    'Août': 42,
    'Septembre': 54,
    'Octobre': 55,
    'Novembre': 51,
    'Décembre': 43,
    'Janvier': 38
};

const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'jun',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

context('Month filter', () => {
    beforeEach(() => cy.visit('localhost:3000/filter'))
    
    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge App'))

    it('Looks for the nav bar', () => cy.title().get('#navbar'))


    it('Checks the title', () => cy.contains('Liste des fruits et légumes'))

    it('Makes sure the select is present', () => {
        cy.get('.monthfilter__bar').children().should('have.length', 12)
    })

    it('Checks how many elements are present for each month', () => {
        months.forEach(month => cy.intercept('GET', `http://localhost:8080/foods/${month}`, { fixture: `filter/${month}.json` }).as('aa'))


        cy.intercept('GET', `http://localhost:8080/foods/january`, { fixture: `filter/january.json` }).as('aa')
        

        Object.entries(monthMap).forEach(([key, value]) => {
            cy.contains(key).click()
            // cy.wait('@aa')
            cy.contains('Légumes')
            cy.contains('Fruits')
            cy.get('.foodlist__food-card').should('have.length', value)
        })
    })
})