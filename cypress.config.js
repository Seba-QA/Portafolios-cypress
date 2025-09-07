const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",

    // 🔹 Opciones para Mochawesome mejorado
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: "Swag Labs - Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportDir: "cypress/reports/mochawesome",
      reportFilename: "index"
    },

    // 🔹 Opciones para JUnit
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml",
      toConsole: false,
      attachments: false
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Necesario para inicializar cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true,                 // grabar video de cada test
    screenshotOnRunFailure: true // capturas automáticas en fallos
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});


