import React from 'react';

import { InputPassword } from './InputPassword';

export default {
  title: 'Atomes/InputPassword',
  component: InputPassword,
};

const InputPasswordGlobal = (args) => <InputPassword {...args} />;

export const Default = InputPasswordGlobal.bind({});

Default.args = {
};