import React from 'react';

import { Progress } from './Progress';

export default {
  title: 'Atomes/Progress',
  component: Progress,
};

const ProgressGlobal = (args) => <Progress {...args} />;

export const Default = ProgressGlobal.bind({});

Default.args = {
    children: "Progress"
};