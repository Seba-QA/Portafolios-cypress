const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí podrías implementar event listeners si luego necesitas manipular reportes u otros hooks
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", // carpeta donde se guardan los reportes
      overwrite: false,             // evita que se sobrescriban los reportes anteriores
      html: false,                  // solo JSON (el HTML lo generamos luego con mochawesome-report-generator)
      json: true
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});

