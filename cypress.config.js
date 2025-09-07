const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome, mocha-junit-reporter",

    // Opciones para Mochawesome
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      reportFilename: "index",
      overwrite: false,
      html: false,    // solo JSON; el HTML lo generamos luego con 'marge'
      json: true
    },

    // Opciones para JUnit
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml",
      toConsole: false,
      attachments: false
      // useFullSuiteTitle: true, // opcional si quieres suite title completo
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Aquí se pueden implementar event listeners si luego necesitas manipular reportes u otros hooks
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});


