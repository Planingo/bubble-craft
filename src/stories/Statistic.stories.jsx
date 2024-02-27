import { Statistic } from '../components/Statistic/Statistic';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Organismes/Statistic',
  component: Statistic,
  decorators: [withTests({ results })],
  parameters: { jest: ['statistic.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    title: "Active users",
    value: 123456
  },
};
