describe('Login Test', () => {
    beforeEach(() => {cy.viewport(1280,720)})
    it('Should login successfully and Success Edit on My Account', () => {
      cy.MyAccount('example@mail.com','Qwerty123!')
    }
)
})