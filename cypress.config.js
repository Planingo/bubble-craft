const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
    reportFilename: "[name]-report"
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "vite",
    },
    specPattern: "./**/**/*.cy.jsx",
  },
});
