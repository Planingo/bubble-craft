import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Button } from '../components/Button/Button';
import { PoweroffOutlined } from '../components/Icon/icon';

const meta = {
  title: 'Atomes/Button',
  component: Button,
  decorators: [withTests({ results })],
  parameters: { jest: ['button.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Ananas",
    icon: <PoweroffOutlined />
  },
};
