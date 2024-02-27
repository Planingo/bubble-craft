import { Skeleton } from '../components/Skeleton/Skeleton';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Skeleton',
  component: Skeleton,
  decorators: [withTests({ results })],
  parameters: { jest: ['skeleton.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Skeleton"
  },
};
