import { Steps } from '../components/Steps/Steps';


const meta = {
  title: 'Atomes/Steps',
  component: Steps,
};

export default meta;

export const Playground = {
  args: {
    current: 1,
    items: [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ]
  },
};
