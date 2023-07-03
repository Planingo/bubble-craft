import React from 'react';
import dayjs from 'dayjs';

import { Calendar } from './Calendar';

export default {
  title: 'Organismes/Calendar',
  component: Calendar,
};

const CalendarGlobal = (args) => <Calendar {...args} />;

export const Default = CalendarGlobal.bind({});

Default.args = {
    children: "Calendar",
    value: dayjs('2023-02-27', 'YYYY-MM-DD')
};