import React from 'react';

import { Card } from './Card';
import { TagsOutlined } from '../Icon/Icon'

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    title: "Minerva McGonagall",
    tags: ['Métamorphose', 'Ancient Runes', 'Arithmancy'],
    icon: <TagsOutlined />,
    type: 'lesson'
  }
};

const CardGlobal = (args) => <Card {...args} />;

export const Defaut = CardGlobal.bind({});