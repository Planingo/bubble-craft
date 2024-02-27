import { Input } from '../components/Input/Input';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Input',
  component: Input,
  decorators: [withTests({ results })],
  parameters: { jest: ['input.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
  },
};
