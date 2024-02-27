import { Segmented } from '../components/Segmented/Segmented';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Organismes/Segmented',
  component: Segmented,
  decorators: [withTests({ results })],
  parameters: { jest: ['segmented.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    options: ['Quotidient', 'Hebdomadaire', 'Mensuel', 'Trimestriel', 'Annuel']
  },
};
