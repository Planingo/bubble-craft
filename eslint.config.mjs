import js from "@eslint/js";
import cypress from "eslint-plugin-cypress/flat";
import jest from "eslint-plugin-jest";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    ignores: ["mochawesome-report/**"],
    ...js.configs.recommended,
  },
  {
    files: ["{src,Template}/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...react.configs.flat.recommended,
  },
  {
    files: ["{src,Template}/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...react.configs.flat["jsx-runtime"],
  },
  {
    files: ["{src,Template}/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": "warn",
    },
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        process: "readable",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      formComponents: ["Form"],
      linkComponents: [
        {
          name: "Link",
          linkAttribute: "to",
        },
        {
          name: "NavLink",
          linkAttribute: "to",
        },
      ],
      "import/resolver": {
        typescript: {},
      },
    },
  },
  {
    files: ["{src,Template}/**/*.test.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...jest.configs["flat/style"],
  },
  {
    files: [
      "{src,Template}/**/*.cy.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}",
      "cypress/**/*.js",
    ],
    ...cypress.configs.recommended,
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["*config.js", ".storybook/*.js"],
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },
  },
];
