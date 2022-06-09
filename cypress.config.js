const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tkba6f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
