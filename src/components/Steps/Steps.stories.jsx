import React from 'react';

import { Steps } from './Steps'

export default {
  title: 'Atomes/Steps',
  component: Steps,
};

const StepsGlobal = (args) => <Steps {...args} />;

export const Default = StepsGlobal.bind({});

Default.args = {
    current: 1,
    items: [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ]
};