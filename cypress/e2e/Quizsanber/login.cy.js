describe('Magento Login Test', () => {
    it('login berhasil dina', () => {
      cy.visit('https://magento.softwaretestingboard.com/') // Buka website
      cy.contains('Sign In').click() // Klik tombol "Sign In"
  
      // Masukkan username dan password
      cy.get('#email').type('dina.ks1408@gmail.com') // Ganti dengan email yang valid
      cy.get('#pass').type('1999April14') // Ganti dengan password yang valid
  
      // Klik tombol login
      cy.get('#send2').click()
  
      // Verifikasi login berhasil
      cy.contains('Welcome').should('be.visible')
    })
  })