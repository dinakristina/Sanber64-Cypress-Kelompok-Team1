const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 200_000,
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    experimentalStudio:true,
    screenshotOnRunFailure:true,
    screenshotsFolder: 'cypress/screenshots/SanberCode64 (Kelompok 1)/Negative Case',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
