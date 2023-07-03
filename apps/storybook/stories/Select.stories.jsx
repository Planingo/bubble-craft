import React from 'react';

import { Select } from '@planingo/design-system'

export default {
  title: 'Atomes/Select',
  component: Select,
};

const SelectGlobal = (args) => <Select {...args} />;

export const Default = SelectGlobal.bind({});

Default.args = {
    children: "Select"
};