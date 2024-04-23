import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Card } from '../components/Card/Card';

const meta = {
  title: 'Molécules/Card',
  component: Card,
  decorators: [withTests({ results })],
  parameters: { jest: ['card.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    cover: <>
      <img src="https://avatars.bugsyaya.dev/285/" alt="Etudiant"/>
    </>,
    title: "Minerva McGonagall"
  },
};
