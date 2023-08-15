import React from 'react';

import { Sort } from '@planingo/design-system';

export default {
  title: 'Atomes/Sort',
  component: Sort,
};

const SortGlobal = (args) => <Sort {...args} />;

export const Default = SortGlobal.bind({});

Default.args = {
    current: 1,
};