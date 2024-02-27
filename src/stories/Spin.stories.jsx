import { Spin } from '../components/Spin/Spin';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Spin',
  component: Spin,
  decorators: [withTests({ results })],
  parameters: { jest: ['spin.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Spin"
  },
};
