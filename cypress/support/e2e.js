// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
<<<<<<< HEAD
import './commands'
=======
import './commands'

Cypress.on('fail', (error, runnable) => {
    cy.screenshot('error-field'); // Screenshot otomatis saat ada error
    throw error; // Tetap menampilkan error di log Cypress
  });
  
  Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      cy.screenshot(`failed-${test.title}`);
    }
  })
>>>>>>> adfcfb79c37070864c366b295e89a87b547539b7
