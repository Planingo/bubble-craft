module.exports = {
    cssModules: name => name.endsWith(".less") || name.endsWith(".sass") || name.endsWith(".css")
  };