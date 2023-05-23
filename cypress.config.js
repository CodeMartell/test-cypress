const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2kf6w8',
  e2e: {
    setupNodeEvents(on, config) {
      require('mocha/mocha'); // This line is required to avoid a "Mocha was not found" error
      const mochawesome = require('mochawesome');
      on('before:run', (runResults) => {
        config.reporter = mochawesome;
        config.reporterOptions = {
          reportDir: 'cypress/report/mochawesome-report',
          overwrite: true,
          html: true,
          json: false,
          timestamp: 'mmddyyyy_HHMMss'
        };
      });
    },
  },
});

