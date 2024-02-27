import { Progress } from '../components/Progress/Progress';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Progress',
  component: Progress,
  decorators: [withTests({ results })],
  parameters: { jest: ['progress.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Progress"
  },
};
