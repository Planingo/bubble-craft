import React from 'react';

import { Select } from './Select'

export default {
  title: 'Atomes/Select',
  component: Select,
};

const SelectGlobal = (args) => <Select {...args} />;

export const Default = SelectGlobal.bind({});

Default.args = {
    children: "Select"
};