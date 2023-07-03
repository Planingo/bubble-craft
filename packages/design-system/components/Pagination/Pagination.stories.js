import React from 'react';

import { Pagination } from './Pagination';

export default {
  title: 'Atomes/Pagination',
  component: Pagination,
};

const PaginationGlobal = (args) => <Pagination {...args} />;

export const Default = PaginationGlobal.bind({});

Default.args = {
    children: "Pagination"
};