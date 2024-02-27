import { LoginPage } from '../components/LoginPage/LoginPage';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['loginPage.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    onSubmit: () => console.log(),
    loading: false
  },
};
