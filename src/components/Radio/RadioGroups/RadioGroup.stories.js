import React from 'react';

import { RadioGroup } from './RadioGroup';

export default {
  title: 'Molécules/RadioGroup',
  component: RadioGroup,
};

const RadioGroupGlobal = (args) => <RadioGroup {...args} />;

export const Default = RadioGroupGlobal.bind({});

Default.args = {
  value: 'Apple',
  buttonStyle: 'outline',
  disabled: false,
  optionType: 'button',
  size: 'large',
  options: [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ],
  onChange: function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
};