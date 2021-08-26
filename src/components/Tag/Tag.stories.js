import React from 'react';
import { Button } from '../Button/Button';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    children: "Ananas"
  }
};

const TagGlobal = (args) => <Tag {...args} />;

export const Defaut = TagGlobal.bind({});