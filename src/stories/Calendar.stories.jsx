import dayjs from 'dayjs';
import { Calendar } from '../components/Calendar/Calendar';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Organismes/Calendar',
  component: Calendar,
  decorators: [withTests({ results })],
  parameters: { jest: ['calendar.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Calendar",
    value: dayjs('2023-02-27', 'YYYY-MM-DD')
  },
};
