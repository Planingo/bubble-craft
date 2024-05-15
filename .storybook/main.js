module.exports = {
  'stories': ['../src/Introduction.mdx', "../src/stories/*.@(mdx|stories.@(jsx))"],
  'addons': ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-pseudo-states', '@chromatic-com/storybook', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: true
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};