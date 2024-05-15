import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
//   appContentBg: 'silver',
  appBorderColor: 'rgb(248, 129, 206,0.3)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Monserrat", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
//   barTextColor: 'silver',
//   barSelectedColor: 'black',
//   barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'rgb(248, 129, 206,0.3)',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Bubble-craft design system',
  brandUrl: 'bubble-craft.bugsyaya.dev',
  brandImage: '../public/bubble-craft.png',
  brandTarget: '_self',
});
