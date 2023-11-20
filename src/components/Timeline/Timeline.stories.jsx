import React from 'react';

import { Timeline } from './Timeline'

export default {
  title: 'Molécules/Timeline',
  component: Timeline,
};

const TimelineGlobal = (args) => <Timeline {...args} />;

export const Default = TimelineGlobal.bind({});

Default.args = {
  items: [
    {
      children: 'Create a services site 2015-09-01',
    },
    {
      children: 'Solve initial network problems 2015-09-01',
    },
    {
      children: 'Technical testing 2015-09-01',
    },
    {
      children: 'Network problems being solved 2015-09-01',
    },
  ]
};