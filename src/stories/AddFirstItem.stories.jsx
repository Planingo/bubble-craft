import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';
import { AddFirstItem } from '../components/AddFirstItem/AddFirstItem';

const meta = {
  title: 'Templates/AddFirstItem',
  component: AddFirstItem,
  decorators: [withTests({ results })],
  parameters: { jest: ['addFirstItem.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    title: "Ajouter un item",
    cta: "Ajouter"
  },
};
