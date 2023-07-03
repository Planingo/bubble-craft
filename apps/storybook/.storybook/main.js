/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    // '../stories/Introduction.stories.mdx',
    "../stories/**/*.stories.jsx",
    "../stories/*.stories.jsx"
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-measure',
    '@storybook/addon-jest',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
