import { DatePicker } from '../components/DatePicker/DatePicker';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Molécules/DatePicker',
  component: DatePicker,
  decorators: [withTests({ results })],
  parameters: { jest: ['datePicker.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "DatePicker"
  },
};
