import React from 'react';

import { Tabs } from './Tabs'

export default {
  title: 'Atomes/Tabs',
  component: Tabs,
};

const TabsGlobal = (args) => <Tabs {...args} />;

export const Default = TabsGlobal.bind({});

Default.args = {
  items: [
    {
      key: '1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ],
  defaultActiveKey: "1"
};