import { Select } from '../components/Select/Select';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Select',
  component: Select,
  decorators: [withTests({ results })],
  parameters: { jest: ['select.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Select"
  },
};
