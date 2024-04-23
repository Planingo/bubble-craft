import React from 'react';
import { List } from '../components/List/List';

const meta = {
  title: 'Molécules/List',
  component: List,
};

export default meta;

export const Playground = {
  args: {
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
  },
};
