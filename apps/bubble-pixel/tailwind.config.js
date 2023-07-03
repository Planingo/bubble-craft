import path from path

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./app/**/*.jsx",
      path.join(path.dirname(require.resolve('@planingo/design-system')), '**/*.jsx'),
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

