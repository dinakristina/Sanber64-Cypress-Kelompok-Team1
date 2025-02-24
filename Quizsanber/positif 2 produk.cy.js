describe('Tambah 2 Produk ke Keranjang dan Checkout', () => {
    it('Test berhasil menambahkan 2 produk dan menuju halaman Shipping', () => {
      // **Tambahkan Produk Pertama (Radiant Tee)**
      cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
  
      //ukuran
      cy.get('div[option-label="M"]').click()
      //warn
      cy.get('div[option-label="Blue"]').click()
      // Klik "Add to Cart"
      cy.get('#product-addtocart-button').click()
      // Verifikasi produk pertama berhasil masuk
      cy.contains('You added Radiant Tee to your shopping cart.').should('be.visible')
  
      // **Tambahkan Produk Kedua**
      cy.visit('https://magento.softwaretestingboard.com/argus-all-weather-tank.html')
  
      //ukuran 
      cy.get('div[option-label="L"]').click()
      //warna
      cy.get('div[option-label="Gray"]').click()
      // Klik "Add to Cart"
      cy.get('#product-addtocart-button').click()
      // Verifikasi produk kedua berhasil masuk
      cy.contains('You added Argus All-Weather Tank to your shopping cart.').should('be.visible')
  
      // **Buka Keranjang dan Checkout**
      cy.get('.showcart').click()
  
      // Klik "Proceed to Checkout" langsung dari dropdown cart
      cy.get('#top-cart-btn-checkout', { timeout: 10000 })
        .should('be.visible')
        .click()
  
      // **Verifikasi halaman checkout terbuka**
      cy.url().should('include', 'checkout')
  
      // **berada di halaman Shipping**
      cy.contains('Shipping Address').should('be.visible')
    })
  })
  