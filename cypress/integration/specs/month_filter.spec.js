/// <reference types="cypress" />

const monthMap = {
    'Janvier': 38,
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
    'Décembre': 43
};

context('Month filter', () => {
    beforeEach(() => cy.visit('localhost:3000/filter'))
    
    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge App'))

    it('Checks the title', () => cy.contains('Liste des fruits et légumes'))

    it('Makes sure the select is present', () => {
        cy.get('.contBtn').children().should('have.length', 12)
    })

    it('Checks how many elements are present for each month', () => {
        Object.entries(monthMap).forEach(([key, value]) => {
            cy.contains(key).click()
            cy.contains('Legumes')
            cy.contains('Fruits')
            cy.get('.food').should('have.length', value)
        })
    })
})