import React from 'react';

import { Skeleton } from '@planingo/design-system'

export default {
  title: 'Atomes/Skeleton',
  component: Skeleton,
};

const SkeletonGlobal = (args) => <Skeleton {...args} />;

export const Default = SkeletonGlobal.bind({});

Default.args = {
    children: "Skeleton"
};