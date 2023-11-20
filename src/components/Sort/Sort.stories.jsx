import React from 'react';

import { Sort } from './Sort';

export default {
  title: 'Atomes/Sort',
  component: Sort,
};

const SortGlobal = (args) => <Sort {...args} />;

export const Default = SortGlobal.bind({});

Default.args = {
    current: 1,
};