import js from "@eslint/js";
import cypress from "eslint-plugin-cypress/flat";
import * as mdx from "eslint-plugin-mdx";
import react from "eslint-plugin-react";
import globals from "globals";

const jsxFiles = [
  "{src,Template}/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}",
  "**/*.mdx",
];

export default [
  {
    ignores: ["mochawesome-report/**", "storybook-static/**"],
  },
  js.configs.recommended,
  {
    files: jsxFiles,
    ...react.configs.flat.recommended,
  },
  {
    files: jsxFiles,
    ...react.configs.flat["jsx-runtime"],
  },
  {
    files: jsxFiles,
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "react/no-unescaped-entities": "off",
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
    languageOptions: {
      globals: {
        // suite
        suite: true,
        test: true,
        describe: true,
        it: true,
        // chai
        chai: true,
        expect: true,
        assert: true,
        // typecheck
        expectTypeOf: true,
        assertType: true,
        // utils
        vitest: true,
        vi: true,
        // hooks
        beforeAll: true,
        afterAll: true,
        beforeEach: true,
        afterEach: true,
        onTestFinished: true,
        onTestFailed: true,
      },
    },
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
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  mdx.flatCodeBlocks,
];
