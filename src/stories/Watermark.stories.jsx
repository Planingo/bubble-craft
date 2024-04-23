import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Watermark } from '../components/Watermark/Watermark';

const meta = {
  title: 'Atomes/Watermark',
  component: Watermark,
  decorators: [withTests({ results })],
  parameters: { jest: ['watermark.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: <div
      style={{
        height: 500,
      }}
    />,
    content: "Planin'go"
  },
};
