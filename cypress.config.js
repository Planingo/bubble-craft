import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "runner-results",
    overwrite: false,
    html: false,
    json: true,
    reportFilename: "[name]-report",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "./**/**/*.cy.jsx",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
