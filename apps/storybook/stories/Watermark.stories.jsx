import React from 'react';

import { Watermark } from '@planingo/design-system'

export default {
  title: 'Atomes/Watermark',
  component: Watermark,
};

const WatermarkGlobal = (args) => <Watermark {...args} />;

export const Default = WatermarkGlobal.bind({});

Default.args = {
    children: <div
      style={{
        height: 500,
      }}
    />,
    content: "Planin'go"
};