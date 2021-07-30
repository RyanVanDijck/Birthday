describe('page loads', () => {
    it('displays name input', () => {
        cy.visit('/')
        cy.get("#name").type('Lottie')
        cy.get("#submit").click()
        cy.get("#nameChosen").should('contain','Lottie')
    })
})