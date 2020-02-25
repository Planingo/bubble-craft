import { addParameters } from '@storybook/react'; // <- or your storybook framework
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
  },
  backgrounds: [
    { name: 'planingo', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced'},
    { name: 'facebook', value: '#3b5998' },
  ],
});