import React from 'react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Molécules/DatePicker',
  component: DatePicker,
};

const DatePickerGlobal = (args) => <DatePicker {...args} />;

export const Default = DatePickerGlobal.bind({});

Default.args = {
    children: "DatePicker"
};