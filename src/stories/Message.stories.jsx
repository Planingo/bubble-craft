import React from 'react';
import { Message } from '../components/Message/Message';

const meta = {
  title: 'Molécules/Message',
  component: Message,
};

export default meta;

export const Playground = {
  args: {
    type: "success",
    content: "C'est un succes !",
    children: <>Click me</>
  },
};