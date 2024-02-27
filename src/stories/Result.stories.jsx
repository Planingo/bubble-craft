import React from 'react';

import { Result } from '../components/Result/Result';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Organismes/Result',
  component: Result,
  decorators: [withTests({ results })],
  parameters: { jest: ['result.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Result"
  },
};
