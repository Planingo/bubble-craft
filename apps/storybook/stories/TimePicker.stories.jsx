import React from 'react';

import { TimePicker } from '@planingo/design-system'

export default {
  title: 'Molécules/TimePicker',
  component: TimePicker,
};

const TimePickerGlobal = (args) => <TimePicker {...args} />;

export const Default = TimePickerGlobal.bind({});

Default.args = {
    children: "TimePicker"
};