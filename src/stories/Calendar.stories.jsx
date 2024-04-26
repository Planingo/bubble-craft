import dayjs from 'dayjs';
import { Calendar } from '../components/Calendar/Calendar';


const meta = {
  title: 'Organismes/Calendar',
  component: Calendar,
};

export default meta;

export const Playground = {
  args: {
    children: "Calendar",
    value: dayjs('2023-02-27', 'YYYY-MM-DD')
  },
};
