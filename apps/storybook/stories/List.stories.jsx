import React from 'react';

import { List } from '@planingo/design-system'

export default {
  title: 'Molécules/List',
  component: List,
};

const ListGlobal = (args) => <List {...args} />;

export const Default = ListGlobal.bind({});

Default.args = {
    header: <div>Header</div>,
    footer: <div>Footer</div>,
    dataSource: [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ],
    renderItem: (item) => (
      <p>
        {item}
      </p>
    ),
    bordered: true
};