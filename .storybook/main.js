import remarkGfm from "remark-gfm";

export default {
  stories: [
    "../src/Introduction.mdx",
    "../src/stories/*.@(mdx|stories.@(jsx))",
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-pseudo-states",
    "@storybook/addon-measure",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
