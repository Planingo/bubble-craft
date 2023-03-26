import { TagsOutlined } from '../Icon/icon';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';

describe('Card component', () => {
  const textContent = {
    title: "Minerva McGonagall",
    tags: ['Métamorphose', 'Ancient Runes', 'Arithmancy'],
    src: 'https://avatars.bugsyaya.dev/285/',
    icon: <TagsOutlined />,
    type: 'lesson',
    downloadtitle: 'Télécharger',
    cloudtitle: 'Envoyer',
    deletetitle: 'Supprimer',
  };

  const card = (
    <Card {...textContent} />
  );

  it('Snapshot card', () => {
    const { baseElement } = render(card);
    expect(baseElement).toHaveTextContent("Minerva McGonagall");
  });
});