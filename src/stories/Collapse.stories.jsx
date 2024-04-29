import React from 'react';
import { Collapse } from '../components/Collapse/Collapse';

const meta = {
  title: 'Molécules/Collapse',
  component: Collapse,
};

export default meta;

export const Playground = {
  args: {
    defaultActiveKey: ['1'],
    onChange: (key) => console.log(key),
    items: [
      {
        key: "1",
        label: "This is panel header 1",
        children: <p>
          A dog is a type of domesticated animal.
          Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.
        </p>
      },
      {
        key: "2",
        label: "This is panel header 2",
        children: <p>
          A dog is a type of domesticated animal.
          Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.
        </p>
      },
      {
        key: "3",
        label: "This is panel header 3",
        children: <p>
           A dog is a type of domesticated animal.
          Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world
        </p>
      }
    ]
  },
};
