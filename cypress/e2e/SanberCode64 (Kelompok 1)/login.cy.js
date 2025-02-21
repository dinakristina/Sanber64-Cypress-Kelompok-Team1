describe('Login Test', () => {
    it('Should login successfully with valid credentials', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.authorization-link > a').first().click()
      cy.get('#email').type('example@mail.com')
      cy.get('#pass').type('Qwerty123!')
      cy.get('#send2').click()
      cy.contains('Welcome, Rizky Yulian!').should('be.visible')
    })
  
  
    it('Should show error message on invalid login', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.authorization-link > a').first().click()
      cy.get('#email').type('wrong_email@example.com')
      cy.get('#pass').type('wrong_password')
      cy.get('#send2').click()
    })
  })
