import React from 'react';

import { Table } from './Table'

export default {
  title: 'Molécules/Table',
  component: Table,
};

const TableGlobal = (args) => <Table {...args} />;

export const Default = TableGlobal.bind({});

Default.args = {
    dataSource: [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ],
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ]
};