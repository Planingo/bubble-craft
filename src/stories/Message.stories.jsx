import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Message } from '../components/Message/Message';

const meta = {
  title: 'Molécules/Message',
  component: Message,
  decorators: [withTests({ results })],
  parameters: { jest: ['message.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    type: "success",
    content: "C'est un succes !",
    children: <>Click me</>
  },
};