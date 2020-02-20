import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../library/Button';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Button',
  component: Button,
  // parameters: {
    // viewport: { defaultViewport: 'iphone6' },
  // },
  backgrounds: [
    { name: 'basic', value: '#fff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  decorators: [withA11y],
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
