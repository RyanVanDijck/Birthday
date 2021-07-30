describe('page loads', () => {
    it('displays name input, input is submitted', () => {
        cy.visit('/')
        cy.get("#name").type('Lottie')
        cy.get("#submit").click()
        cy.get("#nameChosen").should('contain','Lottie')
    })
})