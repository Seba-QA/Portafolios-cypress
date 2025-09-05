const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports", // carpeta donde se guardan los reportes
    overwrite: false,             // evita que se sobrescriban los reportes anteriores
    html: false,                  
    json: true
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


