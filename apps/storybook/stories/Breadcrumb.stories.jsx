import React from 'react';

import { Breadcrumb } from '@planingo/design-system'

export default {
  title: 'Atomes/Breadcrumb',
  component: Breadcrumb,
};

const BreadcrumbGlobal = (args) => <Breadcrumb {...args} />;

export const Default = BreadcrumbGlobal.bind({});

Default.args = {
  items: [<>Home</>, <a href="/">Application Center</a>]
};