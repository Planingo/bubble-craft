import React from 'react';

import { Calendar } from './Calendar';

export default {
  title: 'Organismes/Calendar',
  component: Calendar,
};

const CalendarGlobal = (args) => <Calendar {...args} />;

export const Default = CalendarGlobal.bind({});

Default.args = {
    children: "Calendar"
};