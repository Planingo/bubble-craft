import { Navigation } from '../components/Navigation/Navigation';
import { Roles } from '../components/Roles/roles';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Templates/Navigation',
  component: Navigation,
  decorators: [withTests({ results })],
  parameters: { jest: ['navigation.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    roles: [Roles.PLANING_KEEPER]
  },
};
