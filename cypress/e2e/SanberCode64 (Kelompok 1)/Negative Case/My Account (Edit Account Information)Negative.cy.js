describe('My Account edit Information Test', () => {
    beforeEach(() => {cy.viewport(1280,720)})
    it('Not fill one of Mandatory Field, Should have alert "This is a required field"', () => {
      cy.MyAccountNegative('example@mail.com','Qwerty123!')
    }
)
})