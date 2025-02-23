describe('Verify add to cart functionality', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  it('Add a product to cart', () => {
    cy.visit("https://magento.softwaretestingboard.com/"); // Buka website
    cy.get('.panel > .header > .authorization-link > a').click(); // Klik Sign In
    cy.get("#email").type('example@mail.com');  // Ganti dengan email valid
    cy.get("#pass").type('Qwerty123!'); // Ganti dengan password valid
    cy.get("#send2").click(); // Klik tombol login
    cy.get('.base').should('have.text','Home Page')
    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get("#option-label-size-143-item-166").click();
    cy.get("#option-label-color-93-item-50").click();
    cy.contains("button", "Add to Cart").click();
    cy.get(".message-success").should("contain", "You added Radiant Tee to your shopping cart.");
    cy.get("a.action.showcart").click();
    cy.get("#top-cart-btn-checkout").click();
    cy.contains("New Address").click();
    cy.contains("Ship here").click();
    cy.contains("This is a required field.").should("be.visible");
  })
})