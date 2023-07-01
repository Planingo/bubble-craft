module.exports = {
  'stories': [
    '../src/Introduction.stories.mdx',
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  'addons': [
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
    '@storybook/addon-measure',
    '@storybook/addon-jest',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  core: {
    builder: 'webpack5'
  },
}
