import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';
import { Gallery } from '../components';
import React from 'react';
import { Form, Input } from 'antd';

const meta = {
  title: 'Pages/Gallery',
  component: Gallery,
  decorators: [withTests({ results })],
  parameters: { jest: ['gallery.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    name: 'lesson',
    loading: false,
    datas: [
      {
        id: '1',
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        downloadTitle: `Télécharger le calendrier pour Métamorphose`,
        cloudTitle: `Envoyer le calendrier à toutes les personnes programmées à Métamorphose`,
        deleteTitle: `Supprimer le cours de Métamorphose`,
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/1`,
      },
      {
        id: '2',
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        downloadTitle: `Télécharger le calendrier pour Métamorphose`,
        cloudTitle: `Envoyer le calendrier à toutes les personnes programmées à Métamorphose`,
        deleteTitle: `Supprimer le cours de Métamorphose`,
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/2`,
      },
      {
        id: '3',
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        downloadTitle: `Télécharger le calendrier pour Métamorphose`,
        cloudTitle: `Envoyer le calendrier à toutes les personnes programmées à Métamorphose`,
        deleteTitle: `Supprimer le cours de Métamorphose`,
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/3`,
      },
      {
        id: '4',
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        downloadTitle: `Télécharger le calendrier pour Métamorphose`,
        cloudTitle: `Envoyer le calendrier à toutes les personnes programmées à Métamorphose`,
        deleteTitle: `Supprimer le cours de Métamorphose`,
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/4`,
      },
      {
        id: '5',
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        downloadTitle: `Télécharger le calendrier pour Métamorphose`,
        cloudTitle: `Envoyer le calendrier à toutes les personnes programmées à Métamorphose`,
        deleteTitle: `Supprimer le cours de Métamorphose`,
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/5`,
      },
      {
        id: '6',
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        downloadTitle: `Télécharger le calendrier pour Métamorphose`,
        cloudTitle: `Envoyer le calendrier à toutes les personnes programmées à Métamorphose`,
        deleteTitle: `Supprimer le cours de Métamorphose`,
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/6`,
      },
      ]
  },
};

export const Empty = {
  args: {
    Add: () => <Form
      name='Formulaire lesson'
      onValuesChange={console.log}
      layout="vertical"
      requiredMark
    >
      <Form.Item
        name="name"
        label="Nom"
        rules={[{ required: true, message: 'Please enter user name' }]}
      >
        <Input placeholder="Please enter user name" />
      </Form.Item>
    </Form>,
    name: 'lesson',
    loading: false,
    datas: []
  },
};
