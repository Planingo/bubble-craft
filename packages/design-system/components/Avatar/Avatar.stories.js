import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Atomes/Avatar',
  component: Avatar,
};

const AvatarGlobal = (args) => <Avatar {...args} />;

export const Default = AvatarGlobal.bind({});

Default.args = {
    children: "Avatar"
};