import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../library/Button';
import { withA11y } from '@storybook/addon-a11y';
import { withXD } from 'storybook-addon-xd-designs'
 

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y, withXD],
  design: {
    specUrl: 'https://xd.adobe.com/spec/181eaf80-9e7a-4ea6-7dc8-e21dfd9b2d80-6e2f/grid',
    reviewUrl: 'https://xd.adobe.com/view/089598ad-726b-467c-71cd-67cdc13e980a-7ea4/',
  }
};

export const Basic = () => (
  <div>
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button informations='success' onClick={action('clicked')}>success</Button>
    <Button informations='error' onClick={action('clicked')}>error</Button>
    <Button informations='warning' onClick={action('clicked')}>warning</Button>
    <Button informations='information' onClick={action('clicked')}>information</Button>
    <Button disabled onClick={action('clicked')}>information</Button>
    <Button informations='success' disabled onClick={action('clicked')}>success</Button>
  </div>
)

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
