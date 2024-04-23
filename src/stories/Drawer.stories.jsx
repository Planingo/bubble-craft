import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Drawer } from '../components/Drawer/Drawer';

const meta = {
  title: 'Molécules/Drawer',
  component: Drawer,
  decorators: [withTests({ results })],
  parameters: { jest: ['drawer.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    title: "Basic Drawer",
    placement: "right",
    children: <>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </>,
    open: true
  },
};
