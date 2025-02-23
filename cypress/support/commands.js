// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- Positive Case Edit Account Address Book --
Cypress.Commands.add ('MyAccount', (email, pass) =>{
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click({force:true})
    cy.get('#email').type(email)
    cy.get('#pass',{ timeout: 10000 }).should('exist').type(pass)
    cy.get('#send2').click()
    cy.contains('Welcome, Rizky Yulian!').should('be.visible',{timeout:100000})
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force:true})
    cy.get('.items > :nth-child(6) > a').click()
    cy.get('.box-address-billing > .box-actions > .action > span').click()
    cy.get('#company').clear().type('PT Manufacture Strong')
    cy.get('#telephone').clear().type('08292923841')
    cy.get('#street_1').clear().type('Labuan Street')
    cy.get('#city').clear().type('Borneo')
    cy.get('#region').clear().type('New Hampshire')
    cy.get('#zip').clear().type('911')
    cy.get('#country').select('Iceland')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

// -- Negative Case Edit Account Address Book--
Cypress.Commands.add ('MyAccountNegative', (email, pass) =>{
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click({force:true})
    cy.get('#email').type(email)
    cy.get('#pass',{ timeout: 10000 }).should('exist').type(pass)
    cy.get('#send2').click()
    cy.contains('Welcome, Rizky Yulian!').should('be.visible',{timeout:100000})
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force:true})
    cy.get('.items > :nth-child(6) > a').click()
    cy.get('.box-address-billing > .box-actions > .action > span').click()
    cy.get('#company').clear().type('PT Manufacture Strong')
    cy.get('#telephone').clear().type('08292923841')
    cy.get('#street_1').clear().type('Labuan Street')
    cy.get('#city').clear()
    cy.get('#region').type('New Hampshire')
    cy.get('#zip').clear().type('911')
    cy.get('#country').select('Côte d’Ivoire')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.mage-error').then($errors => {
        if ($errors.length > 0) { 
          cy.screenshot('Edit-Account-Address-Book',{capture: 'fullPage' });} 
    })

})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })