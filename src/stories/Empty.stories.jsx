import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Empty } from '../components/Empty/Empty';

const meta = {
  title: 'Molécules/Empty',
  component: Empty,
  decorators: [withTests({ results })],
  parameters: { jest: ['empty.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    description: <p>Ceci est une super description !</p>
  },
};
