import React from 'react';

import { Message } from './Message';

export default {
  title: 'Molécules/Message',
  component: Message,
};

const MessageGlobal = (args) => <Message {...args} />;

export const Default = MessageGlobal.bind({});

Default.args = {
    type: "success",
    content: "C'est un succes !",
    children: <>Click me</>
};