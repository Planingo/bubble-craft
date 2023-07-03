import React from 'react';

import { FloatButton } from '@planingo/design-system'

export default {
  title: 'Atomes/FloatButton',
  component: FloatButton,
};

const FloatButtonGlobal = (args) => <FloatButton {...args} />;

export const Default = FloatButtonGlobal.bind({});

Default.args = {
    children: "FloatButton"
};