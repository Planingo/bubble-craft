import { TimePicker } from '../components/TimePicker/TimePicker';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Molécules/TimePicker',
  component: TimePicker,
  decorators: [withTests({ results })],
  parameters: { jest: ['timepicker.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "TimePicker"
  },
};
