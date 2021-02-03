module.exports = {
  'stories': [
    '../src/Introduction.stories.mdx',
    '../src/**/*.stories.mdx',
  ],
  'addons': [
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials'
  ],
}
