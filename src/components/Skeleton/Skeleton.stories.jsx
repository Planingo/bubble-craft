import React from 'react';

import { Skeleton } from './Skeleton'

export default {
  title: 'Atomes/Skeleton',
  component: Skeleton,
};

const SkeletonGlobal = (args) => <Skeleton {...args} />;

export const Default = SkeletonGlobal.bind({});

Default.args = {
    children: "Skeleton"
};