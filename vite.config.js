import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["src/setupTests.js"],
    globals: true,
  },
};
