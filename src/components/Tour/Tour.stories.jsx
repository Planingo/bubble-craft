import React from 'react';

import { Tour } from './Tour'

export default {
  title: 'Organismes/Tour',
  component: Tour,
};

const TourGlobal = (args) => {
  return <Tour {...args} />
};

export const Default = TourGlobal.bind({});

Default.args = {
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
};