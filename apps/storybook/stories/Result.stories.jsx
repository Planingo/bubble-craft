import React from 'react';

import { Result } from '@planingo/design-system'

export default {
  title: 'Organismes/Result',
  component: Result,
};

const ResultGlobal = (args) => <Result {...args} />;

export const Default = ResultGlobal.bind({});

Default.args = {
    children: "Result"
};