import React from 'react';
import { Watermark } from '../components/Watermark/Watermark';

const meta = {
  title: 'Atomes/Watermark',
  component: Watermark,
};

export default meta;

export const Playground = {
  args: {
    children: <div
      style={{
        height: 500,
      }}
    />,
    content: "Planin'go"
  },
};
