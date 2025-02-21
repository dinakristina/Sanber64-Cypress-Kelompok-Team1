describe('Negative Test Cases', () => {

    it('Test Tanpa pilih size dan warna', () => {
      cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
  
      // Langsung klik tombol "Add to Cart" tanpa pilih ukuran atau warna
      cy.get('#product-addtocart-button').click()
  
      // error muncul
      cy.contains('This is a required field.').should('be.visible')
    })
  
      it('Test dengan stok tidak tersedia', () => {
        cy.visit('https://magento.softwaretestingboard.com/push-it-messenger-bag.html')
    
        // jumlah produk stok banyak
        cy.get('#qty').clear().type('9999')
    
        // tombol "Add to Cart"
        cy.get('#product-addtocart-button').click()
    
        // pesan error muncul
        cy.contains('The requested quantity is not available').should('be.visible')
    })
})