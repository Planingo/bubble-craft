import React from 'react';

import { Input } from '@planingo/design-system'

export default {
  title: 'Atomes/Input',
  component: Input,
};

const InputGlobal = (args) => <Input {...args} />;

export const Default = InputGlobal.bind({});

Default.args = {
};