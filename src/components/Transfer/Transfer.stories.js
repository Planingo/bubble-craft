import React from 'react';

import { Transfer } from './Transfer';

export default {
  title: 'Organismes/Transfer',
  component: Transfer,
};

const TransferGlobal = (args) => <Transfer {...args} />;

export const Default = TransferGlobal.bind({});

Default.args = {
    title: ['Source','Target'],
    render: (item) => item.title,
    dataSource:  Array.from({
      length: 20,
    }).map((_, i) => ({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    }))
};