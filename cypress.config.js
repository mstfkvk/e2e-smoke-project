const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',  // workflow'daki publish_dir ile aynı olmalı
    overwrite: true,
    html: true,
    json: false,
    inlineAssets: true,  // ← CSS/JS'i HTML'e gömer, Pages'de çalışması için şart
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});