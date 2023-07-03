import React from 'react';

import { Avatar } from '@planingo/design-system'

export default {
  title: 'Atomes/Avatar',
  component: Avatar,
};

const AvatarGlobal = (args) => <Avatar {...args} />;

export const Default = AvatarGlobal.bind({});

Default.args = {
    children: "Avatar"
};