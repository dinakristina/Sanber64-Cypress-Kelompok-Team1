describe('My Account edit Information Test', () => {
    beforeEach(() => {cy.viewport(1000,660)})
    it('Should login successfully and You saved the address', () => {
      cy.MyAccount('example@mail.com','Qwerty123!')
    }
)
})