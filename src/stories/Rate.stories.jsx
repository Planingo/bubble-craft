import { Rate } from '../components/Rate/Rate';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Rate',
  component: Rate,
  decorators: [withTests({ results })],
  parameters: { jest: ['rate.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    count: 7
  },
};
