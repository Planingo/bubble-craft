import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Tour } from '../components/Tour/Tour';

const meta = {
  title: 'Organismes/Tour',
  component: Tour,
  decorators: [withTests({ results })],
  parameters: { jest: ['tour.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    open: "Tour",
    steps: [
      {
        title: 'Upload File',
        description: 'Put your files here.',
        cover: (
          <img
            alt="tour.png"
            src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
          />
        ),
        target: () => console.log(),
      },
      {
        title: 'Save',
        description: 'Save your changes.',
        target: () => console.log(),
      },
      {
        title: 'Other Actions',
        description: 'Click to see other actions.',
        target: () => console.log(),
      },
    ]
  },
};
