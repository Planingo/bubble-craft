module.exports = {
  'stories': ['../src/Introduction.mdx', "../src/stories/*.@(mdx|stories.@(jsx))"],
  'addons': [{
    name: '@storybook/addon-docs',
    options: {
      transcludeMarkdown: true
    }
  }, '@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-pseudo-states', '@storybook/addon-measure', '@storybook/addon-jest', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};