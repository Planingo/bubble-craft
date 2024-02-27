import { FloatButton } from '../components/FloatButton/FloatButton';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/FloatButton',
  component: FloatButton,
  decorators: [withTests({ results })],
  parameters: { jest: ['floatButton.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "FloatButton"
  },
};
