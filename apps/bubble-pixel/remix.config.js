const path = require('path')

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    '@planingo/design-system'
  ],
  watchPaths: [path.dirname(require.resolve('@planingo/design-system'))],
  // tailwind: true,
};
