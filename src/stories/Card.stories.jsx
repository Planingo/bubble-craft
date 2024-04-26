import React from 'react';
import { Card } from '../components/Card/Card';

const meta = {
  title: 'Molécules/Card',
  component: Card,
};

export default meta;

export const Playground = {
  args: {
    cover: <>
      <img src="https://avatars.bugsyaya.dev/285/" alt="Etudiant"/>
    </>,
    title: "Minerva McGonagall",
    downloadTitle: {
      id: "download.calendar.student",
      values: `Anne`,
    },
    cloudTitle: {
      id: "send.calendar.student",
      values: `Anne`,
    },
    deleteTitle: {
      id: "archived.student",
      values: `Anne`,
    }
  },
};
