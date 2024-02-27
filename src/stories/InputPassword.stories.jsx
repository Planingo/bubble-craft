import { InputPassword } from '../components/Input/InputPassword/InputPassword';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/InputPassword',
  component: InputPassword,
  decorators: [withTests({ results })],
  parameters: { jest: ['inputPassword.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
  },
};
