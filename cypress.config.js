<<<<<<< HEAD
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
=======
const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60_000,
  viewportWidth: 1000,
  viewportHeight: 660,


  e2e: {
    video: true,
    experimentalStudio:true,
    screenshotOnRunFailure:true,
    screenshotsFolder: 'cypress/screenshots/SanberCode64 (Kelompok 1)/Negative Case',
>>>>>>> adfcfb79c37070864c366b295e89a87b547539b7
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
