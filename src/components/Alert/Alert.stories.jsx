import React from 'react';

import { Alert } from './Alert';

export default {
  title: 'Atomes/Alert',
  component: Alert,
};

const AlertGlobal = (args) => <Alert {...args} />;

export const Default = AlertGlobal.bind({});

Default.args = {
  message: "Success message !",
  type: "success"
};