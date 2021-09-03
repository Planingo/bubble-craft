import React from 'react';

import { Card } from './Card';
import { TagsOutlined } from '../Icon/Icon'

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    title: "Minerva McGonagall",
    tags: ['Métamorphose', 'Ancient Runes', 'Arithmancy'],
    src: 'https://avatars.bugsyaya.dev/285/',
    icon: <TagsOutlined />,
    type: 'lesson',
    downloadTitle: 'Télécharger',
    cloudTitle: 'Envoyer',
    deleteTitle: 'Supprimer',
  }
};

const CardGlobal = (args) => <Card {...args} />;

export const Defaut = CardGlobal.bind({});