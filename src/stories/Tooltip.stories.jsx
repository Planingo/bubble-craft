import { Tooltip } from '../components/Tooltip/Tooltip';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Tooltip',
  component: Tooltip,
  decorators: [withTests({ results })],
  parameters: { jest: ['tooltip.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Minerva McGonagall",
    title: "C'est le prénom et le nom",
  },
};
