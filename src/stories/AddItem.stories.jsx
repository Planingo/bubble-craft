import { AddItem } from '../components/AddItem/AddItem';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Templates/AddItem',
  component: AddItem,
  decorators: [withTests({ results })],
  parameters: { jest: ['addItem.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    title: "AddItem",
    cta: "Ajouter"
  },
};
