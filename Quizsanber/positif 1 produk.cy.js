describe('Tambah Produk hingga Checkout', () => {
  it('Test berhasil menambahkan produk dan menuju halaman Shipping', () => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html') // Buka langsung halaman produk

    //ukuran
    cy.get('div[option-label="M"]').click()

    //warna
    cy.get('div[option-label="Blue"]').click()

    //tombol "Add to Cart"
    cy.get('#product-addtocart-button').click()

    //produk berhasil masuk ke keranjang
    cy.contains('You added Radiant Tee to your shopping cart.').should('be.visible')

    //ikon keranjang
    cy.get('.showcart').click()

    //klik "Proceed to Checkout" setelah cart dropdown muncul
    cy.get('#top-cart-btn-checkout', { timeout: 10000 })
      .should('be.visible')
      .click()

    //halaman checkout 
    cy.url().should('include', 'checkout')

    // Verifikasi berada di halaman "Shipping"
    cy.contains('Shipping Address').should('be.visible')
  })
})