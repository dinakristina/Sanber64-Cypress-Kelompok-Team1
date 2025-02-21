describe('Tambah Produk hingga Checkout', () => {
  it('Harus berhasil menambahkan produk dan menuju halaman Shipping', () => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html') // Buka langsung halaman produk

    // Pilih ukuran (contoh: M)
    cy.get('div[option-label="M"]').click()

    // Pilih warna (contoh: Blue)
    cy.get('div[option-label="Blue"]').click()

    // Klik tombol "Add to Cart"
    cy.get('#product-addtocart-button').click()

    // Verifikasi bahwa produk berhasil masuk ke keranjang
    cy.contains('You added Radiant Tee to your shopping cart.').should('be.visible')

    // Klik ikon keranjang
    cy.get('.showcart').click()

    // Klik "Proceed to Checkout" setelah cart dropdown muncul
    cy.get('#top-cart-btn-checkout', { timeout: 10000 })
      .should('be.visible')
      .click()

    // Pastikan halaman checkout terbuka
    cy.url().should('include', 'checkout')

    // Verifikasi berada di halaman "Shipping"
    cy.contains('Shipping Address').should('be.visible')
  })
})