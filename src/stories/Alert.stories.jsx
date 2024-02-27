import { Alert } from '../components/Alert/Alert';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Alert',
  component: Alert,
  decorators: [withTests({ results })],
  parameters: { jest: ['alert.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    message: "Success message !",
    type: "success"
  },
};
