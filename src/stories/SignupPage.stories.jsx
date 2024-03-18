import { SignupPage } from '../components/LoginPage/SignupPage';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Pages/SignupPage',
  component: SignupPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['signupPage.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    onSubmit: () => console.log(),
    loading: false
  },
};
