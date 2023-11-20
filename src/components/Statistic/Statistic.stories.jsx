import React from 'react';

import { Statistic } from './Statistic'

export default {
  title: 'Organismes/Statistic',
  component: Statistic,
};

const StatisticGlobal = (args) => <Statistic {...args} />;

export const Default = StatisticGlobal.bind({});

Default.args = {
    title: "Active users",
    value: 123456
};