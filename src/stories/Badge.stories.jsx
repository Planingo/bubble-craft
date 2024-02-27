import results from '../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import { Badge } from '../components/Badge/Badge';

const meta = {
  title: 'Atomes/Badge',
  component: Badge,
  decorators: [withTests({ results })],
  parameters: { jest: ['badge.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    count: 12,
  },
};
